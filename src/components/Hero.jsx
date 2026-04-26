import { useState, useEffect, useRef } from 'react'

function useCounter(target, suffix, duration, active) {
  const [display, setDisplay] = useState('0' + suffix)

  useEffect(() => {
    if (!active) return
    let current = 0
    const step = Math.ceil(target / (duration / 30))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setDisplay(target.toLocaleString('en-IN') + suffix)
        clearInterval(timer)
      } else {
        setDisplay(current.toLocaleString('en-IN') + suffix)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [active, target, suffix, duration])

  return display
}

export default function Hero() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const trees    = useCounter(25000, '+', 2000, active)
  const children = useCounter(340,   '+', 1500, active)
  const women    = useCounter(180,   '+', 1500, active)
  const partners = useCounter(28,    '+', 1000, active)
  const paintings = useCounter(150,  '+', 1200, active)

  const scrollDown = () => {
    const target = document.getElementById('about')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="hero" aria-label="Hero section" ref={ref}>
      <div className="hero-bg-pattern" aria-hidden="true" />
      <div className="hero-line" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow" aria-hidden="true">
            <span>A Mission-Led NGO</span>
          </div>
          <h1 className="hero-title">
            Where Every<br />
            <em>Action Heals</em><br />
            the Planet &<br />
            Honors Heroes
          </h1>
          <p className="hero-sub">
            Climate action should create human impact too. We unite sustainability, art, and service — every contribution restores nature and strengthens lives.
          </p>
          <div className="hero-btns">
            <a href="#involve" className="btn-primary">Donate Now</a>
            <a href="#causes" className="btn-outline">Explore Impact</a>
          </div>
        </div>
        <div className="hero-right" aria-label="Impact statistics">
          <div className="hero-stat-card">
            <div className="num" aria-live="polite">{trees}</div>
            <div className="label">Trees planted across India through our restoration drives</div>
          </div>
          <div className="hero-stat-grid">
            <div className="hero-stat-sm">
              <div className="num" aria-live="polite">{children}</div>
              <div className="label">Children Supported</div>
            </div>
            <div className="hero-stat-sm">
              <div className="num" aria-live="polite">{women}</div>
              <div className="label">Women Empowered</div>
            </div>
            <div className="hero-stat-sm">
              <div className="num" aria-live="polite">{partners}</div>
              <div className="label">CSR Partners</div>
            </div>
            <div className="hero-stat-sm">
              <div className="num" aria-live="polite">{paintings}</div>
              <div className="label">Paintings Sold</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-label="Scroll down" onClick={scrollDown} style={{ cursor: 'pointer' }}>
        <span>Scroll</span>
        <div className="scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}
