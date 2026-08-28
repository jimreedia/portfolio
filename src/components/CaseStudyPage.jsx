import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { assetUrl, getById, getNeighbors } from '../lib/caseStudies'
import Lightbox from './Lightbox'

function backLink(label, extraClass = '') {
  return (
    <Link to="/" state={{ scrollTo: 'featured-work' }} className={`case-study__back ${extraClass}`}>
      {label}
    </Link>
  )
}

// A section is an ordered list of blocks (text / image / list). Older entries use
// separate `body` / `image(s)` / `items` fields — normalize those into blocks,
// images first, so there is a single render path.
function toBlocks(section) {
  if (section.blocks) return section.blocks
  const blocks = []
  const imgs = section.images || (section.image ? [section.image] : [])
  imgs.forEach((img) => blocks.push({ type: 'image', ...img }))
  ;(section.body || []).forEach((value) => blocks.push({ type: 'text', value }))
  if (section.items?.length) blocks.push({ type: 'list', items: section.items })
  return blocks
}

export default function CaseStudyPage() {
  const { id } = useParams()
  const cs = getById(id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!cs) return <Navigate to="/" replace />

  const heroImage = cs.hero
    ? cs.hero
    : cs.images?.[0]
      ? { src: cs.images[0], alt: `${cs.title} — overview` }
      : null

  const gallery = cs.gallery || []

  // Flat, ordered list backing the lightbox: hero first, then every in-narrative
  // image in reading order, then any gallery images. Image blocks are tagged with
  // their index into this list as they are collected.
  const lightboxImages = []
  if (heroImage) lightboxImages.push(heroImage)

  const renderedSections = (cs.sections || []).map((section) => ({
    heading: section.heading,
    blocks: toBlocks(section).map((block) => {
      if (block.type !== 'image') return block
      const lightboxIdx = lightboxImages.length
      lightboxImages.push({ src: block.src, alt: block.alt })
      return { ...block, lightboxIdx }
    }),
  }))

  const galleryStart = lightboxImages.length
  gallery.forEach((shot) => {
    lightboxImages.push({ src: shot.src, alt: shot.caption || cs.title })
  })

  const { prev, next } = getNeighbors(id)
  const meta = [
    ['Role', cs.role],
    ['Timeline', cs.timeline],
    ['Team', cs.team],
    ['Domain', cs.tags?.join(' · ')],
  ].filter(([, value]) => value)

  const imageButton = (src, alt, lightboxIdx, label) => (
    <button
      key={lightboxIdx}
      type="button"
      className="case-study__media case-study__section-image case-study__media-button"
      onClick={() => setLightboxIndex(lightboxIdx)}
      aria-label={label}
    >
      <img src={assetUrl(src)} alt={alt || ''} loading="lazy" />
    </button>
  )

  return (
    <main className="case-study">
      <article className="case-study__inner">
        <header className="case-study__hero">
          {backLink('← Back to all work')}
          <h1 className="case-study__title">{cs.title}</h1>
          <p className="case-study__lead">{cs.description}</p>
        </header>

        {heroImage && (
          <button
            type="button"
            className="case-study__media case-study__cover case-study__media-button"
            onClick={() => setLightboxIndex(0)}
            aria-label="Open image viewer"
          >
            <img src={assetUrl(heroImage.src)} alt={heroImage.alt || `${cs.title} cover`} />
          </button>
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

        {renderedSections.map((section, i) => (
          <section className="case-study__section" key={section.heading || i}>
            {section.heading && (
              <h2 className="case-study__section-heading">{section.heading}</h2>
            )}
            {section.blocks.map((block, j) => {
              if (block.type === 'text') {
                return <p className="case-study__body" key={j}>{block.value}</p>
              }
              if (block.type === 'list') {
                return (
                  <ul className="case-study__list" key={j}>
                    {block.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return imageButton(
                block.src,
                block.alt || section.heading,
                block.lightboxIdx,
                section.heading ? `Open image viewer: ${section.heading}` : 'Open image viewer'
              )
            })}
          </section>
        ))}

        {gallery.length > 0 && (
          <section className="case-study__gallery">
            {gallery.map((shot, i) => (
              <figure className="case-study__media" key={i}>
                <button
                  type="button"
                  className="case-study__media-button"
                  onClick={() => setLightboxIndex(galleryStart + i)}
                  aria-label="Open image viewer"
                >
                  <img
                    src={assetUrl(shot.src)}
                    alt={shot.caption || `${cs.title} — image ${i + 1}`}
                    loading="lazy"
                  />
                </button>
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

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  )
}
