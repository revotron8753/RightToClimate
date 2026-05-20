import logoSvg from '../public/Logo.svg'

const CAUSES_LINKS = ['Climate & Sustainability', 'War Widows Support', 'Art & Culture', "Children's Education"]
const INVOLVE_LINKS = [
  { label: 'Donate',           href: '#involve' },
  { label: 'Volunteer',        href: '#involve' },
  { label: 'Sponsor a Child',  href: '#involve' },
  { label: 'Buy Art',          href: '#involve' },
  { label: 'CSR Partners',     href: '#csr' },
  { label: 'Host an Event',    href: '#contact' },
]
const ORG_LINKS = [
  { label: 'About Us',        href: '#about' },
  { label: 'Leadership',      href: '#about' },
  { label: 'Impact Reports',  href: '#how' },
  { label: 'Press & Media',   href: '#stories' },
  { label: 'Transparency',    href: '#how' },
  { label: 'Contact',         href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src={logoSvg} alt="Right to Climate Logo" className="footer-logo" />
              <div>
                <span className="footer-brand-name">Right to Climate</span>
                <span className="logo-tag">Serving Nature &amp; Nation</span>
              </div>
            </div>
            <p>A mission-led NGO creating verifiable environmental impact while supporting war widows, children's education, and community empowerment through sustainability, art, and culture.</p>
            <p className="footer-reg">NGO Registration (Pending) · 12C / 80G Eligible · CIN Pending</p>
          </div>
          <div className="footer-col">
            <h4>Causes</h4>
            <ul role="list">
              {CAUSES_LINKS.map(label => (
                <li key={label}><a href="#causes">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul role="list">
              {INVOLVE_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Organisation</h4>
            <ul role="list">
              {ORG_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Right to Climate. All rights reserved. Built with purpose.</p>
          <div className="footer-pillars" aria-label="Brand pillars">
            <span className="fp">Planet</span>
            <span className="fp">Purpose</span>
            <span className="fp">People</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
