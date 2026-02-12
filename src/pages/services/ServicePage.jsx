import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "./data";

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <Link to="/" className="text-[#135192] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#135192] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {service.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {service.hero.subtitle}
            </p>
            <button className="bg-white text-[#135192] px-10 py-4 rounded-lg font-semibold text-lg">
              {service.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.about.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.about.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.about.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#135192] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {service.detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-xl border border-gray-200">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {service.process.title}
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and effective
            </p>
          </div>
          
          <div className="space-y-6">
            {service.process.steps.map((step, index) => (
              <div key={index} className="bg-white border-l-4 border-[#135192] p-8 rounded-r-xl shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#135192] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know
            </p>
          </div>
          
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#135192]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            {service.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#135192] px-10 py-4 rounded-lg font-semibold text-lg">
              {service.cta.primaryButton}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg">
              {service.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePage;