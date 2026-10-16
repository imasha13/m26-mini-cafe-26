import React from 'react';
import { Coffee, ShoppingBag, Truck, CheckCircle2, Clock, MapPin, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const TakeawayDelivery = () => {
  return (
    <section className="section takeaway-section" id="takeaway">
      <div className="container">
        {/* Section Header */}
        <div className="takeaway-header">
          <span className="badge-pill">
            <ShoppingBag size={14} color="var(--color-primary)" />
            Dine-In & Takeaway
          </span>
          <h2 className="takeaway-title">Grab Your Coffee On The Go</h2>
          <p className="takeaway-subtitle">
            Heading for an early surf session at Goviyapana beach or continuing your South Coast road trip? We package all our coffees in premium takeaway cups with leak-proof lids.
          </p>
        </div>

        {/* 3 Status Cards Grid */}
        <div className="services-grid">
          {/* Service 1: Garden Dine-in */}
          <div className="service-card active-service">
            <div className="service-badge-status status-available">
              <span className="status-dot" />
              <span>Available Daily</span>
            </div>

            <div className="service-icon-wrap">
              <Coffee size={28} color="var(--color-primary)" />
            </div>

            <h3 className="service-name">Garden Dine-In</h3>
            <p className="service-desc">
              Savor your espresso in a ceramic cup seated under natural tropical palms and warm string lights.
            </p>

            <ul className="service-features">
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> Open outdoor folding seating</li>
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> Relaxed music & garden breeze</li>
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> Glowing moon photo installation</li>
            </ul>
          </div>

          {/* Service 2: Takeaway */}
          <div className="service-card active-service">
            <div className="service-badge-status status-available">
              <span className="status-dot" />
              <span>Available Daily</span>
            </div>

            <div className="service-icon-wrap">
              <ShoppingBag size={28} color="var(--color-primary)" />
            </div>

            <h3 className="service-name">Quick Takeaway</h3>
            <p className="service-desc">
              Fast, friendly preparation for surfers, commuters, and travelers on the Ahangama coastal road.
            </p>

            <ul className="service-features">
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> M26 branded insulated cups</li>
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> Secure leak-proof lids</li>
              <li><CheckCircle2 size={16} color="var(--color-primary)" /> Hot & iced drink carriers</li>
            </ul>
          </div>

          {/* Service 3: Delivery (PickMe Food) */}
          <div className="service-card pending-service">
            <div className="service-badge-status status-coming-soon">
              <Clock size={13} />
              <span>Coming Soon</span>
            </div>

            <div className="service-icon-wrap">
              <Truck size={28} color="var(--color-text-muted)" />
            </div>

            <h3 className="service-name">Doorstep Delivery</h3>
            <p className="service-desc">
              We are working to connect our garden cart to <strong>PickMe Food</strong> for local delivery across Ahangama and Midigama.
            </p>

            <div className="delivery-status-box">
              <AlertCircle size={15} color="var(--color-primary-light)" />
              <span>Delivery service will launch soon. Online ordering links will activate once confirmed!</span>
            </div>

            <button className="btn btn-outline disabled-btn" disabled>
              PickMe Food (Connecting Soon)
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .takeaway-section {
          background-color: var(--color-bg);
          position: relative;
        }

        .takeaway-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .takeaway-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.6vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .takeaway-subtitle {
          font-family: var(--font-body);
          color: var(--color-cream-muted);
          font-size: 1.025rem;
          line-height: 1.7;
          letter-spacing: -0.005em;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .service-card {
          background: var(--color-surface-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all var(--transition-fast);
        }

        .active-service:hover {
          border-color: rgba(230, 106, 43, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .pending-service {
          background: rgba(18, 20, 24, 0.4);
          border-style: dashed;
        }

        .service-badge-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          width: fit-content;
          margin-bottom: 1.5rem;
        }

        .status-available {
          background: rgba(46, 204, 113, 0.12);
          border: 1px solid rgba(46, 204, 113, 0.3);
          color: #2ECC71;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ECC71;
        }

        .status-coming-soon {
          background: rgba(230, 106, 43, 0.12);
          border: 1px solid rgba(230, 106, 43, 0.3);
          color: var(--color-primary-light);
        }

        .service-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: rgba(230, 106, 43, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .service-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--color-cream);
          letter-spacing: -0.02em;
        }

        .service-desc {
          font-family: var(--font-body);
          font-size: 0.885rem;
          color: var(--color-cream-muted);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .service-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: auto;
          font-family: var(--font-body);
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--color-cream);
        }

        .delivery-status-box {
          background: rgba(230, 106, 43, 0.06);
          border: 1px solid rgba(230, 106, 43, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.85rem;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          font-size: 0.8rem;
          color: var(--color-cream-muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .disabled-btn {
          opacity: 0.6;
          cursor: not-allowed;
          width: 100%;
          margin-top: auto;
          font-size: 0.85rem;
        }

        @media (max-width: 960px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
