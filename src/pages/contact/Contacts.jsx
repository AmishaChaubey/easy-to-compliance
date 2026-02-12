import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

        // *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --blue: #135192;
          --blue-mid: #1a6bb8;
          --blue-pale: #e8f0fa;
          --blue-faint: #f2f6fc;
          --text: #0d1f35;
          --muted: #6b7f96;
          --border: #dde6f0;
          --white: #ffffff;
        }

        /* ── PAGE SHELL ── */
        .shell { max-width: 1320px; margin: 0 auto; padding: 0 48px 100px; }

        /* ── TOP NAV BAR ── */
      

        /* ── HERO ── */
        .hero-section {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; padding: 80px 0 60px; align-items: end;
          border-bottom: 1px solid var(--border);
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .hero-section.in { opacity: 1; transform: translateY(0); }

        .hero-left { padding-right: 60px; border-right: 1px solid var(--border); }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 28px;
        }
        .eyebrow-line { width: 24px; height: 1.5px; background: var(--blue); }

        h1.display {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(56px, 5.5vw, 80px);
          font-weight: 700; line-height: 0.95;
          letter-spacing: -0.02em; color: var(--text);
        }
        h1.display em {
          font-style: italic; color: var(--blue);
        }

        .hero-right { padding-left: 60px; }

        .hero-desc {
          font-size: 16px; line-height: 1.8; color: var(--muted);
          margin-bottom: 36px; max-width: 360px;
        }

        .stats-row { display: flex; gap: 40px; }
        .stat-item { }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px; font-weight: 700; color: var(--blue);
          line-height: 1;
        }
        .stat-label {
          font-size: 11.5px; color: var(--muted);
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-top: 4px;
        }
        .stat-div { width: 1px; background: var(--border); }

        /* ── MAIN BODY ── */
        .body-grid {
          display: grid; grid-template-columns: 1fr 380px;
          gap: 64px; padding-top: 64px;
        }

        /* ── FORM SECTION ── */
        .form-section {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
        }
        .form-section.in { opacity: 1; transform: translateY(0); }

        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px; font-weight: 700; color: var(--text);
          margin-bottom: 6px;
        }
        .section-sub { font-size: 14px; color: var(--muted); margin-bottom: 40px; line-height: 1.6; }

        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .form-grid-1 { margin-bottom: 24px; }

        .field { display: flex; flex-direction: column; gap: 8px; }
        .field-lbl {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--blue);
        }
        .field-wrap { position: relative; }
        .field-wrap::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; background: var(--blue);
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
          border-radius: 2px;
        }
        .field-wrap.on::after { width: 100%; }

        .fi, .fs, .ft {
          width: 100%; padding: 13px 16px;
          background: var(--blue-faint);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px; color: var(--text);
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          appearance: none; -webkit-appearance: none;
        }
        .fi::placeholder, .ft::placeholder { color: #b0bfce; }
        .fi:focus, .fs:focus, .ft:focus {
          outline: none;
          border-color: var(--blue);
          background: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(19,81,146,0.08);
        }
        .ft { resize: none; min-height: 140px; line-height: 1.65; }
        .fs { cursor: pointer; color: var(--text); }

        .sel-wrap { position: relative; }
        .sel-arrow {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%); pointer-events: none;
          color: var(--blue);
        }

        .submit-wrap { margin-top: 32px; }
        .btn-send {
          width: 100%; padding: 16px 32px;
          background: var(--blue); color: #fff;
          border: none; border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 600; letter-spacing: 0.04em;
          cursor: pointer; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
        }
        .btn-send::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          transform: translateX(-100%); transition: transform 0.5s ease;
        }
        .btn-send:hover::after { transform: translateX(100%); }
        .btn-send:hover {
          background: var(--blue-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(19,81,146,0.25);
        }
        .btn-send.ok { background: #1a8c52; }
        .btn-send svg { width: 18px; height: 18px; stroke: currentColor; flex-shrink: 0; transition: transform 0.3s; }
        .btn-send:hover svg { transform: translateX(4px); }
        .privacy-txt { font-size: 12px; color: #a0b0c0; text-align: center; margin-top: 14px; line-height: 1.6; }
        .privacy-txt a { color: var(--blue); opacity: 0.7; text-decoration: underline; text-underline-offset: 2px; }

        /* ── SIDEBAR ── */
        .sidebar {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }
        .sidebar.in { opacity: 1; transform: translateY(0); }

        /* ── CONTACT ITEM ── */
        .contact-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          transition: padding-left 0.3s ease;
          cursor: default;
        }
        .contact-item:first-child { border-top: 1px solid var(--border); }
        .contact-item:hover { padding-left: 6px; }

        .ci-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border-radius: 10px;
          background: var(--blue-pale);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue);
          transition: background 0.3s;
        }
        .ci-icon svg { width: 17px; height: 17px; }
        .contact-item:hover .ci-icon { background: var(--blue); color: #fff; }

        .ci-lbl { font-size: 10.5px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 3px; }
        .ci-val { font-size: 14.5px; font-weight: 600; color: var(--text); }
        .ci-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }

        /* ── HOURS BLOCK ── */
        .hours-block {
          margin-top: 32px; padding: 28px;
          background: var(--blue-faint);
          border-radius: 16px;
          border: 1px solid var(--border);
        }
        .hb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 700; color: var(--text);
          margin-bottom: 18px;
        }
        .hb-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--border); }
        .hb-row:last-child { border-bottom: none; }
        .hb-day { font-size: 13px; color: var(--muted); }
        .hb-time-wrap { display: flex; align-items: center; gap: 7px; }
        .hb-dot { width: 5px; height: 5px; border-radius: 50%; background: #135192; }
        .hb-closed-dot { width: 5px; height: 5px; border-radius: 50%; background: #ccc; }
        .hb-time { font-size: 13px; font-weight: 600; color: var(--text); }
        .hb-closed { font-size: 13px; font-weight: 500; color: #bbb; }

        /* ── CTA BANNER ── */
        .cta-banner {
          margin-top: 24px;
          background: var(--blue);
          border-radius: 16px; padding: 28px 28px 32px;
          position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: ''; position: absolute;
          width: 180px; height: 180px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          top: -60px; right: -50px;
        }
        .cta-banner::after {
          content: ''; position: absolute;
          width: 100px; height: 100px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
          bottom: -30px; left: -20px;
        }
        .cta-hl {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 700; color: #fff;
          margin-bottom: 8px; line-height: 1.25; position: relative; z-index: 1;
        }
        .cta-desc { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 20px; position: relative; z-index: 1; }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 8px; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;
          color: #fff; letter-spacing: 0.03em;
          transition: background 0.25s, transform 0.2s;
          position: relative; z-index: 1;
        }
        .cta-btn:hover { background: rgba(255,255,255,0.25); transform: translateY(-1px); }
        .cta-btn svg { width: 14px; height: 14px; stroke: currentColor; }

        /* ── FOOTER ── */
        .footer {
          margin-top: 80px; padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          opacity: 0; transition: opacity 0.8s ease 0.55s;
        }
        .footer.in { opacity: 1; }
        .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 15px; color: var(--muted); }
        .footer-logo strong { color: var(--blue); font-weight: 700; }
        .footer-copy { font-size: 12px; color: #c0ccd8; }

        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr; }
          .hero-left { border-right: none; padding-right: 0; border-bottom: 1px solid var(--border); padding-bottom: 40px; }
          .hero-right { padding-left: 0; padding-top: 32px; }
          .body-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .shell { padding: 0 20px 60px; }
          .form-grid-2 { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          h1.display { font-size: 44px; }
        }
      `}</style>

      <div className="shell font-serif">

      

        {/* ── HERO ── */}
        <section className={`hero-section ${mounted ? 'in' : ''}`}>
          <div className="hero-left">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              Get in touch
            </div>
            <h1 className="display">
              Let's talk<br />about your<br /><em>taxes.</em>
            </h1>
          </div>
          <div className="hero-right">
            <p className="hero-desc">
              Expert guidance for your financial future. Our specialists are ready to help you navigate complex situations and unlock savings you didn't know existed.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-num">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-div" />
              <div className="stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">Years Active</div>
              </div>
              <div className="stat-div" />
              <div className="stat-item">
                <div className="stat-num">3k+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="body-grid">

          {/* FORM */}
          <div className={`form-section ${mounted ? 'in' : ''}`}>
            <div className="section-heading">Send a Message</div>
            <div className="section-sub">Fill out the form below and a specialist will follow up within one business day.</div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="field">
                  <label className="field-lbl">Full Name *</label>
                  <div className={`field-wrap ${focusedField === 'name' ? 'on' : ''}`}>
                    <input className="fi" type="text" name="name" value={formData.name}
                      onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                      required placeholder="Jane Doe" />
                  </div>
                </div>
                <div className="field">
                  <label className="field-lbl">Email Address *</label>
                  <div className={`field-wrap ${focusedField === 'email' ? 'on' : ''}`}>
                    <input className="fi" type="email" name="email" value={formData.email}
                      onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                      required placeholder="jane@example.com" />
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label className="field-lbl">Phone Number</label>
                  <div className={`field-wrap ${focusedField === 'phone' ? 'on' : ''}`}>
                    <input className="fi" type="tel" name="phone" value={formData.phone}
                      onChange={handleChange} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                      placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="field">
                  <label className="field-lbl">Topic *</label>
                  <div className={`field-wrap ${focusedField === 'subject' ? 'on' : ''}`}>
                    <div className="sel-wrap">
                      <select className="fs" name="subject" value={formData.subject}
                        onChange={handleChange} onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                        required>
                        <option value="">Select a topic</option>
                        <option value="tax-planning">Tax Planning</option>
                        <option value="business-tax">Business Taxation</option>
                        <option value="personal-tax">Personal Tax Filing</option>
                        <option value="audit-support">Audit Support</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                      <span className="sel-arrow">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-grid-1">
                <div className="field">
                  <label className="field-lbl">Message *</label>
                  <div className={`field-wrap ${focusedField === 'message' ? 'on' : ''}`}>
                    <textarea className="ft" name="message" value={formData.message}
                      onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                      required placeholder="Describe your tax situation or what you'd like help with…" />
                  </div>
                </div>
              </div>

              <div className="submit-wrap">
                <button type="submit" className={`btn-send ${submitted ? 'ok' : ''}`}>
                  {submitted ? (
                    <>
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </>
                  )}
                </button>
                <p className="privacy-txt">By submitting you agree to our <a href="#">Privacy Policy</a>. We never share your data.</p>
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className={`sidebar ${mounted ? 'in' : ''}`}>

            {[
              {
                id: 'phone', lbl: 'Call us', val: '+1 (555) 123-4567', sub: 'Mon–Fri, 9am–6pm EST',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              },
              {
                id: 'email', lbl: 'Email us', val: 'contact@taxexperts.com', sub: 'Response within 24h',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              },
              {
                id: 'loc', lbl: 'Visit us', val: '123 Finance Street', sub: 'New York, NY 10001',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
              },
            ].map(c => (
              <div className="contact-item" key={c.id}>
                <div className="ci-icon">{c.icon}</div>
                <div>
                  <div className="ci-lbl">{c.lbl}</div>
                  <div className="ci-val">{c.val}</div>
                  <div className="ci-sub">{c.sub}</div>
                </div>
              </div>
            ))}

            <div className="hours-block">
              <div className="hb-title">Office Hours</div>
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
                { day: 'Saturday', time: 'By appointment', open: true },
                { day: 'Sunday', time: 'Closed', open: false },
              ].map((h, i) => (
                <div className="hb-row" key={i}>
                  <span className="hb-day">{h.day}</span>
                  <div className="hb-time-wrap">
                    {h.open ? <div className="hb-dot" /> : <div className="hb-closed-dot" />}
                    {h.open
                      ? <span className="hb-time">{h.time}</span>
                      : <span className="hb-closed">{h.time}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

           

          </div>
        </div>

   

      </div>
    </div>
  );
}