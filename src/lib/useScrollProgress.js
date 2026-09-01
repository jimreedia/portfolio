import { useEffect } from 'react'

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n)

// Drives the PacMan chase from scroll position. The hero band + Intro are one
// `position: sticky` block (`.hero-pin__stack`) held by the compositor while the
// trailing `.hero-pin__scrub` span scrolls past — this hook only reports how far
// through that span we are, on <html>:
//   --p        0..1 chase progress (ghost transforms, text fade)
//   --nav-fade 0..1 nav dissolve over the first 100px of scroll
//   .pacman-chasing / .pacman-pinned  state classes
//
// Runs only >= 768px (desktop flourish) and honors prefers-reduced-motion; in
// both those cases everything resets to 0.
export function useScrollProgress({ wrapRef, pinRef }) {
  useEffect(() => {
    const wrap = wrapRef.current
    const pin = pinRef.current
    if (!wrap || !pin) return

    const root = document.documentElement
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqDesktop = window.matchMedia('(min-width: 768px)')

    let pinH = pin.getBoundingClientRect().height
    let raf = 0

    const measure = () => {
      raf = 0
      if (mqReduce.matches || !mqDesktop.matches) {
        root.style.setProperty('--p', '0')
        root.style.setProperty('--nav-fade', '0')
        root.classList.remove('pacman-chasing', 'pacman-pinned')
        return
      }
      const rect = wrap.getBoundingClientRect()
      const range = rect.height - pinH
      const p = range > 0 ? clamp01(-rect.top / range) : 0
      root.style.setProperty('--p', p.toFixed(4))
      root.classList.toggle('pacman-chasing', p > 0.14)
      root.classList.toggle('pacman-pinned', p > 0 && p < 1)
      // Nav fades out over the first 100px of scroll (overlapping the ghosts
      // starting to move) and snaps back once the chase finishes.
      root.style.setProperty('--nav-fade', (p >= 1 ? 0 : clamp01(window.scrollY / 100)).toFixed(3))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    const onResize = () => {
      pinH = pin.getBoundingClientRect().height
      measure()
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    mqReduce.addEventListener?.('change', measure)
    mqDesktop.addEventListener?.('change', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      mqReduce.removeEventListener?.('change', measure)
      mqDesktop.removeEventListener?.('change', measure)
      if (raf) cancelAnimationFrame(raf)
      root.classList.remove('pacman-chasing', 'pacman-pinned')
      root.style.removeProperty('--p')
      root.style.removeProperty('--nav-fade')
    }
  }, [wrapRef, pinRef])
}
