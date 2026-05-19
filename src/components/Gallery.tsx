const EVENTS = [
  {
    tall: true,
    bg: 'linear-gradient(160deg,#1A4D2E,#2D6A4F,#52B788)',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    category: 'Plantation Drive',
    title: 'Tree Plantation Drives',
    meta: 'Native tree plantations across India',
  },
  {
    bg: 'linear-gradient(135deg,#0C1B33,#162447)',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    category: 'Veteran Support',
    title: 'Veteran Support Initiatives',
    meta: 'Honouring Bravehearts & War Widows',
  },
  {
    bg: 'linear-gradient(135deg,#8B6914,#C9933A)',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
    category: 'Art Exhibition',
    title: 'Art & Climate Exhibitions',
    meta: 'Sustainability-inspired visual art',
  },
  {
    bg: 'linear-gradient(135deg,#1B4332,#52B788)',
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    category: 'Awareness Campaign',
    title: 'Sustainability Awareness Campaigns',
    meta: 'National climate education drives',
  },
  {
    bg: 'linear-gradient(135deg,#2C3E50,#3498DB)',
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    category: 'Community',
    title: 'Community Engagement Programs',
    meta: 'Grassroots participation & outreach',
  },
  {
    bg: 'linear-gradient(135deg,#1B1B2F,#4A2060)',
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    category: 'Green Hydrogen',
    title: 'Green Hydrogen Awareness',
    meta: 'India\'s clean energy future',
  },
]

export default function Gallery() {
  return (
    <section id="past-events" className="gallery" aria-labelledby="past-events-title">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div>
            <span className="section-badge">On the Ground</span>
            <h2 className="section-title" id="past-events-title" style={{ marginTop: '1rem' }}>
              Past Events <em>&amp; Initiatives</em>
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '300px', textAlign: 'right', fontWeight: 300, lineHeight: 1.8 }}>
            From plantation drives to art exhibitions — creating impact on the ground across India.
          </p>
        </div>

        <div className="gallery-grid">
          {EVENTS.map((event, i) => (
            <article key={i} className={`art-card${event.tall ? ' art-card-tall' : ''}`}>
              <div className="art-placeholder" style={{ background: event.bg, minHeight: event.tall ? '400px' : undefined }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: event.icon }} />
                <span>{event.category}</span>
                <span className="art-price">Add Event Photo</span>
              </div>
              <div className="art-overlay" aria-hidden="true" />
              <div className="art-info">
                <h4>{event.title}</h4>
                <p>{event.meta}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-cta">
          <a href="#contact" className="btn-green">Get Involved</a>
        </div>
      </div>
    </section>
  )
}
