import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import { getFeatured } from '../lib/caseStudies'
import { useColumnReveal } from '../lib/useColumnReveal'

export default function FeaturedCaseStudies() {
  const caseStudies = getFeatured()
  const sectionRef = useRef(null)
  useColumnReveal(sectionRef)

  return (
    <section className="featured" id="featured-work" ref={sectionRef}>
      <div className="section__inner">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.id}
            className={`featured-row ${i % 2 === 1 ? 'featured-row--reverse' : ''}`}
          >
            <div className="featured-row__carousel">
              <Carousel images={cs.images} title={cs.title} />
            </div>
            <div className="featured-row__text">
              <h2 className="case-study__title">{cs.title}</h2>
              <p className="case-study__description">{cs.blurb}</p>
              <Link to={cs.url} className="case-study__cta">View Case Study →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
