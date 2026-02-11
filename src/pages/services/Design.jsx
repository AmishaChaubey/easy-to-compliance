// Design.jsx - Individual Service Detail Page
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from './data';

const Design = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  
  // Find service by slug
  const service = Object.values(servicesData).find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#135192] hover:underline font-semibold">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Full Width Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={service.heroImage} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#135192]/90 via-[#135192]/70 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl animate-fadeIn">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                {service.tagline}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-white text-[#135192] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                Get Started Today →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
                  About This Service
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {service.about.heading}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                  {service.about.content}
                </p>
                <div className="space-y-5">
                  {service.about.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#135192] to-[#2185d0] flex items-center justify-center text-white font-bold shadow-lg">
                        ✓
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-slideInRight">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#135192]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#2185d0]/10 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#135192] to-[#2185d0] rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform">
                  <h3 className="text-3xl font-bold mb-8">Key Benefits</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <span className="text-4xl">💼</span>
                      <div>
                        <p className="font-bold text-xl mb-1">Professional Excellence</p>
                        <p className="text-blue-100">Industry-certified experts at your service</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <span className="text-4xl">⚡</span>
                      <div>
                        <p className="font-bold text-xl mb-1">Quick Processing</p>
                        <p className="text-blue-100">Fast turnaround guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <span className="text-4xl">🛡️</span>
                      <div>
                        <p className="font-bold text-xl mb-1">100% Compliant</p>
                        <p className="text-blue-100">Zero penalties, complete peace of mind</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
                What We Offer
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our Features & Expertise
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-[#135192] hover:to-[#2185d0] transition-all duration-500 cursor-pointer border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
                How It Works
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our Process
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Simple and transparent process for a hassle-free experience
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#135192] via-[#1a6bb5] to-[#2185d0] transform -translate-x-1/2"></div>

              {service.process.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                      <div className="inline-block bg-gradient-to-r from-[#135192] to-[#2185d0] text-white font-bold text-lg px-6 py-3 rounded-full mb-5 shadow-lg">
                        Step {step.step}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#135192] to-[#2185d0] rounded-full items-center justify-center shadow-2xl z-10 border-4 border-white">
                    <span className="text-white text-3xl font-bold">{step.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
                Got Questions?
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-2xl text-gray-600">
                Find answers to common questions
              </p>
            </div>

            <div className="space-y-5">
              {service.faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#135192] transition-all shadow-md hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-xl text-gray-900 pr-6">
                      {faq.question}
                    </span>
                    <span className={`text-3xl text-[#135192] transform transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}>
                      +
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className="py-24 bg-gradient-to-br from-[#135192] via-[#1a6bb5] to-[#2185d0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {service.cta.heading}
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-blue-100 leading-relaxed">
              {service.cta.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button className="bg-white text-[#135192] px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl">
                {service.cta.buttonText} →
              </button>
              <button className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-[#135192] transition-all shadow-2xl">
                📞 Call: +91 9999999999
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-10 text-lg">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl">✓</span>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl">✓</span>
                <span>Expert Support 24/7</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl">✓</span>
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Design;