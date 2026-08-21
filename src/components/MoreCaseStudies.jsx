import { getMore } from '../lib/caseStudies'

export default function MoreCaseStudies() {
  const caseStudies = getMore()

  return (
    <section className="more-work" id="more-work">
      <div className="section__inner">
        <h2 className="more-work__header">More Case Studies</h2>
        <div className="more-work__grid">
          {caseStudies.map((cs) => (
            <a key={cs.id} href={cs.url} className="more-work__card">
              <div className="more-work__thumb">{cs.title}</div>
              <h3 className="more-work__title">{cs.title}</h3>
              <p className="more-work__desc">{cs.description}</p>
              {cs.tags?.[0] && <span className="more-work__tag">{cs.tags[0]}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
