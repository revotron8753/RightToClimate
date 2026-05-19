import { useEffect, useRef } from 'react'

function useReveal(ref: { current: HTMLElement | null }, delay = 0): void {
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

const MISSION_PILLARS = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    label: 'Climate Responsibility',
    title: 'Climate Responsibility',
    desc: 'Be part of India\'s growing climate movement and take ownership of our shared future.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    label: 'Sustainability',
    title: 'Sustainability',
    desc: 'Support green initiatives that build a sustainable, future-ready India for generations to come.',
  },
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    label: 'National Service',
    title: 'National Service',
    desc: 'Honour Bravehearts, veterans, and war widows through every rupee you contribute to the mission.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    label: 'Social Impact',
    title: 'Social Impact',
    desc: 'Create real, measurable change in communities across India through your participation.',
  },
  {
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    label: 'Clean Energy Awareness',
    title: 'Clean Energy Awareness',
    desc: 'Champion Green Hydrogen and clean energy as the cornerstone of India\'s energy independence.',
  },
]

interface PillarCardProps {
  icon: string
  label: string
  title: string
  desc: string
  delay: number
}

function PillarCard({ icon, label, title, desc, delay }: PillarCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, delay)
  return (
    <div className="inv-card reveal-hidden" tabIndex={0} role="article" aria-label={label} ref={ref}>
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
        <h2 className="involve-title" id="involve-title">Do Your Part Today!</h2>
        <p className="involve-sub">
          Be part of a mission that combines climate responsibility, sustainability, national service, social impact, and clean energy awareness — for a greener, stronger India.
        </p>
        <div className="involve-cards">
          {MISSION_PILLARS.map(({ icon, label, title, desc }, i) => (
            <PillarCard key={title} icon={icon} label={label} title={title} desc={desc} delay={i * 100} />
          ))}
        </div>

        <div className="donate-qr-block">
          <div className="donate-qr-text">
            <h3>Donate Now</h3>
            <p>Scan the QR code to make a donation. Your contribution is 80G tax-exempt and goes directly towards climate action and social welfare.</p>
            <a href="#contact" className="btn-primary" style={{ fontSize: '15px', padding: '16px 40px', marginTop: '1.5rem', display: 'inline-block' }}>
              Get Started Today →
            </a>
          </div>
          <div className="donate-qr-box" aria-label="QR Code for donations">
            <div className="qr-placeholder">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                <rect x="5" y="5" width="3" height="3" fill="currentColor"/><rect x="16" y="5" width="3" height="3" fill="currentColor"/><rect x="5" y="16" width="3" height="3" fill="currentColor"/>
                <rect x="14" y="14" width="2" height="2" fill="currentColor"/><rect x="17" y="14" width="3" height="2" fill="currentColor"/><rect x="14" y="17" width="2" height="3" fill="currentColor"/><rect x="17" y="17" width="3" height="3" fill="currentColor"/>
              </svg>
              <span>Add QR Code Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
