const CERTIFICATIONS = [
  {
    badge: '80G',
    title: '80G Certification',
    desc: 'Donations to Right to Climate are fully tax-deductible under Section 80G of the Income Tax Act. Every contribution you make saves you tax while building a greener India.',
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    bg: 'var(--green)',
  },
  {
    badge: '12A',
    title: '12A Registration',
    desc: 'Right to Climate holds 12A registration under the Income Tax Act, ensuring full legal recognition and tax-exempt status for all organisational income and activities.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    bg: 'var(--navy)',
  },
  {
    badge: 'CSR-1',
    title: 'CSR-1 Registration',
    desc: 'Registered under CSR-1 with the Ministry of Corporate Affairs, enabling corporates to channel their CSR funds through Right to Climate with full legal compliance.',
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    bg: 'var(--gold)',
  },
]

const RECOGNITIONS = [
  { body: 'NSA', full: 'National Security Advisor', desc: 'Recognised for work connecting national security, veteran welfare, and climate responsibility.' },
  { body: 'MNRE', full: 'Ministry of New & Renewable Energy', desc: 'Acknowledged for Green Hydrogen advocacy and renewable energy awareness initiatives across India.' },
  { body: 'DPIIT', full: 'Dept. for Promotion of Industry & Internal Trade', desc: 'Recognised for strategic sustainability and nation-building initiatives under the Government of India.' },
]

export default function Partners() {
  return (
    <section id="accreditations" className="accreditations" aria-labelledby="accreditations-title">
      <div className="accreditations-inner">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-badge">Trust & Compliance</span>
          <h2 className="section-title" id="accreditations-title" style={{ marginTop: '1rem' }}>
            Accreditations <em>&amp; Recognition</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Right to Climate operates with full legal compliance, government recognition, and the highest standards of transparency and accountability.
          </p>
        </div>

        <div className="accred-certs">
          {CERTIFICATIONS.map(({ badge, title, desc, icon, bg }) => (
            <div className="accred-cert-card" key={badge}>
              <div className="accred-cert-icon" style={{ background: bg }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
              </div>
              <span className="accred-badge">{badge}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="accred-recognition">
          <h3 className="accred-rec-heading">Recognised by Leaders From</h3>
          <div className="accred-rec-grid">
            {RECOGNITIONS.map(({ body, full, desc }) => (
              <div className="accred-rec-card" key={body}>
                <div className="accred-rec-abbr">{body}</div>
                <div>
                  <p className="accred-rec-full">{full}</p>
                  <p className="accred-rec-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="accred-tagline">Strategic Sustainability &amp; Nation Building Initiatives</p>
        </div>
      </div>
    </section>
  )
}
