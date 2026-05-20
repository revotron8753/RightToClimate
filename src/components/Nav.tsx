import { useState, useEffect } from 'react'

const logoSvg = '/Logo.svg'

const NAV_LINKS = [
  { href: '#founders',        label: 'Founders' },
  { href: '#mission',         label: 'Mission' },
  { href: '#accreditations',  label: 'Accreditations' },
  { href: '#green-hydrogen',  label: 'Green Hydrogen' },
  { href: '#past-events',     label: 'Past Events' },
  { href: '#csr',             label: 'Partner With Us' },
  { href: '#contact',         label: 'Contact' },
]

function scrollTo(href: string): void {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return
  const navHeight = 70
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActive]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollTo(href)
    setMobileOpen(false)
  }

  return (
    <nav
      aria-label="Main navigation"
      className={scrolled ? 'nav-scrolled' : ''}
    >
      <div className="nav-inner">
        <a href="#" className="logo-wrap" aria-label="Right to Climate Home" onClick={(e) => handleNavClick(e, '#hero')}>
          <img src={logoSvg} alt="Right to Climate Logo" className="logo-img" />
          <span className="logo-meta">
            <span className="logo-name">Right to Climate</span>
            <span className="logo-tag">Serving Nature &amp; Nation</span>
          </span>
        </a>
        <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                style={{ color: activeSection === href.slice(1) ? 'var(--orange-deep)' : undefined }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#involve" className="nav-cta" onClick={(e) => handleNavClick(e, '#involve')}>Donate Now</a>
        <button
          id="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(prev => !prev)}
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : undefined }} />
          <span style={{ opacity: mobileOpen ? 0 : undefined }} />
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : undefined }} />
        </button>
      </div>
    </nav>
  )
}
