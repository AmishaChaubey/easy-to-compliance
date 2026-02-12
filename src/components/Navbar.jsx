import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  const navLinks = [
    { to: "/", label : "Home" },
    { to: "/about", label : "About Us" },
    { 
      to: "/compliances", 
      label : "Compliances",
      dropdown: [
        { to: "/compliances/gst", label : "GST Compliance" },
        { to: "/compliances/income-tax", label : "Income Tax" },
        { to: "/compliances/corporate", label : "Corporate Compliance" },
        { to: "/compliances/labor", label : "Labor Laws" }
      ]
    },
 { 
  to: "/services", 
  label : "Services",
  dropdown: [
    { to: "/services/accounting",  label : "Accounting Services" },
    { to: "/services/audit",  label : "Audit Services" },
    { to: "/services/consulting",  label : "Consulting" },
    { to: "/services/payroll",  label: "Payroll Management" }
  ]
},

    { 
      to: "/regulatory", 
      label : "Regulatory",
      dropdown: [
        { to: "/regulatory/fema", label : "FEMA" },
        { to: "/regulatory/rbi", label : "RBI Guidelines" },
        { to: "/regulatory/sebi", label : "SEBI Regulations" },
        { to: "/regulatory/mca", label : "MCA Compliance" }
      ]
    },
    { 
      to: "/documents", 
      label : "Documents",
      dropdown: [
        { to: "/documents/forms", label : "Forms & Templates" },
        { to: "/documents/circulars", label : "Circulars" },
        { to: "/documents/notifications", label : "Notifications" },
        { to: "/documents/guidelines", label : "Guidelines" }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              className="w-auto h-30 sm:h-36 md:h-40" 
              src="/logo.svg" 
              alt="Logo"
            />
          </div>

       
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.to)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.to}
                  className="text-black hover:text-[#135192] font-medium transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} />}
                </Link>

                {/* Desktop Dropdown */}
                {link.dropdown && openDropdown === link.to && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#135192] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button
            className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm lg:text-base"
            style={{ backgroundColor: "#135192" }}
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-black hover:text-[#135192] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className="block text-black hover:text-[#135192] font-medium py-2 transition-colors flex items-center justify-between"
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.to ? null : link.to);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${
                        openDropdown === link.to ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Mobile Dropdown */}
                {link.dropdown && openDropdown === link.to && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block text-sm text-gray-600 hover:text-[#135192] py-2 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              className="w-full px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mt-2"
              style={{ backgroundColor: "#135192" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;