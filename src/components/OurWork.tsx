const GH_PILLARS = [
  {
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    title: 'Clean Energy for India',
    desc: 'Green Hydrogen is India\'s most promising path to energy independence — a zero-emission fuel produced from water using renewable electricity.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Environmental Leadership',
    desc: 'Right to Climate leads India\'s first NGO-driven Green Hydrogen awareness initiative, bridging the gap between policy, community, and innovation.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    title: 'National Scale Vision',
    desc: 'Ab Bharat Ke Har Khet Me Tel Ka Kua Hoga — our vision: every farm, every village powered by the clean energy of tomorrow.',
  },
  {
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    title: 'Research & Innovation',
    desc: 'Through collaboration with leading academic institutions, Right to Climate drives Green Hydrogen research and policy advocacy at the national level.',
  },
]

export default function OurWork() {
  return (
    <section id="green-hydrogen" className="green-hydrogen" aria-labelledby="gh-title">
      <div className="gh-inner">
        <div className="gh-header">
          <div>
            <span className="section-badge section-badge--gold">India's First</span>
            <h2 className="section-title section-title--white" id="gh-title" style={{ marginTop: '1rem' }}>
              Green Hydrogen <em>NGO</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.9, fontWeight: 400, maxWidth: '540px', marginTop: '1rem' }}>
              Right to Climate is building awareness and action around Green Hydrogen as a future clean energy solution for India's sustainable growth — making us India's first NGO dedicated to this mission.
            </p>
          </div>
        </div>

        <div className="gh-pillars">
          {GH_PILLARS.map(({ icon, title, desc }) => (
            <div className="gh-pillar" key={title}>
              <div className="gh-pillar-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
              </div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="gh-iit-box">
          <div className="gh-iit-content">
            <span className="section-badge section-badge--gold">Academic Collaboration</span>
            <h3>IIT Ropar Project</h3>
            <p>
              Right to Climate is collaborating with IIT Ropar on innovation-focused initiatives aligned with India's future climate and clean energy goals. This partnership bridges grassroots NGO action with cutting-edge academic research in Green Hydrogen technology.
            </p>
          </div>
          <div className="gh-iit-visual" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span>IIT Ropar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
