import { useSectionNav } from '../lib/navigation'

export default function Footer() {
  const goToSection = useSectionNav()

  return (
    <footer className="footer">
      <div className="section__inner">
        <div className="footer__row">
          <p className="footer__copyright">© 2026 Jim Reed</p>
          <button
            type="button"
            className="footer__link"
            onClick={() => goToSection('top')}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
