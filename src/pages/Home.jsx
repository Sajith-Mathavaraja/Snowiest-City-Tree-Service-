import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Hero from '../components/home/Hero';

// Lazy load off-screen sections to optimize initial JS footprint and page speed
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const SnowGlobe = lazy(() => import('../components/home/SnowGlobe'));
const Timeline = lazy(() => import('../components/home/Timeline'));
const EquipmentShowcase = lazy(() => import('../components/home/EquipmentShowcase'));
const ProjectGallery = lazy(() => import('../components/home/ProjectGallery'));
const Reviews = lazy(() => import('../components/home/Reviews'));
const QuoteSection = lazy(() => import('../components/home/QuoteSection'));

// Viewport-based lazy mounting helper to defer resource requests
const LazyMount = ({ children, height = '400px' }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start fetching 200px before scroll entry
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: shouldRender ? 'auto' : height }}>
      {shouldRender ? children : null}
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Home Section (Statically imported for instant initial layout paint) */}
      <Hero />

      {/* 2. About Section */}
      <LazyMount height="400px">
        <Suspense fallback={<div className="min-h-[400px] bg-transparent" />}>
          <AboutSection />
        </Suspense>
      </LazyMount>

      {/* 3. Services Section */}
      <LazyMount height="600px">
        <Suspense fallback={<div className="min-h-[600px] bg-transparent" />}>
          <SnowGlobe />
        </Suspense>
      </LazyMount>

      {/* 4. Why Us Section */}
      <section id="why-us">
        <LazyMount height="800px">
          <Suspense fallback={<div className="min-h-[800px] bg-transparent" />}>
            <Timeline />
            <EquipmentShowcase />
          </Suspense>
        </LazyMount>
      </section>

      {/* 5. Project Gallery Section */}
      <LazyMount height="500px">
        <Suspense fallback={<div className="min-h-[500px] bg-transparent" />}>
          <ProjectGallery />
        </Suspense>
      </LazyMount>

      {/* 6. Reviews Section */}
      <LazyMount height="400px">
        <Suspense fallback={<div className="min-h-[400px] bg-transparent" />}>
          <Reviews />
        </Suspense>
      </LazyMount>

      {/* 7. Contact Section */}
      <LazyMount height="500px">
        <Suspense fallback={<div className="min-h-[500px] bg-transparent" />}>
          <QuoteSection />
        </Suspense>
      </LazyMount>
    </div>
  );
};

export default Home;
