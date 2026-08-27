import { Link, Navigate, useParams } from 'react-router-dom'
import { assetUrl, getById, getNeighbors } from '../lib/caseStudies'

function backLink(label, extraClass = '') {
  return (
    <Link to="/" state={{ scrollTo: 'featured-work' }} className={`case-study__back ${extraClass}`}>
      {label}
    </Link>
  )
}

export default function CaseStudyPage() {
  const { id } = useParams()
  const cs = getById(id)

  if (!cs) return <Navigate to="/" replace />

  const { prev, next } = getNeighbors(id)
  const meta = [
    ['Role', cs.role],
    ['Timeline', cs.timeline],
    ['Team', cs.team],
    ['Domain', cs.tags?.join(' · ')],
  ].filter(([, value]) => value)

  return (
    <main className="case-study">
      <article className="case-study__inner">
        <header className="case-study__hero">
          {backLink('← Back to all work')}
          <h1 className="case-study__title">{cs.title}</h1>
          <p className="case-study__lead">{cs.description}</p>
        </header>

        {cs.images?.[0] && (
          <figure className="case-study__media case-study__cover">
            <img src={assetUrl(cs.images[0])} alt={`${cs.title} cover`} />
          </figure>
        )}

        {meta.length > 0 && (
          <dl className="case-study__meta">
            {meta.map(([label, value]) => (
              <div className="case-study__meta-item" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {cs.sections?.map((section) => (
          <section className="case-study__section" key={section.heading}>
            <h2 className="case-study__section-heading">{section.heading}</h2>
            {section.body?.map((paragraph, i) => (
              <p className="case-study__body" key={i}>{paragraph}</p>
            ))}
            {section.items?.length > 0 && (
              <ul className="case-study__list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {cs.gallery?.length > 0 && (
          <section className="case-study__gallery">
            {cs.gallery.map((shot, i) => (
              <figure className="case-study__media" key={i}>
                <img src={assetUrl(shot.src)} alt={shot.caption || `${cs.title} — image ${i + 1}`} />
                {shot.caption && <figcaption>{shot.caption}</figcaption>}
              </figure>
            ))}
          </section>
        )}

        <nav className="case-study__nav" aria-label="More case studies">
          {prev ? (
            <Link to={prev.url} className="case-study__nav-link case-study__nav-link--prev">
              <span className="case-study__nav-label">← Previous</span>
              <span className="case-study__nav-title">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={next.url} className="case-study__nav-link case-study__nav-link--next">
              <span className="case-study__nav-label">Next →</span>
              <span className="case-study__nav-title">{next.title}</span>
            </Link>
          ) : <span />}
        </nav>

        {backLink('Back to all work', 'case-study__back--center')}
      </article>
    </main>
  )
}
