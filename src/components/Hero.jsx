import React from 'react';
import { Coffee, MapPin, MessageSquare, Sparkles, Compass, Moon } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Decorative ambient background glows */}
      <div className="ambient-glow glow-top" />
      <div className="ambient-glow glow-bottom" />

      {/* SVG Zigzag String Lights across the top */}
      <div className="festoon-lights" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="lights-wire">
          <path d="M0,25 Q360,70 720,25 T1440,25" stroke="rgba(255, 200, 120, 0.3)" strokeWidth="1.5" />
          {/* Light bulbs positioned along wire */}
          {[120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320].map((cx, i) => {
            const cy = 25 + 40 * Math.sin((cx / 720) * Math.PI);
            return (
              <g key={i} className="bulb-group">
                <circle cx={cx} cy={cy} r="5" fill="#FFE5A3" className="bulb-glow" />
                <circle cx={cx} cy={cy} r="12" fill="rgba(255, 185, 80, 0.3)" className="bulb-halo" />
                <line x1={cx} y1={cy - 6} x2={cx} y2={cy} stroke="#333" strokeWidth="2" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge-pill">
              <Sparkles size={14} color="var(--color-primary)" />
              {CAFE_INFO.tagline}
            </span>
            <span className="badge-pill badge-green">
              <span className="live-dot" />
              Garden Open in Goviyapana
            </span>
          </div>

          <h1 className="hero-headline">
            GOOD COFFEE.
            <br />
            <span className="text-highlight">GOOD MOOD.</span>
          </h1>

          <p className="hero-subheading">
            Your little garden coffee spot in Ahangama.
          </p>

          <p className="hero-description">
            Tucked away under southern Sri Lankan palms, M26 MINI CAFE 26 serves artisanal espresso, chilled brews, and authentic spiced chai from our signature matte black coffee cart.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary hero-btn-primary">
              <Coffee size={18} />
              <span>Explore Our Menu</span>
            </a>

            <a
              href={CAFE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPin size={18} color="var(--color-primary)" />
              <span>Find Us</span>
            </a>

            <a
              href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=${encodeURIComponent(CAFE_INFO.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageSquare size={18} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="hero-quick-meta">
            <div className="meta-item">
              <span className="meta-value">100%</span>
              <span className="meta-label">Outdoor Garden Vibe</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-value">Goviyapana</span>
              <span className="meta-label">Ahangama, Sri Lanka</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-value">M26 Cart</span>
              <span className="meta-label">Coffee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Coffee Cart & Night Garden Card */}
        <div className="hero-visual">
          <div className="visual-card">
            {/* Visual representation of M26 Black Coffee Cart & Garden */}
            <div className="cart-illustration-wrapper">
              <div className="garden-backdrop">
                {/* Tropical plants silhouette & moonlight */}
                <div className="glowing-moon" title="M26 Glowing Moon Photo Corner">
                  <div className="moon-inner">
                    <Moon size={32} className="moon-icon" />
                    <span>Photo Corner</span>
                  </div>
                </div>

                {/* Warm string light simulation */}
                <div className="string-light-arc">
                  <span className="string-bulb b1" />
                  <span className="string-bulb b2" />
                  <span className="string-bulb b3" />
                  <span className="string-bulb b4" />
                </div>
              </div>

              {/* The Matte Black M26 Coffee Cart Showcase */}
              <div className="m26-coffee-cart">
                <div className="cart-canopy">
                  <span className="canopy-stripes" />
                  <div className="cart-brand-tag"> MINI CAFE 26</div>
                </div>

                <div className="cart-body">
                  <div className="cart-front-panel">
                    <img 
                      src="/m26-logo.jpg" 
                      alt="M26 Official Logo" 
                      className="cart-front-logo"
                    />
                    <div className="espresso-machine-top">
                      <div className="steam-line s1" />
                      <div className="steam-line s2" />
                    </div>
                  </div>

                  {/* Takeaway cup showcase with M26 logo */}
                  <div className="takeaway-cups-row">
                    <div className="takeaway-cup primary-cup">
                      <span className="cup-lid" />
                      <div className="cup-body">
                        <img 
                          src="/m26-logo.jpg" 
                          alt="M26 Logo" 
                          className="cup-logo-stamp"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-wheels">
                  <div className="wheel left-wheel" />
                  <div className="wheel right-wheel" />
                </div>
              </div>

              {/* Garden Stone Pathway & Folded Chairs Badge */}

              <div className="garden-floating-pill bottom-left">
                <Compass size={14} color="var(--color-primary)" />
                <span>Near Goviyapana Surf Spot - yoyo
                </span>
              </div>
            </div>

            <div className="visual-card-footer">
              <div className="footer-vibe">
                <span className="vibe-title">The Real M26 Boutique Cart</span>
                <span className="vibe-text">Garden seating, stone pathways & open tropical sky</span>
              </div>
              <div className="vibe-stamp">AHANGAMA</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          display: flex;
          align-items: center;
          position: relative;
          background: radial-gradient(circle at 80% 20%, rgba(230, 106, 43, 0.08) 0%, transparent 60%),
                      radial-gradient(circle at 10% 70%, rgba(139, 90, 43, 0.06) 0%, transparent 50%),
                      var(--color-bg);
          overflow: hidden;
        }

        .festoon-lights {
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          height: 90px;
          pointer-events: none;
          z-index: 10;
        }

        .lights-wire {
          width: 100%;
          height: 100%;
        }

        .bulb-halo {
          animation: pulseSubtle 3s ease-in-out infinite alternate;
        }

        .glow-top {
          top: 5%;
          right: 15%;
          background: rgba(230, 106, 43, 0.12);
        }

        .glow-bottom {
          bottom: 10%;
          left: 5%;
          background: rgba(255, 179, 71, 0.08);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #2ECC71;
          display: inline-block;
          box-shadow: 0 0 8px #2ECC71;
          animation: pulseSubtle 1.8s infinite;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.35rem, 4.4vw, 3.65rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.15rem;
          letter-spacing: -0.025em;
          color: var(--color-cream);
        }

        .text-highlight {
          color: var(--color-primary);
          position: relative;
          display: inline-block;
          font-weight: 800;
        }

        .hero-subheading {
          font-family: var(--font-serif);
          font-size: clamp(1.25rem, 2.1vw, 1.7rem);
          font-style: italic;
          font-weight: 600;
          color: var(--color-cream);
          margin-bottom: 1.35rem;
          letter-spacing: 0.015em;
          line-height: 1.35;
        }

        .hero-description {
          font-family: var(--font-body);
          font-size: 1.025rem;
          line-height: 1.75;
          color: var(--color-cream-muted);
          max-width: 530px;
          margin-bottom: 2.25rem;
          letter-spacing: -0.005em;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.75rem;
        }

        .hero-btn-primary {
          padding: 0.9rem 1.9rem;
          font-size: 0.95rem;
        }

        .hero-quick-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--color-border);
          width: 100%;
          max-width: 520px;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .meta-value {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-primary-light);
          letter-spacing: -0.01em;
        }

        .meta-label {
          font-family: var(--font-body);
          font-size: 0.775rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .meta-divider {
          width: 1px;
          height: 32px;
          background-color: var(--color-border);
        }

        /* Hero Visual Graphic */
        .hero-visual {
          width: 100%;
        }

        .visual-card {
          background: linear-gradient(145deg, #181A1F 0%, #111215 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          position: relative;
          overflow: hidden;
        }

        .visual-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          padding: 1px;
          background: linear-gradient(135deg, rgba(230, 106, 43, 0.4), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .cart-illustration-wrapper {
          background: radial-gradient(circle at 50% 80%, #20242B 0%, #0E1012 85%);
          border-radius: var(--radius-md);
          min-height: 380px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 2rem 1.5rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .garden-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Glowing Moon Photo Corner */
        .glowing-moon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #FFF6DF, #E6A244 80%);
          box-shadow: 0 0 35px rgba(255, 210, 130, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatSoft 5s ease-in-out infinite;
        }

        .moon-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #2D1A08;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .moon-icon {
          color: #5C3A12;
          margin-bottom: 2px;
        }

        /* String bulbs in visual */
        .string-light-arc {
          position: absolute;
          top: 15px;
          left: 10%;
          display: flex;
          gap: 24px;
        }

        .string-bulb {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #FFE89E;
          box-shadow: 0 0 12px #FFA834;
        }

        .b1 { animation: stringLightFlicker 2s infinite; }
        .b2 { animation: stringLightFlicker 3s infinite 0.5s; }
        .b3 { animation: stringLightFlicker 2.5s infinite 1s; }
        .b4 { animation: stringLightFlicker 2.8s infinite 1.5s; }

        /* The M26 Matte Black Coffee Cart CSS artwork */
        .m26-coffee-cart {
          position: relative;
          z-index: 5;
          width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cart-canopy {
          width: 230px;
          height: 38px;
          background: #141414;
          border-top: 3px solid var(--color-primary);
          border-radius: 6px 6px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.4);
        }

        .cart-brand-tag {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--color-cream);
        }

        .cart-body {
          width: 220px;
          background: #111215;
          border: 2px solid #282C34;
          border-radius: 4px;
          padding: 1rem 0.8rem;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .cart-front-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }

        .cart-front-logo {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          object-fit: contain;
          box-shadow: 0 0 18px rgba(230, 106, 43, 0.4);
        }

        .espresso-machine-top {
          position: absolute;
          top: -15px;
          left: 20px;
          width: 44px;
          height: 14px;
          background: #3A3F4A;
          border-radius: 2px;
        }

        .steam-line {
          position: absolute;
          width: 3px;
          height: 10px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 3px;
          top: -12px;
          filter: blur(1px);
        }
        .s1 { left: 12px; animation: floatSoft 2s infinite; }
        .s2 { left: 24px; animation: floatSoft 2.4s infinite 0.6s; }

        .takeaway-cups-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }

        .takeaway-cup {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .primary-cup .cup-lid {
          width: 48px;
          height: 7px;
          background: #2D313A;
          border-radius: 3px 3px 0 0;
        }

        .primary-cup .cup-body {
          width: 44px;
          height: 60px;
          background: #0E0F12;
          border: 1px solid var(--color-primary);
          border-radius: 0 0 7px 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
        }

        .cup-logo-stamp {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: contain;
        }

        .cart-wheels {
          display: flex;
          justify-content: space-between;
          width: 190px;
          margin-top: -6px;
        }

        .wheel {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #1B1E24;
          border: 3px solid #3E4452;
          position: relative;
        }

        .wheel::after {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          background: var(--color-primary);
        }

        .garden-floating-pill {
          position: absolute;
          padding: 0.4rem 0.85rem;
          background: rgba(18, 20, 24, 0.9);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--color-cream);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        }

        .top-right {
          top: 1.5rem;
          left: 1.5rem;
        }

        .bottom-left {
          bottom: 1.5rem;
          left: 1.5rem;
        }

        .pill-dot.amber {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFAE33;
          box-shadow: 0 0 8px #FFAE33;
        }

        .visual-card-footer {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .vibe-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-cream);
          display: block;
        }

        .vibe-text {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .vibe-stamp {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--color-primary);
          padding: 0.3rem 0.6rem;
          border: 1px dashed var(--color-primary);
          border-radius: 4px;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-badges {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-quick-meta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
