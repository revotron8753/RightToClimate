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

const PROGRAMS = [
  { title: 'Plantation Drives',       desc: 'Employee engagement + verifiable carbon offset + survival tracking reports' },
  { title: 'Sponsored Scholarships',  desc: 'Name a scholarship fund — full education lifecycle reporting provided' },
  { title: 'Art Exhibitions',         desc: 'Co-branded exhibitions raising brand visibility and accountable social impact' },
  { title: 'Sustainability Campaigns', desc: 'Joint campaigns with content, events, and comprehensive impact records' },
  { title: 'Joint Impact Reports',    desc: 'Annual co-branded CSR reports with fully audited outcomes and beneficiary data' },
]

const WHY = [
  { num: '01', title: 'ESG-Aligned Execution',   desc: 'Every program maps directly to ESG parameters with reportable outcomes your board can present with confidence.' },
  { num: '02', title: 'High-Trust Leadership',   desc: 'Founded by military officers and industry leaders — the highest standard of accountability and operational discipline.' },
  { num: '03', title: 'Emotional Storytelling',  desc: 'Real beneficiaries, photographed journeys, and compelling narratives that connect your brand to genuine human impact.' },
  { num: '04', title: 'Employee Engagement',     desc: 'Structured volunteer programs, plantation drives, and exhibition events that meaningfully involve your team.' },
  { num: '05', title: 'Clear Documentation',     desc: 'Quarterly updates, before/after evidence, audited financials, and co-branded annual reports — everything compliance needs.' },
]

function CSRPoint({ num, title, desc, delay }) {
  const ref = useRef(null)
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
        <span className="section-badge">For Corporates</span>
        <h2 className="section-title" id="csr-title" style={{ marginTop: '1rem' }}>
          CSR & Corporate<br /><em>Partnerships</em>
        </h2>
        <div className="csr-grid">
          <div>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300 }}>
              Partner with us to fulfill your ESG commitments with programs that deliver real, accountable, emotionally resonant impact your stakeholders will be proud of.
            </p>
            <div className="csr-programs">
              {PROGRAMS.map(({ title, desc }) => (
                <div className="csr-prog" key={title}>
                  <div className="csr-prog-dot" aria-hidden="true" />
                  <div><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <a href="#contact" className="csr-cta">Become a CSR Partner →</a>
          </div>

          <div className="csr-why">
            <p className="csr-why-label">Why Partner With Us</p>
            {WHY.map(({ num, title, desc }, i) => (
              <CSRPoint key={num} num={num} title={title} desc={desc} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
