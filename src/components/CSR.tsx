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

const BENEFITS = [
  {
    num: '01',
    title: 'ESG & CSR Impact Visibility',
    desc: 'Gain measurable, reportable ESG outcomes with co-branded annual reports your board can present with confidence to shareholders and stakeholders.',
  },
  {
    num: '02',
    title: 'Brand Positioning with Sustainability',
    desc: 'Align your brand with India\'s most credible sustainability NGO and position your company as a genuine leader in environmental and social responsibility.',
  },
  {
    num: '03',
    title: 'Participation in National Climate Initiatives',
    desc: 'Become part of India-wide campaigns in tree plantation, Green Hydrogen awareness, and clean energy advocacy — with national media visibility.',
  },
  {
    num: '04',
    title: 'On-Ground Social Impact',
    desc: 'Create real, documented impact on the ground — from plantation drives to veteran welfare — with photographic evidence and beneficiary documentation.',
  },
  {
    num: '05',
    title: 'Community & Youth Engagement',
    desc: 'Engage your employees and the next generation through structured volunteer programs, school outreach, and community events.',
  },
  {
    num: '06',
    title: 'Strategic Sustainability Collaborations',
    desc: 'Co-create strategic sustainability initiatives alongside Right to Climate\'s network of government bodies, academic institutions, and corporates.',
  },
  {
    num: '07',
    title: 'Recognition Across Campaigns & Events',
    desc: 'Your brand is recognised at every event, exhibition, and campaign — from national climate initiatives to art exhibitions and plantation drives.',
  },
]

interface BenefitPointProps {
  num: string
  title: string
  desc: string
  delay: number
}

function BenefitPoint({ num, title, desc, delay }: BenefitPointProps) {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, delay)
  return (
    <div className="csr-point reveal-hidden" ref={ref}>
      <div className="csr-point-num">{num}</div>
      <div className="csr-point-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default function CSR() {
  return (
    <section id="csr" className="csr" aria-labelledby="csr-title">
      <div className="csr-inner">
        <span className="section-badge">For Partners & Donors</span>
        <h2 className="section-title" id="csr-title" style={{ marginTop: '1rem' }}>
          What Do You Get When You <em>Join the Mission?</em>
        </h2>
        <div className="csr-grid">
          <div>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300 }}>
              Joining Right to Climate is more than a CSR investment — it is a strategic partnership that creates visible, verifiable impact for your brand, your employees, and India.
            </p>
            <a href="#contact" className="csr-cta">Become a Partner →</a>
          </div>

          <div className="csr-why">
            <p className="csr-why-label">Your Benefits</p>
            {BENEFITS.map(({ num, title, desc }, i) => (
              <BenefitPoint key={num} num={num} title={title} desc={desc} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
