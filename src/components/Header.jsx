import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="hidden md:block bg-[#135192] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-white" />
              <span className="text-white">+91 999999999</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-white" />
              <span className="text-white">info@easytocompliance.com</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-white" />
            <span className="text-white">
              Galaxy Diamond Plaza, Noida, UP
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;