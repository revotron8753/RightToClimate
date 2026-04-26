const STORIES = [
  {
    headerClass: 'story-h-green',
    badge: 'War Widow',
    title: "From Grief to Strength: Meena's Journey",
    body: "After losing her husband in service, Meena feared for her children's future. Right to Climate's education sponsorship program funded her son's engineering college fees — today, he is the family's first graduate.",
    location: 'Haryana · 2024',
  },
  {
    headerClass: 'story-h-navy',
    badge: 'Plantation Drive',
    title: '10,000 Trees in 30 Days: Rajasthan Reforestation',
    body: 'In partnership with a corporate CSR team and local community volunteers, we planted 10,000 native trees across degraded land in Rajasthan. Survival rate: 87% at 6-month monitoring check.',
    location: 'Rajasthan · 2024',
  },
  {
    headerClass: 'story-h-gold',
    badge: 'Art for Impact',
    title: 'The Auction That Funded 12 Scholarships',
    body: 'A single charity art exhibition at a Delhi gallery raised ₹8.4 lakhs — enough to fully sponsor 12 children from war widow families through one complete academic year of quality education.',
    location: 'New Delhi · 2024',
  },
]

export default function Stories() {
  return (
    <section id="stories" className="stories" aria-labelledby="stories-title">
      <div className="stories-inner">
        <span className="section-badge">Real Impact</span>
        <h2 className="section-title" id="stories-title" style={{ marginTop: '1rem' }}>
          Stories of <em>Change</em>
        </h2>
        <div className="stories-grid">
          {STORIES.map(({ headerClass, badge, title, body, location }) => (
            <article className="story-card" key={title}>
              <div className={`story-header ${headerClass}`}>
                <span className="story-tag-badge">{badge}</span>
              </div>
              <div className="story-body">
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="story-footer">
                  <span className="story-author">{location}</span>
                  <span className="read-more" tabIndex={0} role="button">Read full story →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
