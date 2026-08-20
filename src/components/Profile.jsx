import useSectionReveal from '../hooks/useSectionReveal'
import { assetUrl } from '../lib/caseStudies'

const BULLETS = [
  'Product Designer with 15+ years in complex enterprise domains',
  'Led 0-to-1 design for AI, genomics, and data platform products',
  'Currently designing internal data and observability products at LinkedIn',
  'Collaborates closely with engineers, data scientists, and domain experts',
  'Based in San Francisco',
]

export default function Profile() {
  const [ref, visible] = useSectionReveal()

  return (
    <section className="profile" id="profile">
      <div className={`section__inner section-animate ${visible ? 'visible' : ''}`} ref={ref}>
        <img
          className="profile__photo"
          src={assetUrl('assets/jimreed_head_512x512.png')}
          alt="Portrait of Jim Reed"
        />
        <div>
          <ul className="profile__bullets">
            {BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/jimreed/"
            target="_blank"
            rel="noreferrer"
            className="profile__linkedin-btn"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  )
}
