import { useEffect } from 'react'

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n)
// Cubic ease-out: fast as the column enters, decelerating as it settles.
const easeOut = (n) => 1 - (1 - n) ** 3

// Scroll-scrubbed entrance for the Featured Case Studies rows. As each
// `.featured-row` scrolls up into the viewport its two columns slide in from the
// sides they settle on (carousel/text swap on `.featured-row--reverse`) and ease
// into place; scrolling back up reverses it. This hook writes `--enter` (0..1,
// eased) on each row and CSS maps it to a translateX — see `.featured-row__*` in
// index.css.
//
// Desktop only (>= 768px, matching the PacMan chase) and honors
// prefers-reduced-motion; in both those cases every row resets to `--enter: 1`
// (settled).
export function useColumnReveal(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const rows = Array.from(section.querySelectorAll('.featured-row'))
    if (!rows.length) return

    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqDesktop = window.matchMedia('(min-width: 768px)')
    let raf = 0

    const settle = () => {
      for (const row of rows) row.style.setProperty('--enter', '1')
    }

    const measure = () => {
      raf = 0
      if (mqReduce.matches || !mqDesktop.matches) {
        settle()
        return
      }
      const vh = window.innerHeight
      // Reveal starts the instant the row's top edge crosses the fold (a hair
      // before, so the first visible frame is already in motion — no static
      // hold at the offset position) and finishes once it's ~halfway up.
      const start = vh * 1.03
      const end = vh * 0.5
      for (const row of rows) {
        const { top } = row.getBoundingClientRect()
        const p = clamp01((start - top) / (start - end))
        row.style.setProperty('--enter', easeOut(p).toFixed(4))
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    mqReduce.addEventListener?.('change', measure)
    mqDesktop.addEventListener?.('change', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      mqReduce.removeEventListener?.('change', measure)
      mqDesktop.removeEventListener?.('change', measure)
      if (raf) cancelAnimationFrame(raf)
      settle()
    }
  }, [sectionRef])
}
