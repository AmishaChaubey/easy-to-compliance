import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Shield, FileText, TrendingUp, Users, Clock, Award, ArrowRight, Sparkles, Star } from 'lucide-react';

const CompliancePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Merriweather', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[#135192] text-white pt-32 pb-48 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 animate-fadeInUp">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Trusted by 500+ Businesses Nationwide</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeInUp delay-100">
              Tax Compliance
              <span className="block mt-2 opacity-90">Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl animate-fadeInUp delay-200">
              Navigate complex tax regulations with confidence. Our expert team ensures your business stays compliant, minimizing risks and maximizing efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16 animate-fadeInUp delay-300">
              <button className="bg-white text-[#135192] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-smooth">
                Get Started Today
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-smooth">
                Schedule Consultation
              </button>
            </div>
            
            <div className="flex flex-wrap gap-12 animate-fadeInUp delay-400">
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-white/70 text-sm">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/70 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative  py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#135192] font-semibold text-sm tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored tax compliance services designed to meet your unique business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Corporate Tax Compliance",
                description: "Complete corporate tax filing, quarterly reporting, and annual compliance management with meticulous attention to detail."
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Regulatory Advisory",
                description: "Stay ahead of changing regulations with expert guidance and proactive compliance strategies tailored to your industry."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Payroll Tax Services",
                description: "Accurate payroll tax calculations, withholdings, and timely government remittances for peace of mind."
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "GST/VAT Compliance",
                description: "End-to-end GST/VAT filing, reconciliation, and input tax credit optimization to maximize your returns."
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Tax Audit Support",
                description: "Professional representation and comprehensive documentation support during tax audits and assessments."
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Deadline Management",
                description: "Never miss a filing deadline with our automated tracking system and proactive reminder notifications."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-smooth border border-gray-100 hover:border-[#135192] animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="w-14 h-14 rounded-lg bg-[#135192]/10 flex items-center justify-center text-[#135192] mb-6 group-hover:bg-[#135192] group-hover:text-white transition-smooth">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#135192] font-semibold text-sm tracking-wider uppercase mb-4 block">How It Works</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Seamless Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed to ensure complete tax compliance excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mx-auto">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We analyze your business structure, operations, and compliance requirements to create a foundation."
              },
              {
                step: "02",
                title: "Planning",
                description: "Develop a customized compliance roadmap with clear timelines, milestones, and actionable steps."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute compliance activities with precision, documenting everything thoroughly for complete transparency."
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Continuous oversight and proactive updates to maintain ongoing compliance excellence and peace of mind."
              }
            ].map((process, index) => (
              <div
                key={index}
                className="relative animate-fadeInUp "
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6">
                  <div className="text-6xl font-bold text-[#135192]/20">{process.step}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-[#135192]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#135192] font-semibold text-sm tracking-wider uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Compliance Partner
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Expert Team",
                  description: "Certified tax professionals with decades of combined experience in compliance management across diverse industries."
                },
                {
                  title: "Technology-Driven",
                  description: "Advanced automation tools and cutting-edge software for accurate, efficient, and secure compliance processes."
                },
                {
                  title: "Proactive Approach",
                  description: "We anticipate regulatory changes and keep you ahead of compliance requirements before they become issues."
                },
                {
                  title: "Cost-Effective",
                  description: "Competitive pricing with transparent fees, no hidden charges, and exceptional value for your investment."
                }
              ].map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-slideIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#135192] flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#135192] rounded-2xl p-12 text-white animate-fadeInUp delay-400">
              <h3 className="text-3xl font-bold mb-8">Our Commitment to Excellence</h3>
              
              <div className="space-y-6 mb-12">
                {[
                  "100% accuracy in all compliance filings",
                  "Dedicated account manager for personalized service",
                  "24/7 access to your compliance dashboard",
                  "Regular compliance health checks and reports",
                  "Penalty protection guarantee on our services"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/20 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/70 text-sm">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$2M+</div>
                  <div className="text-white/70 text-sm">Penalties Avoided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#135192] font-semibold text-sm tracking-wider uppercase mb-4 block">The Benefits</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Compliance Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the transformative value of maintaining proper tax compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Risk Mitigation",
                description: "Avoid penalties, interest charges, and legal complications with proper compliance management and proactive monitoring.",
                stats: "99.9% penalty-free"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Business Growth",
                description: "Focus on core operations and strategic initiatives while we handle complex compliance requirements efficiently.",
                stats: "40% time saved"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Reputation Management",
                description: "Build trust with stakeholders through transparent, accurate reporting and exemplary compliance standards.",
                stats: "100% satisfaction"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Financial Clarity",
                description: "Better financial planning with organized tax records, actionable insights, and comprehensive reporting systems.",
                stats: "Real-time reporting"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Stakeholder Confidence",
                description: "Investors and partners value compliant, well-managed businesses with strong governance frameworks.",
                stats: "Enhanced credibility"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Peace of Mind",
                description: "Sleep better knowing your compliance is in expert hands with continuous monitoring and support.",
                stats: "24/7 monitoring"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-smooth border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-[#135192] flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-[#135192] font-semibold text-sm">{benefit.stats}</div>
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
     