import React from 'react';
import { Coffee, MapPin, Phone, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { CAFE_INFO } from '../data/cafeData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      {/* Decorative string bulb garland border */}
      <div className="footer-wire-decor" aria-hidden="true" />

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img 
                src="/m26-logo.jpg" 
                alt="M26 MINI CAFE 26 Logo" 
                className="footer-logo-img"
              />
              <div>
                <span className="footer-brand-name">{CAFE_INFO.brandName}</span>
                <span className="footer-brand-slogan">{CAFE_INFO.tagline}</span>
              </div>
            </div>

            <p className="footer-bio">
              A boutique outdoor garden coffee spot in Goviyapana, Ahangama, Sri Lanka. Serving freshly pulled espresso, iced brews, and authentic Ceylon chai from our signature matte black coffee cart.
            </p>

            <div className="footer-social-links">
              <a
                href={CAFE_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Follow M26 on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={CAFE_INFO.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Follow M26 on Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              {CAFE_INFO.contact.tiktok && (
                <a
                  href={CAFE_INFO.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Follow M26 on TikTok"
                >
                  <TikTokIcon size={18} />
                </a>
              )}
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=${encodeURIComponent(CAFE_INFO.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#menu">Garden Menu</a></li>
              <li><a href="#garden">Garden Experience</a></li>
              <li><a href="#takeaway">Dine-In & Takeaway</a></li>
              <li><a href="#location">Find Us in Goviyapana</a></li>
            </ul>
          </div>

          {/* Drink Highlights Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Favorites</h4>
            <ul className="footer-links-list">
              <li><a href="#menu">Amber Coconut Latte</a></li>
              <li><a href="#menu">Goviyapana Cold Brew</a></li>
              <li><a href="#menu">Ceylon Spiced Chai</a></li>
              <li><a href="#menu">Iced Spanish Latte</a></li>
              <li><a href="#menu">Ceremonial Matcha</a></li>
              <li><a href="#menu">King Coconut Cooler</a></li>
            </ul>
          </div>

          {/* Location & Hours Column */}
          <div className="footer-info-col">
            <h4 className="footer-col-title">Garden Location</h4>

            <div className="footer-contact-item">
              <MapPin size={16} color="var(--color-primary)" />
              <span>{CAFE_INFO.location.fullAddress}</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} color="var(--color-primary)" />
              <span>{CAFE_INFO.contact.phoneDisplay}</span>
            </div>

            <div className="footer-badge-hours">
              <span className="badge-pill badge-green">
                Open Daily: 7:00 AM – 9:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>{CAFE_INFO.brandName}</strong>. All rights reserved. Goviyapana, Ahangama, Sri Lanka.
          </p>

          <p className="footer-tagline-sub">
            {CAFE_INFO.secondarySlogan} • “GOOD COFFEE • GOOD MOOD”
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: #0A0B0D;
          border-top: 1px solid var(--color-border);
          padding-top: 5rem;
          padding-bottom: 2.5rem;
          position: relative;
        }

        .footer-wire-decor {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%);
          opacity: 0.6;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: contain;
          box-shadow: 0 0 16px rgba(230, 106, 43, 0.3);
        }

        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--color-cream);
          display: block;
        }

        .footer-brand-slogan {
          font-family: var(--font-body);
          font-size: 0.72rem;
          color: var(--color-primary-light);
          letter-spacing: 0.08em;
          display: block;
        }

        .footer-bio {
          font-family: var(--font-body);
          font-size: 0.885rem;
          color: var(--color-cream-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 380px;
        }

        .footer-social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #15171C;
          border: 1px solid var(--color-border);
          color: var(--color-cream);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: var(--color-primary);
          color: #0D0E10;
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-cream);
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-family: var(--font-body);
        }

        .footer-links-list a {
          font-size: 0.88rem;
          color: var(--color-cream-muted);
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--color-primary-light);
        }

        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.88rem;
          color: var(--color-cream-muted);
          margin-bottom: 0.85rem;
          line-height: 1.5;
        }

        .footer-badge-hours {
          margin-top: 1.25rem;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          font-size: 0.825rem;
          color: var(--color-text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright strong {
          color: var(--color-cream);
        }

        .footer-tagline-sub {
          font-size: 0.78rem;
          color: var(--color-primary-light);
          letter-spacing: 0.05em;
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          background: #15171C;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          color: var(--color-cream);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};
