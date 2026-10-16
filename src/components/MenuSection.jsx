import React, { useState } from 'react';
import { Coffee, GlassWater, Flower2, Flame, Sun, PlusCircle, Sparkles, AlertCircle } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/cafeData';

export const MenuSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('signature');

  // Map category icons to lucide-react components
  const renderCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Coffee': return <Coffee size={18} />;
      case 'GlassWater': return <GlassWater size={18} />;
      case 'Flower2': return <Flower2 size={18} />;
      case 'Flame': return <Flame size={18} />;
      case 'Sun': return <Sun size={18} />;
      case 'PlusCircle': return <PlusCircle size={18} />;
      default: return <Coffee size={18} />;
    }
  };

  const activeCategory = MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) || MENU_CATEGORIES[0];

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        {/* Section Header */}
        <div className="menu-header">
          <span className="badge-pill">
            <Coffee size={14} color="var(--color-primary)" />
            Freshly Extracted & Crafted
          </span>
          <h2 className="menu-title">Explore Our Garden Menu</h2>
          <p className="menu-subtitle">
            From calibrated espresso shots and slow-drip cold brews to spiced Ceylon chai and tropical coolers.
          </p>

          <div className="menu-notice">
            <AlertCircle size={16} color="var(--color-primary)" />
            <span>Prices are in Sri Lankan Rupees (LKR). Items are freshly prepared at our Goviyapana garden cart.</span>
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="category-tabs-container">
          <div className="category-tabs">
            {MENU_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategoryId(category.id)}
                  aria-pressed={isActive}
                >
                  <span className="tab-icon">{renderCategoryIcon(category.icon)}</span>
                  <span className="tab-name">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Cards Grid */}
        <div className="menu-grid">
          {activeCategory.items.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-header">
                <div className="item-title-group">
                  <h3 className="item-name">{item.name}</h3>
                  {item.tag && (
                    <span className="item-tag-badge">{item.tag}</span>
                  )}
                  {item.isPopular && (
                    <span className="item-popular-badge">Popular</span>
                  )}
                </div>
                <div className="item-price">
                  <span className="currency">LKR</span>
                  <span className="amount">{item.priceLKR}</span>
                </div>
              </div>

              <p className="item-description">{item.description}</p>

              <div className="item-card-footer">
                <div className="cup-type-indicator">
                  <Coffee size={13} color="var(--color-primary)" />
                  <span>M26 Garden Cart Prep</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Action Prompt */}
        <div className="menu-bottom-cta">
          <div className="menu-cta-card">
            <div className="cta-text-side">
              <h3 className="cta-heading">Looking for custom milk or syrup?</h3>
              <p className="cta-sub">We offer Oat Milk, Almond Milk, natural Kithul Treacle, and flavored syrups on request.</p>
            </div>
            <a 
              href="#takeaway" 
              className="btn btn-outline"
            >
              Order & Takeaway Info
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .menu-section {
          background-color: var(--color-bg);
          position: relative;
        }

        .menu-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .menu-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.6vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .menu-subtitle {
          font-family: var(--font-body);
          color: var(--color-cream-muted);
          font-size: 1.025rem;
          line-height: 1.65;
          letter-spacing: -0.005em;
        }

        .menu-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(230, 106, 43, 0.08);
          border: 1px dashed rgba(230, 106, 43, 0.3);
          border-radius: var(--radius-full);
          padding: 0.45rem 1.15rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-cream-muted);
          margin-top: 0.5rem;
        }

        /* Tabs */
        .category-tabs-container {
          overflow-x: auto;
          padding-bottom: 1.5rem;
          margin-bottom: 2.5rem;
          -webkit-overflow-scrolling: touch;
        }

        .category-tabs {
          display: flex;
          gap: 0.65rem;
          min-width: max-content;
          justify-content: center;
          padding: 0.3rem;
        }

        .category-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.7rem 1.35rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          color: var(--color-cream-muted);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .category-tab-btn:hover {
          background: var(--color-surface-hover);
          color: var(--color-cream);
          border-color: rgba(230, 106, 43, 0.4);
        }

        .category-tab-btn.active {
          background: var(--color-primary);
          color: #0D0E10;
          border-color: var(--color-primary);
          box-shadow: 0 4px 18px rgba(230, 106, 43, 0.35);
        }

        .category-tab-btn.active .tab-icon {
          color: #0D0E10;
        }

        /* Menu Grid */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        .menu-card {
          background: var(--color-surface-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .menu-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 106, 43, 0.4);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
        }

        .menu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .item-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .item-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-cream);
          line-height: 1.35;
          letter-spacing: -0.015em;
        }

        .item-tag-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-primary-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-popular-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(230, 106, 43, 0.2);
          border: 1px solid var(--color-primary);
          color: var(--color-primary-light);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .item-price {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          background: #0E0F12;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          flex-shrink: 0;
        }

        .item-price .currency {
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .item-price .amount {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-cream);
          letter-spacing: -0.01em;
        }

        .item-description {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-cream-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .item-card-footer {
          padding-top: 0.85rem;
          border-top: 1px dashed var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cup-type-indicator {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        /* Bottom Promo Box */
        .menu-bottom-cta {
          margin-top: 3.5rem;
        }

        .menu-cta-card {
          background: linear-gradient(135deg, #181B20 0%, #121316 100%);
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-primary);
          border-radius: var(--radius-md);
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cta-heading {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .cta-sub {
          font-size: 0.9rem;
          color: var(--color-cream-muted);
        }

        @media (max-width: 768px) {
          .category-tabs {
            justify-content: flex-start;
          }
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
