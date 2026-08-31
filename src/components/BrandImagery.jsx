import { assetUrl } from '../lib/caseStudies'
import { useSectionNav } from '../lib/navigation'

export default function BrandImagery() {
  const goToSection = useSectionNav()

  return (
    <section className="brand-imagery" id="top">
      <div className="section__inner">
        <img
          className="brand-imagery__illustration"
          src={assetUrl('assets/brand/pacman.png')}
          alt="PacMan characters in a speech-bubble exchange about the importance of product design"
        />
        <img
          className="brand-imagery__illustration"
          src={assetUrl('assets/brand/jimreed_animated_hand_gear_480x280.gif')}
          alt="An animated hand pointing at a gear, representing interaction design"
        />
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
    </section>
  )
}
