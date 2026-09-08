import { Link } from 'react-router-dom'
import { getMore, assetUrl } from '../lib/caseStudies'

export default function MoreCaseStudies() {
  const caseStudies = getMore()

  return (
    <section className="more-work" id="more-work">
      <div className="section__inner">
        <h2 className="more-work__header">More Case Studies</h2>
        <div className="more-work__grid">
          {caseStudies.map((cs) => (
            <Link key={cs.id} to={cs.url} className="more-work__card">
              <div className="more-work__thumb">
                {cs.thumb ? (
                  <img src={assetUrl(cs.thumb)} alt="" loading="lazy" />
                ) : (
                  <span className="more-work__thumb-fallback">{cs.title}</span>
                )}
                <span className="more-work__thumb-overlay">
                  <span className="more-work__thumb-cta">View Case Study →</span>
                </span>
              </div>
              <h3 className="more-work__title">{cs.title}</h3>
              <p className="more-work__desc">{cs.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
