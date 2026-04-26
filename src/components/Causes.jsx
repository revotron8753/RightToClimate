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

function CauseCard({ num, tag, title, description, items, delay }) {
  const ref = useRef(null)
  useReveal(ref, delay)

  return (
    <article className="cause-card reveal-hidden" ref={ref}>
      <div className="cause-bg" aria-hidden="true" />
      <div className="cause-num" aria-hidden="true">{num}</div>
      <span className="cause-tag">{tag}</span>
      <h3 className="cause-title">{title}</h3>
      <p className="cause-p">{description}</p>
      <ul className="cause-items">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </article>
  )
}

const CAUSES = [
  {
    num: '01', tag: 'Environment',
    title: 'Sustainability & Climate Action',
    description: 'From planting trees to running carbon-conscious campaigns, we take verifiable action on climate change through community-led, evidence-based programs with photographically documented outcomes.',
    items: ['Mass tree plantation drives', 'Water conservation programs', 'Waste management awareness', 'Carbon-neutral campaigns'],
  },
  {
    num: '02', tag: 'Nation Service',
    title: 'War Widows Support',
    description: 'We honor those who gave everything by supporting the families they left behind — with financial aid, education, and pathways to dignified livelihoods that restore hope and security.',
    items: ['Monthly financial assistance', "Children's education sponsorships", 'Vocational skill training', 'Recognition programs & dignity initiatives'],
  },
  {
    num: '03', tag: 'Culture & Creativity',
    title: 'Art & Culture for Planet',
    description: 'Art has the power to change minds. Our exhibitions, auctions, and creative campaigns make environmental awareness both beautiful and universally accessible across communities.',
    items: ['Charity art auctions nationally', 'Defence-inspired art collections', 'Eco-art awareness campaigns', 'Youth creativity programs'],
  },
  {
    num: '04', tag: 'Youth & Future',
    title: 'Education for Planet',
    description: 'The next generation will inherit the earth. We equip young minds with knowledge, values, and leadership skills to protect it — from classrooms to community action.',
    items: ['Climate curriculum workshops', 'School awareness drives', 'Merit-based scholarships', 'Youth leadership programs'],
  },
]

export default function Causes() {
  return (
    <section id="causes" className="causes" aria-labelledby="causes-title">
      <div className="causes-inner">
        <div className="causes-header">
          <div>
            <span className="section-badge">What We Fight For</span>
            <h2 className="section-title" id="causes-title" style={{ marginTop: '1rem' }}>
              Our <em>Causes</em>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '360px', lineHeight: 1.8, fontWeight: 300 }}>
            Four causes. One ecosystem of change — each amplifying the impact of the others.
          </p>
        </div>
        <div className="causes-grid">
          {CAUSES.map((c, i) => (
            <CauseCard key={c.num} {...c} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
