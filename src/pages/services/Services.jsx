// Services.jsx - Main Services Listing Page
import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from './data';

const Services = () => {
  const services = Object.values(servicesData);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#135192] via-[#1a6bb5] to-[#2185d0] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              Professional Tax & Compliance Solutions
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Expert Services for Your<br />Business Success
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Complete financial solutions for your business with 100% compliance guarantee
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-base">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-medium">Trusted by 500+ Clients</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-medium">100% Compliance Guarantee</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-medium">24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
              What We Offer
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Professional solutions provided by certified experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.heroImage} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#135192]/90 via-[#135192]/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 text-sm font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.about.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#135192] font-bold mt-1 flex-shrink-0">✓</span>
                        <span className="text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 text-[#135192] font-bold text-lg hover:gap-5 transition-all group/link"
                  >
                    <span>Learn More</span>
                    <span className="group-hover/link:translate-x-2 transition-transform text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block text-sm font-bold text-[#135192] tracking-wider uppercase mb-4">
                Why Choose Us
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why Easy to Compliance?
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our professional services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="text-7xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Team</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Qualified CAs and tax professionals with years of experience
                </p>
              </div>

              <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="text-7xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Turnaround</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fast and efficient service delivery guaranteed
                </p>
              </div>

              <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="text-7xl mb-6">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Secure</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Complete confidentiality of your financial information
                </p>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-[#135192] mb-2">500+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-[#135192] mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-[#135192] mb-2">100%</div>
                <div className="text-gray-600 font-medium">Compliance Rate</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-[#135192] mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-[#135192] via-[#1a6bb5] to-[#2185d0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Make Tax Compliance Easy!
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-blue-100 leading-relaxed">
              Connect with us today and get a free consultation
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-[#135192] px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl">
                Get Free Consultation →
              </button>
              <button className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-[#135192] transition-all shadow-2xl">
                📞 Call: +91 98765 43210
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Dedicated Account Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Money Back Guarantee</span>
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
      `}</style>
    </div>
  );
};

export default Services;