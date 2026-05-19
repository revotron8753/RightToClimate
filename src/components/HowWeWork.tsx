import { useState, useEffect, useRef } from 'react'

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

interface AllocBarProps {
  label: string
  percentage: number
}

function AllocBar({ label, percentage }: AllocBarProps) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="alloc-bar-wrap" ref={ref}>
      <div className="alloc-label">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="alloc-bar">
        <div
          className="alloc-fill"
          style={{
            width: animated ? `${percentage}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
    </div>
  )
}

interface FundingItemProps {
  icon: string
  title: string
  desc: string
  delay: number
}

function FundingItem({ icon, title, desc, delay }: FundingItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, delay)
  return (
    <div className="funding-item reveal-hidden" ref={ref}>
      <div className="funding-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

const FUNDING = [
  {
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    title: 'Paintings & Art Sales',
    desc: 'Every artwork sold directly funds education, empowerment, and climate programs.',
  },
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    title: 'Individual Donations',
    desc: 'Tax-exempt contributions from individuals committed to planet and people.',
  },
  {
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    title: 'CSR Partnerships',
    desc: 'Corporate partners fulfill ESG mandates while creating accountable community impact.',
  },
  {
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    title: 'Events & Exhibitions',
    desc: 'Fundraising events, auctions, and community campaigns that engage donors.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
    title: 'Brand Collaborations',
    desc: 'Purpose-driven partnerships with brands that share our values and vision.',
  },
]

const ALLOC = [
  { label: 'War Widow Family Support',      percentage: 35 },
  { label: 'Climate & Plantation Projects', percentage: 30 },
  { label: "Children's Education",           percentage: 25 },
  { label: 'Art & Culture Programs',         percentage: 10 },
]

export default function HowWeWork() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="how-inner">
        <span className="section-badge">Funding & Transparency</span>
        <h2 className="section-title" id="how-title" style={{ marginTop: '1rem' }}>
          How We Create <em>Impact</em>
        </h2>
        <div className="how-grid">
          <div>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300 }}>
              Our funding flows from multiple ethical sources — ensuring sustainability, reducing dependency, and maximizing impact for every cause we support.
            </p>
            <div className="funding-sources">
              {FUNDING.map(({ icon, title, desc }, i) => (
                <FundingItem key={title} icon={icon} title={title} desc={desc} delay={i * 100} />
              ))}
            </div>
          </div>

          <div className="allocation-box">
            <h3 className="allocation-title">Fund Allocation</h3>
            <p className="allocation-sub">How every rupee is deployed — tracked, verified, reported.</p>
            {ALLOC.map(({ label, percentage }) => (
              <AllocBar key={label} label={label} percentage={percentage} />
            ))}
            <div className="transparency-note">
              <strong>Our Promise:</strong> Every rupee is accounted for. Every project is photographically documented with before/after evidence. Annual audited reports are available to all donors and partners upon request.
            </div>
            <div className="alloc-badges">
              <div className="alloc-badge">Annual Report Available</div>
              <div className="alloc-badge">CSR Decks on Request</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
