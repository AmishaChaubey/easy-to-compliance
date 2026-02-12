import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { regulatoryData } from "./data";

import { 
  CheckCircle, 
  Rocket,
  Phone,
  BriefcaseBusiness,
  Star, 
  Award, 
  TrendingUp, 
  HelpCircle,
  Home,
  FileText,
  Briefcase,
  BarChart3,
  Calendar,
  BookOpen,
  Shield,
  Building,
  Target,
  Lightbulb,
  Clock,
  AlertTriangle,
  Download,
  Mail,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Users,
  Settings,
  Zap,
  Activity,
  Database,
  DollarSign
} from 'lucide-react';

const Regulatory = () => {
  const { regulatoryId } = useParams();
  const regulatory = regulatoryData[regulatoryId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "overview", "features", "calendar", "industry", "violations", "cases", "resources", "process", "stats", "faq"];
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

  if (!regulatory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Regulatory Not Found</h2>
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
    { id: "overview", label: "Regulatory Framework", icon: BookOpen },
    { id: "features", label: "Key Features", icon: Star },
    { id: "calendar", label: "Compliance Calendar", icon: Calendar },
    { id: "industry", label: "Industry Guidance", icon: Building },
    { id: "violations", label: "Violations & Penalties", icon: AlertTriangle },
    { id: "cases", label: "Case Studies", icon: Target },
    { id: "resources", label: "Resources", icon: Download },
    { id: "process", label: "Our Process", icon: BriefcaseBusiness },
    { id: "stats", label: "Our Impact", icon: BarChart3 },
    { id: "faq", label: "FAQ", icon: HelpCircle }
  ];

  // Icon mapping for features
  const featureIcons = {
    0: FileText,
    1: Building,
    2: BarChart3,
    3: DollarSign,
    4: Shield,
    5: Settings
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Clean & Professional */}
      <section className="relative w-full bg-[#135192] text-white overflow-hidden">
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-5 h-5" />
              <span className="font-semibold tracking-wide uppercase text-sm">
                Premium {regulatoryId?.toUpperCase()} Service
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              {regulatory.hero.title}
            </h1>

            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90 max-w-3xl">
              {regulatory.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="group bg-white text-[#135192] px-8 py-4 rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg">
                {regulatory.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
            </div>

        

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-10">
          
          {/* Sidebar Navigation */}
          <aside className="w-72 flex-shrink-0 hidden lg:block">
            <div className="sticky top-6 space-y-6">
              
              {/* Table of Contents */}
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-black text-black mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#135192]" />
                  Navigation
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-[#135192] text-white font-bold'
                            : 'text-gray-700 hover:bg-gray-100 font-medium'
                        }`}
                      >
                        <Icon size={18} className="flex-shrink-0" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-50 rounded-lg border border-blue-100 text-white rounded-xl p-6">
                <Mail className="w-10 h-10 mb-4" />
                <h4 className="font-black text-lg mb-2">Need Help?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Our experts are ready to assist
                </p>
                <button className="w-full bg-[#135192] text-white px-4 py-3 rounded-lg font-bold hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-2 border-2 border-transparent hover:border-[#135192]">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </button>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            
            {/* About Section */}
            <section id="about" className="mb-20">
              <div className="border-2 border-gray-200 rounded-xl p-10 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-black">
                    {regulatory.about.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  {regulatory.about.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {regulatory.about.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="group border-2 rounded-lg p-6 bg-blue-50  border border-blue-100 hover:border-[#135192] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle size={24} className="text-[#135192] flex-shrink-0 mt-1" />
                        <p className="text-gray-800 font-semibold text-base leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Regulatory Overview Section */}
            {regulatory.regulatoryOverview && (
              <section id="overview" className="mb-20">
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 text-white rounded-xl p-10 border-2 border-black">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.regulatoryOverview.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-10 leading-relaxed text-lg">
                    {regulatory.regulatoryOverview.introduction}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {regulatory.regulatoryOverview.keyAspects.map((aspect, index) => (
                      <div 
                        key={index} 
                        className="border-2 border-gray-700 rounded-lg p-6 hover:border-[#135192] transition-all duration-300"
                      >
                        <h3 className="text-2xl font-black mb-3 text-black">
                          {aspect.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {aspect.description}
                        </p>
                        <div className="space-y-2">
                          {aspect.regulations.map((reg, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <ChevronRight size={16} className="text-[#135192] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-500">{reg}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Features Section */}
            <section id="features" className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 rounded-full mb-4">
                  <Star className="w-4 h-4 text-[#135192]" />
                  <span className="font-bold text-sm text-black uppercase tracking-wide">
                    Our Services
                  </span>
                </div>
                <h2 className="text-5xl font-black text-black mb-4">
                  Comprehensive Solutions
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  End-to-end compliance services tailored to your needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regulatory.detailedFeatures.map((feature, index) => {
                  const FeatureIcon = featureIcons[index] || Settings;
                  return (
                    <div 
                      key={index} 
                      className="group bg-blue-50  border border-blue-100 border-2  rounded-xl p-8 hover:border-[#135192] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#135192] transition-all duration-300">
                        <FeatureIcon className="w-7 h-7 text-[#135192] group-hover:text-white transition-all duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-black text-black mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                     
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Compliance Calendar Section */}
            {regulatory.complianceCalendar && (
              <section id="calendar" className="mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-10 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.complianceCalendar.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    {regulatory.complianceCalendar.description}
                  </p>

                  <div className="space-y-6">
                    {regulatory.complianceCalendar.deadlines.map((deadline, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-[#135192] text-white px-6 py-4">
                          <h3 className="font-black text-lg">{deadline.period}</h3>
                        </div>
                        
                        <div className="p-6 space-y-3">
                          {deadline.filings.map((filing, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#135192] transition-all duration-300">
                              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <div className="font-black text-black mb-1">{filing.form}</div>
                                <div className="text-gray-600 text-sm mb-2">{filing.description}</div>
                                <div className="flex items-center gap-2 text-sm text-[#135192] font-bold">
                                  <Clock size={14} />
                                  {filing.dueDate}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Industry Guidance Section */}
            {regulatory.industryGuidance && (
              <section id="industry" className="mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-10 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <Building size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.industryGuidance.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    {regulatory.industryGuidance.description}
                  </p>

                  {/* Industry selector */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {regulatory.industryGuidance.sectors.map((sector, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(index)}
                        className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 border-2 ${
                          selectedIndustry === index
                            ? 'bg-[#135192] text-white border-[#135192]'
                            : 'bg-white text-black border-gray-200 hover:border-[#135192]'
                        }`}
                      >
                        {sector.name}
                      </button>
                    ))}
                  </div>

                  {/* Selected industry content */}
                  <div className="border-2 border-gray-200 rounded-lg p-8">
                    <h3 className="text-3xl font-black text-black mb-6">
                      {regulatory.industryGuidance.sectors[selectedIndustry].name}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-black text-black mb-4 flex items-center gap-2">
                          <AlertTriangle size={20} className="text-[#135192]" />
                          Key Challenges
                        </h4>
                        <ul className="space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                              <ChevronRight size={18} className="text-[#135192] flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-black mb-4 flex items-center gap-2">
                          <Lightbulb size={20} className="text-[#135192]" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                              <CheckCircle size={18} className="text-[#135192] flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Violations & Penalties Section */}
            {regulatory.violations && (
              <section id="violations" className="mb-20">
                <div className="white-blue-50  border border-blue-10 text-white rounded-xl p-10 border-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <AlertTriangle size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.violations.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-10 leading-relaxed text-lg">
                    {regulatory.violations.description}
                  </p>

                  <div className="space-y-4">
                    {regulatory.violations.commonViolations.map((violation, index) => (
                      <div key={index} className="border-2 border-blue-100 rounded-lg p-6 hover:border-[#135192] transition-all duration-300">
                        <div className="flex flex-wrap items-start gap-4 mb-4">
                          <div className="flex-1 min-w-[200px]">
                            <h3 className="text-xl font-black text-gray-800 mb-2">{violation.violation}</h3>
                            <p className="text-gray-700">{violation.penalty}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-lg font-bold text-sm ${
                            violation.impact === 'Critical' ? 'bg-white text-black' :
                            violation.impact === 'High' ? 'bg-[#135192] text-gray-500' :
                            'bg-gray-700 text-white'
                          }`}>
                            {violation.impact} Impact
                          </div>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <Shield size={18} className="text-[#135192] flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-bold text-gray-600 mb-1">Prevention Strategy:</div>
                              <div className="text-gray-600">{violation.prevention}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {regulatory.violations.compoundingProcess && (
                    <div className="mt-8 bg-white text-black rounded-lg p-8 border-2 border-gray-700">
                      <h3 className="text-2xl font-black mb-6">{regulatory.violations.compoundingProcess.title}</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-black mb-4">Process Steps:</h4>
                          <ol className="space-y-3">
                            {regulatory.violations.compoundingProcess.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-7 h-7 bg-[#135192] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700 mt-1">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-4">Benefits:</h4>
                          <ul className="space-y-3">
                            {regulatory.violations.compoundingProcess.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-[#135192] flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                            <div className="font-bold text-black">Timeline:</div>
                            <div className="text-gray-700">{regulatory.violations.compoundingProcess.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Case Studies Section */}
            {regulatory.caseStudies && (
              <section id="cases" className="mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-10 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.caseStudies.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    {regulatory.caseStudies.description}
                  </p>

                  {/* Case study selector */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {regulatory.caseStudies.studies.map((study, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCaseStudy(index)}
                        className={`text-left p-6 rounded-lg transition-all duration-300 border-2 ${
                          selectedCaseStudy === index
                            ? 'bg-[#135192] text-white border-[#135192]'
                            : 'bg-white text-black border-gray-200 hover:border-[#135192]'
                        }`}
                      >
                        <div className={`text-sm font-bold mb-2 ${
                          selectedCaseStudy === index ? 'text-white' : 'text-[#135192]'
                        }`}>
                          {study.industry}
                        </div>
                        <div className="font-black text-lg">{study.title}</div>
                      </button>
                    ))}
                  </div>

                  {/* Selected case study content */}
                  <div className="border-2 border-gray-200 rounded-lg p-8">
                    <div className="mb-6">
                      <div className="inline-block px-4 py-2 bg-[#135192] text-white rounded-lg font-bold text-sm mb-3">
                        {regulatory.caseStudies.studies[selectedCaseStudy].industry}
                      </div>
                      <h3 className="text-3xl font-black text-black mb-4">
                        {regulatory.caseStudies.studies[selectedCaseStudy].title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-3 flex items-center gap-2">
                          <AlertTriangle size={20} className="text-[#135192]" />
                          The Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{regulatory.caseStudies.studies[selectedCaseStudy].challenge}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-3 flex items-center gap-2">
                          <Lightbulb size={20} className="text-[#135192]" />
                          Our Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{regulatory.caseStudies.studies[selectedCaseStudy].solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-3 flex items-center gap-2">
                          <CheckCircle size={20} className="text-[#135192]" />
                          Outcome
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{regulatory.caseStudies.studies[selectedCaseStudy].outcome}</p>
                      </div>

                      <div className="bg-[#135192] rounded-lg p-6 text-white border-2 border-[#135192]">
                        <h4 className="font-black mb-2 flex items-center gap-2">
                          <TrendingUp size={20} />
                          Business Impact
                        </h4>
                        <p className="leading-relaxed">{regulatory.caseStudies.studies[selectedCaseStudy].impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Resources Section */}
            {regulatory.resources && (
              <section id="resources" className="mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-10 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center">
                      <Download size={24} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-black">
                      {regulatory.resources.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    {regulatory.resources.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-black text-black mb-6">Tools & Templates</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {regulatory.resources.tools.map((tool, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#135192] transition-all duration-300 group">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#135192] transition-all duration-300">
                              <Download className="w-6 h-6 text-[#135192] group-hover:text-white transition-all duration-300" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-black text-lg text-black mb-2">{tool.name}</h4>
                              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-[#135192]">{tool.type}</span>
                                <button className="flex items-center gap-2 text-[#135192] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                                  <Download size={16} />
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guides */}
                  <div>
                    <h3 className="text-2xl font-black text-black mb-6">Comprehensive Guides</h3>
                    <div className="space-y-4">
                      {regulatory.resources.guides.map((guide, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#135192] transition-all duration-300">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-black text-xl text-black mb-3">{guide.title}</h4>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {guide.topics.map((topic, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold border border-gray-200">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <div className="text-sm text-gray-500 flex items-center gap-1">
                                <Clock size={14} />
                                {guide.readTime}
                              </div>
                              <button className="flex items-center gap-2 text-[#135192] font-bold text-sm hover:gap-3 transition-all duration-300">
                                Read
                                <ExternalLink size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Process Section */}
            <section id="process" className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-full mb-4">
                  <Briefcase className="w-4 h-4 text-[#135192]" />
                  <span className="font-bold text-sm text-black uppercase tracking-wide">
                    Our Methodology
                  </span>
                </div>
                <h2 className="text-5xl font-black text-black mb-4">
                  {regulatory.process.title}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Our proven four-step approach ensures seamless compliance
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {regulatory.process.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#135192] hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="w-16 h-16 bg-[#135192] text-white rounded-lg flex items-center justify-center font-black text-2xl mb-6 group-hover:bg-black transition-all duration-300">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-black text-black mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Connector arrow */}
                    {index < regulatory.process.steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-[#135192]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#135192] text-white rounded-xl p-10 text-center">
                <p className="mb-6 text-xl font-medium">Ready to experience our proven compliance process?</p>
                <button className="bg-white text-[#135192] px-10 py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-3">
                  Start Your Journey
                  <Rocket size={20} />
                </button>
              </div>
            </section>


            {/* FAQ Section */}
            <section id="faq" className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-full mb-4">
                  <HelpCircle className="w-4 h-4 text-[#135192]" />
                  <span className="font-bold text-sm text-black uppercase tracking-wide">
                    Common Questions
                  </span>
                </div>
                <h2 className="text-5xl font-black text-black mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Everything you need to know about our services
                </p>
              </div>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                {regulatory.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#135192] transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between group"
                    >
                      <span className="font-black text-lg text-black pr-4">{faq.question}</span>
                      <div className={`flex-shrink-0 w-10 h-10 bg-[#135192] rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-black' : ''}`}>
                        <ChevronRight className="text-white transform rotate-90" size={20} />
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 py-6 bg-gray-50 border-t-2 border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-[#135192] text-white rounded-xl p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Shield className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-5xl font-black mb-6">{regulatory.cta.title}</h2>
                <p className="mb-10 text-xl leading-relaxed text-white/90">
                  {regulatory.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group bg-white text-[#135192] px-10 py-5 rounded-lg font-black text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 border-2 border-transparent hover:border-white">
                    {regulatory.cta.primaryButton}
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white text-white px-10 py-5 rounded-lg font-black text-lg hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-3">
                    <Phone size={24} />
                    {regulatory.cta.secondaryButton}
                  </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="flex flex-wrap justify-center gap-8 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>Expert Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>Proven Track Record</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Regulatory;