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
  Calendar
} from 'lucide-react';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "features", "process", "stats", "testimonials", "faq"];
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
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


    useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  return (
    <div className="min-h-screen bg-white font-serif">
      
      {/* Hero Section */}
<section
  className="relative w-full min-h-[600px] flex items-center text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${service.hero.image})`
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#135192]/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-3xl">

      <div className="mb-4 inline-block">
        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
          Premium {serviceId?.toUpperCase()} Service
        </span>
      </div>

      <h1 className="text-5xl font-bold mb-4">
        {service.hero.title}
      </h1>

      <p className="text-xl text-blue-100 mb-6">
        {service.hero.subtitle}
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-[#135192] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          {service.hero.cta}
        </button>

        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition">
          Learn More
        </button>
      </div>

    </div>
  </div>

</section>



      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
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
              <div className="mt-6 p-4 bg-gradient-to-br from-[#135192] to-blue-600 rounded-lg text-white">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-blue-100 mb-3">Our team is ready to assist you</p>
                <button className="w-full bg-white text-[#135192] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* About Section */}
            <section id="about" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <FileText size={32} />
                {service.about.title}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {service.about.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.about.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <Star size={32} />
                Key Features & Services
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.detailedFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-[#135192] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <Briefcase size={32} />
                {service.process.title}
              </h2>
              <p className="text-gray-700 mb-8 text-lg">Our proven methodology for success</p>
              
              <div className="space-y-4">
                {service.process.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#135192] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-lg p-5 border border-blue-100">
                      <h3 className="text-lg font-bold text-[#135192] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-lg p-6 text-center">
                <p className="mb-4 text-lg">Ready to get started with our proven process?</p>
                <button className="bg-white text-[#135192] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Start Now
                </button>
              </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <TrendingUp size={32} />
                Our Impact in Numbers
              </h2>
              
           <div className="grid md:grid-cols-4 gap-6">
  {[
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction"},
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available"}
  ].map((stat, index) => {

    return (
      <div
        key={index}
        className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition"
      >
     
        <div className="text-4xl font-bold text-[#135192] mb-2">
          {stat.number}
        </div>

        <div className="text-gray-600 font-medium">
          {stat.label}
        </div>
      </div>
    );
  })}
</div>

            </section>

        

            {/* FAQ Section */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <HelpCircle size={32} />
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 mb-8 text-lg">Everything you need to know</p>
              
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left bg-blue-50 hover:bg-blue-100 transition flex items-center justify-between"
                    >
                      <span className="font-semibold text-[#135192]">{faq.question}</span>
                      <HelpCircle className={`text-[#135192] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={20} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
              <p className="mb-6 text-blue-100 text-lg max-w-2xl mx-auto">
                {service.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#135192] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  {service.cta.primaryButton}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition">
                  {service.cta.secondaryButton}
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;