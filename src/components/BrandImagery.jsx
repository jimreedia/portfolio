import { useSectionNav } from '../lib/navigation'
import HandGearMark from './HandGearMark'
import PacmanScene from './PacmanScene'

export default function BrandImagery() {
  const goToSection = useSectionNav()

  return (
    <section className="brand-imagery" id="top">
      <div className="brand-imagery__stage">
        <div className="section__inner">
          <PacmanScene />
          <div className="brand-imagery__lockup">
            <HandGearMark />
            <div className="brand-imagery__wordmark">
              <span className="brand-imagery__wordmark-name">jimreed.net</span>
              <span className="brand-imagery__wordmark-tag">UX Design</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="brand-imagery__cta"
          onClick={() => goToSection('featured-work')}
          aria-label="View case studies"
        >
          <svg className="brand-imagery__cta-arrow cta-arrow" width="18" height="11" viewBox="0 0 32 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16L28 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}
