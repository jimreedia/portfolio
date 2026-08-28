import { useEffect, useRef, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'
import { useSectionNav } from '../lib/navigation'

const SECTION_IDS = ['featured-work', 'profile', 'more-work']

const LINKS = [
  { label: 'Work', id: 'featured-work' },
  { label: 'About', id: 'profile' },
  { label: 'More Work', id: 'more-work' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const activeId = useActiveSection(SECTION_IDS)
  const goToSection = useSectionNav()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [menuOpen])

  const links = (onLinkClick, className) => (
    <>
      {LINKS.map((link) => (
        <button
          key={link.id}
          type="button"
          className={`${className} ${activeId === link.id ? `${className}--active` : ''}`}
          onClick={() => {
            goToSection(link.id)
            onLinkClick?.()
          }}
        >
          {link.label}
        </button>
      ))}
      <a
        href="https://www.linkedin.com/in/jimreed/"
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onLinkClick}
      >
        LinkedIn ↗
      </a>
    </>
  )

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} ref={navRef}>
      <div className="nav__inner">
        <button
          type="button"
          className="nav__mark"
          onClick={() => goToSection('top')}
        >
          Jim Reed
        </button>

        <div className="nav__links">{links(null, 'nav__link')}</div>

        <button
          type="button"
          className="nav__hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        {menuOpen && (
          <div className="nav__mobile-menu">
            {links(() => setMenuOpen(false), 'nav__mobile-link')}
          </div>
        )}
      </div>
    </nav>
  )
}
