import { useEffect, useRef } from 'react'

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${delay}ms`
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
}

function PillarCard({ iconClass, iconPath, tag, tagClass, title, description, items, delay }) {
  const ref = useRef(null)
  useReveal(ref, delay)

  return (
    <article className="pillar-card reveal-hidden" ref={ref}>
      <div className={`pillar-icon ${iconClass}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconPath }} />
      </div>
      <span className={`pillar-tag ${tagClass}`}>{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="pillar-items">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <a href="#causes" className="pillar-learn-more">Learn more →</a>
    </article>
  )
}

const PILLARS = [
  {
    iconClass: 'pillar-icon--planet',
    iconPath: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
    tag: 'Planet',
    tagClass: 'pillar-tag--green',
    title: 'Restore the Earth',
    description: 'We lead science-backed climate action through tree plantations, biodiversity restoration, and sustainability-first campaigns that create lasting ecological change across India.',
    items: ['Mass tree plantation drives', 'Water conservation initiatives', 'Waste management awareness', 'Carbon-conscious campaigns', 'ESG-aligned programs'],
  },
  {
    iconClass: 'pillar-icon--purpose',
    iconPath: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    tag: 'Purpose',
    tagClass: 'pillar-tag--gold',
    title: 'Art with Meaning',
    description: 'Every painting, exhibition, and creative campaign carries a deeper purpose — raising funds, building awareness, and connecting donors to the heart of our mission through culture.',
    items: ['Charity art auctions', 'Impact-driven exhibitions', 'Eco-art installations & campaigns', 'Corporate gifting collections', 'Youth creativity programs'],
  },
  {
    iconClass: 'pillar-icon--people',
    iconPath: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    tag: 'People',
    tagClass: 'pillar-tag--navy',
    title: 'Honor Our Heroes',
    description: 'The families of those who served deserve gratitude in action. We provide education, livelihood training, and dignity to war widows and their children across the country.',
    items: ['Financial support for war widows', 'Education sponsorships', 'Livelihood skill training', "Children's scholarships", 'Community empowerment'],
  },
]

export default function Pillars() {
  return (
    <section id="about" className="pillars" aria-labelledby="pillars-title">
      <div className="pillars-inner">
        <div style={{ maxWidth: '600px' }}>
          <span className="section-badge">Our Foundation</span>
          <h2 className="section-title" id="pillars-title">
            Three Pillars,<br />One <em>Mission</em>
          </h2>
          <p className="section-sub">
            Environmental action and human dignity are inseparable. Our three pillars drive every program, partnership, and project we undertake.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.tag} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
