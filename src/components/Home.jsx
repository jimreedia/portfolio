import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BrandImagery from './BrandImagery'
import Intro from './Intro'
import FeaturedCaseStudies from './FeaturedCaseStudies'
import Profile from './Profile'
import MoreCaseStudies from './MoreCaseStudies'

export default function Home() {
  const location = useLocation()

  // When arriving from another route with a requested section (e.g. a nav click
  // on a case study page), scroll it into view once the homepage has rendered.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const el = document.getElementById(target)
    if (el) el.scrollIntoView()
    else if (target === 'top') window.scrollTo(0, 0)
  }, [location.state])

  return (
    <>
      <BrandImagery />
      <Intro />
      <FeaturedCaseStudies />
      <Profile />
      <MoreCaseStudies />
    </>
  )
}
