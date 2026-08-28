import { useSectionNav } from '../lib/navigation'

export default function Footer() {
  const goToSection = useSectionNav()

  return (
    <footer className="footer">
      <div className="section__inner">
        <div className="footer__row">
          <button
            type="button"
            className="footer__link"
            onClick={() => goToSection('top')}
          >
            ↑ Back to Top
          </button>
          <a
            href="https://www.linkedin.com/in/jimreed/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Connect on LinkedIn →
          </a>
        </div>
        <hr className="footer__divider" />
        <p className="footer__copyright">© 2026 Jim Reed</p>
      </div>
    </footer>
  )
}
