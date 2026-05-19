export default function TrustStrip() {
  return (
    <div className="trust-strip" role="complementary" aria-label="Credentials and certifications">
      <div className="trust-strip-inner">
        <div className="trust-item">
          <div className="trust-icon trust-icon--green" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          </div>
          <div className="trust-text">
            12C & 80G Eligible
            <span>Tax-exempt donations</span>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon trust-icon--gold" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <div className="trust-text">
            Military-Founded Trust
            <span>Discipline-driven execution</span>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon trust-icon--navy" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          </div>
          <div className="trust-text">
            Audited Reports
            <span>Annual transparency guaranteed</span>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon trust-icon--green" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          </div>
          <div className="trust-text">
            ESG Aligned
            <span>Corporate partnership ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}
