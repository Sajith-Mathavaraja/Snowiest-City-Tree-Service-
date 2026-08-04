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
      <section style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 550px' }}>
        <AboutSection />
      </section>

      {/* 3. Services Section */}
      <section style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 650px' }}>
        <SnowGlobe />
      </section>

      {/* 4. Why Us Section */}
      <section id="why-us" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1400px' }}>
        <Timeline />
        <EquipmentShowcase />
      </section>

      {/* 5. Project Gallery Section */}
      <section style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 650px' }}>
        <ProjectGallery />
      </section>

      {/* 6. Reviews Section */}
      <section id="reviews" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 550px' }}>
        <Reviews />
      </section>

      {/* 7. Contact Section */}
      <section id="contact" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 900px' }}>
        <QuoteSection />
      </section>
    </div>
  );
};

export default Home;
