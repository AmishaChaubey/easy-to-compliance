import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { q: 'How do I schedule a consultation?', a: 'You can book directly through our website using the "Book Now" button, call our office line, or send us a message using the contact form above. We typically confirm appointments within 2 business hours.' },
    { q: 'What documents should I bring to my first meeting?', a: 'For your initial consultation bring your last two years of tax returns, recent pay stubs or income statements, any IRS or state notices received, and a list of major life changes (marriage, home purchase, new business) from the past year.' },
    { q: 'Do you offer remote or virtual consultations?', a: 'Yes — all of our services are available via secure video call, phone, or in-person at our New York office. You can choose your preferred format when booking.' },
    { q: 'What industries do you specialise in?', a: 'We work with individuals, freelancers, small-to-medium businesses, real estate investors, and corporations across tech, finance, healthcare, retail, and professional services.' },
    { q: 'How are your fees structured?', a: 'We offer fixed-fee packages for standard returns and hourly rates for complex advisory work. All fees are discussed and agreed upon before any work begins — no surprises.' },
    { q: 'What happens if I receive an audit notice?', a: 'Contact us immediately. We provide full audit representation, including preparing documentation, communicating with tax authorities on your behalf, and attending any required hearings.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <style>{`
        :root {
          --blue: #135192;
          --blue-mid: #1a6bb8;
          --blue-pale: #e8f0fa;
          --blue-faint: #f2f6fc;
          --text: #0d1f35;
          --muted: #6b7f96;
          --border: #dde6f0;
        }
       

        /* ── HERO BANNER ── */
        .hero-wrap {
          min-height: clamp(200px, 35vh, 500px);
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center;
          padding: clamp(20px, 5vw, 40px) 0;
        }
        .hero-title {
          font-size: clamp(1.5rem, 5vw, 3rem);
          margin-bottom: clamp(8px, 2vw, 12px);
        }
        .hero-sub {
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          line-height: 1.6;
        }

        /* ── HERO SECTION ── */
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: clamp(32px, 5vw, 80px) 0 clamp(24px, 4vw, 60px);
          align-items: end;
          border-bottom: 1px solid var(--border);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .8s ease .1s, transform .8s ease .1s;
        }
        .hero-section.in { opacity: 1; transform: translateY(0); }
        
        .hero-left {
          padding-right: clamp(20px, 4vw, 60px);
          border-right: 1px solid var(--border);
        }
        .hero-right {
          padding-left: clamp(20px, 4vw, 60px);
        }

        /* Mobile: Stack hero columns */
        @media(max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: clamp(24px, 5vw, 40px) 0;
          }
          .hero-left {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border);
            padding-bottom: clamp(20px, 4vw, 32px);
            margin-bottom: clamp(20px, 4vw, 32px);
          }
          .hero-right {
            padding-left: 0;
          }
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(10px, 2vw, 11px);
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: clamp(12px, 2.5vw, 28px);
        }
        .eyebrow-line { width: 24px; height: 1.5px; background: var(--blue); }

        h1.display {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 7vw, 80px);
          font-weight: 700;
          line-height: .95;
          letter-spacing: -.02em;
          color: var(--text);
          margin: 0;
        }
        h1.display em { font-style: italic; color: var(--blue); }

        .hero-desc {
          font-size: clamp(13px, 2vw, 16px);
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: clamp(20px, 3vw, 36px);
          max-width: 100%;
        }

        .stats-row {
          display: flex;
          gap: clamp(16px, 3vw, 40px);
          flex-wrap: wrap;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 5vw, 44px);
          font-weight: 700;
          color: var(--blue);
          line-height: 1;
        }
        .stat-label {
          font-size: clamp(10px, 2vw, 11.5px);
          color: var(--muted);
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .stat-div {
          width: 1px;
          background: var(--border);
          align-self: stretch;
        }

        /* Hide dividers on very small screens */
        @media(max-width: 480px) {
          .stat-div { display: none; }
          .stats-row { gap: clamp(20px, 5vw, 32px); }
        }

        /* ── BODY GRID ── */
        .body-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: clamp(24px, 4vw, 64px);
          padding-top: clamp(24px, 4vw, 64px);
        }

        @media(max-width: 1024px) {
          .body-grid {
            grid-template-columns: 1fr;
            gap: clamp(32px, 5vw, 48px);
          }
        }

        /* ── FORM ── */
        .form-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease .25s, transform .8s ease .25s;
        }
        .form-section.in { opacity: 1; transform: translateY(0); }

        .section-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(20px, 4vw, 32px);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 6px;
        }
        .section-sub {
          font-size: clamp(13px, 2vw, 14px);
          color: var(--muted);
          margin-bottom: clamp(20px, 3vw, 40px);
          line-height: 1.6;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(14px, 2.5vw, 24px);
          margin-bottom: clamp(14px, 2.5vw, 24px);
        }

        /* Stack form fields on mobile */
        @media(max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: clamp(14px, 3vw, 20px);
          }
        }

        .form-grid-1 {
          margin-bottom: clamp(14px, 2.5vw, 24px);
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-lbl {
          font-size: clamp(10px, 2vw, 11px);
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--blue);
        }
        .field-wrap {
          position: relative;
        }
        .field-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--blue);
          transition: width .35s cubic-bezier(.4, 0, .2, 1);
          border-radius: 2px;
        }
        .field-wrap.on::after { width: 100%; }

        .fi, .fs, .ft {
          width: 100%;
          padding: clamp(10px, 2vw, 13px) clamp(12px, 2.5vw, 16px);
          background: var(--blue-faint);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: inherit;
          font-size: clamp(13px, 2vw, 14px);
          color: var(--text);
          transition: border-color .25s, background .25s, transform .2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .fi::placeholder, .ft::placeholder { color: #b0bfce; }
        .fi:focus, .fs:focus, .ft:focus {
          outline: none;
          border-color: var(--blue);
          background: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(19, 81, 146, .08);
        }

        .ft {
          resize: none;
          min-height: clamp(110px, 20vw, 130px);
          line-height: 1.65;
        }
        .fs {
          cursor: pointer;
          color: var(--text);
        }

        .sel-wrap { position: relative; }
        .sel-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--blue);
        }

        .submit-wrap {
          margin-top: clamp(16px, 3vw, 32px);
        }
        .btn-send {
          width: 100%;
          padding: clamp(12px, 2vw, 16px) 32px;
          background: var(--blue);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: inherit;
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 600;
          letter-spacing: .04em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform .3s, box-shadow .3s, background .3s;
        }
        .btn-send::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, .12) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform .5s ease;
        }
        .btn-send:hover::after { transform: translateX(100%); }
        .btn-send:hover {
          background: var(--blue-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(19, 81, 146, .25);
        }
        .btn-send.ok { background: #1a8c52; }
        .btn-send svg {
          width: clamp(16px, 3vw, 18px);
          height: clamp(16px, 3vw, 18px);
          stroke: currentColor;
          flex-shrink: 0;
          transition: transform .3s;
        }
        .btn-send:hover svg { transform: translateX(4px); }

        .privacy-txt {
          font-size: clamp(11px, 2vw, 12px);
          color: #a0b0c0;
          text-align: center;
          margin-top: 14px;
          line-height: 1.6;
          padding: 0 10px;
        }
        .privacy-txt a {
          color: var(--blue);
          opacity: .7;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease .4s, transform .8s ease .4s;
        }
        .sidebar.in { opacity: 1; transform: translateY(0); }

        .contact-list {
          display: flex;
          flex-direction: column;
        }

        /* Tablet: 3 columns */
        @media(max-width: 1024px) and (min-width: 641px) {
          .contact-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .contact-item {
            flex-direction: column !important;
            gap: 10px !important;
            padding: 16px !important;
            border: 1px solid var(--border) !important;
            border-radius: 12px !important;
            background: var(--blue-faint);
          }
          .contact-item:first-child { border-top: 1px solid var(--border) !important; }
          .contact-item:hover { padding-left: 16px !important; }
        }

        /* Mobile: Stack vertically */
        @media(max-width: 640px) {
          .contact-list {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .contact-item {
            flex-direction: row !important;
            padding: 16px 0 !important;
            border-bottom: 1px solid var(--border) !important;
            border-radius: 0 !important;
            background: transparent !important;
          }
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          transition: padding-left .3s ease;
          cursor: default;
        }
        .contact-item:first-child { border-top: 1px solid var(--border); }
        .contact-item:hover { padding-left: 6px; }

        .ci-icon {
          width: clamp(36px, 8vw, 40px);
          height: clamp(36px, 8vw, 40px);
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--blue-pale);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          transition: background .3s;
        }
        .ci-icon svg {
          width: clamp(15px, 3vw, 17px);
          height: clamp(15px, 3vw, 17px);
        }
        .contact-item:hover .ci-icon {
          background: var(--blue);
          color: #fff;
        }

        .ci-lbl {
          font-size: clamp(10px, 2vw, 10.5px);
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 3px;
        }
        .ci-val {
          font-size: clamp(13px, 2.5vw, 14px);
          font-weight: 600;
          color: var(--text);
          word-break: break-word;
        }
        .ci-sub {
          font-size: clamp(11px, 2vw, 12px);
          color: var(--muted);
          margin-top: 2px;
        }

        /* ── HOURS BLOCK ── */
        .hours-block {
          margin-top: clamp(16px, 3vw, 32px);
          padding: clamp(16px, 3vw, 28px);
          background: var(--blue-faint);
          border-radius: 16px;
          border: 1px solid var(--border);
        }
        .hb-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 3vw, 20px);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 18px;
        }

        .hours-inner {
          display: flex;
          flex-direction: column;
        }

        /* Tablet: 2 columns for hours */
        @media(max-width: 1024px) and (min-width: 480px) {
          .hours-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 24px;
          }
          .hours-inner .hb-row:nth-child(2) { border-bottom: none; }
        }

        .hb-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 0;
          border-bottom: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 8px;
        }
        .hb-row:last-child { border-bottom: none; }

        .hb-day {
          font-size: clamp(12px, 2vw, 13px);
          color: var(--muted);
        }
        .hb-time-wrap {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .hb-dot, .hb-closed-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .hb-dot { background: #135192; }
        .hb-closed-dot { background: #ccc; }
        .hb-time {
          font-size: clamp(12px, 2vw, 13px);
          font-weight: 600;
          color: var(--text);
        }
        .hb-closed {
          font-size: clamp(12px, 2vw, 13px);
          font-weight: 500;
          color: #bbb;
        }

        /* ── MAP + FAQ SECTION ── */
        .map-faq-section {
          margin-top: clamp(40px, 7vw, 100px);
          padding-top: clamp(32px, 6vw, 80px);
          border-top: 1px solid var(--border);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease .2s, transform .8s ease .2s;
        }
        .map-faq-section.in { opacity: 1; transform: translateY(0); }

        .mf-header {
          text-align: center;
          margin-bottom: clamp(24px, 4vw, 56px);
        }
        .mf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(10px, 2vw, 11px);
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 14px;
        }
        .mf-eyebrow-line { width: 24px; height: 1.5px; background: var(--blue); }
        .mf-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 5vw, 52px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
        }
        .mf-title em { font-style: italic; color: var(--blue); }
        .mf-sub {
          font-size: clamp(13px, 2vw, 15px);
          color: var(--muted);
          margin-top: 12px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
          padding: 0 16px;
        }

        .mf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 60px);
          align-items: start;
        }

        /* Stack map and FAQ on tablets and mobile */
        @media(max-width: 860px) {
          .mf-grid {
            grid-template-columns: 1fr;
            gap: clamp(32px, 6vw, 48px);
          }
        }

        .col-label {
          font-size: clamp(10px, 2vw, 10.5px);
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .col-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* ── MAP ── */
        .map-frame {
          width: 100%;
          height: clamp(240px, 40vw, 400px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 8px 32px rgba(19, 81, 146, .09);
        }
        .map-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .map-address-card {
          margin-top: 14px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: clamp(12px, 2.5vw, 14px) clamp(14px, 3vw, 18px);
          background: var(--blue-faint);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .mac-icon {
          width: clamp(32px, 7vw, 36px);
          height: clamp(32px, 7vw, 36px);
          flex-shrink: 0;
          border-radius: 9px;
          background: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .mac-icon svg {
          width: clamp(13px, 3vw, 15px);
          height: clamp(13px, 3vw, 15px);
        }
        .mac-name {
          font-size: clamp(12px, 2.5vw, 13px);
          font-weight: 700;
          color: var(--text);
        }
        .mac-addr {
          font-size: clamp(11px, 2vw, 12px);
          color: var(--muted);
          margin-top: 2px;
          line-height: 1.5;
        }
        .mac-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: clamp(11px, 2vw, 12px);
          font-weight: 600;
          color: var(--blue);
          margin-top: 7px;
          text-decoration: none;
          transition: gap .2s;
        }
        .mac-link:hover { gap: 8px; }
        .mac-link svg {
          width: clamp(10px, 2vw, 11px);
          height: clamp(10px, 2vw, 11px);
          stroke: currentColor;
        }

        /* ── FAQ ── */
        .faq-list {
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          border-bottom: 1px solid var(--border);
        }
        .faq-item:first-child { border-top: 1px solid var(--border); }

        .faq-q {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 3vw, 16px);
          padding: clamp(12px, 2vw, 18px) 0;
          text-align: left;
          font-family: inherit;
          font-size: clamp(13px, 2vw, 14.5px);
          font-weight: 600;
          color: var(--text);
          transition: color .2s;
        }
        .faq-q:hover { color: var(--blue); }
        .faq-q.open { color: var(--blue); }

        .faq-icon {
          flex-shrink: 0;
          width: clamp(24px, 5vw, 26px);
          height: clamp(24px, 5vw, 26px);
          border-radius: 50%;
          background: var(--blue-faint);
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          transition: background .25s, transform .3s, border-color .25s;
        }
        .faq-q.open .faq-icon {
          background: var(--blue);
          color: #fff;
          border-color: var(--blue);
          transform: rotate(45deg);
        }
        .faq-icon svg {
          width: clamp(12px, 2.5vw, 13px);
          height: clamp(12px, 2.5vw, 13px);
          stroke: currentColor;
          stroke-width: 2.4;
          fill: none;
        }

        .faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height .4s cubic-bezier(.4, 0, .2, 1), padding .3s ease;
        }
        .faq-body.open {
          max-height: 600px;
          padding-bottom: clamp(12px, 2vw, 18px);
        }
        .faq-body p {
          font-size: clamp(12px, 2vw, 14px);
          line-height: 1.8;
          color: var(--muted);
        }

        /* ── RESPONSIVE UTILITIES ── */
       
        /* Ensure consistent padding on all containers */
        .max-w-7xl {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
        }

        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .sm\\:px-6 { padding-left: 1rem; padding-right: 1rem; }
        .lg\\:px-8 { padding-left: 1rem; padding-right: 1rem; }

        @media (min-width: 640px) {
          .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        }

        @media (min-width: 1024px) {
          .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
        }

        .font-serif { font-family: Georgia, serif; }
        .text-white { color: white; }
        .font-bold { font-weight: 700; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .text-blue-100 { color: #dbeafe; }
        .max-w-2xl { max-width: 42rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }

        @media (min-width: 640px) {
          .sm\\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        }

        .w-full { width: 100%; }
        .mx-auto { margin-left: auto; margin-right: auto; }

      
        /* Touch-friendly tap targets on mobile */
        @media (max-width: 768px) {
          .btn-send,
          .faq-q,
          .contact-item {
            -webkit-tap-highlight-color: rgba(19, 81, 146, 0.1);
          }
        }
      `}</style>

      <div className="shell font-serif">
        <div
          className="text-white hero-wrap h-[300px] sm:h-[300px] md:h-[300px]"
          style={{
            backgroundImage: 'url("/banner-img/contact.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="hero-title font-bold mb-3">Contact us</h1>
            <p className="hero-sub text-blue-100 max-w-2xl">
Get in touch for expert tax support.            </p>
          </div>
        </div>

        {/* ── HERO ── */}
        <section className={`hero-section ${mounted ? 'in' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
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
              Expert guidance for your financial future. Our specialists are ready to help you navigate
              complex situations and unlock savings you didn't know existed.
            </p>
            <div className="stats-row">
              <div>
                <div className="stat-num">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-div" />
              <div>
                <div className="stat-num">15+</div>
                <div className="stat-label">Years Active</div>
              </div>
              <div className="stat-div" />
              <div>
                <div className="stat-num">3k+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="body-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FORM */}
          <div className={`form-section ${mounted ? 'in' : ''}`}>
            <div className="section-heading">Send a Message</div>
            <div className="section-sub">
              Fill out the form below and a specialist will follow up within one business day.
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', ph: 'Jane Doe', required: true },
                  { label: 'Email Address *', name: 'email', type: 'email', ph: 'jane@example.com', required: true },
                ].map(f => (
                  <div className="field" key={f.name}>
                    <label className="field-lbl">{f.label}</label>
                    <div className={`field-wrap ${focusedField === f.name ? 'on' : ''}`}>
                      <input
                        className="fi"
                        type={f.type}
                        name={f.name}
                        value={formData[f.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(f.name)}
                        onBlur={() => setFocusedField(null)}
                        required={f.required}
                        placeholder={f.ph}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-grid-2">
                <div className="field">
                  <label className="field-lbl">Phone Number</label>
                  <div className={`field-wrap ${focusedField === 'phone' ? 'on' : ''}`}>
                    <input
                      className="fi"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="field-lbl">Topic *</label>
                  <div className={`field-wrap ${focusedField === 'subject' ? 'on' : ''}`}>
                    <div className="sel-wrap">
                      <select
                        className="fs"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                      >
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
                    <textarea
                      className="ft"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Describe your tax situation or what you'd like help with…"
                    />
                  </div>
                </div>
              </div>
              <div className="submit-wrap">
                <button type="submit" className={`btn-send ${submitted ? 'ok' : ''}`}>
                  {submitted ? (
                    <>
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="privacy-txt">
                  By submitting you agree to our <a href="#">Privacy Policy</a>. We never share your data.
                </p>
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className={`sidebar ${mounted ? 'in' : ''}`}>
            <div className="contact-list">
              {[
                {
                  id: 'phone',
                  lbl: 'Call us',
                  val: '+1 (555) 123-4567',
                  sub: 'Mon–Fri, 9am–6pm EST',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )
                },
                {
                  id: 'email',
                  lbl: 'Email us',
                  val: 'contact@taxexperts.com',
                  sub: 'Response within 24h',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  id: 'loc',
                  lbl: 'Visit us',
                  val: '123 Finance Street',
                  sub: 'New York, NY 10001',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  )
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
            </div>

            <div className="hours-block">
              <div className="hb-title">Office Hours</div>
              <div className="hours-inner">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
                  { day: 'Saturday', time: 'By appointment', open: true },
                  { day: 'Sunday', time: 'Closed', open: false },
                ].map((h, i) => (
                  <div className="hb-row" key={i}>
                    <span className="hb-day">{h.day}</span>
                    <div className="hb-time-wrap">
                      {h.open ? <div className="hb-dot" /> : <div className="hb-closed-dot" />}
                      {h.open ? <span className="hb-time">{h.time}</span> : <span className="hb-closed">{h.time}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
             MAP + FAQ — TWO-COLUMN GRID
        ══════════════════════════════ */}
        <div className={`map-faq-section ${mounted ? 'in' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10`}>
          <div className="mf-header">
            <div className="mf-eyebrow">
              <div className="mf-eyebrow-line" />
              Find us &amp; get answers
            </div>
            <h2 className="mf-title">
              Our Location &amp; <em>FAQs</em>
            </h2>
            <p className="mf-sub">
              Visit us in person or browse the most common questions our clients ask before reaching out.
            </p>
          </div>

          <div className="mf-grid">
            {/* MAP */}
            <div>
              <div className="col-label">Our Office</div>

              <div className="map-frame">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="map-address-card">
                <div className="mac-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="mac-name">Tax Experts HQ</div>
                  <div className="mac-addr">
                    123 Finance Street, Suite 400<br />New York, NY 10001, USA
                  </div>
                  <a className="mac-link" href="https://maps.google.com/?q=Empire+State+Building,+New+York" target="_blank" rel="noreferrer">
                    Get Directions
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="col-label">Frequently Asked</div>

              <div className="faq-list">
                {faqs.map((f, i) => (
                  <div className="faq-item" key={i}>
                    <button
                      className={`faq-q ${openFaq === i ? 'open' : ''}`}
                      onClick={() => toggleFaq(i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{f.q}</span>
                      <span className="faq-icon">
                        <svg viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    <div className={`faq-body ${openFaq === i ? 'open' : ''}`}>
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}