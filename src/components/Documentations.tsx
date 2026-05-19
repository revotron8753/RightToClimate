const DOCS = [
  {
    badge: 'Annual Report',
    badgeColor: 'var(--green)',
    title: 'Annual Impact Report 2024',
    desc: 'Comprehensive overview of all programs, outcomes, financials, and milestones achieved in the 2023–24 fiscal year.',
    meta: 'PDF · 2.4 MB · Published March 2024',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  },
  {
    badge: 'CSR Guide',
    badgeColor: 'var(--navy)',
    title: 'CSR Partnership Guidelines 2024',
    desc: 'Step-by-step guide for corporate partners: structuring CSR contributions, compliance requirements, and impact reporting formats.',
    meta: 'PDF · 1.1 MB · Updated January 2024',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
  {
    badge: 'Legal',
    badgeColor: 'var(--gold)',
    title: '80G Tax Exemption Certificate',
    desc: 'Official CBDT-issued 80G certificate confirming full tax deductibility for all donations made to Right to Climate.',
    meta: 'PDF · 0.3 MB · Valid through 2026',
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  },
  {
    badge: 'Field Report',
    badgeColor: '#2D6A4F',
    title: 'Rajasthan Plantation Field Report',
    desc: 'Detailed field documentation of the 10,000-tree plantation drive: site maps, species list, photographic record, and 6-month survival audit.',
    meta: 'PDF · 3.2 MB · July 2024',
    icon: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  },
  {
    badge: 'Research',
    badgeColor: '#1A6E8E',
    title: 'Water Conservation Survey 2023',
    desc: 'Scientific assessment of 120 water bodies across Maharashtra and Gujarat — biodiversity index, pollution levels, and restoration roadmap.',
    meta: 'PDF · 1.8 MB · December 2023',
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  },
  {
    badge: 'Template',
    badgeColor: 'var(--text-muted)',
    title: 'Project Proposal Template',
    desc: 'Standard template for organisations seeking funding or partnership from Right to Climate for approved environmental projects.',
    meta: 'DOCX · 0.8 MB · Version 3.1',
    icon: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  },
]

export default function Documentations() {
  return (
    <section id="docs" className="docs">
      <div className="docs-inner">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-badge">Transparency & Access</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Available <em>Documentations</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every rupee is accounted for. Download our audited impact reports, legal certificates, and field documentation — available to every donor, partner, and stakeholder without restriction.
          </p>
        </div>
        <div className="docs-grid">
          {DOCS.map(({ badge, badgeColor, title, desc, meta, icon }) => (
            <div className="doc-card" key={title}>
              <div className="doc-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
              </div>
              <div className="doc-body">
                <span className="doc-badge" style={{ color: badgeColor }}>{badge}</span>
                <h3 className="doc-title">{title}</h3>
                <p className="doc-desc">{desc}</p>
                <p className="doc-meta">{meta}</p>
              </div>
              <button className="doc-dl" aria-label={`Download ${title}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
