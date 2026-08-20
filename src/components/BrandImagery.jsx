import useSectionReveal from '../hooks/useSectionReveal'
import { assetUrl } from '../lib/caseStudies'

export default function BrandImagery() {
  const [ref, visible] = useSectionReveal()

  return (
    <section className="brand-imagery" id="top">
      <div className={`section__inner section-animate ${visible ? 'visible' : ''}`} ref={ref}>
        <img
          className="brand-imagery__illustration"
          src={assetUrl('assets/brand/pacman.png')}
          alt="PacMan characters in a speech-bubble exchange about the importance of product design"
        />
        <img
          className="brand-imagery__illustration illustration-float"
          src={assetUrl('assets/brand/jimreed_animated_hand_gear_480x280.gif')}
          alt="An animated hand pointing at a gear, representing interaction design"
        />
      </div>
    </section>
  )
}
