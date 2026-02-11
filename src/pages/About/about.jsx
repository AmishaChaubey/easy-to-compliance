import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        
        * {
          font-family: 'Source Sans 3', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        
        .text-display {
          font-family: 'Playfair Display', serif;
        }
        
        .grain-overlay {
          position: relative;
        }
        
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }
        
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
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #135192, #2E86DE);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .value-card:hover::before {
          transform: scaleX(1);
        }
        
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
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#135192] via-[#1a6bb8] to-[#2E86DE]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="grain-overlay absolute inset-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl animate-fade-in-up opacity-0">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Est. 2014
            </div>
            <h1 className="text-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              Building innovative solutions that make a difference in the digital world
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="url(#paint0_linear)" fillOpacity="0.3"/>
            <path d="M0 120L60 115C120 110 240 100 360 95C480 90 600 90 720 92.5C840 95 960 100 1080 102.5C1200 105 1320 105 1380 105L1440 105V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear" x1="720" y1="60" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Who Are We - Improved Layout */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <div className="inline-block px-6 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-sm font-semibold mb-4 uppercase tracking-wide">
              Who We Are
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[#135192] mb-6">
              Transforming Ideas Into Reality
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up opacity-0 delay-200">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in 2014, we started as a small team of passionate developers and designers 
                with a vision to transform how businesses leverage technology. Over the years, we've 
                grown into a full-service digital solutions provider trusted by companies worldwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We specialize in creating innovative digital solutions including web development, 
                mobile applications, cloud infrastructure, and digital transformation consulting. 
                Our approach combines technical expertise with creative thinking to deliver products 
                that exceed expectations and drive sustainable business growth.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135192]/20 to-[#2E86DE]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#135192] text-display mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#135192] text-display mb-2">10+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#135192] text-display mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#135192] text-display mb-2">98%</div>
                    <div className="text-gray-600 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision - New Section */}
        <div className="mb-24 animate-fade-in opacity-0 delay-300">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#2E86DE]/10 rounded-full text-[#2E86DE] text-sm font-semibold mb-4 uppercase tracking-wide">
              Our Vision
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[#135192] mb-6">
              Looking Towards The Future
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="vision-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6 ">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#135192] mb-4 text-display">Innovation First</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To be at the forefront of technological innovation, constantly pushing boundaries 
                and exploring new possibilities in digital solutions.
              </p>
            </div>
            
            <div className="vision-card bg-white rounded-2xl p-8 shadow-lg delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6 " style={{animationDelay: '0.5s'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#135192] mb-4 text-display">Global Impact</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To create solutions that make a positive impact on businesses worldwide, 
                helping them thrive in an increasingly digital landscape.
              </p>
            </div>
            
            <div className="vision-card bg-white rounded-2xl p-8 shadow-lg delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6 " style={{animationDelay: '1s'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#135192] mb-4 text-display">Empowering People</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To empower individuals and teams with the tools and knowledge they need 
                to succeed in the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Mission - Improved Card */}
        <div className="mb-24 animate-fade-in-up opacity-0 delay-400">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#135192] to-[#0d3d6b] p-12 md:p-16">
            <div className="grain-overlay absolute inset-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-semibold mb-8 tracking-wide uppercase">
                Our Mission
              </div>
              <h2 className="text-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                We are dedicated to creating innovative technology solutions that empower businesses to achieve their full potential
              </h2>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Through our commitment to excellence, customer-centric approach, and continuous innovation, 
                we strive to be a trusted partner in digital transformation for organizations of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values - New Section */}
        <div className="mb-24 animate-fade-in opacity-0 delay-500">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-sm font-semibold mb-4 uppercase tracking-wide">
              Our Values
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[#135192] mb-6">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our core values guide everything we do and shape the way we work with our clients and each other
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="value-card bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We conduct business with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-100">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-200">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in the power of teamwork and work closely with clients to achieve shared goals.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-300">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We embrace creativity and continuously seek new ways to solve problems and improve our services.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-400">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Customer Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our clients' success is our success. We prioritize understanding and meeting their unique needs.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-500">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Continuous Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We invest in our team's growth and stay updated with the latest industry trends and technologies.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-600">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Accountability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We take ownership of our work and are committed to delivering on our promises with reliability.
              </p>
            </div>
            
            <div className="value-card bg-white rounded-xl p-6 shadow-md delay-700">
              <div className="w-14 h-14 bg-[#135192]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#135192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to sustainable practices that benefit our planet and future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Founder - Improved Overlapping Layout */}
        <div className="mb-24 animate-scale-in opacity-0 delay-600">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#2E86DE]/10 rounded-full text-[#2E86DE] text-sm font-semibold mb-4 uppercase tracking-wide">
              Leadership
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[#135192] mb-6">
              Meet Our Founder
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="md:grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 mb-8 md:mb-0 relative z-10 flex justify-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#135192]/20 to-[#2E86DE]/20 rounded-full blur-2xl"></div>
                  <div className="relative w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white text-6xl md:text-7xl font-bold text-display">SJ</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 md:-ml-16">
                <h3 className="text-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-[#135192] font-semibold text-lg md:text-xl mb-6">CEO & Founder</p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  With over 15 years of experience in technology and business strategy, Sarah founded 
                  our company with a vision to bridge the gap between innovative technology and practical 
                  business solutions. She holds an MBA from Stanford University and has been recognized 
                  as one of the top entrepreneurs in the tech industry.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-[#135192]/10 text-[#135192] rounded-full text-sm font-medium">Leadership</span>
                  <span className="px-4 py-2 bg-[#135192]/10 text-[#135192] rounded-full text-sm font-medium">Innovation</span>
                  <span className="px-4 py-2 bg-[#135192]/10 text-[#135192] rounded-full text-sm font-medium">Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Improved Grid */}
        <div className="mb-24 animate-fade-in opacity-0 delay-700">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#135192]/10 rounded-full text-[#135192] text-sm font-semibold mb-4 uppercase tracking-wide">
              Why Choose Us
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[#135192] mb-6">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#135192] to-[#2E86DE] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Expert Team</h3>
              <p className="text-gray-600 text-base leading-relaxed">Seasoned professionals with years of industry experience and proven expertise.</p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-base leading-relaxed">Round-the-clock assistance whenever you need it, ensuring peace of mind.</p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Custom Solutions</h3>
              <p className="text-gray-600 text-base leading-relaxed">Tailored strategies that fit your unique business needs and objectives.</p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#135192] to-[#2E86DE] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#135192] mb-3">Proven Results</h3>
              <p className="text-gray-600 text-base leading-relaxed">Track record of successful projects and consistently satisfied clients.</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Decorative Element */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#135192]/5"></div>
    </div>
  );
}