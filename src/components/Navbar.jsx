import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // ← desktop sub-dropdown
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close menu on resize to desktop (lg = 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
        setMobileOpenSubDropdown(null);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    {
      to: "/compliance",
      label: "Compliance",
      dropdown: [
        { to: "/compliance/gst-compliance", label: "GST Compliance" },
        { to: "/compliance/income-tax-compliance", label: "Income Tax" },
        { to: "/compliance/corporate-compliance", label: "Corporate Compliance" },
        { to: "/compliance/labour-law-compliance", label: "Labor Laws" },
      ],
    },
    {
      to: "#",
      label: "Services",
      dropdown: [
        { to: "/services/accounting", label: "Accounting Services" },
        { to: "/services/audit", label: "Audit Services" },
        { to: "/services/consulting", label: "Consulting" },
        { to: "/services/payroll", label: "Payroll Management" },
                { to:"/services/financeLoanConsultancyService", label:"Finance & Loan Consultancy Services"},

        {
          to: "#",
          label: "Corporate Consultancy",
          subDropdown: [
            { to: "/services/smeIpo", label: "SME IPO" },
            { to: "/services/dueDiligence", label: "Due Diligence" },
          ],
        },
      ],
    },
    {
      to: "#regulatory",
      label: "Regulatory",
      dropdown: [
        { to: "/regulatory/fema", label: "FEMA" },
        { to: "/regulatory/rbi", label: "RBI Guidelines" },
        { to: "/regulatory/sebi", label: "SEBI Regulations" },
        { to: "/regulatory/mca", label: "MCA Compliance" },
      ],
    },
    { to: "/documents", label: "Documents" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-[68px] lg:h-20">

            {/* ── Logo ── */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
              <img
                className="h-30 sm:h-20 md:h-30 lg:h-30 xl:h-30 w-auto"
                src="/logo3.svg"
                alt="Logo"
              />
              </Link>
            </div>

            {/* ── Desktop Nav Links (lg and above only) ── */}
            <div className="hidden lg:flex items-center space-x-0.5 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.to)}
                  onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-800 hover:text-[#135192] font-medium transition-colors flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-md hover:bg-blue-50 text-[13px] xl:text-sm 2xl:text-base whitespace-nowrap"
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.to ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.dropdown && openDropdown === link.to && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        {link.dropdown.map((item) => (
                          <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.subDropdown && setOpenSubDropdown(item.label)}
                            onMouseLeave={() => item.subDropdown && setOpenSubDropdown(null)}
                          >
                            {item.subDropdown ? (
                              // Render a div (not Link) for items that have a sub-dropdown
                              <div className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#135192] transition-colors flex items-center justify-between cursor-pointer">
                                {item.label}
                                <ChevronDown size={12} className="-rotate-90" />
                              </div>
                            ) : (
                              <Link
                                to={item.to}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#135192] transition-colors"
                              >
                                {item.label}
                              </Link>
                            )}

                            {/* Nested Sub-Dropdown */}
                            {item.subDropdown && openSubDropdown === item.label && (
                              <div className="absolute left-full top-0 pl-1 z-50">
                                <div className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                  {item.subDropdown.map((subItem) => (
                                    <Link
                                      key={subItem.to}
                                      to={subItem.to}
                                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#135192] transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Desktop CTA (lg and above) ── */}
            <Link to="/contact" className="hidden lg:block flex-shrink-0">
              <button
                className="px-4 xl:px-5 py-2 text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all text-sm xl:text-base whitespace-nowrap"
                style={{ backgroundColor: "#135192" }}
              >
                Contact Us
              </button>
            </Link>

            {/* ── Hamburger: visible on md and below (up to lg) ── */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#135192] hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile/Tablet Slide-in Menu (up to lg) ── */}
      <div
        ref={dropdownRef}
        className={`
          fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-white z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          lg:hidden overflow-y-auto
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile/Tablet menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-[#135192] hover:bg-blue-50 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Items */}
        <div className="px-4 md:px-5 py-4 space-y-0.5">
          {navLinks.map((link) => (
            <div key={link.to} className="border-b border-gray-50 last:border-0">
              {link.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between text-gray-800 hover:text-[#135192] font-medium py-3 px-3 rounded-lg hover:bg-blue-50 transition-colors text-left text-[15px] md:text-base"
                    onClick={() => {
                      // When closing a parent, also close any open sub-dropdown
                      if (mobileOpenDropdown === link.to) {
                        setMobileOpenDropdown(null);
                        setMobileOpenSubDropdown(null);
                      } else {
                        setMobileOpenDropdown(link.to);
                      }
                    }}
                    aria-expanded={mobileOpenDropdown === link.to}
                  >
                    {link.label}
                    <ChevronDown
                      size={17}
                      className={`transform transition-transform duration-200 flex-shrink-0 ${
                        mobileOpenDropdown === link.to ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileOpenDropdown === link.to
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-3 pb-2 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <div key={item.to}>
                          {item.subDropdown ? (
                            <>
                              {/* Corporate Consultancy with Sub-dropdown */}
                              <button
                                className="w-full flex items-center justify-between gap-2.5 text-sm md:text-[15px] text-gray-600 hover:text-[#135192] hover:bg-blue-50 py-2.5 px-3 rounded-lg transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Toggle sub-dropdown using its own dedicated state
                                  setMobileOpenSubDropdown(
                                    mobileOpenSubDropdown === item.label ? null : item.label
                                  );
                                }}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#135192] opacity-60 flex-shrink-0" />
                                  {item.label}
                                </div>
                                <ChevronDown
                                  size={14}
                                  className={`transform transition-transform duration-200 flex-shrink-0 ${
                                    mobileOpenSubDropdown === item.label ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              
                              {/* Sub-dropdown items — keyed by item.label, not item.to */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                  mobileOpenSubDropdown === item.label
                                    ? "max-h-48 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="pl-6 space-y-0.5 pt-1">
                                  {item.subDropdown.map((subItem) => (
                                    <Link
                                      key={subItem.to}
                                      to={subItem.to}
                                      className="flex items-center gap-2 text-xs md:text-sm text-gray-600 hover:text-[#135192] hover:bg-blue-50 py-2 px-3 rounded-lg transition-colors"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setMobileOpenDropdown(null);
                                        setMobileOpenSubDropdown(null);
                                      }}
                                    >
                                      <span className="w-1 h-1 rounded-full bg-[#135192] opacity-50 flex-shrink-0" />
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              to={item.to}
                              className="flex items-center gap-2.5 text-sm md:text-[15px] text-gray-600 hover:text-[#135192] hover:bg-blue-50 py-2.5 px-3 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileOpenDropdown(null);
                                setMobileOpenSubDropdown(null);
                              }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#135192] opacity-60 flex-shrink-0" />
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className="block text-gray-800 hover:text-[#135192] font-medium py-3 px-3 rounded-lg hover:bg-blue-50 transition-colors text-[15px] md:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-5 pb-8 pt-3">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <button
              className="w-full py-3 md:py-3.5 text-white font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all text-base"
              style={{ backgroundColor: "#135192" }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar; 