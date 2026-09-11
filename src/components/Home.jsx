import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollProgress } from '../lib/useScrollProgress'
import BrandImagery from './BrandImagery'
import Intro from './Intro'
import FeaturedCaseStudies from './FeaturedCaseStudies'
import Profile from './Profile'
import MoreCaseStudies from './MoreCaseStudies'

export default function Home() {
  const location = useLocation()

  const wrapRef = useRef(null)
  const pinRef = useRef(null)
  useScrollProgress({ wrapRef, pinRef })

  // When arriving from another route with a requested section (e.g. "Back to all
  // work" or a nav click on a case study page), jump it into view once the
  // homepage has rendered. Must be an instant jump, not smooth: this is a route
  // change presenting a fresh page, so it should be a hard cut. Passing
  // 'instant' overrides the global `scroll-behavior: smooth`, which would
  // otherwise animate a scroll down from the top of the just-mounted page.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    if (target === 'top') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [location.state])

  return (
    <>
      {/* The hero band and the Intro are one `position: sticky` block, held
          rock-still by the compositor while the trailing spacer (its scroll
          range) scrubs past and the PacMan chase plays. Then they release and
          scroll away together. */}
      <div className="hero-pin" ref={wrapRef}>
        <div className="hero-pin__stack" ref={pinRef}>
          <BrandImagery />
          <Intro />
        </div>
        <div className="hero-pin__scrub" aria-hidden="true" />
      </div>
      <FeaturedCaseStudies />
      <Profile />
      <MoreCaseStudies />
    </>
  )
}
