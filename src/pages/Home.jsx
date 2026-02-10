import React from 'react';
import { ArrowRight, FileText, Calculator, Users, TrendingUp, Shield, Award, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Testimonial from './home/Testimonial';

const TaxWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section - Full Width */}
      <section id="home" className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <img 
          src="/banner.png" 
          alt="Tax consulting hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-serif">
              Expert Tax Solutions for Your Financial Success
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100">
              Maximize your returns with professional tax planning and preparation services tailored to your needs.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90 flex items-center text-base sm:text-lg shadow-lg" style={{ backgroundColor: '#135192' }}>
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
    <section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 font-serif">
        Welcome to Easy To Compliance
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6">
        With years of experience in tax and regulatory compliance, Easy to Compliance has helped thousands of individuals and businesses manage filings, documentation, and legal requirements with ease and confidence.
      </p>

      <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
        Our team of experienced compliance professionals provides personalized solutions to ensure accurate filings, timely submissions, and complete adherence to all tax and regulatory requirements.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 font-serif" style={{ color: '#135192' }}>25+</div>
          <div className="text-black font-semibold text-sm sm:text-base md:text-lg font-serif">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 font-serif" style={{ color: '#135192' }}>5000+</div>
          <div className="text-black font-semibold text-sm sm:text-base md:text-lg font-serif">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 font-serif" style={{ color: '#135192' }}>98%</div>
          <div className="text-black font-semibold text-sm sm:text-base md:text-lg font-serif">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 font-serif" style={{ color: '#135192' }}>24/7</div>
          <div className="text-black font-semibold text-sm sm:text-base md:text-lg font-serif">Support Available</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Specialized Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 font-serif">
              Our Specialized Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Expert solutions for your business compliance and tax requirements
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Company Registration */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                  <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-serif">Company Registration</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Complete assistance in company incorporation including Private Limited, LLP, OPC, and Partnership firms with end-to-end support.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {['Name Approval & Reservation', 'Documentation & Filing', 'PAN & TAN Registration', 'Certificate of Incorporation', 'GST & other Registrations'].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" style={{ color: '#135192' }} />
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                  Get Started
                </button>
              </div>
            </div>

            {/* Income Tax Filing */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                  <Calculator className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-serif">Income Tax Filing & Consultation</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Professional tax filing services for individuals and businesses with expert consultation to minimize your tax liability legally.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {['ITR-1 to ITR-7 Filing', 'Tax Planning & Advisory', 'TDS Return Filing', 'Tax Notice Handling', 'Refund Processing Support'].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" style={{ color: '#135192' }} />
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                  File Now
                </button>
              </div>
            </div>

            {/* GST Services */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md" style={{ backgroundColor: '#135192' }}>
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-serif">GST Services</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Comprehensive GST solutions including registration, filing, compliance, and advisory services for seamless business operations.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {['GST Registration', 'Monthly/Quarterly Returns', 'GST Compliance Audit', 'Input Tax Credit Advisory', 'GST Notice & Appeal'].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" style={{ color: '#135192' }} />
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: '#135192' }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 font-serif">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax solutions designed to meet your unique financial needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: FileText, title: 'Tax Preparation', desc: 'Professional preparation of individual and business tax returns with maximum deductions.' },
              { icon: Calculator, title: 'Tax Planning', desc: 'Strategic planning to minimize tax liability and optimize your financial position year-round.' },
              { icon: TrendingUp, title: 'Business Tax Services', desc: 'Comprehensive tax solutions for businesses of all sizes, from startups to corporations.' },
              { icon: Shield, title: 'IRS Representation', desc: 'Expert representation and advocacy in dealings with tax authorities and audits.' },
              { icon: Users, title: 'Estate Planning', desc: 'Strategic estate and trust planning to protect your assets for future generations.' },
              { icon: Award, title: 'Payroll Services', desc: 'Complete payroll management and compliance to keep your business running smoothly.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" style={{ color: '#135192' }} />
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 font-serif">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.desc}</p>
                <a href="#" className="text-sm sm:text-base font-semibold flex items-center hover:underline" style={{ color: '#135192' }}>
                  Learn More <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 font-serif">
              About Easy To Compliance
            </h2>
            <div className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: '#135192' }}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/7247407/pexels-photo-7247407.jpeg" 
                alt="Professional tax team" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-serif">
                Your Trusted Tax Partner Since 1999
              </h3>
           <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
  Easy to Compliance helps individuals and businesses stay fully compliant with tax and regulatory requirements without stress. Our mission is to simplify complex compliance processes, ensure timely filings, and provide reliable support so our clients can focus on growing with confidence.
