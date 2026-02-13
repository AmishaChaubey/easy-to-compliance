import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "./data";

import { 
  CheckCircle, 
  Rocket,
  Headphones,
  Calendar1,
  BriefcaseBusiness,
  Star, 
  Users, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  HelpCircle,
  Home,
  FileText,
  Briefcase,
  BarChart3,
  Calendar,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "features", "process", "stats", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <Link to="/" className="text-[#135192] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const tableOfContents = [
    { id: "hero", label: "Overview", icon: Home },
    { id: "about", label: "About Service", icon: FileText },
    { id: "features", label: "Key Features", icon: Star },
    { id: "process", label: "Our Process", icon: BriefcaseBusiness },
    { id: "stats", label: "Our Impact", icon: BarChart3 },
    { id: "faq", label: "FAQ", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      
      {/* Mobile Navigation Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#135192] text-white p-4 rounded-full shadow-lg hover:bg-[#0f4178] transition"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#135192]">Navigation</h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-2 mb-6">
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                        activeSection === item.id
                          ? 'bg-[#135192] text-white'
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-base">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Quick Contact */}
              <div className="p-4 bg-gradient-to-br from-[#135192] to-[#1c6ec6] rounded-lg text-white">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-blue-100 mb-3">Our team is ready to assist you</p>
                <Link to='/contact'>
                  <button className="w-full bg-white text-[#135192] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition">
                    Contact Us
                  </button>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${service.hero.image})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#135192]/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block">
              <span className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold border border-white/30">
                Premium {serviceId?.toUpperCase()} Service
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif leading-tight">
              {service.hero.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
              {service.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to='/contact'>
                <button className="w-full sm:w-auto bg-white text-[#135192] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
                  {service.hero.cta}
                </button>
              </Link>

              <Link to='/about'>
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Table of Contents - Sticky Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-6 bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-[#135192] mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => {
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
                      <Icon size={16} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Contact Card */}
              <div className="mt-6 p-4 bg-gradient-to-br from-[#135192] to-[#1c6ec6] rounded-lg text-white">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-blue-100 mb-3">Our team is ready to assist you</p>
                <Link to='/contact'>
                  <button className="w-full bg-white text-[#135192] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition">
                    Contact Us
                  </button>
                </Link> 
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* About Section */}
            <section id="about" className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#135192] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <FileText size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="break-words">{service.about.title}</span>
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                {service.about.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {service.about.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium text-sm sm:text-base">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#135192] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Star size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="break-words">Key Features & Services</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {service.detailedFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-5 sm:p-6 hover:shadow-lg transition"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#135192] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#135192] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Briefcase size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="break-words">{service.process.title}</span>
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">Our proven methodology for success</p>
              
              <div className="space-y-3 sm:space-y-4">
                {service.process.steps.map((step, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#135192] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-100 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#135192] mb-2 break-words">{step.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-lg p-5 sm:p-6 text-center">
                <p className="mb-4 text-base sm:text-lg">Ready to get started with our proven process?</p>
                <Link to='/contact'>
                  <button className="w-full sm:w-auto bg-white text-[#135192] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    Start Now
                  </button>
                </Link>
              </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#135192] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <TrendingUp size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="break-words">Our Impact in Numbers</span>
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction"},
                  { number: "15+", label: "Years Experience" },
                  { number: "24/7", label: "Support Available"}
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#135192] mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#135192] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <HelpCircle size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="break-words">Frequently Asked Questions</span>
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">Everything you need to know</p>
              
              <div className="space-y-3 sm:space-y-4">
                {service.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-blue-50 hover:bg-blue-100 transition flex items-center justify-between gap-3"
                    >
                      <span className="font-semibold text-[#135192] text-sm sm:text-base break-words flex-1">{faq.question}</span>
                      <ChevronDown 
                        className={`text-[#135192] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-lg p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{service.cta.title}</h2>
              <p className="mb-5 sm:mb-6 text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
                {service.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to='/contact'>
                  <button className="w-full sm:w-auto bg-white text-[#135192] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    {service.cta.primaryButton}
                  </button>
                </Link>
                <a 
                  href="tel:+919999999999"
                  className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition text-center"
                >
                  {service.cta.secondaryButton}
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;