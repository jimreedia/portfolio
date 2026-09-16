import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { assetUrl, getById, getNeighbors } from '../lib/caseStudies'
import Lightbox from './Lightbox'

// Return the visitor to the homepage section this case study is listed in, so
// "back to all work" lands where they were browsing rather than at the top.
function backLink(label, scrollTo, extraClass = '') {
  return (
    <Link to="/" state={{ scrollTo }} className={`case-study__back ${extraClass}`}>
      {label}
    </Link>
  )
}

// Render inline **bold** spans within a body string.
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
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
  const [playingVideoIds, setPlayingVideoIds] = useState(() => new Set())

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
      lightboxImages.push({ src: block.src, alt: block.alt, caption: block.caption, unframed: block.unframed })
      return { ...block, lightboxIdx }
    }),
  }))

  const galleryStart = lightboxImages.length
  gallery.forEach((shot) => {
    lightboxImages.push({ src: shot.src, alt: shot.caption || cs.title, caption: shot.caption, unframed: shot.unframed })
  })

  const { prev, next } = getNeighbors(id)
  const backSection = cs.featured ? 'featured-work' : 'more-work'
  const meta = [
    ['Role', cs.role],
    ['Design Team', cs.team],
  ].filter(([, value]) => value)

  // `maxWidth` (opt in, a number) caps display width for images that read
  // better smaller, e.g. a compact stat block, or a stand-in for the old
  // site's 800px column while that's being evaluated case by case; `unframed`
  // (opt out) drops the standard border/radius for alpha-transparent
  // composites, where a frame would draw a rectangle around empty canvas.
  const mediaModifiers = (block) =>
    block?.unframed ? ' case-study__media--unframed' : ''

  const mediaMaxWidth = (block) =>
    block?.maxWidth ? { maxWidth: `min(${block.maxWidth}px, 100%)` } : undefined

  const imageButton = (block, lightboxIdx, label, key) => (
    <figure
      className={`case-study__media case-study__section-image${mediaModifiers(block)}`}
      key={key}
    >
      <button
        type="button"
        className="case-study__media-button"
        onClick={() => setLightboxIndex(lightboxIdx)}
        aria-label={label}
      >
        <img
          src={assetUrl(block.src)}
          alt={block.alt || ''}
          width={block.width}
          height={block.height}
          loading="lazy"
          style={mediaMaxWidth(block)}
        />
      </button>
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  )

  // A Vimeo embed, lazy by default: shows a static poster (no third-party
  // frame fetched until the visitor clicks) and swaps in the real iframe on
  // click, per the "restore case study video" backlog decision.
  const videoBlock = (block, key) => {
    const playing = playingVideoIds.has(block.vimeoId)
    const ratio = block.width && block.height ? `${block.width} / ${block.height}` : '4 / 3'
    return (
      <figure
        className={`case-study__media case-study__section-image case-study__video${mediaModifiers(block)}`}
        key={key}
      >
        <div className="case-study__video-frame" style={{ aspectRatio: ratio, ...mediaMaxWidth(block) }}>
          {playing ? (
            <iframe
              src={`https://player.vimeo.com/video/${block.vimeoId}?dnt=1&autoplay=1`}
              title={block.alt || cs.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          ) : (
            <button
              type="button"
              className="case-study__video-poster"
              onClick={() => setPlayingVideoIds((prev) => new Set(prev).add(block.vimeoId))}
              aria-label={`Play video: ${block.alt || cs.title}`}
            >
              <img src={assetUrl(block.poster)} alt="" loading="lazy" />
              <span className="case-study__video-play" aria-hidden="true" />
            </button>
          )}
        </div>
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
  }

  return (
    <main className="case-study">
      <article className="case-study__inner">
        <header className="case-study__hero">
          {backLink('← Back to all work', backSection)}
          <h1 className="case-study__title">{cs.title}</h1>
          <p className="case-study__lead">{cs.description}</p>
        </header>

        {heroImage && (
          <button
            type="button"
            className={`case-study__media case-study__cover case-study__media-button${mediaModifiers(heroImage)}`}
            onClick={() => setLightboxIndex(0)}
            aria-label="Open image viewer"
          >
            <img
              src={assetUrl(heroImage.src)}
              alt={heroImage.alt || `${cs.title} cover`}
              width={heroImage.width}
              height={heroImage.height}
              style={mediaMaxWidth(heroImage)}
            />
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
                return <p className="case-study__body" key={j}>{renderInline(block.value)}</p>
              }
              if (block.type === 'list') {
                return (
                  <ul className="case-study__list" key={j}>
                    {block.items.map((item, k) => (
                      <li key={k}>{renderInline(item)}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'video') {
                return videoBlock(block, j)
              }
              return imageButton(
                { ...block, alt: block.alt || section.heading },
                block.lightboxIdx,
                section.heading ? `Open image viewer: ${section.heading}` : 'Open image viewer',
                j
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

        {(prev || next) && (
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
        )}

        {backLink('← Back to all work', backSection, 'case-study__back--center')}
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