</p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
  Our team of experienced compliance experts and tax professionals specializes in handling regulatory filings, tax compliance, and business documentation. We stay updated with the latest laws and regulations to ensure accurate, timely, and hassle-free compliance for our clients.
</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#135192' }} />
                  <span className="text-sm sm:text-base text-black font-semibold">CPA Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#135192' }} />
                  <span className="text-sm sm:text-base text-black font-semibold">Tax Law Experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#135192' }} />
                  <span className="text-sm sm:text-base text-black font-semibold">100% Confidential</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#135192' }} />
                  <span className="text-sm sm:text-base text-black font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: Award, title: 'Licensed & Certified Professionals', desc: 'All our team members are certified CPAs and tax experts with proven track records' },
              { icon: Users, title: 'Personalized Service', desc: 'Tailored solutions designed specifically for your unique financial situation' },
              { icon: Shield, title: 'Confidential & Secure', desc: 'Your data is protected with the highest security standards and encryption' },
              { icon: Clock, title: 'Year-Round Support', desc: 'Available whenever you need us, not just during the busy tax season' }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 sm:p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#135192] transition-all hover:shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: '#135192' }}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-black mb-1 sm:mb-2 font-serif">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 font-serif">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what sets TaxExperts apart from the competition
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Award, title: 'Certified Experts', desc: 'All CPAs and tax professionals are fully licensed and certified' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Quick and efficient service without compromising quality' },
              { icon: Shield, title: 'Guaranteed Accuracy', desc: '100% accuracy guarantee on all tax filings and calculations' },
              { icon: Users, title: 'Personalized Approach', desc: 'Tailored solutions that fit your unique financial situation' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4" style={{ backgroundColor: '#135192' }}>
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 font-serif">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 md:py-16 text-white" style={{ backgroundColor: '#135192' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-3 sm:space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug font-serif">
                Maximize Your Tax Savings
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-md mx-auto md:mx-0">
                Get expert tax advice and save more with personalized consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                <button
                  className="px-5 py-2.5 bg-white text-[#135192] font-medium rounded-md hover:bg-gray-100 transition text-sm sm:text-base"
                >
                  Book Consultation
                </button>

                <button
                  className="px-5 py-2.5 border border-white text-white rounded-md hover:bg-white hover:text-[#135192] transition text-sm sm:text-base"
                >
                  Call Now
                </button>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">

                {/* Glass Card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 text-white shadow-lg">
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5 font-serif text-center md:text-left">
                    Free Consultation
                  </h3>

                  <form className="space-y-4 sm:space-y-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2.5 sm:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2.5 sm:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                    />

                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-2.5 sm:py-3 text-sm rounded-md bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                    />

                    <button
                      type="submit"
                      className="w-full py-2.5 sm:py-3 text-sm font-medium rounded-md text-white bg-[#135192] hover:bg-[#0d3d6b] transition"
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
      <section id="blog" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 font-serif">Latest Tax Insights</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest articles on tax strategies and financial planning
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: FileText, title: '2024 Tax Deduction Guide', date: 'February 5, 2026', excerpt: 'Discover all the deductions you might be missing this tax season and learn how to maximize your savings with our comprehensive guide.', category: 'Tax Planning' },
              { icon: TrendingUp, title: 'Small Business Tax Tips', date: 'February 1, 2026', excerpt: 'Essential strategies for small business owners to reduce tax liability and improve cash flow throughout the year.', category: 'Business Tax' },
              { icon: Shield, title: 'Retirement Planning Strategies', date: 'January 28, 2026', excerpt: 'Maximize your retirement savings with these tax-efficient strategies that will secure your financial future.', category: 'Financial Planning' }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#135192' }}>
                    <post.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 inline-block px-2 sm:px-3 py-1 rounded-full bg-gray-100" style={{ color: '#135192' }}>
                    {post.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-[#135192] transition-colors font-serif">
                    {post.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{post.date}</div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{post.excerpt}</p>
                  <a href="#" className="text-sm sm:text-base font-semibold flex items-center hover:underline group-hover:translate-x-2 transition-transform" style={{ color: '#135192' }}>
                    Read More <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonial/>
    
    </div>
  );
};

export default TaxWebsite;