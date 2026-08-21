import Carousel from './Carousel'
import { getFeatured } from '../lib/caseStudies'

export default function FeaturedCaseStudies() {
  const caseStudies = getFeatured()

  return (
    <section className="featured" id="featured-work">
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
              <span className="case-study__number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="case-study__title">{cs.title}</h3>
              <p className="case-study__description">{cs.description}</p>
              <span className="case-study__outcome">{cs.outcome}</span>
              <a href={cs.url} className="case-study__cta">View Case Study →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
