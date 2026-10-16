import React from 'react';
import { Heart, Coffee, Leaf, Users, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const OurStory = () => {
  return (
    <section className="section story-section" id="story">
      <div className="container">
        <div className="story-grid">
          {/* Story Narrative */}
          <div className="story-content">
            <span className="badge-pill">
              <Heart size={14} color="var(--color-primary)" />
              Our Story & Passion
            </span>

            <h2 className="story-title">
              More Than Just Coffee — <br />
              <span className="story-highlight">A Little Place to Pause, Relax & Enjoy.</span>
            </h2>

            <p className="story-lead">
              M26 MINI CAFE 26 began with a clear and honest passion: bringing high-caliber espresso craft into the open, tranquil greenery of Goviyapana, Ahangama.
            </p>

            <p className="story-paragraph">
              We aren't an impersonal, loud indoor café. We are an outdoor garden sanctuary built around our signature matte black coffee cart. Here, surrounded by swaying palms, tropical foliage, and gentle sea breezes, every single cup is extracted with intention, balance, and care.
            </p>

            <div className="story-values">
              <div className="value-card">
                <div className="value-icon-box">
                  <Coffee size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="value-heading">Proper Extraction</h3>
                  <p className="value-desc">Freshly ground beans, calibrated pressure, and velvet-textured steamed milk.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon-box">
                  <Leaf size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="value-heading">Tropical Garden Harmony</h3>
                  <p className="value-desc">Relaxed outdoor garden seating, shaded by nature by day, glowing under string lights by night.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon-box">
                  <Users size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="value-heading">A Hangout for Everyone</h3>
                  <p className="value-desc">A welcoming hideaway for travelers, local friends, couples, and surfers fresh off the beach.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Visual Presentation Card */}
          <div className="story-card-wrapper">
            <div className="story-framed-card">
              <div className="card-ambient-backdrop">
                <div className="story-quote-mark">“</div>
                <blockquote className="quote-text">
                  “Good coffee changes the tone of your whole day. We built M26 to offer Ahangama an unhurried corner to sip, converse, and breathe.”
                </blockquote>
                
                <div className="quote-author-info">
                  <img 
                    src="/m26-logo.jpg" 
                    alt="M26 Official Logo" 
                    className="story-author-logo"
                  />
                  <div>
                    <span className="author-name">The M26 Team</span>
                    <span className="author-role">Goviyapana, Ahangama</span>
                  </div>
                </div>
              </div>

              {/* Garden detail snippet */}
              <div className="story-feature-list">
                <div className="feature-row">
                  <span className="feature-bullet" />
                  <span>Boutique Matte Black Espresso Cart</span>
                </div>
                <div className="feature-row">
                  <span className="feature-bullet" />
                  <span>Takeaway Cups with Official M26 Branding</span>
                </div>
                <div className="feature-row">
                  <span className="feature-bullet" />
                  <span>Wooden Folding Chairs & Open Lawn</span>
                </div>
                <div className="feature-row">
                  <span className="feature-bullet" />
                  <span>Warm Amber Festoon Bulbs & Glowing Moon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
          position: relative;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .story-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .story-title {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.4vw, 2.5rem);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .story-highlight {
          color: var(--color-primary-light);
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .story-lead {
          font-family: var(--font-body);
          font-size: 1.075rem;
          color: var(--color-cream);
          line-height: 1.7;
          font-weight: 400;
          letter-spacing: -0.005em;
        }

        .story-paragraph {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--color-cream-muted);
          line-height: 1.75;
          letter-spacing: -0.005em;
        }

        .story-values {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .value-card {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.1rem;
          background: rgba(13, 14, 16, 0.6);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: border-color var(--transition-fast);
        }

        .value-card:hover {
          border-color: rgba(230, 106, 43, 0.4);
        }

        .value-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(230, 106, 43, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-heading {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          color: var(--color-cream);
          letter-spacing: -0.015em;
        }

        .value-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        /* Framed Card on right */
        .story-card-wrapper {
          position: relative;
        }

        .story-framed-card {
          background: #111317;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }

        .card-ambient-backdrop {
          position: relative;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 1.75rem;
        }

        .story-quote-mark {
          font-family: var(--font-serif);
          font-size: 4.5rem;
          line-height: 1;
          color: var(--color-primary);
          opacity: 0.35;
          margin-bottom: -1.5rem;
        }

        .quote-text {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          line-height: 1.55;
          color: var(--color-cream);
          font-style: italic;
          font-weight: 500;
          margin-bottom: 1.5rem;
          letter-spacing: 0.01em;
        }

        .quote-author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .story-author-logo {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          object-fit: contain;
          box-shadow: 0 0 16px rgba(230, 106, 43, 0.3);
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
          display: block;
        }

        .author-role {
          font-size: 0.8rem;
          color: var(--color-primary-light);
        }

        .story-feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--color-cream-muted);
        }

        .feature-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
