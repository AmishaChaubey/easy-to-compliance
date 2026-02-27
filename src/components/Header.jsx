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
              <span className="text-white">+91-9968285325</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-white" />
              <span className="text-white">advrajneshjha@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-white" />
            <span className="text-white">
              D-507 TOWER D URBTECH TRADE CENTER , SECTOR 132 NOIDA 201301
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;