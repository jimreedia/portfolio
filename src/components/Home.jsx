import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollProgress } from '../lib/useScrollProgress'
import BrandImagery from './BrandImagery'
import Intro from './Intro'
import FeaturedCaseStudies from './FeaturedCaseStudies'
import Profile from './Profile'
// More Case Studies is hidden until that section is ready to be worked on.
// Keep this import and the render below in place so it's a one-line restore.
// import MoreCaseStudies from './MoreCaseStudies'

export default function Home() {
  const location = useLocation()

  const wrapRef = useRef(null)
  const pinRef = useRef(null)
  useScrollProgress({ wrapRef, pinRef })

  // When arriving from another route with a requested section (e.g. a nav click
  // on a case study page), scroll it into view once the homepage has rendered.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    if (target === 'top') {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(target)
    if (el) el.scrollIntoView()
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
      {/* <MoreCaseStudies /> */}
    </>
  )
}
