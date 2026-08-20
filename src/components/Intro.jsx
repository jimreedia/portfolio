import useSectionReveal from '../hooks/useSectionReveal'

export default function Intro() {
  const [ref, visible] = useSectionReveal()

  return (
    <section className="intro">
      <div className={`section__inner section-animate ${visible ? 'visible' : ''}`} ref={ref}>
        <h1 className="intro__headline">I design for experts.</h1>
        <p className="intro__subhead">
          Complex domains, high stakes, no shortcuts.
          <br />
          0-to-1 products that hold up.
        </p>
        <p className="intro__body">
          I'm Jim Reed, a Product Designer based in San Francisco. I've spent my career
          embedded in technically complex domains including genomics, industrial
          operations, data platforms, and AI, designing tools that expert users actually
          rely on.
        </p>
        <a href="#featured-work" className="intro__cta">
          <svg className="intro__cta-arrow cta-arrow" width="32" height="20" viewBox="0 0 32 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16L28 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="intro__cta-label">Explore the work</span>
        </a>
      </div>
    </section>
  )
}
