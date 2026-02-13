import React, { useEffect } from 'react';
import { ArrowRight, FileText, Calculator, Users, TrendingUp, Shield, Award, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Testimonial from './home/Testimonial';
import { Link } from 'react-router-dom';

const TaxWebsite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .hero-container {
          height: 350px;
        }
        
        .hero-title {
          font-size: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 0.875rem;
        }
        
        .hero-btn {
          font-size: 0.875rem;
          padding: 0.625rem 1.25rem;
        }
        
        .section-title {
          font-size: 1.5rem;
        }
        
        .section-subtitle {
          font-size: 0.875rem;
        }
        
        .stat-number {
          font-size: 1.5rem;
        }
        
        .stat-label {
          font-size: 0.75rem;
        }
        
        .service-card {
          padding: 1.25rem;
        }
        
        .service-icon {
          width: 3rem;
          height: 3rem;
        }
        
        .service-title {
          font-size: 1.125rem;
        }
        
        .service-desc {
          font-size: 0.75rem;
        }
        
        .list-item {
          font-size: 0.75rem;
        }
        
        .check-icon {
          width: 0.875rem;
          height: 0.875rem;
        }
        
        .grid-services {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .grid-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .cta-content {
          text-align: center;
        }
        
        .cta-title {
          font-size: 1.5rem;
        }
        
        .cta-description {
          font-size: 0.875rem;
        }
        
        .form-container {
          max-width: 100%;
        }
        
        /* Tablet Breakpoint (640px+) */
        @media (min-width: 640px) {
          .hero-container {
            height: 450px;
          }
          
          .hero-title {
            font-size: 1.875rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .hero-btn {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }
          
          .section-title {
            font-size: 1.875rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .stat-number {
            font-size: 1.875rem;
          }
          
          .stat-label {
            font-size: 0.875rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .service-icon {
            width: 3.5rem;
            height: 3.5rem;
          }
          
          .service-title {
            font-size: 1.25rem;
          }
          
          .service-desc {
            font-size: 0.875rem;
          }
          
          .list-item {
            font-size: 0.875rem;
          }
          
          .check-icon {
            width: 1rem;
            height: 1rem;
          }
          
          .grid-services {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .cta-title {
            font-size: 1.875rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
        }
        
        /* Desktop Breakpoint (768px+) */
        @media (min-width: 768px) {
          .hero-container {
            height: 550px;
          }
          
          .hero-title {
            font-size: 2.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
          }
          
          .section-title {
            font-size: 2.25rem;
          }
          
          .section-subtitle {
            font-size: 1.125rem;
          }
          
          .stat-number {
            font-size: 2.25rem;
          }
          
          .stat-label {
            font-size: 1rem;
          }
          
          .cta-title {
            font-size: 2.25rem;
          }
        }
        
        /* Large Desktop Breakpoint (1024px+) */
        @media (min-width: 1024px) {
          .hero-container {
            height: 600px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-btn {
            font-size: 1.125rem;
            padding: 1rem 2rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .section-subtitle {
            font-size: 1.125rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .stat-label {
            font-size: 1.125rem;
          }
          
          .service-card {
            padding: 2rem;
          }
          
          .service-icon {
            width: 4rem;
            height: 4rem;
          }
          
          .service-title {
            font-size: 1.5rem;
          }
          
          .service-desc {
            font-size: 1rem;
          }
          
          .list-item {
            font-size: 0.875rem;
          }
          
          .check-icon {
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .grid-services {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          
          .grid-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .cta-content {
            text-align: left;
          }
          
          .cta-title {
            font-size: 3rem;
          }
          
          .cta-description {
            font-size: 1.125rem;
          }
        }
        
        /* Extra Large Desktop (1280px+) */
        @media (min-width: 1280px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="relative w-full">
        <div className="hero-container relative">
          <img 
            src="/banner.png" 
            alt="Tax consulting hero" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="relative h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white max-w-2xl">
                <h1 className="hero-title font-bold mb-3 sm:mb-4 md:mb-6 leading-tight font-serif">
                  Expert Tax Solutions for Your Financial Success
                </h1>
                <p className="hero-subtitle mb-4 sm:mb-6 md:mb-8 text-gray-100 leading-relaxed">
                  Maximize your returns with professional tax planning and preparation services tailored to your needs.
                </p>

                <Link to="/contact">
                <button 
                  className="hero-btn inline-flex items-center text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl" 
                  style={{ backgroundColor: '#135192' }}
                >
                  Schedule Consultation 
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title font-bold text-black mb-3 sm:mb-4 md:mb-6 font-serif">
              Welcome to Easy To Compliance
            </h2>

            <p className="section-subtitle text-justify text-gray-700 mb-3 sm:mb-4 md:mb-6 leading-relaxed max-w-5xl mx-auto">
              With years of experience in tax and regulatory compliance, Easy to Compliance has helped thousands of individuals and businesses manage filings, documentation, and legal requirements with ease and confidence. Our team of experienced compliance professionals provides personalized solutions to ensure accurate filings, timely submissions, and complete adherence to all tax and regulatory requirements.

            </p>

          

            <div className="grid-stats max-w-5xl mx-auto">
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '5000+', label: 'Happy Clients' },
                { number: '98%', label: 'Success Rate' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-3 sm:p-4">
                  <div className="stat-number font-bold mb-1 sm:mb-2 font-serif" style={{ color: '#135192' }}>
                    {stat.number}
                  </div>
                  <div className="stat-label text-black font-semibold font-serif">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
              Our Specialized Services
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              Expert solutions for your business compliance and tax requirements
            </p>
          </div>
          
          <div className="grid-services">
            {/* Company Registration */}
            <div className="service-card group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
              <div className="service-icon rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="service-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
                Company Registration
              </h3>
              <p className="service-desc text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Complete assistance in company incorporation including Private Limited, LLP, OPC, and Partnership firms with end-to-end support.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                {['Name Approval & Reservation', 'Documentation & Filing', 'PAN & TAN Registration', 'Certificate of Incorporation', 'GST & other Registrations'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="check-icon mr-2 flex-shrink-0" style={{ color: '#135192' }} />
                    <span className="list-item text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
              <button className="w-full py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                Get Started
              </button>
              </Link>
            </div>

            {/* Income Tax Filing */}
            <div className="service-card group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
              <div className="service-icon rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                <Calculator className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="service-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
                Income Tax Filing & Consultation
              </h3>
              <p className="service-desc text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Professional tax filing services for individuals and businesses with expert consultation to minimize your tax liability legally.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                {['ITR-1 to ITR-7 Filing', 'Tax Planning & Advisory', 'TDS Return Filing', 'Tax Notice Handling', 'Refund Processing Support'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="check-icon mr-2 flex-shrink-0" style={{ color: '#135192' }} />
                    <span className="list-item text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
              <button className="w-full py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                File Now
              </button>
              </Link>
            </div>

            {/* GST Services */}
            <div className="service-card group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
              <div className="service-icon rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="service-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
                GST Services
              </h3>
              <p className="service-desc text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Comprehensive GST solutions including registration, filing, compliance, and advisory services for seamless business operations.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                {['GST Registration', 'Monthly/Quarterly Returns', 'GST Compliance Audit', 'Input Tax Credit Advisory', 'GST Notice & Appeal'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="check-icon mr-2 flex-shrink-0" style={{ color: '#135192' }} />
                    <span className="list-item text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
              <button className="w-full py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
              Our Services
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax solutions designed to meet your unique financial needs
            </p>
          </div>
          
          <div className="grid-services">
            {[
              { icon: FileText, title: 'Tax Preparation', desc: 'Professional preparation of individual and business tax returns with maximum deductions.' },
              { icon: Calculator, title: 'Tax Planning', desc: 'Strategic planning to minimize tax liability and optimize your financial position year-round.' },
              { icon: TrendingUp, title: 'Business Tax Services', desc: 'Comprehensive tax solutions for businesses of all sizes, from startups to corporations.' },
              { icon: Shield, title: 'IRS Representation', desc: 'Expert representation and advocacy in dealings with tax authorities and audits.' },
              { icon: Users, title: 'Estate Planning', desc: 'Strategic estate and trust planning to protect your assets for future generations.' },
              { icon: Award, title: 'Payroll Services', desc: 'Complete payroll management and compliance to keep your business running smoothly.' }
            ].map((service, index) => (
              <div key={index} className="bg-white service-card rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4" style={{ color: '#135192' }} />
                <h3 className="service-title font-bold text-black mb-1.5 sm:mb-2 md:mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="service-desc text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center service-desc font-semibold hover:underline transition-all" style={{ color: '#135192' }}>
                  Visit us <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="section-title font-bold text-black mb-3 sm:mb-4 md:mb-6 font-serif">
              About Easy To Compliance
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto" style={{ backgroundColor: '#135192' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7247407/pexels-photo-7247407.jpeg" 
                alt="Professional tax team" 
                className="rounded-2xl shadow-2xl w-full h-[250px] sm:h-[300px] md:h-[440px] lg:h-[460px] xl:h-[450px] object-cover object-center"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6 font-serif">
                Your Trusted Tax Partner Since 1999
              </h3>
              <p className="service-desc text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                Easy to Compliance helps individuals and businesses stay fully compliant with tax and regulatory requirements without stress. Our mission is to simplify complex compliance processes, ensure timely filings, and provide reliable support so our clients can focus on growing with confidence.
              </p>
              <p className="service-desc text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Our team of experienced compliance experts and tax professionals specializes in handling regulatory filings, tax compliance, and business documentation. We stay updated with the latest laws and regulations to ensure accurate, timely, and hassle-free compliance for our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {[
                  'CPA Certified',
                  'Tax Law Experts',
                  '100% Confidential',
                  '24/7 Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="check-icon mr-2 flex-shrink-0" style={{ color: '#135192' }} />
                    <span className="service-desc text-black font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: Award, title: 'Licensed & Certified Professionals', desc: 'All our team members are certified CPAs and tax experts with proven track records' },
              { icon: Users, title: 'Personalized Service', desc: 'Tailored solutions designed specifically for your unique financial situation' },
              { icon: Shield, title: 'Confidential & Secure', desc: 'Your data is protected with the highest security standards and encryption' },
              { icon: Clock, title: 'Year-Round Support', desc: 'Available whenever you need us, not just during the busy tax season' }
            ].map((item, index) => (
              <div key={index} className="flex items-start service-card bg-white border-2 border-gray-100 rounded-xl transition-all duration-300 hover:border-[#135192] hover:shadow-lg">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2.5 sm:mr-3 md:mr-4 flex-shrink-0" style={{ backgroundColor: '#135192' }}>
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="service-desc font-bold text-black mb-1 font-serif">
                    {item.title}
                  </h4>
                  <p className="list-item text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
              Why Choose Us
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              Discover what sets TaxExperts apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Award, title: 'Certified Experts', desc: 'All CPAs and tax professionals are fully licensed and certified' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Quick and efficient service without compromising quality' },
              { icon: Shield, title: 'Guaranteed Accuracy', desc: '100% accuracy guarantee on all tax filings and calculations' },
              { icon: Users, title: 'Personalized Approach', desc: 'Tailored solutions that fit your unique financial situation' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white service-card rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-2 sm:mb-3 md:mb-4" style={{ backgroundColor: '#135192' }}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="service-title font-bold text-black mb-1.5 sm:mb-2 md:mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="service-desc text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 text-white" style={{ backgroundColor: '#135192' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="cta-content space-y-2 sm:space-y-3 md:space-y-4 order-2 lg:order-1">
              <h2 className="cta-title font-semibold leading-snug font-serif">
                Maximize Your Tax Savings
              </h2>
              <p className="cta-description text-white/90 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Get expert tax advice and save more with personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 justify-center lg:justify-start">
                <Link to="/about">
                <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-[#135192] font-medium rounded-md transition-all duration-300 hover:bg-gray-100 text-sm sm:text-base">
                  About us
                </button>
                </Link>

                <Link to="/contact">
                <button className="px-4 sm:px-5 py-2 sm:py-2.5 border border-white text-white rounded-md transition-all duration-300 hover:bg-white hover:text-[#135192] text-sm sm:text-base">
                  Call Now
                </button>
                </Link>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="form-container w-full max-w-sm">
                <div className="bg-white/10 border border-white/20 rounded-xl p-5 sm:p-6 md:p-8 text-white shadow-lg" style={{ backdropFilter: 'blur(12px)' }}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 font-serif text-center lg:text-left">
                    Free Consultation
                  </h3>
                  <form className="space-y-3 sm:space-y-4 md:space-y-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 sm:py-2.5 md:py-3 text-sm font-medium rounded-md text-white transition-all duration-300 shadow-lg hover:opacity-90"
                      style={{ backgroundColor: '#135192' }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title font-bold text-black mb-2 sm:mb-3 md:mb-4 font-serif">
              Latest Tax Insights
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest articles on tax strategies and financial planning
            </p>
          </div>
          
          <div className="grid-services">
            {[
              { icon: FileText, title: '2024 Tax Deduction Guide', date: 'February 5, 2026', excerpt: 'Discover all the deductions you might be missing this tax season and learn how to maximize your savings with our comprehensive guide.', category: 'Tax Planning' },
              { icon: TrendingUp, title: 'Small Business Tax Tips', date: 'February 1, 2026', excerpt: 'Essential strategies for small business owners to reduce tax liability and improve cash flow throughout the year.', category: 'Business Tax' },
              { icon: Shield, title: 'Retirement Planning Strategies', date: 'January 28, 2026', excerpt: 'Maximize your retirement savings with these tax-efficient strategies that will secure your financial future.', category: 'Financial Planning' }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 group">
                <div className="service-card">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: '#135192' }}>
                    <post.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-xs sm:text-xs md:text-sm font-semibold mb-1.5 sm:mb-2 md:mb-3 inline-block px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full bg-gray-100" style={{ color: '#135192' }}>
                    {post.category}
                  </div>
                  <h3 className="service-title font-bold text-black mb-1.5 sm:mb-2 md:mb-3 transition-colors group-hover:text-[#135192] font-serif">
                    {post.title}
                  </h3>
                  <div className="list-item text-gray-500 mb-2 sm:mb-3 md:mb-4">
                    {post.date}
                  </div>
                  <p className="service-desc text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="/blog" className="inline-flex items-center service-desc font-semibold hover:underline transition-transform group-hover:translate-x-2" style={{ color: '#135192' }}>
                    Read More <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonial />
    </div>
  );
};

export default TaxWebsite;