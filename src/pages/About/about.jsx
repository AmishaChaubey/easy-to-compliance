import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap');

        * {
          font-family: 'Source Sans 3', sans-serif;
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in    { animation: fadeIn 1s ease-out forwards; }
        .animate-scale-in   { animation: scaleIn 0.8s ease-out forwards; }
        .animate-float      { animation: float 3s ease-in-out infinite; }

        .delay-100  { animation-delay: 0.1s; }
        .delay-200  { animation-delay: 0.2s; }
        .delay-300  { animation-delay: 0.3s; }
        .delay-400  { animation-delay: 0.4s; }
        .delay-500  { animation-delay: 0.5s; }
        .delay-600  { animation-delay: 0.6s; }
        .delay-700  { animation-delay: 0.7s; }

        .text-display { font-family: 'Playfair Display', serif; }

        .grain-overlay { position: relative; }
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        /* ── Card hover effects ── */
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(19, 81, 146, 0.15);
        }

        .value-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(to right, #135192, #2E86DE);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .value-card:hover::before { transform: scaleX(1); }
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(19, 81, 146, 0.12);
        }

        .vision-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }
        .vision-card:hover {
          border-color: #2E86DE;
          transform: scale(1.02);
          box-shadow: 0 24px 48px rgba(19, 81, 146, 0.18);
        }

        /* ── Responsive overrides ── */

        /* Hero section */
        .hero-section {
          padding: 5rem 1.25rem 6rem;
        }
        @media (min-width: 640px) {
          .hero-section { padding: 6rem 2rem 7rem; }
        }
        @media (min-width: 1024px) {
          .hero-section { padding: 8rem 3rem 9rem; }
        }

        .hero-title {
          font-size: clamp(2.25rem, 8vw, 4.5rem);
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.375rem);
        }

        /* Section padding */
        .section-padding {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        @media (min-width: 640px) {
          .section-padding { padding-left: 2rem; padding-right: 2rem; }
        }
        @media (min-width: 1024px) {
          .section-padding { padding-left: 3rem; padding-right: 3rem; }
        }

        /* Section heading */
        .section-heading {
          font-size: clamp(1.75rem, 5vw, 3.25rem);
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .stat-number {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
        }

        /* Who-we-are grid */
        .who-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .who-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
        }

        /* Vision cards */
        .vision-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .vision-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .vision-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Values grid */
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 480px) {
          .values-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .values-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Why-us grid */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 480px) {
          .why-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Founder layout */
        .founder-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* Founder image */
        .founder-image-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: -2.5rem;
          position: relative;
          z-index: 10;
        }

        .founder-image {
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid white;
          box-shadow: 0 8px 32px rgba(19, 81, 146, 0.25);
          background: linear-gradient(135deg, #135192, #2E86DE);
        }
        @media (min-width: 480px) {
          .founder-image { width: 12rem; height: 12rem; }
        }
        @media (min-width: 768px) {
          .founder-image { width: 14rem; height: 14rem; }
        }
        @media (min-width: 1024px) {
          .founder-image { width: 16rem; height: 16rem; }
        }

        .founder-card {
          width: 100%;
          padding: 5rem 1.5rem 1.75rem;
          text-align: center;
        }
        @media (min-width: 480px) {
          .founder-card { padding: 5rem 2rem 2rem; }
        }
        @media (min-width: 768px) {
          .founder-card { padding: 5rem 2.5rem 2.5rem; }
        }
        @media (min-width: 1024px) {
          .founder-card { padding: 5.5rem 3rem 2.5rem; }
        }

        .founder-name {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
        }
        .founder-title {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
        }

        /* Mission card */
        .mission-card {
          padding: 2.5rem 1.25rem;
        }
        @media (min-width: 640px) {
          .mission-card { padding: 3rem 2.5rem; }
        }
        @media (min-width: 1024px) {
          .mission-card { padding: 4rem 5rem; }
        }

        .mission-heading {
          font-size: clamp(1.35rem, 3.5vw, 2.25rem);
        }

        /* Tags wrap nicely on small screens */
        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        /* Service list styling */
        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-list li {
          padding: 0.25rem 0;
          color: #4B5563;
          font-size: 0.875rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          text-align: left;
        }
        .service-list li::before {
          content: '✔';
          color: #135192;
          font-weight: bold;
          flex-shrink: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 1.25rem;
        }
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ backgroundImage: 'url("/banner-img/about.png")' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="grain-overlay absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto hero-section section-padding">
          <div className="max-w-4xl animate-fade-in-up opacity-0">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-5">
              Est. 2005
            </div>
            <h1 className="text-display hero-title font-bold text-white mb-5 leading-tight">
              About Us
            </h1>
            <p className="hero-subtitle text-white/90 font-light max-w-2xl leading-relaxed">
              Trusted tax advisors helping individuals and businesses navigate complex tax laws with confidence
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto section-padding py-12 md:py-16">

        {/* Who We Are */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10 animate-fade-in opacity-0">
            <div className="inline-block px-5 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-xs font-semibold mb-4 uppercase tracking-wide">
              Who We Are
            </div>
            <h2 className="text-display section-heading font-bold text-[#135192] mb-5">
              Your Trusted Taxation Partner
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>

          <div className="who-grid animate-fade-in-up opacity-0 delay-200">
            <div className="space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Founded by Adv. Rajnesh Jha, Easy To Compliance is a nationally recognized GST and Income Tax litigation practice providing end-to-end representation and advisory services across India.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We specialize in Income Tax Scrutiny & Assessments, GST Notice Replies (ASMT-10, DRC-01, DRC-07, SCN), corporate tax, Faceless Assessment Representation, Appeals before CIT(A), High-value GST & Income Tax Litigation and Strategic Tax Compliance Structuring. We deliver legally strong, technically accurate, and result-driven solutions for businesses, professionals, startups, MSMEs, and corporates. Through our fully digital working model, clients from anywhere in India can access seamless, secure, and professionally managed tax representation without physical visits.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135192]/20 to-[#2E86DE]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                <div className="stats-grid">
                  {[
                    { value: '1000+', label: 'Returns Filed'         },
                    { value: '20+',   label: 'Years of Expertise'    },
                    { value: '80+',   label: 'Tax Professionals'     },
                    { value: '99%',   label: 'Compliance Accuracy'   },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center py-2">
                      <div className="stat-number font-bold text-[#135192] text-display mb-1">{value}</div>
                      <div className="text-gray-600 text-xs md:text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="mb-16 md:mb-24 animate-fade-in opacity-0 delay-300">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#2E86DE]/10 rounded-full text-[#2E86DE] text-xs font-semibold mb-4 uppercase tracking-wide">
              Our Vision
            </div>
            <h2 className="text-display section-heading font-bold text-[#135192] mb-5">
              Shaping the Future of Tax Advisory
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>

          <div className="vision-grid">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                title: 'Proactive Tax Planning',
                body: 'To move beyond reactive compliance and be at the forefront of strategic tax planning — anticipating law changes before they impact our clients.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Nationwide Reach',
                body: 'To serve taxpayers across every state and sector, making expert tax advisory accessible to businesses and individuals regardless of their size or location.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: 'Empowering Taxpayers',
                body: 'To educate and empower every client with the financial knowledge they need to make informed decisions and build long-term tax efficiency.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="vision-card bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#135192] mb-3 text-display">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-16 md:mb-24 animate-fade-in-up opacity-0 delay-400">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#135192] to-[#0d3d6b] mission-card">
            <div className="grain-overlay absolute inset-0"></div>
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-semibold mb-6 tracking-wide uppercase">
                Our Mission
              </div>
              <h2 className="text-display mission-heading font-bold text-white mb-5 leading-tight">
                We are committed to delivering accurate, compliant, and strategic tax solutions that protect wealth and maximize savings for every client we serve
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
                Through our dedication to regulatory excellence, transparent client communication, and
                continuous professional development, we strive to be the most trusted name in taxation
                for individuals, startups, SMEs, and large corporations alike.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16 md:mb-24 animate-fade-in opacity-0 delay-500">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-xs font-semibold mb-4 uppercase tracking-wide">
              Our Values
            </div>
            <h2 className="text-display section-heading font-bold text-[#135192] mb-5">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Our core values guide every tax engagement and shape the way we serve our clients and each other
            </p>
          </div>

          <div className="values-grid">
            {[
              { title: 'Integrity',           icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, body: 'We uphold the highest ethical standards in every filing, advisory, and audit representation we undertake.' },
              { title: 'Accuracy',            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, body: 'Zero-error compliance is our benchmark. Every return we prepare undergoes rigorous multi-level review.' },
              { title: 'Collaboration',       icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, body: 'We work hand-in-hand with clients, accountants, and legal teams to ensure a seamless tax experience.' },
              { title: 'Confidentiality',     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />, body: 'Client financial data is safeguarded with bank-grade security protocols and strict data privacy practices.' },
              { title: 'Client First',        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, body: "Every tax strategy we craft is tailored to the client's unique financial situation and long-term goals." },
              { title: 'Continuous Learning', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, body: 'Our team stays current with every amendment to the Income Tax Act, GST rules, and international tax treaties.' },
              { title: 'Accountability',      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />, body: 'We take full ownership of every engagement and stand by our advice, even through audits and disputes.' },
              { title: 'Transparency',        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, body: 'No hidden fees, no jargon. We explain every tax position clearly so clients always understand their obligations.' },
            ].map(({ title, icon, body }) => (
              <div key={title} className="value-card bg-white rounded-xl p-5 md:p-6 shadow-md">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#135192] mb-2">{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="mb-16 md:mb-24 animate-scale-in opacity-0 delay-600">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#2E86DE]/10 rounded-full text-[#2E86DE] text-xs font-semibold mb-4 uppercase tracking-wide">
              Leadership
            </div>
            <h2 className="text-display section-heading font-bold text-[#135192] mb-5">
              Meet Our Founder
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="founder-wrap">

              {/* ── Founder Photo (above card) ── */}
              <div className="founder-image-wrap">
                <img
                  src="/foundder.png"
                  alt="Adv. Rajnesh Jha – Founder, Easy To Compliance"
                  className="founder-image"
                  onError={(e) => {
                    /* Fallback: show initials avatar if image fails to load */
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
              
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl founder-card shadow-xl border border-gray-100 w-full">
                <h3 className="text-display founder-name font-bold text-gray-900 mb-1">Adv. Rajnesh Jha</h3>
                <p className="text-[#135192] font-semibold founder-title mb-1">Founder – Easy To Compliance</p>
                <p className="text-gray-500 text-sm font-medium mb-4">Leading GST & Income Tax Litigation Expert in India</p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  Adv. Rajnesh Jha is a nationally recognized GST consultant, Income Tax litigation specialist, and tax compliance strategist, providing end-to-end representation and advisory services to clients across India. With deep expertise in handling GST notices, Income Tax scrutiny, faceless assessments, tax appeals, and complex litigation matters, he delivers legally strong, technically accurate, and result-driven solutions for businesses, professionals, startups, and corporates.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                  Through a fully digital and process-driven system, clients from anywhere in India can access seamless, secure, and time-bound professional services.
                </p>

                {/* Core Services */}
                <div className="services-grid mb-5">
                  <div className="bg-[#135192]/5 rounded-xl p-4">
                    <h4 className="text-[#135192] font-bold text-sm md:text-base mb-3">GST Consultancy & Litigation</h4>
                    <ul className="service-list">
                      <li>GST registration (Regular | Composition | Amendment | Cancellation)</li>
                      <li>GST return filing & compliance management</li>
                      <li>GST notice reply – ASMT-10, DRC-01, DRC-07, SCN</li>
                      <li>GST assessment & adjudication handling</li>
                      <li>GST appeal filing & representation</li>
                      <li>GST refund & reconciliation cases</li>
                      <li>GST advisory for startups & growing businesses</li>
                    </ul>
                  </div>
                  <div className="bg-[#135192]/5 rounded-xl p-4">
                    <h4 className="text-[#135192] font-bold text-sm md:text-base mb-3">Income Tax Consultancy & Litigation</h4>
                    <ul className="service-list">
                      <li>Income Tax return filing for individuals & businesses</li>
                      <li>Income Tax scrutiny & assessment cases</li>
                      <li>Faceless assessment reply & representation</li>
                      <li>Income Tax notice handling (all sections)</li>
                      <li>Appeal before CIT(A)</li>
                      <li>Tax planning & compliance structuring</li>
                    </ul>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-[#135192]/10 to-[#2E86DE]/10 rounded-xl p-4 mb-5">
                  <h4 className="text-[#135192] font-bold text-sm md:text-base mb-2">Book Your Consultation – Anywhere in India</h4>
                  <div className="flex flex-col gap-1 text-sm text-gray-700">
                    <span>📞 +91-9968285325</span>
                    <span>📧 advrajneshjha@gmail.com</span>
                  </div>
                </div>

                <div className="tag-list">
                  {['GST Litigation', 'Income Tax', 'Faceless Assessment', 'Tax Appeals', 'Notices & Compliance'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-[#135192]/10 text-[#135192] rounded-full text-xs md:text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 md:mb-24 animate-fade-in opacity-0 delay-700">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-xs font-semibold mb-4 uppercase tracking-wide">
              Why Choose Us
            </div>
            <h2 className="text-display section-heading font-bold text-[#135192] mb-5">
              What Sets Us Apart
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              We combine deep tax expertise, cutting-edge compliance tools, and personalised service to deliver outstanding outcomes for every client
            </p>
          </div>

          <div className="why-grid">
            {[
              { title: 'Certified Tax Experts',   body: 'Our team of CAs, CPAs, and tax lawyers brings decades of specialised experience across all tax domains.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
              { title: 'Year-Round Support',       body: "Tax questions don't wait for filing season. Our advisors are available year-round for guidance and peace of mind.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'Tailored Tax Strategies',  body: 'Every client receives a customised tax plan aligned with their income structure, industry, and financial objectives.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /> },
              { title: 'Proven Compliance Record',  body: 'Thousands of error-free filings and a 99% first-time compliance rate demonstrate our commitment to accuracy.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> },
            ].map(({ title, body, icon }) => (
              <div key={title} className="card-hover bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#135192] mb-2 md:mb-3">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Decoration */}
      <div className="h-12 md:h-20 bg-gradient-to-b from-transparent to-[#135192]/5"></div>
    </div>
  );
}