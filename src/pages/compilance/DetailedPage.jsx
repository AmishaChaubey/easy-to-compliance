import React, { useState ,useEffect} from 'react';
import { ChevronDown, ChevronUp, Calendar, FileText, AlertCircle, CheckCircle, Clock, DollarSign, List, BookOpen } from 'lucide-react';

const TaxCompliancePage = ({ 
  heroData, 
  bannerData, 
  tableOfContents, 
  services, 
  dueDates, 
  documents, 
  penalties, 
  filingSteps, 
  faqs 
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="text-white py-16 min-h-[500px]"
        style={{
          backgroundImage: `url("${heroData.backgroundImage}")`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-start py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">{heroData.title}</h1>
            <p className="text-xl text-blue-100 mb-6">
              {heroData.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#135192] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                {heroData.primaryButtonText}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#135192] transition">
                {heroData.secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-amber-600 flex-shrink-0" size={24} />
            <p className="text-amber-900">
              <strong>{bannerData.title}</strong> {bannerData.message}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="w-64 flex-shrink-0">
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
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Services Covered */}
            <section id="services" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <CheckCircle size={32} />
                Services Covered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-[#135192] mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#135192] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Due Dates */}
            <section id="due-dates" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <Calendar size={32} />
                Important Due Dates
              </h2>
              <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
                <table className="w-full">
                  <thead className="bg-[#135192] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Period</th>
                      <th className="px-6 py-4 text-left">Due Date</th>
                      <th className="px-6 py-4 text-left">Type</th>
                      <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dueDates.map((item, index) => (
                      <tr key={index} className="border-t border-blue-200">
                        <td className="px-6 py-4 font-semibold">{item.period}</td>
                        <td className="px-6 py-4">{item.date}</td>
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                            item.status === 'critical' 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            <Clock size={14} />
                            {item.status === 'critical' ? 'Critical' : 'Upcoming'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Documents Required */}
            <section id="documents" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <FileText size={32} />
                Documents Required
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#135192] mb-4">{doc.category}</h3>
                    <ul className="space-y-2">
                      {doc.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Penalties and Late Fees */}
            <section id="penalties" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <AlertCircle size={32} />
                Penalties & Late Fees
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-red-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Violation</th>
                        <th className="px-6 py-4 text-left">Penalty Amount</th>
                        <th className="px-6 py-4 text-left">Additional Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      {penalties.map((penalty, index) => (
                        <tr key={index} className="border-t border-red-200">
                          <td className="px-6 py-4 font-semibold text-gray-800">{penalty.violation}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 text-red-700 font-bold">
                              <DollarSign size={16} />
                              {penalty.penalty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{penalty.additionalInfo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Filing Process */}
            <section id="process" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <List size={32} />
                Filing Process
              </h2>
              <div className="space-y-4">
                {filingSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#135192] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-lg p-5 border border-blue-100">
                      <h3 className="text-lg font-bold text-[#135192] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#135192] mb-6 flex items-center gap-3">
                <ChevronDown size={32} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left bg-blue-50 hover:bg-blue-100 transition flex items-center justify-between"
                    >
                      <span className="font-semibold text-[#135192]">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="text-[#135192] flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-[#135192] flex-shrink-0" size={20} />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#135192] to-[#1a6bb8] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Your Tax Compliance?</h2>
              <p className="mb-6 text-blue-100">Our expert team is ready to assist you with all your tax-related needs.</p>
              <button className="bg-white text-[#135192] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Schedule a Consultation
              </button>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TaxCompliancePage;