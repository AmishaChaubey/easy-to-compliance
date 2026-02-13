import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0d3d6b] via-[#135192] to-[#1a6bb8] text-white">
      <style jsx>{`
        /* Modern Footer Styles */
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-main {
          padding: 3rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        
        .footer-brand {
          max-width: 100%;
        }
        
        .footer-logo {
          width: 12rem;
          height: auto;
          margin-bottom: 1.25rem;
        }
        
        .footer-description {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        
        .social-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon svg {
          width: 1.125rem;
          height: 1.125rem;
        }
        
        .footer-section-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 2.5rem;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
        }
        
        .footer-link-item {
          margin-bottom: 0.75rem;
        }
        
        .footer-link {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.85);
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .footer-link:hover {
          color: #fff;
          transform: translateX(4px);
        }
        
        .footer-link svg {
          width: 0.875rem;
          height: 0.875rem;
          margin-left: 0.375rem;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        
        .footer-link:hover svg {
          opacity: 1;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(4px);
        }
        
        .contact-icon {
          width: 2.25rem;
          height: 2.25rem;
          min-width: 2.25rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-icon svg {
          width: 1.125rem;
          height: 1.125rem;
        }
        
        .contact-text {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        .contact-link {
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.2s ease;
        }
        
        .contact-link:hover {
          color: #fff;
        }
        
        .newsletter-section {
          background: rgba(255, 255, 255, 0.08);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .newsletter-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
        
        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }
        
        .newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          color: white;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .newsletter-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .newsletter-button {
          padding: 0.75rem 1.5rem;
          background: #fff;
          color: #135192;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .newsletter-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .footer-bottom {
          padding: 1.75rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        
        .footer-copyright {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer-bottom-link {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s ease;
        }
        
        .footer-bottom-link:hover {
          color: #fff;
        }
        
        /* Tablet Breakpoint (640px+) */
        @media (min-width: 640px) {
          .footer-container {
            padding: 0 1.5rem;
          }
          
          .footer-main {
            padding: 3.5rem 0;
          }
          
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
          
          .footer-logo {
            width: 13rem;
          }
          
          .social-icon {
            width: 2.75rem;
            height: 2.75rem;
          }
          
          .social-icon svg {
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .newsletter-form {
            flex-direction: row;
          }
          
          .footer-bottom {
            padding: 2rem 0;
          }
        }
        
        /* Desktop Breakpoint (1024px+) */
        @media (min-width: 1024px) {
          .footer-container {
            padding: 0 2rem;
          }
          
          .footer-main {
            padding: 4rem 0;
          }
          
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
            gap: 3rem;
          }
          
          .footer-logo {
            width: 14rem;
          }
          
          .footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        
        /* Large Desktop (1280px+) */
        @media (min-width: 1280px) {
          .footer-grid {
            gap: 4rem;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            
            {/* Brand Section */}
            <div className="footer-brand -mt-20">
              <img
                className="footer-logo -ml-5"
                src="/logo.svg"
                alt="Easy To Compliance Logo"
              />
              <p className="footer-description -mt-18">
                Your trusted partner for tax compliance and regulatory filings. We simplify complex processes so you can focus on growing your business with confidence.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-section-title">Quick Links</h3>
              <ul>
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" },
                  { name: "Careers", path: "/careers" }
                ].map((link) => (
                  <li key={link.name} className="footer-link-item">
                    <Link to={link.path} className="footer-link">
                      {link.name}
                      <ArrowRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="footer-section-title">Our Services</h3>
              <ul>
                {[
                  { name: "Tax Preparation", path: "/services/tax-preparation" },
                  { name: "Tax Planning", path: "/services/tax-planning" },
                  { name: "GST Services", path: "/services/gst" },
                  { name: "Company Registration", path: "/services/registration" },
                  { name: "Compliance Audit", path: "/services/audit" },
                  { name: "Payroll Services", path: "/services/payroll" }
                ].map((service) => (
                  <li key={service.name} className="footer-link-item">
                    <Link to={service.path} className="footer-link">
                      {service.name}
                      <ArrowRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="footer-section-title">Get In Touch</h3>
              
              {/* Contact Info */}
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className="contact-text">
                  Galaxy Diamond Plaza,<br />
                  Noida, Uttar Pradesh
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <a href="tel:+919999999999" className="contact-link contact-text">
                  +91 9999999999
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <a href="mailto:info@easytocompliance.com" className="contact-link contact-text">
                  info@easytocompliance.com
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div className="contact-text">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Full Width */}
        <div style={{ padding: '2rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="newsletter-section">
            <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
            <p className="newsletter-description">
              Stay updated with the latest tax regulations and compliance news
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 EasyToCompliance. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;