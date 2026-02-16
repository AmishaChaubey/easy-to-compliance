import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronUp, Calendar, FileText,
  AlertCircle, CheckCircle, Clock, DollarSign,
  List, Menu, X
} from 'lucide-react';

import { Link } from 'react-router-dom';

const TaxCompliancePage = ({
  heroData,
  bannerData,
  tableOfContents,
  services,
  dueDates,
  documents,
  penalties,
  filingSteps,
  faqs
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);   // mobile TOC drawer

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close mobile TOC on outside click
  const tocRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (tocRef.current && !tocRef.current.contains(e.target)) {
        setTocOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setTocOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      <style>{`
        /* ── Responsive table scroll ── */
        .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }

        /* ── Hero fluid type ── */
        .hero-title   { font-size: clamp(1.75rem, 5vw, 3.25rem); line-height: 1.15; }
        .hero-sub     { font-size: clamp(0.95rem, 2.5vw, 1.2rem); }

        /* ── Sidebar / TOC ── */
        @media (max-width: 1023px) {
          .sidebar-desktop { display: none !important; }
        }

        /* ── Mobile TOC drawer ── */
        .toc-drawer {
          position: fixed;
          top: 0; left: 0;
          width: 80%; max-width: 280px;
          height: 100vh;
          background: #fff;
          z-index: 50;
          box-shadow: 4px 0 24px rgba(0,0,0,.15);
          transform: translateX(-100%);
          transition: transform .3s ease;
          padding: 1.5rem;
          overflow-y: auto;
        }
        .toc-drawer.open { transform: translateX(0); }
        .toc-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,.4);
          z-index: 40;
        }
        .toc-overlay.open { display: block; }

        /* ── Hero buttons stack on small ── */
        @media (max-width: 479px) {
          .hero-btns { flex-direction: column; }
          .hero-btns button { width: 100%; }
        }

        /* ── Step connector line hide on mobile ── */
        @media (max-width: 479px) {
          .step-number { width: 2.25rem; height: 2.25rem; font-size: 0.9rem; }
        }

        /* ── Section heading fluid ── */
        .section-h2 { font-size: clamp(1.4rem, 3.5vw, 1.875rem); }

        /* ── Banner text wraps gracefully ── */
        @media (max-width: 479px) {
          .banner-inner { flex-direction: column; gap: .5rem; }
        }

        /* ── CTA section ── */
        @media (max-width: 479px) {
          .cta-btn { width: 100%; }
        }

        /* ── Penalty table min widths to keep readable ── */
        .penalty-table { min-width: 480px; }
        .due-table     { min-width: 520px; }
      `}</style>

      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="text-white"
    style={{
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url("${heroData?.backgroundImage}")
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'clamp(320px, 55vw, 520px)',
  display: 'flex',
  alignItems: 'center'
}}

      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="hero-title font-bold mb-4">{heroData?.title}</h1>
            <p className="hero-sub text-blue-100 mb-6 max-w-xl">
              {heroData?.description}
            </p>
            <div className="hero-btns flex flex-wrap gap-3 sm:gap-4">
            <Link to="/contact">
              <button className="bg-white text-[#135192] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-sm sm:text-base">
                {heroData?.primaryButtonText}
              </button>
              </Link>

              <Link to="/contact">
              <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition text-sm sm:text-base">
                {heroData?.secondaryButtonText}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Banner ─── */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="banner-inner flex items-start sm:items-center gap-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" size={22} />
            <p className="text-amber-900 text-sm sm:text-base leading-snug">
              <strong>{bannerData?.title}</strong>{' '}{bannerData?.message}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mobile TOC toggle ─── */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-2.5 flex items-center gap-3 shadow-sm">
        <button
          onClick={() => setTocOpen(true)}
          className="flex items-center gap-2 text-[#135192] font-semibold text-sm"
          aria-label="Open table of contents"
        >
          <Menu size={20} />
          <span>Table of Contents</span>
        </button>
      </div>

      {/* ─── Mobile TOC overlay ─── */}
      <div className={`toc-overlay ${tocOpen ? 'open' : ''}`} onClick={() => setTocOpen(false)} />

      {/* ─── Mobile TOC drawer ─── */}
      <div ref={tocRef} className={`toc-drawer ${tocOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-[#135192]">Table of Contents</h3>
          <button onClick={() => setTocOpen(false)} aria-label="Close">
            <X size={22} className="text-gray-500" />
          </button>
        </div>
        <nav className="space-y-1.5">
          {(tableOfContents || []).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 transition text-sm ${
                  activeSection === item.id
                    ? 'bg-[#135192] text-white'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ─── Main layout ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8">

          {/* Desktop sticky sidebar */}
          <aside className="sidebar-desktop w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-6 bg-blue-50 rounded-lg p-5 border border-blue-100">
              <h3 className="text-base font-bold text-[#135192] mb-4">Table of Contents</h3>
              <nav className="space-y-1.5">
                {(tableOfContents || []).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                        activeSection === item.id
                          ? 'bg-[#135192] text-white'
                          : 'text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      <Icon size={15} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">

            {/* ── Services ── */}
            <section id="services" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <CheckCircle size={28} className="flex-shrink-0" />
                Services Covered
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {(services || []).map((service, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:shadow-lg transition">
                    <h3 className="text-base sm:text-xl font-bold text-[#135192] mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">{service.description}</p>
                    <ul className="space-y-1.5">
                      {(service.features || []).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#135192] rounded-full mt-1.5 flex-shrink-0"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Due Dates ── */}
            <section id="due-dates" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <Calendar size={28} className="flex-shrink-0" />
                Important Due Dates
              </h2>
              <div className="bg-blue-50 rounded-lg border border-blue-100 table-scroll">
                <table className="due-table w-full">
                  <thead className="bg-[#135192] text-white">
                    <tr>
                      {['Period', 'Due Date', 'Type', 'Status'].map((h) => (
                        <th key={h} className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(dueDates || []).map((item, i) => (
                      <tr key={i} className="border-t border-blue-200">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base whitespace-nowrap">{item.period}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base whitespace-nowrap">{item.date}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">{item.type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${
                            item.status === 'critical'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            <Clock size={13} />
                            {item.status === 'critical' ? 'Critical' : 'Upcoming'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Documents ── */}
            <section id="documents" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <FileText size={28} className="flex-shrink-0" />
                Documents Required
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {(documents || []).map((doc, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-[#135192] mb-3 sm:mb-4">{doc.category}</h3>
                    <ul className="space-y-2">
                      {(doc.items || []).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                          <CheckCircle size={17} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Penalties ── */}
            <section id="penalties" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <AlertCircle size={28} className="flex-shrink-0" />
                Penalties &amp; Late Fees
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg table-scroll">
                <table className="penalty-table w-full">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      {['Violation', 'Penalty Amount', 'Additional Information'].map((h) => (
                        <th key={h} className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(penalties || []).map((p, i) => (
                      <tr key={i} className="border-t border-red-200">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-800 text-sm sm:text-base">{p.violation}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <span className="inline-flex items-center gap-1 text-red-700 font-bold text-sm sm:text-base whitespace-nowrap">
                            <DollarSign size={15} />
                            {p.penalty}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{p.additionalInfo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Filing Process ── */}
            <section id="process" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <List size={28} className="flex-shrink-0" />
                Filing Process
              </h2>
              <div className="space-y-4">
                {(filingSteps || []).map((step, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-start">
                    <div className="step-number flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#135192] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-100">
                      <h3 className="text-base sm:text-lg font-bold text-[#135192] mb-1.5 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQs ── */}
            <section id="faq" className="mb-12 sm:mb-16">
              <h2 className="section-h2 font-bold text-[#135192] mb-5 sm:mb-6 flex items-center gap-2.5">
                <ChevronDown size={28} className="flex-shrink-0" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {(faqs || []).map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-blue-50 hover:bg-blue-100 transition flex items-center justify-between gap-3"
                    >
                      <span className="font-semibold text-[#135192] text-sm sm:text-base text-left">{faq.question}</span>
                      {openFaq === i
                        ? <ChevronUp className="text-[#135192] flex-shrink-0" size={20} />
                        : <ChevronDown className="text-[#135192] flex-shrink-0" size={20} />
                      }
                    </button>
                    {openFaq === i && (
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-xl p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need Help with Your Tax Compliance?</h2>
              <p className="mb-5 sm:mb-6 text-blue-100 text-sm sm:text-base max-w-md mx-auto">
                Our expert team is ready to assist you with all your tax-related needs.
              </p>
              <button className="cta-btn bg-white text-[#135192] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-sm sm:text-base">
                Schedule a Consultation
              </button>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default TaxCompliancePage;