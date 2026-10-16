import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Share2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { CAFE_INFO } from '../data/cafeData';

export const LocationContact = () => {
  return (
    <section className="section location-section" id="location">
      <div className="container">
        {/* Section Header */}
        <div className="location-header">
          <span className="badge-pill">
            <MapPin size={14} color="var(--color-primary)" />
            Visit Our Garden
          </span>
          <h2 className="location-title">Find Us in Goviyapana</h2>
          <p className="location-subtitle">
            Located in peaceful Goviyapana, just a few minutes from Ahangama town and famous surf spots. Drop by for an espresso recharge!
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Details & Opening Hours & Instant Contacts */}
          <div className="location-info-panel">
            {/* Address Card */}
            <div className="info-block">
              <div className="info-icon">
                <MapPin size={22} color="var(--color-primary)" />
              </div>
              <div className="info-text">
                <span className="info-label">Garden Location</span>
                <p className="info-val">{CAFE_INFO.location.fullAddress}</p>
                <span className="info-sub">Goviyapana, Ahangama, Southern Province, Sri Lanka</span>
                
                <div className="address-actions">
                  <a 
                    href={CAFE_INFO.location.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Navigation size={15} />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="info-block">
              <div className="info-icon">
                <Clock size={22} color="var(--color-primary)" />
              </div>
              <div className="info-text">
                <div className="hours-head">
                  <span className="info-label">Opening Hours</span>
                  <span className="badge-pill badge-green hours-badge">
                    {CAFE_INFO.openingHours.badgeText}
                  </span>
                </div>

                <div className="hours-schedule">
                  {CAFE_INFO.openingHours.schedule.map((slot, index) => (
                    <div key={index} className="hours-row">
                      <span className="slot-days">{slot.days}</span>
                      <span className="slot-hours">{slot.hours}</span>
                    </div>
                  ))}
                </div>

                <p className="hours-note">
                  * {CAFE_INFO.openingHours.note}
                </p>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="info-block contacts-block">
              <div className="info-icon">
                <Phone size={22} color="var(--color-primary)" />
              </div>
              <div className="info-text">
                <span className="info-label">Reach Out Directly</span>
                <p className="info-sub">Feel free to call or WhatsApp us for directions, special orders, or seat availability.</p>

                <div className="direct-buttons-row">
                  <a 
                    href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=${encodeURIComponent(CAFE_INFO.contact.whatsappMessage)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={17} />
                    <span>WhatsApp Us</span>
                  </a>

                  <a 
                    href={`tel:${CAFE_INFO.contact.phone}`} 
                    className="btn btn-outline"
                  >
                    <Phone size={17} />
                    <span>{CAFE_INFO.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame & Garden Direction Guide */}
          <div className="location-visual-panel">
            <div className="map-container-card">
              <div className="map-card-header">
                <div className="map-meta">
                  <span className="dot-pulse" />
                  <span className="map-meta-title">M26 MINI CAFE 26 • Goviyapana</span>
                </div>
                <span className="map-meta-badge">Ahangama</span>
              </div>

              {/* Embedded interactive Google Map iframe */}
              <div className="map-iframe-wrapper">
                <iframe
                  title="M26 MINI CAFE 26 Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.359281734298!2d80.3541785!3d5.9758064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae11545625fffff%3A0x8677c7849e7a461b!2sGoviyapana%2C%20Ahangama%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direction landmark pointers */}
              <div className="landmarks-guide">
                <span className="guide-title">How to Find Our Garden:</span>
                <ul className="guide-points">
                  <li>
                    <span className="guide-bullet" />
                    <span>Located along the Goviyapana stretch in Ahangama.</span>
                  </li>
                  <li>
                    <span className="guide-bullet" />
                    <span>Look out for our signature <strong>M26 Matte Black Coffee Cart</strong> and warm string lighting among the palms.</span>
                  </li>
                  <li>
                    <span className="guide-bullet" />
                    <span>Ample motorbike and roadside parking available nearby.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
          position: relative;
        }

        .location-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .location-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.6vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .location-subtitle {
          font-family: var(--font-body);
          color: var(--color-cream-muted);
          font-size: 1.025rem;
          line-height: 1.7;
          letter-spacing: -0.005em;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3.5rem;
          align-items: start;
        }

        .location-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-block {
          background: #111317;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.85rem;
          display: flex;
          gap: 1.25rem;
          transition: border-color var(--transition-fast);
        }

        .info-block:hover {
          border-color: rgba(230, 106, 43, 0.35);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(230, 106, 43, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text {
          flex: 1;
        }

        .info-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary-light);
          margin-bottom: 0.35rem;
          display: block;
        }

        .info-val {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-cream);
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
        }

        .info-sub {
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--color-cream-muted);
          line-height: 1.55;
          display: block;
          margin-bottom: 1rem;
        }

        .address-actions {
          margin-top: 1rem;
        }

        .btn-sm {
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }

        .hours-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .hours-badge {
          font-size: 0.72rem;
          padding: 0.25rem 0.65rem;
        }

        .hours-schedule {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px dashed var(--color-border);
        }

        .slot-days {
          color: var(--color-cream);
          font-weight: 600;
        }

        .slot-hours {
          color: var(--color-primary-light);
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .hours-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .direct-buttons-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 1rem;
        }

        /* Map Card on right */
        .map-container-card {
          background: #111317;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .map-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .map-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-primary);
          box-shadow: 0 0 10px var(--color-primary);
        }

        .map-meta-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .map-meta-badge {
          font-size: 0.72rem;
          color: var(--color-primary-light);
          padding: 0.2rem 0.6rem;
          background: rgba(230, 106, 43, 0.1);
          border-radius: var(--radius-full);
          border: 1px solid rgba(230, 106, 43, 0.25);
        }

        .map-iframe-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--color-border);
          margin-bottom: 1.25rem;
          filter: contrast(1.05) brightness(0.9);
        }

        .landmarks-guide {
          background: rgba(13, 14, 16, 0.7);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .guide-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-cream);
          margin-bottom: 0.75rem;
          display: block;
        }

        .guide-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .guide-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--color-cream-muted);
          line-height: 1.5;
        }

        .guide-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-primary);
          margin-top: 6px;
          flex-shrink: 0;
        }

        @media (max-width: 960px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
