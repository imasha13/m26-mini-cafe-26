import React from 'react';
import { Moon, Sparkles, Footprints, Wind, Sun, Camera } from 'lucide-react';
import { GARDEN_FEATURES } from '../data/cafeData';

export const GardenExperience = () => {
  return (
    <section className="section garden-section" id="garden">
      {/* Warm ambient garden lighting simulation */}
      <div className="ambient-glow garden-glow-left" />
      <div className="ambient-glow garden-glow-right" />

      <div className="container">
        {/* Section Header */}
        <div className="garden-header">
          <span className="badge-pill">
            <Sparkles size={14} color="var(--color-primary)" />
            Outdoor Tropical Atmosphere
          </span>
          <h2 className="garden-title">Your Little Escape in Ahangama.</h2>
          <p className="garden-subtitle">
            An open-air garden setting under coconut trees in Goviyapana. Stone pathways beneath your feet, warm zigzag bulbs overhead, and the soothing hum of coastal nights.
          </p>
        </div>

        {/* Garden Feature Cards Showcase */}
        <div className="garden-grid">
          {GARDEN_FEATURES.map((feature, index) => (
            <div key={feature.id} className="garden-card">
              <div className="garden-card-index">0{index + 1}</div>

              <div className="garden-card-body">
                <span className="garden-card-subtitle">{feature.subtitle}</span>
                <h3 className="garden-card-title">{feature.title}</h3>
                <p className="garden-card-desc">{feature.description}</p>
              </div>

              {/* Decorative graphic elements inside cards */}
              {feature.id === 'moon-corner' && (
                <div className="card-mini-visual moon-visual">
                  <div className="mini-moon">
                    <Moon size={22} color="#4A2E0F" />
                  </div>
                  <span className="visual-caption">Iconic Glowing Photo Corner</span>
                </div>
              )}

              {feature.id === 'zigzag-lights' && (
                <div className="card-mini-visual string-visual">
                  <div className="wire-sim">
                    <span className="bulb-dot" />
                    <span className="bulb-dot" />
                    <span className="bulb-dot" />
                    <span className="bulb-dot" />
                  </div>
                  <span className="visual-caption">Warm Zigzag Lighting</span>
                </div>
              )}

              {feature.id === 'coffee-cart' && (
                <div className="card-mini-visual cart-visual">
                  <div className="mini-cart-box">
                    <span className="cart-txt">M26 CART</span>
                  </div>
                  <span className="visual-caption">Matte Black Coffee Cart</span>
                </div>
              )}

              {feature.id === 'outdoor-seating' && (
                <div className="card-mini-visual seating-visual">
                  <div className="pathway-sim">
                    <span className="stone-shape" />
                    <span className="stone-shape" />
                    <span className="stone-shape" />
                  </div>
                  <span className="visual-caption">Grass & Stone Pathways</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Realistic Garden Environment Callout */}
        <div className="garden-callout-banner">
          <div className="callout-left">
            <Camera size={26} color="var(--color-primary)" />
            <div>
              <h4 className="callout-title">Capture Your Moment at the Glowing Moon</h4>
              <p className="callout-text">
                Don't forget to take a photo at our signature moon installation and tag us on Instagram <strong>@m26minicafe</strong>.
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/m26minicafe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>

      <style>{`
        .garden-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }

        .garden-glow-left {
          top: 20%;
          left: -100px;
          background: rgba(230, 106, 43, 0.08);
        }

        .garden-glow-right {
          bottom: 10%;
          right: -100px;
          background: rgba(255, 179, 71, 0.06);
        }

        .garden-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .garden-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.6vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .garden-subtitle {
          font-family: var(--font-body);
          color: var(--color-cream-muted);
          font-size: 1.025rem;
          line-height: 1.7;
          letter-spacing: -0.005em;
        }

        .garden-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .garden-card {
          background: #111317;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all var(--transition-normal);
        }

        .garden-card:hover {
          border-color: rgba(230, 106, 43, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .garden-card-index {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: rgba(230, 106, 43, 0.35);
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .garden-card-subtitle {
          font-family: var(--font-body);
          font-size: 0.775rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary-light);
          margin-bottom: 0.4rem;
          display: block;
        }

        .garden-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
          color: var(--color-cream);
          letter-spacing: -0.02em;
          line-height: 1.3;
        }

        .garden-card-desc {
          font-family: var(--font-body);
          font-size: 0.925rem;
          color: var(--color-cream-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* Card Mini Visual Elements */
        .card-mini-visual {
          background: rgba(13, 14, 16, 0.7);
          border: 1px dashed var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .visual-caption {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .mini-moon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #FFE9B3, #E69F35);
          box-shadow: 0 0 16px rgba(255, 185, 80, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wire-sim {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .bulb-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #FFD272;
          box-shadow: 0 0 10px #FF9F1C;
        }

        .mini-cart-box {
          background: #191B20;
          border: 1.5px solid var(--color-primary);
          padding: 0.35rem 0.85rem;
          border-radius: 6px;
        }

        .cart-txt {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--color-cream);
          letter-spacing: 0.1em;
        }

        .pathway-sim {
          display: flex;
          gap: 6px;
        }

        .stone-shape {
          width: 14px;
          height: 10px;
          border-radius: 4px;
          background: #3B414C;
        }

        /* Callout banner */
        .garden-callout-banner {
          background: linear-gradient(135deg, #181B20 0%, #101114 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .callout-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 650px;
        }

        .callout-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .callout-text {
          font-size: 0.9rem;
          color: var(--color-cream-muted);
        }

        @media (max-width: 860px) {
          .garden-grid {
            grid-template-columns: 1fr;
          }
          .callout-left {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
