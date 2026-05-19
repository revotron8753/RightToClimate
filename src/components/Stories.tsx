const IMPACTS = [
  {
    headerClass: 'story-h-green',
    badge: 'Environmental Restoration',
    title: 'Environmental Restoration',
    body: 'Every contribution directly funds tree plantation drives, Green Hydrogen awareness campaigns, and climate initiatives that restore India\'s natural ecosystems for future generations.',
  },
  {
    headerClass: 'story-h-navy',
    badge: 'Plantation & Awareness Programs',
    title: 'Plantation & Awareness Programs',
    body: 'Large-scale plantation drives combined with community awareness programs spread climate responsibility to every corner of India — from urban centres to rural villages.',
  },
  {
    headerClass: 'story-h-gold',
    badge: 'Veteran & War Widow Welfare',
    title: 'Veteran & War Widow Welfare',
    body: 'A portion of every fund raised goes directly to support the families of Bravehearts, veterans, and war widows — honouring those who have given everything for the nation.',
  },
  {
    headerClass: 'story-h-green',
    badge: 'Youth Climate Education',
    title: 'Youth Climate Education',
    body: 'Through school programs, exhibitions, and community events, Right to Climate equips the next generation with the knowledge and inspiration to lead India\'s climate future.',
  },
  {
    headerClass: 'story-h-navy',
    badge: 'Sustainable Community Development',
    title: 'Sustainable Community Development',
    body: 'We work with communities across India to build sustainable livelihoods — from green energy access to eco-friendly practices that strengthen both people and planet.',
  },
  {
    headerClass: 'story-h-gold',
    badge: 'A Greener & Stronger India',
    title: 'A Greener & Stronger India',
    body: 'The ultimate goal: an India that leads the world in clean energy, climate responsibility, and national service — where every farm, every village, and every family thrives.',
  },
]

export default function Stories() {
  return (
    <section id="social-impact" className="stories" aria-labelledby="social-impact-title">
      <div className="stories-inner">
        <span className="section-badge">For Society</span>
        <h2 className="section-title" id="social-impact-title" style={{ marginTop: '1rem' }}>
          Social Impact <em>for Society</em>
        </h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          Every contribution supports a chain of impact — from environmental restoration to veteran welfare, from youth education to sustainable communities across India.
        </p>
        <div className="stories-grid">
          {IMPACTS.map(({ headerClass, badge, title, body }) => (
            <article className="story-card" key={title}>
              <div className={`story-header ${headerClass}`}>
                <span className="story-tag-badge">{badge}</span>
              </div>
              <div className="story-body">
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="story-footer">
                  <a href="#involve" className="read-more" tabIndex={0}>Donate Now →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
