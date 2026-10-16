import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { GardenExperience } from './components/GardenExperience';
import { TakeawayDelivery } from './components/TakeawayDelivery';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="m26-app">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Our Story Section */}
        <OurStory />

        {/* 3. Menu Section with Categories & LKR Prices */}
        <MenuSection />

        {/* 4. Garden Experience & Moonlight Corner */}
        <GardenExperience />

        {/* 5. Takeaway & PickMe Delivery Section */}
        <TakeawayDelivery />

        {/* 6. Location, Opening Hours & Direct Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
