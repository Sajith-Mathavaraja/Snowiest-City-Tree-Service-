import React, { lazy, Suspense } from 'react';
import Hero from '../components/home/Hero';

// Lazy load off-screen sections to optimize initial JS footprint and page speed
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const SnowGlobe = lazy(() => import('../components/home/SnowGlobe'));
const Timeline = lazy(() => import('../components/home/Timeline'));
const EquipmentShowcase = lazy(() => import('../components/home/EquipmentShowcase'));
const ProjectGallery = lazy(() => import('../components/home/ProjectGallery'));
const Reviews = lazy(() => import('../components/home/Reviews'));
const QuoteSection = lazy(() => import('../components/home/QuoteSection'));

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Home Section (Statically imported for instant initial layout paint) */}
      <Hero />

      {/* 2. About Section */}
      <Suspense fallback={<div className="min-h-[400px] bg-transparent" />}>
        <AboutSection />
      </Suspense>

      {/* 3. Services Section */}
      <Suspense fallback={<div className="min-h-[600px] bg-transparent" />}>
        <SnowGlobe />
      </Suspense>

      {/* 4. Why Us Section */}
      <section id="why-us">
        <Suspense fallback={<div className="min-h-[600px] bg-transparent" />}>
          <Timeline />
          <EquipmentShowcase />
        </Suspense>
      </section>

      {/* 5. Project Gallery Section */}
      <Suspense fallback={<div className="min-h-[500px] bg-transparent" />}>
        <ProjectGallery />
      </Suspense>

      {/* 6. Reviews Section */}
      <Suspense fallback={<div className="min-h-[400px] bg-transparent" />}>
        <Reviews />
      </Suspense>

      {/* 7. Contact Section */}
      <Suspense fallback={<div className="min-h-[500px] bg-transparent" />}>
        <QuoteSection />
      </Suspense>
    </div>
  );
};

export default Home;
