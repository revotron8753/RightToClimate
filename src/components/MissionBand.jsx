const VALUES = ['Integrity', 'Accountability', 'Service', 'Dignity', 'Sustainability', 'Impact']

const LEADERSHIP = [
  { name: 'Col DK Dass',    role: 'Co-Founder' },
  { name: 'Kanchan Mehra',  role: 'Co-Founder' },
  { name: 'Priyam Kapoor',  role: 'Executive Team' },
  { name: 'Ayush Kapoor',   role: 'Executive Team' },
  { name: 'Sarah D Rawat',  role: 'Executive Team' },
]

export default function MissionBand() {
  return (
    <section className="mission-band" aria-labelledby="mission-title">
      <div className="mission-inner">
        <div className="mission-text">
          <span className="section-badge section-badge--gold">Our Mission & Vision</span>
          <h2
            className="section-title section-title--white"
            id="mission-title"
            style={{ marginTop: '1rem' }}
          >
            Why We Exist
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Climate action is not a privilege — it is a right. Founded with the discipline and compassion of military service, Right to Climate bridges environmental urgency with national gratitude.
          </p>
          <div className="mission-values">
            {VALUES.map((val, i) => (
              <div className="val-item" key={val}>
                <div className="val-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="val-word">{val}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <blockquote className="mission-quote">
            "India's most trusted platform combining sustainability, transparency, and social impact — where every rupee is tracked and every project documented."
          </blockquote>
          <div className="leadership-table">
            <p className="lt-header">Leadership</p>
            {LEADERSHIP.map(({ name, role }) => (
              <div className="lt-row" key={name}>
                <div><div className="lt-name">{name}</div></div>
                <div className="lt-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
