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
          padding: 2.5rem 0 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .footer-brand {
          max-width: 100%;
        }
        
        .footer-logo {
          width: 10rem;
          height: auto;
          margin-bottom: 1rem;
          margin-left: -1.25rem;
        }
        
        .footer-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.25rem;
          margin-top: -1rem;
        }
        
        .social-links {
          display: flex;
          gap: 0.625rem;
          flex-wrap: wrap;
        }
        
        .social-icon {
          width: 2.25rem;
          height: 2.25rem;
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
          width: 1rem;
          height: 1rem;
        }
        
        .footer-section-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          padding-bottom: 0.625rem;
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
          margin-bottom: 0.625rem;
        }
        
        .footer-link {
          font-size: 0.875rem;
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
          width: 0.75rem;
          height: 0.75rem;
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
          gap: 0.75rem;
          margin-bottom: 0.875rem;
          padding: 0.625rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(4px);
        }
        
        .contact-icon {
          width: 2rem;
          height: 2rem;
          min-width: 2rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-icon svg {
          width: 1rem;
          height: 1rem;
        }
        
        .contact-text {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }
        
        .contact-link {
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.2s ease;
        }
        
        .contact-link:hover {
          color: #fff;
        }
        
        .newsletter-wrapper {
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-section {
          background: rgba(255, 255, 255, 0.08);
          padding: 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-title {
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .newsletter-description {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
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
          width: 100%;
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
          width: 100%;
        }
        
        .newsletter-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .footer-bottom {
          padding: 1.5rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        
        .footer-copyright {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer-bottom-link {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s ease;
        }
        
        .footer-bottom-link:hover {
          color: #fff;
        }
        
        /* Small Mobile (360px+) - Better spacing for very small screens */
        @media (min-width: 360px) {
          .footer-container {
            padding: 0 1.25rem;
          }
          
          .footer-logo {
            width: 11rem;
          }
        }
        
        /* Mobile Landscape / Small Tablet (480px+) */
        @media (min-width: 480px) {
          .footer-main {
            padding: 2.75rem 0 2.25rem;
          }
          
          .footer-logo {
            width: 12rem;
          }
          
          .footer-description {
            font-size: 0.9375rem;
          }
          
          .social-icon {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .social-icon svg {
            width: 1.125rem;
            height: 1.125rem;
          }
          
          .footer-section-title {
            font-size: 1.0625rem;
          }
          
          .footer-link {
            font-size: 0.9375rem;
          }
          
          .contact-text {
            font-size: 0.9375rem;
          }
          
          .newsletter-form {
            flex-direction: row;
          }
          
          .newsletter-button {
            width: auto;
          }
        }
        
        /* Tablet (640px+) */
        @media (min-width: 640px) {
          .footer-container {
            padding: 0 1.5rem;
          }
          
          .footer-main {
            padding: 3rem 0 2.5rem;
          }
          
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
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
          
          .newsletter-wrapper {
            padding: 2rem 0;
          }
          
          .newsletter-section {
            padding: 1.5rem;
          }
          
          .footer-bottom {
            padding: 2rem 0;
          }
        }
        
        /* Medium Tablet (768px+) */
        @media (min-width: 768px) {
          .footer-container {
            padding: 0 2rem;
          }
          
          .footer-main {
            padding: 3.5rem 0 3rem;
          }
          
          .footer-grid {
            gap: 3rem;
          }
          
          .footer-section-title {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }
          
          .contact-icon {
            width: 2.25rem;
            height: 2.25rem;
          }
          
          .contact-icon svg {
            width: 1.125rem;
            height: 1.125rem;
          }
        }
        
        /* Large Tablet / Small Desktop (1024px+) */
        @media (min-width: 1024px) {
          .footer-main {
            padding: 4rem 0 3.5rem;
          }
          
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
            gap: 3rem;
          }
          
          .footer-logo {
            width: 14rem;
            margin-top: -5rem;
          }
          
          .footer-description {
            margin-top: -4.5rem;
          }
          
          .footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
          
          .footer-bottom-links {
            justify-content: flex-end;
          }
        }
        
        /* Desktop (1280px+) */
        @media (min-width: 1280px) {
          .footer-container {
            padding: 0 2.5rem;
          }
          
          .footer-grid {
            gap: 4rem;
          }
          
          .newsletter-section {
            padding: 1.75rem 2rem;
          }
        }
        
        /* Large Desktop (1536px+) */
        @media (min-width: 1536px) {
          .footer-container {
            padding: 0 3rem;
          }
          
          .footer-main {
            padding: 4.5rem 0 4rem;
          }
          
          .footer-grid {
            gap: 5rem;
          }
        }
        
        /* Extra attention to very small screens */
        @media (max-width: 359px) {
          .footer-container {
            padding: 0 0.75rem;
          }
          
          .footer-main {
            padding: 2rem 0 1.75rem;
          }
          
          .footer-logo {
            width: 5rem;
          }
          
          .footer-description {
            font-size: 0.8125rem;
          }
          
          .social-icon {
            width: 2rem;
            height: 2rem;
          }
          
          .social-icon svg {
            width: 0.875rem;
            height: 0.875rem;
          }
          
          .newsletter-section {
            padding: 1rem;
          }
          
          .footer-bottom-links {
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className="footer-container ">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            
            {/* Brand Section */}
            <div className="footer-brand ">
              <img
                className="footer-logo -mt-18"
                src="/logo.svg"
                alt="Easy To Compliance Logo"
              />

              <div className="-mt-15">
              <p className="footer-description ">
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
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-section-title">Quick Links</h3>
              <ul>
                {[
               
                  { name: "About Us", path: "/about" },
                  { name: "Compliance", path: "/compliance" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" },
             
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
                  { name: "Accounting Services", path: "/services/accounting" },
                  { name: "Audit Services", path: "/services/audit" },
                  { name: "Payroll Management", path: "/services/payroll" },
                  { name: "Consulting", path: "/services/consulting" },
              
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
        <div className="newsletter-wrapper">
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
              <Link to="#" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="#" className="footer-bottom-link">Terms of Service</Link>
              <Link to="#" className="footer-bottom-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;