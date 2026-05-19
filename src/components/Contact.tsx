import { useState } from 'react'

interface FormState {
  name: string
  organization: string
  email: string
  phone: string
  purpose: string
  message: string
}

interface FeedbackState {
  msg: string
  type: 'success' | 'error'
}

const EMPTY_FORM: FormState = { name: '', organization: '', email: '', phone: '', purpose: '', message: '' }

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [form, setForm]             = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback]     = useState<FeedbackState | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback({ msg: 'Please fill in all required fields.', type: 'error' })
      return
    }
    if (!isValidEmail(form.email)) {
      setFeedback({ msg: 'Please enter a valid email address.', type: 'error' })
      return
    }
    setSubmitting(true)
    setFeedback(null)
    setTimeout(() => {
      setFeedback({ msg: 'Thank you! We will respond within 48 hours.', type: 'success' })
      setForm(EMPTY_FORM)
      setSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-info">
          <span className="section-badge">Reach Out</span>
          <h2 className="section-title" id="contact-title" style={{ marginTop: '1rem', fontSize: '42px' }}>
            Let's Build<br /><em>Impact Together</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.9, marginTop: '1rem', fontWeight: 300 }}>
            For CSR partnerships, sponsorships, strategic collaborations, and sustainability initiatives — reach out to be part of India's first Green Hydrogen NGO and a movement that combines climate responsibility with national service.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="ci-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="ci-text"><h4>Location</h4><p>India (National Operations)</p></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="ci-text"><h4>Email</h4><p>contact@righttoclimate.org</p></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="ci-text"><h4>Phone</h4><p>Available on inquiry</p></div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter / X" title="Twitter / X">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                <input type="text" id="name" name="name" placeholder="Your full name" required autoComplete="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" name="organization" placeholder="Company / NGO" autoComplete="organization" value={form.organization} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required autoComplete="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" autoComplete="tel" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Purpose of Inquiry</label>
              <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange}>
                <option value="">Select purpose...</option>
                <option value="donation">Donation</option>
                <option value="csr">CSR Partnership</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="green-hydrogen">Green Hydrogen Initiative</option>
                <option value="art">Art Exhibition / Collaboration</option>
                <option value="volunteer">Volunteer</option>
                <option value="event">Host an Event / Plantation Drive</option>
                <option value="media">Media / Press</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
              <textarea id="message" name="message" placeholder="Tell us about your interest or how you'd like to partner with us..." required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
            <p className="form-note">We respond within 48 hours. Your data is never shared.</p>
          </form>
          {feedback && (
            <div
              style={{
                marginTop: '1rem',
                padding: '12px 16px',
                borderRadius: '4px',
                fontSize: '13px',
                textAlign: 'center',
                background: feedback.type === 'success' ? 'rgba(26, 77, 46, 0.1)' : 'rgba(180, 40, 40, 0.08)',
                border: feedback.type === 'success' ? '1px solid rgba(26, 77, 46, 0.3)' : '1px solid rgba(180, 40, 40, 0.25)',
                color: feedback.type === 'success' ? 'var(--green)' : '#B42828',
              }}
            >
              {feedback.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
