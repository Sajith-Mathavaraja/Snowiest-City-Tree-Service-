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
      <section id="home">
        <Hero />
      </section>

      {/* 2. About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 3. Services Section */}
      <section id="services">
        <SnowGlobe />
      </section>

      {/* 4. Why Us Section */}
      <section id="why-us">
        <Timeline />
        <EquipmentShowcase />
      </section>

      {/* 5. Project Gallery Section (Kept in scroll flow) */}
      <ProjectGallery />

      {/* 6. Reviews Section */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* 7. Contact Section */}
      <section id="contact">
        <QuoteSection />
      </section>
    </div>
  );
};

export default Home;
