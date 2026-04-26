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

const ACTIONS = [
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    label: 'Donate to Right to Climate',
    title: 'Donate',
    desc: 'One-time or monthly giving',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    label: 'Volunteer with Right to Climate',
    title: 'Volunteer',
    desc: 'Join drives, events & programs',
  },
  {
    icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    label: 'Sponsor a child',
    title: 'Sponsor a Child',
    desc: 'Full academic year support',
  },
  {
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    label: 'Buy art from our gallery',
    title: 'Buy Art',
    desc: 'Gallery & corporate gifts',
  },
  {
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    label: 'Become a CSR partner',
    title: 'CSR Partner',
    desc: 'Corporate ESG programs',
  },
]

function InvCard({ icon, label, title, desc, delay }) {
  const ref = useRef(null)
  useReveal(ref, delay)
  return (
    <div className="inv-card reveal-hidden" tabIndex={0} role="button" aria-label={label} ref={ref}>
      <div className="inv-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default function GetInvolved() {
  return (
    <section id="involve" className="involve" aria-labelledby="involve-title">
      <div className="involve-inner">
        <span className="section-badge section-badge--gold">Join the Mission</span>
        <h2 className="involve-title" id="involve-title">Every Action Counts</h2>
        <p className="involve-sub">
          Whether you donate, volunteer, sponsor a child, buy art, or bring your company on board — there is a meaningful place for you in this mission.
        </p>
        <div className="involve-cards">
          {ACTIONS.map(({ icon, label, title, desc }, i) => (
            <InvCard key={title} icon={icon} label={label} title={title} desc={desc} delay={i * 100} />
          ))}
        </div>
        <a href="#contact" className="btn-primary" style={{ fontSize: '15px', padding: '16px 40px' }}>
          Get Started Today →
        </a>
      </div>
    </section>
  )
}
