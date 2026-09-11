import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position on route change, unless the destination asked to land on
// a specific section (handled by Home).
export default function ScrollToTop() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) return
    // 'instant' overrides the global `scroll-behavior: smooth` so a route change
    // is a hard cut to the top of the new page, not an animated scroll up
    // through the freshly-mounted content.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, state])

  return null
}
