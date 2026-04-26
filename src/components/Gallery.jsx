const ARTWORKS = [
  {
    tall: true,
    bg: 'linear-gradient(160deg,#1A4D2E,#2D6A4F,#1B5E35)',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    placeholder: 'Defence Collection',
    series: 'Curated Series',
    title: 'Honour & Sacrifice',
    meta: 'Defence-Inspired · ₹18,000',
  },
  {
    bg: 'linear-gradient(135deg,#0C1B33,#162447)',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>',
    placeholder: "Nature's Embrace",
    title: "Nature's Embrace",
    meta: 'Nature Collection · ₹12,000',
  },
  {
    bg: 'linear-gradient(135deg,#8B6914,#C9933A)',
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    placeholder: 'Corporate Gift',
    title: 'Legacy of Stars',
    meta: 'Corporate Gift · ₹8,500',
  },
  {
    bg: 'linear-gradient(135deg,#1B4332,#52B788)',
    icon: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
    placeholder: 'Forest Whispers',
    title: 'Forest Whispers',
    meta: 'Nature Collection · ₹15,000',
  },
  {
    bg: 'linear-gradient(135deg,#2C1810,#8B3A1A)',
    icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>',
    placeholder: 'Roots & Renewal',
    title: 'Roots & Renewal',
    meta: 'Eco Series · ₹10,000',
  },
  {
    bg: 'linear-gradient(135deg,#1B1B2F,#4A2060)',
    icon: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
    placeholder: "Dawn's Promise",
    title: "Dawn's Promise",
    meta: 'Spiritual Series · ₹22,000',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div>
            <span className="section-badge">Paintings With Purpose</span>
            <h2 className="section-title" id="gallery-title" style={{ marginTop: '1rem' }}>
              Art Store &<br /><em>Gallery</em>
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '300px', textAlign: 'right', fontWeight: 300, lineHeight: 1.8 }}>
            Each painting funds a year of education, one brushstroke at a time. Buy art. Change lives.
          </p>
        </div>

        <div className="gallery-grid">
          {ARTWORKS.map((art, i) => (
            <article
              key={i}
              className={`art-card${art.tall ? ' art-card-tall' : ''}`}
            >
              <div
                className="art-placeholder"
                style={{ background: art.bg, minHeight: art.tall ? '400px' : undefined }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: art.icon }} />
                <span>{art.placeholder}</span>
                {art.series && <span className="art-price">{art.series}</span>}
              </div>
              <div className="art-overlay" aria-hidden="true" />
              <div className="art-info">
                <h4>{art.title}</h4>
                <p>{art.meta}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-cta">
          <a href="#contact" className="btn-green">View Full Gallery & Enquire</a>
        </div>
      </div>
    </section>
  )
}
