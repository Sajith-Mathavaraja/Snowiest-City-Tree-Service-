import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import SnowGlobe from '../components/home/SnowGlobe';
import Timeline from '../components/home/Timeline';
import EquipmentShowcase from '../components/home/EquipmentShowcase';
import ProjectGallery from '../components/home/ProjectGallery';
import Reviews from '../components/home/Reviews';
import QuoteSection from '../components/home/QuoteSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Home Section */}
      <Hero />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Services Section */}
      <SnowGlobe />

      {/* 4. Why Us Section */}
      <section id="why-us">
        <Timeline />
        <EquipmentShowcase />
      </section>

      {/* 5. Project Gallery Section (Kept in scroll flow) */}
      <ProjectGallery />

      {/* 6. Reviews Section */}
      <Reviews />

      {/* 7. Contact Section */}
      <QuoteSection />
    </div>
  );
};

export default Home;
