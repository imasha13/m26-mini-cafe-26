import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Menu, X, Phone, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { CAFE_INFO } from '../data/cafeData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Garden Experience', href: '#garden' },
    { name: 'Takeaway & Order', href: '#takeaway' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="M26 MINI CAFE 26 Homepage">
          <img 
            src="/m26-logo.jpg" 
            alt="M26 MINI CAFE 26 Logo" 
            className="brand-logo-img"
          />
          <div className="brand-text">
            <span className="brand-title">{CAFE_INFO.brandName}</span>
            <span className="brand-sub">AHANGAMA • SRI LANKA</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a href="#menu" className="btn btn-primary nav-cta">
            <Coffee size={17} />
            <span>View Menu</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <a
                href={CAFE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mobile-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin size={17} color="var(--color-primary)" />
                <span>Get Directions (Goviyapana)</span>
              </a>

              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=${encodeURIComponent(CAFE_INFO.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-btn"
              >
                <Phone size={17} />
                <span>WhatsApp Us</span>
              </a>

              <div className="mobile-socials">
                <a href={CAFE_INFO.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href={CAFE_INFO.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
                {CAFE_INFO.contact.tiktok && (
                  <a href={CAFE_INFO.contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <TikTokIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-wrapper.scrolled {
          padding: 0.85rem 0;
          background: rgba(13, 14, 16, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(230, 106, 43, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .brand-logo-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: contain;
          box-shadow: 0 0 18px rgba(230, 106, 43, 0.35);
          transition: transform var(--transition-fast);
        }

        .brand-logo:hover .brand-logo-img {
          transform: rotate(5deg) scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--color-cream);
          line-height: 1.2;
        }

        .brand-sub {
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: var(--color-primary);
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 0.885rem;
          font-weight: 500;
          color: var(--color-cream-muted);
          transition: color var(--transition-fast);
          position: relative;
          padding: 0.25rem 0;
          letter-spacing: 0.005em;
        }

        .nav-link:hover {
          color: var(--color-primary-light);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-primary);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          padding: 0.6rem 1.4rem;
          font-size: 0.875rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--color-cream);
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: fixed;
          top: 74px;
          left: 0;
          width: 100%;
          height: calc(100vh - 74px);
          background: rgba(13, 14, 16, 0.98);
          backdrop-filter: blur(16px);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          z-index: 999;
          border-top: 1px solid var(--color-border);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .mobile-link {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-cream);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: auto;
        }

        .mobile-btn {
          width: 100%;
        }

        .mobile-socials {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1rem;
          color: var(--color-cream-muted);
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
