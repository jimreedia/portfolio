import { assetUrl } from '../lib/caseStudies'

const BULLETS = [
  'Product Designer with 15+ years in complex enterprise domains',
  'Led 0→1 design for AI, genomics, and data platform products',
  'Collaborates closely with engineers, data scientists, and domain experts',
  'Based in San Francisco',
]

export default function Profile() {
  return (
    <section className="profile" id="profile">
      <div className="section__inner">
        <img
          className="profile__photo"
          src={assetUrl('assets/Jim-Reed-headshot.png')}
          alt="Portrait of Jim Reed"
        />
        <div>
          <h2 className="profile__name">Jim Reed</h2>
          <ul className="profile__bullets">
            {BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="profile__actions">
            <a
              href="https://www.linkedin.com/in/jimreed/"
              target="_blank"
              rel="noreferrer"
              className="profile__btn"
            >
              Connect on LinkedIn →
            </a>
            <a
              href="https://jimreedia.myportfolio.com"
              target="_blank"
              rel="noreferrer"
              className="profile__btn"
            >
              More Case Studies →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
