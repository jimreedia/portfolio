import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position on route change, unless the destination asked to land on
// a specific section (handled by Home).
export default function ScrollToTop() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) return
    window.scrollTo(0, 0)
  }, [pathname, state])

  return null
}
