import React, { useState, useEffect } from 'react';
import {
  ChevronDown, CheckCircle, Shield, FileText,
  TrendingUp, Users, Clock, Award, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CompliancePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-serif">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-slideIn  { animation: slideIn  0.6s ease-out forwards; opacity: 0; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .transition-smooth { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }

        /* ── Fluid hero type ── */
        .hero-title {
          font-size: clamp(2.25rem, 5vw, 6rem);
          line-height: 1.1;
        }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.375rem);
        }

        /* ── Section headings ── */
        .section-h2 {
          font-size: clamp(1.75rem, 5vw, 3.75rem);
          line-height: 1.15;
        }

        /* ── Hero buttons: stack on xs ── */
        @media (max-width: 479px) {
          .hero-btns { flex-direction: column; }
          .hero-btns button { width: 100%; text-align: center; }
        }

        /* ── Process connector: only on 4-col layout ── */
        .process-connector {
          display: none;
        }
        @media (min-width: 768px) {
          .process-connector { display: block; }
        }

        /* ── Stats number fluid ── */
        .stat-number {
          font-size: clamp(2rem, 5vw, 2.5rem);
        }

        /* ── Commitment card stats grid ── */
        .commitment-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
      `}</style>

      {/* ─── Hero ─── */}
  <section
  className="relative text-white flex items-center overflow-hidden"
  style={{
    backgroundImage:
      'url("https://i.pinimg.com/1200x/8d/2a/49/8d2a496c6d4c6df1ff93098a2c342656.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'clamp(420px, 65vh, 750px)',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
  py-14 sm:py-16 md:py-20">

    <div className="max-w-4xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 
      backdrop-blur-sm px-4 py-2 rounded-full mb-6 sm:mb-8 
      animate-fadeInUp">
        <Star className="w-4 h-4 fill-current flex-shrink-0" />
        <span className="text-xs sm:text-sm font-medium">
          Trusted by 500+ Businesses Nationwide
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
      font-bold mb-6 sm:mb-8 leading-tight animate-fadeInUp delay-100">
        Tax Compliance
        <span className="block mt-2 opacity-90">
          Made Simple
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-white/80 
      mb-10 leading-relaxed max-w-2xl 
      animate-fadeInUp delay-200">
        Navigate complex tax regulations with confidence. Our expert team ensures your
        business stays compliant, minimizing risks and maximizing efficiency.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 
      animate-fadeInUp delay-300">

        <Link to="/about">
          <button className="w-full sm:w-auto bg-white text-[#135192] 
          px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
          hover:shadow-xl transition-all duration-300 
          text-sm sm:text-base">
            Know More
          </button>
        </Link>

        <Link to="/contact">
          <button className="w-full sm:w-auto border-2 border-white/40 
          text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
          font-semibold hover:bg-white/10 
          transition-all duration-300 text-sm sm:text-base">
            Schedule Consultation
          </button>
        </Link>

      </div>

    </div>
  </div>
</section>


      {/* ─── Services ─── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-[#135192] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              Our Services
            </span>
            <h2 className="section-h2 font-bold text-gray-900 mb-4 sm:mb-6">
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-serif">
              Tailored tax compliance services designed to meet your unique business needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Corporate Tax Compliance",    description: "Complete corporate tax filing, quarterly reporting, and annual compliance management with meticulous attention to detail." },
              { icon: <Shield    className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Regulatory Advisory",         description: "Stay ahead of changing regulations with expert guidance and proactive compliance strategies tailored to your industry." },
              { icon: <Users     className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Payroll Tax Services",        description: "Accurate payroll tax calculations, withholdings, and timely government remittances for peace of mind." },
              { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />, title: "GST/VAT Compliance",         description: "End-to-end GST/VAT filing, reconciliation, and input tax credit optimization to maximize your returns." },
              { icon: <Award     className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Tax Audit Support",           description: "Professional representation and comprehensive documentation support during tax audits and assessments." },
              { icon: <Clock     className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Deadline Management",         description: "Never miss a filing deadline with our automated tracking system and proactive reminder notifications." },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-2xl transition-smooth border border-gray-100 hover:border-[#135192] animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#135192]/10 flex items-center justify-center text-[#135192] mb-4 sm:mb-6 group-hover:bg-[#135192] group-hover:text-white transition-smooth">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-[#135192] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              How It Works
            </span>
            <h2 className="section-h2 font-bold text-gray-900 mb-4 sm:mb-6">Our Seamless Process</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed to ensure complete tax compliance excellence
            </p>
          </div>

          {/* Mobile: vertical stack | md+: 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
            {[
              { step: "01", title: "Assessment",     description: "We analyze your business structure, operations, and compliance requirements to create a foundation." },
              { step: "02", title: "Planning",       description: "Develop a customized compliance roadmap with clear timelines, milestones, and actionable steps." },
              { step: "03", title: "Implementation", description: "Execute compliance activities with precision, documenting everything thoroughly for complete transparency." },
              { step: "04", title: "Monitoring",     description: "Continuous oversight and proactive updates to maintain ongoing compliance excellence and peace of mind." },
            ].map((p, i) => (
              <div key={i} className="relative animate-fadeInUp" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="mb-4 sm:mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-[#135192]/20">{p.step}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{p.description}</p>

                {/* Connector line — only on 4-col layout */}
                {i < 3 && (
                  <div className="process-connector absolute top-8 -right-3 w-6 h-0.5 bg-[#135192]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-[#135192] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              Why Choose Us
            </span>
            <h2 className="section-h2 font-bold text-gray-900 mb-4 sm:mb-6">
              Your Trusted Compliance Partner
            </h2>
          </div>

          {/* Stack on mobile, side-by-side on lg+ */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-start lg:items-center gap-10">

            {/* Left: reasons */}
            <div className="space-y-6 sm:space-y-8 w-full">
              {[
                { title: "Expert Team",        description: "Certified tax professionals with decades of combined experience in compliance management across diverse industries." },
                { title: "Technology-Driven",  description: "Advanced automation tools and cutting-edge software for accurate, efficient, and secure compliance processes." },
                { title: "Proactive Approach", description: "We anticipate regulatory changes and keep you ahead of compliance requirements before they become issues." },
                { title: "Cost-Effective",     description: "Competitive pricing with transparent fees, no hidden charges, and exceptional value for your investment." },
              ].map((r, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 animate-slideIn" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#135192] flex items-center justify-center text-white">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{r.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: commitment card */}
            <div className="bg-[#135192] rounded-2xl p-7 sm:p-10 lg:p-12 text-white animate-fadeInUp delay-400 w-full">
              <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Commitment to Excellence</h3>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {[
                  "100% accuracy in all compliance filings",
                  "Dedicated account manager for personalized service",
                  "24/7 access to your compliance dashboard",
                  "Regular compliance health checks and reports",
                  "Penalty protection guarantee on our services",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/20 commitment-stats">
                <div>
                  <div className="stat-number font-bold mb-1">500+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Satisfied Clients</div>
                </div>
                <div>
                  <div className="stat-number font-bold mb-1">$2M+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Penalties Avoided</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-[#135192] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              The Benefits
            </span>
            <h2 className="section-h2 font-bold text-gray-900 mb-4 sm:mb-6">Why Compliance Matters</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the transformative value of maintaining proper tax compliance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: <Shield     className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Risk Mitigation",       description: "Avoid penalties, interest charges, and legal complications with proper compliance management and proactive monitoring.", stats: "99.9% penalty-free" },
              { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Business Growth",       description: "Focus on core operations and strategic initiatives while we handle complex compliance requirements efficiently.", stats: "40% time saved" },
              { icon: <Award      className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Reputation Management", description: "Build trust with stakeholders through transparent, accurate reporting and exemplary compliance standards.", stats: "100% satisfaction" },
              { icon: <FileText   className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Financial Clarity",     description: "Better financial planning with organized tax records, actionable insights, and comprehensive reporting systems.", stats: "Real-time reporting" },
              { icon: <Users      className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Stakeholder Confidence", description: "Investors and partners value compliant, well-managed businesses with strong governance frameworks.", stats: "Enhanced credibility" },
              { icon: <Clock      className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Peace of Mind",          description: "Sleep better knowing your compliance is in expert hands with continuous monitoring and support.", stats: "24/7 monitoring" },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-smooth border border-gray-100 animate-fadeInUp flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#135192] flex items-center justify-center text-white mb-4 sm:mb-6">
                  {b.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 flex-1">{b.description}</p>
                <div className="pt-4 sm:pt-6 border-t border-gray-200 mt-auto">
                  <div className="text-[#135192] font-semibold text-xs sm:text-sm">{b.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CompliancePage;