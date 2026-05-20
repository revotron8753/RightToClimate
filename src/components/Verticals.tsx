const STEPS = [
  {
    num: '01',
    title: 'CSR Partnerships',
    tagline: 'Corporates invest',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    color: '#081A31',
  },
  {
    num: '02',
    title: 'Tree Plantation',
    tagline: 'Climate action begins',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    color: '#536259',
  },
  {
    num: '03',
    title: 'Art Exhibitions',
    tagline: 'Awareness through art',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
    color: '#E39156',
  },
  {
    num: '04',
    title: 'Community Awareness',
    tagline: 'Nation participates',
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    color: '#3A6B7A',
  },
  {
    num: '05',
    title: 'Social Welfare Funds',
    tagline: 'Impact flows outward',
    icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    color: '#536259',
  },
  {
    num: '06',
    title: 'Veterans & Widows',
    tagline: 'Bravehearts honoured',
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    color: '#8B3030',
  },
  {
    num: '07',
    title: 'National Impact',
    tagline: 'A greener India',
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    color: '#081A31',
  },
]

export default function Verticals() {
  return (
    <section id="mission" className="mission-section" aria-labelledby="mission-title">
      <div className="mission-inner">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-badge">Our Mission</span>
          <h2 className="section-title" id="mission-title" style={{ marginTop: '1rem' }}>
            Circular <em>Impact Model</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every rupee invested starts a chain of action that ultimately strengthens India — then cycles back to fund more impact.
          </p>
        </div>

        <div className="tl-wrap">
          <div className="tl-track">
            {STEPS.map(({ num, title, tagline, icon, color }, i) => (
              <div className="tl-item" key={num}>
                <div className="tl-node" style={{ background: color }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
                  <span className="tl-badge">{num}</span>
                </div>
                <h4 className="tl-title">{title}</h4>
                <p className="tl-tagline">{tagline}</p>
                {i < STEPS.length - 1 && (
                  <div className="tl-connector" aria-hidden="true">
                    <svg viewBox="0 0 24 12"><polyline points="0 6 20 6" /><polyline points="14 1 20 6 14 11" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="tl-loop" aria-hidden="true">
            <div className="tl-loop-line" />
            <span className="tl-loop-label">↺ &nbsp;This impact cycles back to drive more CSR partnerships — a perpetual model of climate action &amp; national service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
