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
  DollarSign,
  Menu,
  X
} from 'lucide-react';

const Regulatory = () => {
  const { regulatoryId } = useParams();
  const regulatory = regulatoryData[regulatoryId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

  if (!regulatory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">Regulatory Not Found</h2>
          <Link to="/" className="text-[#135192] hover:underline text-sm sm:text-base">
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

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Clean & Professional */}
      <section className="relative w-full  text-white overflow-hidden">
        
        <div className="absolute inset-0">
          <img 
            src={regulatory.hero.image} 
            alt="Banner Background"
            className="w-full h-full object-cover "  
   
          />
          <div className="absolute inset-0 bg-[#000000]/45"></div>
        </div>


        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 inline-flex items-center gap-1.5 sm:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold tracking-wide uppercase text-[10px] xs:text-xs sm:text-sm">
                Premium {regulatoryId?.toUpperCase()} Service
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-tight font-serif">
              {regulatory.hero.title}
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed text-white/90 max-w-3xl font-serif">
              {regulatory.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-2.5 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row  gap-4 mt-6">
  
 <Link to='/contact'> <button className="group w-full sm:w-auto bg-white text-[#135192] px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm xs:text-base">
    <span>{regulatory.hero.cta}</span>
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  </button></Link>

  <Link to='/contact'><button className="w-full sm:w-auto border-2 border-white text-white px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-2 text-sm xs:text-base">
    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
    <span>Schedule Call</span>
  </button></Link>

</div>

            </div>

          </div>
        </div>
      </section>

      {/* Mobile Navigation Toggle - NOW BELOW BANNER, LEFT SIDE */}
      <div className="lg:hidden sticky top-0 z-40 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="py-3 sm:py-4 bg-blue-100 text-white px-4 sm:px-5 mt-5 rounded-lg hover:bg-[#0d3d6e] transition-colors duration-300 inline-flex items-center gap-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6 " /> : <Menu size={20} className="sm:w-6 sm:h-6 text-[#135192]" />}
            <span className="font-bold text-sm sm:text-base text-[#135192]">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed left-0 top-0 bottom-0 w-72 xs:w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-black text-black flex items-center gap-2 font-serif">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#135192]" />
                  Navigation
                </h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <nav className="space-y-1.5 sm:space-y-2 font-serif mb-6">
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3 transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-[#135192] text-white font-bold'
                          : 'text-gray-700 hover:bg-blue-50 font-medium'
                      }`}
                    >
                      <Icon size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Contact Card */}
              <div className="bg-blue-50 rounded-lg border border-blue-100 text-white rounded-xl p-4 sm:p-6">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#135192] bg-blue-200 p-2 rounded-lg" />
                <h4 className="font-black text-base sm:text-lg mb-2 text-[#135192] font-serif">Need Help?</h4>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                  Our experts are ready to assist
                </p>
                <Link to='/'>
                  <button className="w-full bg-[#135192] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-2 border-2 border-transparent hover:border-[#135192]">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Contact Us
                  </button>
                </Link>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16">
        <div className="flex gap-4 sm:gap-6 lg:gap-10">
          
          {/* Sidebar Navigation - Desktop Only */}
          <aside className="w-64 xl:w-72 flex-shrink-0 hidden lg:block">
            <div className="sticky top-6 space-y-6">
              
              {/* Table of Contents */}
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 rounded-xl">
                <h3 className="text-base xl:text-lg font-black text-black mb-5 xl:mb-6 flex items-center gap-2 font-serif">
                  <BookOpen className="w-4 h-4 xl:w-5 xl:h-5 text-[#135192]" />
                  Navigation
                </h3>
                <nav className="space-y-1.5 xl:space-y-2 font-serif">
                  {tableOfContents.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 xl:px-4 py-2.5 xl:py-3 rounded-lg flex items-center gap-2.5 xl:gap-3 transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-[#135192] text-white font-bold'
                            : 'text-gray-700 hover:bg-blue-50 font-medium'
                        }`}
                      >
                        <Icon size={16} className="xl:w-[18px] xl:h-[18px] flex-shrink-0" />
                        <span className="text-xs xl:text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-50 rounded-lg border border-blue-100 text-white rounded-xl p-5 xl:p-6">
                <Mail className="w-9 h-9 xl:w-10 xl:h-10 mb-3 xl:mb-4 text-[#135192] bg-blue-200 p-2 rounded-lg" />
                <h4 className="font-black text-base xl:text-lg mb-2 text-[#135192] font-serif">Need Help?</h4>
                <p className="text-xs xl:text-sm text-gray-700 mb-3 xl:mb-4">
                  Our experts are ready to assist
                </p>
                <Link to='/'>
                  <button className="w-full bg-[#135192] text-white px-3 xl:px-4 py-2.5 xl:py-3 rounded-lg text-sm font-bold hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-2 border-2 border-transparent hover:border-[#135192]">
                    <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    Contact Us
                  </button>
                </Link>
                <div className="mt-3 xl:mt-4 pt-3 xl:pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-700">
                    <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            
            {/* About Section */}
            <section id="about" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="border-2 border-blue-100 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                    {regulatory.about.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                  {regulatory.about.description}
                </p>
                
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  {regulatory.about.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="group border-2 rounded-lg p-3 xs:p-4 sm:p-6 bg-blue-50 border-blue-100 hover:border-[#135192] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                        <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                        <p className="text-gray-800 font-semibold text-xs xs:text-sm sm:text-base leading-relaxed">
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
              <section id="overview" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="bg-blue-50 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-blue-200">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.regulatoryOverview.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.regulatoryOverview.introduction}
                  </p>

                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                    {regulatory.regulatoryOverview.keyAspects.map((aspect, index) => (
                      <div 
                        key={index} 
                        className="bg-white border-2 border-blue-100 rounded-lg p-3 xs:p-4 sm:p-6 hover:border-[#135192] transition-all duration-300"
                      >
                        <h3 className="text-base xs:text-lg sm:text-xl font-black mb-2 xs:mb-3 text-black font-serif">
                          {aspect.title}
                        </h3>
                        <p className="text-gray-600 mb-3 xs:mb-4 leading-relaxed text-xs xs:text-sm sm:text-base">
                          {aspect.description}
                        </p>
                        <div className="space-y-1.5 xs:space-y-2">
                          {aspect.regulations.map((reg, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 xs:gap-2 text-[11px] xs:text-xs sm:text-sm">
                              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#135192] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{reg}</span>
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
            <section id="features" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <Star className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#135192]" />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide font-serif">
                    Our Services
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 font-serif px-4">
                  Comprehensive Solutions
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4">
                  End-to-end compliance services tailored to your needs
                </p>
              </div>
              
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
                {regulatory.detailedFeatures.map((feature, index) => {
                  const FeatureIcon = featureIcons[index] || Settings;
                  return (
                    <div 
                      key={index} 
                      className="group bg-blue-50 border border-blue-100 border-2 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 hover:border-[#135192] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-[#135192] transition-all duration-300">
                        <FeatureIcon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#135192] group-hover:text-white transition-all duration-300" />
                      </div>
                      
                      <h3 className="text-base xs:text-lg sm:text-xl font-black text-black mb-2 xs:mb-3 font-serif">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">
                        {feature.description}
                      </p>
                     
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Compliance Calendar Section */}
            {regulatory.complianceCalendar && (
              <section id="calendar" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.complianceCalendar.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.complianceCalendar.description}
                  </p>

                  <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                    {regulatory.complianceCalendar.deadlines.map((deadline, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-[#135192] text-white px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4">
                          <h3 className="font-black text-sm xs:text-base sm:text-lg font-serif">{deadline.period}</h3>
                        </div>
                        
                        <div className="p-3 xs:p-4 sm:p-6 space-y-2.5 xs:space-y-3">
                          {deadline.filings.map((filing, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-start gap-2.5 xs:gap-3 sm:gap-4 p-3 xs:p-4 border border-gray-200 rounded-lg hover:border-[#135192] transition-all duration-300">
                              <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xs xs:text-sm">
                                {idx + 1}
                              </div>
                              <div className="flex-1 w-full">
                                <div className="font-black text-black mb-1 font-serif text-xs xs:text-sm sm:text-base">{filing.form}</div>
                                <div className="text-gray-600 text-[11px] xs:text-xs sm:text-sm mb-2">{filing.description}</div>
                                <div className="flex items-center gap-1.5 xs:gap-2 text-[11px] xs:text-xs sm:text-sm text-[#135192] font-bold">
                                  <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
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
              <section id="industry" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.industryGuidance.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.industryGuidance.description}
                  </p>

                  {/* Industry selector */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                    {regulatory.industryGuidance.sectors.map((sector, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(index)}
                        className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 border-2 text-xs xs:text-sm sm:text-base ${
                          selectedIndustry === index
                            ? 'bg-[#135192] text-white border-[#135192]'
                            : 'bg-white text-black border-gray-200 hover:border-[#135192] font-serif'
                        }`}
                      >
                        {sector.name}
                      </button>
                    ))}
                  </div>

                  {/* Selected industry content */}
                  <div className="border-2 border-gray-200 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-black mb-3 xs:mb-4 sm:mb-6 font-serif">
                      {regulatory.industryGuidance.sectors[selectedIndustry].name}
                    </h3>

                    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                      <div>
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2 font-serif">
                          <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192]" />
                          Key Challenges
                        </h4>
                        <ul className="space-y-2.5 xs:space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 xs:gap-3 p-2.5 xs:p-3 border border-gray-200 rounded-lg">
                              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                              <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2 font-serif">
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] font-serif" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2.5 xs:space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 xs:gap-3 p-2.5 xs:p-3 border border-gray-200 rounded-lg">
                              <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                              <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{solution}</span>
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
              <section id="violations" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="bg-white border border-gray-200 text-gray-900 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border-2">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.violations.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.violations.description}
                  </p>

                  <div className="space-y-3 xs:space-y-4">
                    {regulatory.violations.commonViolations.map((violation, index) => (
                      <div key={index} className="border-2 border-blue-100 bg-blue-50 rounded-lg p-3 xs:p-4 sm:p-6 hover:border-[#135192] transition-all duration-300">
                        <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 xs:gap-4 mb-3 xs:mb-4 font-serif">
                          <div className="flex-1 min-w-[200px]">
                            <h3 className="text-base xs:text-lg sm:text-xl font-black text-gray-800 mb-2">{violation.violation}</h3>
                            <p className="text-gray-700 text-xs xs:text-sm sm:text-base">{violation.penalty}</p>
                          </div>
                          <div className={`px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-lg font-bold text-[11px] xs:text-xs sm:text-sm ${
                            violation.impact === 'Critical' ? 'bg-red-600 text-white' :
                            violation.impact === 'High' ? 'bg-orange-500 text-white' :
                            'bg-yellow-500 text-gray-900'
                          }`}>
                            {violation.impact} Impact
                          </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-3 xs:p-4">
                          <div className="flex items-start gap-2">
                            <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                            <div>
                              <div className="font-bold text-gray-700 mb-1 font-serif text-xs xs:text-sm sm:text-base">Prevention Strategy:</div>
                              <div className="text-gray-600 text-xs xs:text-sm sm:text-base">{violation.prevention}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FEMA Compounding Process */}
                  {regulatory.violations.compoundingProcess && (
                    <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 bg-white text-black rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 border-2 border-gray-300">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-black mb-3 xs:mb-4 sm:mb-6">{regulatory.violations.compoundingProcess.title}</h3>
                      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 font-serif text-sm xs:text-base sm:text-lg">Process Steps:</h4>
                          <ol className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.compoundingProcess.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-[#135192] text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700 mt-0.5 xs:mt-1 text-xs xs:text-sm sm:text-base">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 font-serif text-sm xs:text-base sm:text-lg">Benefits:</h4>
                          <ul className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.compoundingProcess.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                                <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 xs:mt-4 p-3 xs:p-4 bg-blue-50 rounded-lg">
                            <div className="font-bold text-black font-serif text-xs xs:text-sm sm:text-base">Timeline:</div>
                            <div className="text-gray-700 text-xs xs:text-sm sm:text-base">{regulatory.violations.compoundingProcess.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEBI Enforcement Mechanism */}
                  {regulatory.violations.enforcementMechanism && (
                    <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 bg-white text-black rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 border-2 border-gray-300">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-black mb-3 xs:mb-4 sm:mb-6 font-serif">{regulatory.violations.enforcementMechanism.title}</h3>
                      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 font-serif text-sm xs:text-base sm:text-lg">Process Steps:</h4>
                          <ol className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.enforcementMechanism.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-[#135192] text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700 mt-0.5 xs:mt-1 text-xs xs:text-sm sm:text-base">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 font-serif text-sm xs:text-base sm:text-lg">Potential Consequences:</h4>
                          <ul className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.enforcementMechanism.consequences.map((consequence, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 text-red-600 flex-shrink-0 mt-0.5 xs:mt-1" />
                                <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{consequence}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 xs:mt-4 p-3 xs:p-4 bg-blue-50 rounded-lg">
                            <div className="font-bold text-black font-serif text-xs xs:text-sm sm:text-base">Timeline:</div>
                            <div className="text-gray-700 text-xs xs:text-sm sm:text-base">{regulatory.violations.enforcementMechanism.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MCA Strike-Off Process */}
                  {regulatory.violations.strikeOffProcess && (
                    <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 space-y-3 xs:space-y-4 sm:space-y-6">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-black font-serif">{regulatory.violations.strikeOffProcess.title}</h3>
                      
                      {/* Strike Off Section */}
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 xs:p-4 sm:p-6">
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 text-red-600 font-serif" />
                          Company Strike-Off
                        </h4>
                        <div className="mb-3 xs:mb-4">
                          <div className="font-bold text-gray-700 mb-2 font-serif text-xs xs:text-sm sm:text-base">Grounds for Strike-Off:</div>
                          <ul className="space-y-1.5 xs:space-y-2">
                            {regulatory.violations.strikeOffProcess.strikeOff.grounds.map((ground, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 xs:gap-2 text-gray-700 text-xs xs:text-sm sm:text-base">
                                <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-red-600 flex-shrink-0 mt-0.5 xs:mt-1" />
                                <span>{ground}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold text-gray-700 mb-2 font-serif text-xs xs:text-sm sm:text-base">Consequences:</div>
                          <ul className="space-y-1.5 xs:space-y-2">
                            {regulatory.violations.strikeOffProcess.strikeOff.consequences.map((consequence, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 xs:gap-2 text-gray-700 text-xs xs:text-sm sm:text-base">
                                <AlertTriangle className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-red-600 flex-shrink-0 mt-0.5 xs:mt-1" />
                                <span>{consequence}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Dormant Status Section */}
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 xs:p-4 sm:p-6">
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2">
                          <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192] font-serif" />
                          Dormant Company Status
                        </h4>
                        <div className="space-y-3 xs:space-y-4">
                          <div>
                            <div className="font-bold text-gray-700 mb-2 font-serif text-xs xs:text-sm sm:text-base">Eligibility:</div>
                            <p className="text-gray-600 text-xs xs:text-sm sm:text-base">{regulatory.violations.strikeOffProcess.dormantStatus.eligibility}</p>
                          </div>
                          <div>
                            <div className="font-bold text-gray-700 mb-2 font-serif text-xs xs:text-sm sm:text-base">Process:</div>
                            <ul className="space-y-1.5 xs:space-y-2">
                              {regulatory.violations.strikeOffProcess.dormantStatus.process.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 xs:gap-2 text-gray-700 text-xs xs:text-sm sm:text-base">
                                  <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#135192] flex-shrink-0 mt-0.5 xs:mt-1" />
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="font-bold text-gray-700 mb-2 font-serif text-xs xs:text-sm sm:text-base">Benefits:</div>
                            <ul className="space-y-1.5 xs:space-y-2">
                              {regulatory.violations.strikeOffProcess.dormantStatus.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 xs:gap-2 text-gray-700 text-xs xs:text-sm sm:text-base">
                                  <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-green-600 flex-shrink-0 mt-0.5 xs:mt-1" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
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
              <section id="cases" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.caseStudies.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.caseStudies.description}
                  </p>

                  {/* Case study selector */}
                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                    {regulatory.caseStudies.studies.map((study, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCaseStudy(index)}
                        className={`text-left p-3 xs:p-4 sm:p-6 rounded-lg transition-all duration-300 border-2 ${
                          selectedCaseStudy === index
                            ? 'bg-[#135192] text-white border-[#135192]'
                            : 'bg-white text-black border-gray-200 hover:border-[#135192]'
                        }`}
                      >
                        <div className={`text-[11px] xs:text-xs sm:text-sm font-bold mb-1.5 xs:mb-2 ${
                          selectedCaseStudy === index ? 'text-white' : 'text-[#135192]'
                        }`}>
                          {study.industry}
                        </div>
                        <div className="font-black text-sm xs:text-base sm:text-lg font-serif">{study.title}</div>
                      </button>
                    ))}
                  </div>

                  {/* Selected case study content */}
                  <div className="border-2 border-gray-200 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
                    <div className="mb-4 xs:mb-5 sm:mb-6">
                      <div className="inline-block px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-[#135192] text-white rounded-lg font-bold text-[11px] xs:text-xs sm:text-sm mb-2.5 xs:mb-3">
                        {regulatory.caseStudies.studies[selectedCaseStudy].industry}
                      </div>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-black mb-3 xs:mb-4 font-serif">
                        {regulatory.caseStudies.studies[selectedCaseStudy].title}
                      </h3>
                    </div>

                    <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 font-serif text-sm xs:text-base sm:text-lg">
                          <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192]" />
                          The Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">{regulatory.caseStudies.studies[selectedCaseStudy].challenge}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 font-serif text-sm xs:text-base sm:text-lg">
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192]" />
                          Our Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">{regulatory.caseStudies.studies[selectedCaseStudy].solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 font-serif text-sm xs:text-base sm:text-lg">
                          <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#135192]" />
                          Outcome
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">{regulatory.caseStudies.studies[selectedCaseStudy].outcome}</p>
                      </div>

                      <div className="bg-[#135192] rounded-lg p-3 xs:p-4 sm:p-6 text-white border-2 border-[#135192]">
                        <h4 className="font-black mb-1.5 xs:mb-2 flex items-center gap-2 font-serif text-sm xs:text-base sm:text-lg">
                          <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5" />
                          Business Impact
                        </h4>
                        <p className="leading-relaxed text-xs xs:text-sm sm:text-base">{regulatory.caseStudies.studies[selectedCaseStudy].impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Resources Section */}
            {regulatory.resources && (
              <section id="resources" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#135192] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black font-serif">
                      {regulatory.resources.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg">
                    {regulatory.resources.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-black mb-3 xs:mb-4 sm:mb-6 font-serif">Tools & Templates</h3>
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                      {regulatory.resources.tools.map((tool, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-3 xs:p-4 sm:p-6 hover:border-[#135192] transition-all duration-300 group">
                          <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-[#135192] transition-all duration-300 flex-shrink-0">
                              <Download className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#135192] group-hover:text-white transition-all duration-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-black text-sm xs:text-base sm:text-lg text-black mb-1.5 xs:mb-2 font-serif">{tool.name}</h4>
                              <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm mb-2 xs:mb-3">{tool.description}</p>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] xs:text-xs font-bold text-[#135192]">{tool.type}</span>
                                <button className="flex items-center gap-1.5 xs:gap-2 text-[#135192] font-bold text-[11px] xs:text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
                                  <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
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
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-black mb-3 xs:mb-4 sm:mb-6 font-serif">Comprehensive Guides</h3>
                    <div className="space-y-3 xs:space-y-4">
                      {regulatory.resources.guides.map((guide, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-3 xs:p-4 sm:p-6 hover:border-[#135192] transition-all duration-300">
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 xs:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-black text-base xs:text-lg sm:text-xl text-black mb-2 xs:mb-3 font-serif">{guide.title}</h4>
                              <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-2 xs:mb-3">
                                {guide.topics.map((topic, idx) => (
                                  <span key={idx} className="px-2 xs:px-3 py-0.5 xs:py-1 bg-blue-50 text-gray-700 rounded-full text-[10px] xs:text-xs font-bold border border-gray-200">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1.5 xs:gap-2 w-full sm:w-auto">
                              <div className="text-[11px] xs:text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                                {guide.readTime}
                              </div>
                              <button className="flex items-center gap-1.5 xs:gap-2 text-[#135192] font-bold text-xs xs:text-sm hover:gap-3 transition-all duration-300">
                                Read
                                <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
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
            <section id="process" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <Briefcase className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#135192]" />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide font-serif">
                    Our Methodology
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 font-serif px-4">
                  {regulatory.process.title}
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4">
                  Our proven four-step approach ensures seamless compliance
                </p>
              </div>
              
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
                {regulatory.process.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 hover:border-[#135192] hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 text-[#135192] rounded-lg flex items-center justify-center font-black text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 sm:mb-6 group-hover:bg-[#135192] group-hover:text-white transition-all duration-300">
                        {index + 1}
                      </div>
                      <h3 className="text-base xs:text-lg sm:text-xl font-black text-black mb-2 xs:mb-3 font-serif">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs xs:text-sm sm:text-base">{step.description}</p>
                    </div>
                    
                    {/* Connector arrow - hidden on mobile and tablets, shown on desktop */}
                    {index < regulatory.process.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 xl:-right-5 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-[#135192]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 bg-[#135192] text-white rounded-xl p-5 xs:p-6 sm:p-8 lg:p-10 text-center">
                <p className="mb-3 xs:mb-4 sm:mb-6 text-base xs:text-lg sm:text-xl font-medium">Ready to experience our proven compliance process?</p>
                <button className="bg-white text-[#135192] px-6 xs:px-7 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 font-serif text-sm xs:text-base">
                  Start Your Journey
                  <Rocket className="w-4 h-4 xs:w-5 xs:h-5" />
                </button>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <HelpCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#135192]" />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide font-serif">
                    Common Questions
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 font-serif px-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4">
                  Everything you need to know about our services
                </p>
              </div>
              
              <div className="space-y-3 xs:space-y-4 max-w-4xl mx-auto">
                {regulatory.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#135192] transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-6 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between group"
                    >
                      <span className="font-black text-sm xs:text-base sm:text-lg text-black pr-3 xs:pr-4 font-serif">{faq.question}</span>
                      <div className={`flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-[#135192] rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-black' : ''}`}>
                        <ChevronRight className="text-white transform rotate-90 w-4 h-4 xs:w-5 xs:h-5" />
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-6 bg-gray-50 border-t-2 border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-[#135192] text-white rounded-xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-black mb-3 xs:mb-4 sm:mb-6 font-serif">{regulatory.cta.title}</h2>
                <p className="mb-5 xs:mb-6 sm:mb-8 lg:mb-10 text-base xs:text-lg sm:text-xl leading-relaxed text-white/90">
                  {regulatory.cta.description}
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center">
                  <button className="group bg-white text-[#135192] px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-lg font-serif font-black text-sm xs:text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 border-2 border-transparent hover:border-white">
                    {regulatory.cta.primaryButton}
                    <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 font-serif border-white text-white px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-lg font-black text-sm xs:text-base sm:text-lg hover:bg-white hover:text-[#135192] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    {regulatory.cta.secondaryButton}
                  </button>
                </div>

                <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-12 pt-5 xs:pt-6 sm:pt-8 border-t border-white/20">
                  <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8 text-[11px] xs:text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Expert Team</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Proven Track Record</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
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