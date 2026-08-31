import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// In-page section navigation that also works from other routes. On the homepage
// it smooth-scrolls to the section (CSS `scroll-behavior` + `scroll-margin-top`
// handle the rest); elsewhere it navigates home and asks Home to scroll there.
export function useSectionNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return useCallback(
    (id) => {
      if (location.pathname === '/') {
        // 'top' means the very top of the page, not the top of the #top
        // section — that sits below the sticky nav, so scrollIntoView would
        // leave the page scrolled 64px down (nav loses its scrolled bg).
        if (id === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
      } else {
        navigate('/', { state: { scrollTo: id } })
      }
    },
    [location.pathname, navigate]
  )
}
