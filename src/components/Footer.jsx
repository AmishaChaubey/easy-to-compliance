import React from "react";
import { Calculator, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#135192] text-white pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand */}
          <div className="text-left">
            <img
              className="w-52 sm:w-56 md:w-56 h-auto"
              src="/logo.svg"
              alt="Logo"
            />
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-base sm:text-base text-gray-200 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-lg sm:text-lg font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Tax Preparation",
                "Tax Planning",
                "Business Tax",
                "IRS Representation",
                "Estate Planning",
                "Payroll Services",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-base sm:text-base text-gray-200 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-lg sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="w-5 h-5 sm:w-5 sm:h-5 mr-2 mt-1 flex-shrink-0 text-white"
                />
                <span className="text-base sm:text-base text-gray-200">
                  Galaxy Diamond Plaza
                  <br />
                  Noida, UP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 sm:w-5 sm:h-5 mr-2 flex-shrink-0 text-white" />
                <a 
                  href="tel:+919999999999" 
                  className="text-base sm:text-base text-gray-200 hover:text-white transition-colors"
                >
                  +91 9999999999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 sm:w-5 sm:h-5 mr-2 flex-shrink-0 text-white" />
                <a 
                  href="mailto:info@easytocompliance.com" 
                  className="text-base sm:text-base text-gray-200 hover:text-white transition-colors break-all"
                >
                  info@easytocompliance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8 text-center text-gray-200 text-sm sm:text-sm">
          <p>© 2026 EasyToCompliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;