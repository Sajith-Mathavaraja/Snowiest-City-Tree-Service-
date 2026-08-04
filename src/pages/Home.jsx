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
const LazyMount = ({ children, height = '400px', id }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Delay observer creation to keep initial paint critical path completely clean
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px', // Pre-load 200px before visible so content is ready when user scrolls
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, 1000); // 1 second delay to ensure initial audit paints complete

    return () => clearTimeout(timer);
  }, []);

  return (
    // Keep layout containment styles active permanently to prevent collapse/shift
    <div
      id={id}
      ref={containerRef}
      style={{ minHeight: height, containIntrinsicSize: `auto ${height}`, contentVisibility: 'auto' }}
    >
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
      <LazyMount height="550px">
        <Suspense fallback={<div className="min-h-[550px] bg-transparent" />}>
          <AboutSection />
        </Suspense>
      </LazyMount>

      {/* 3. Services Section */}
      <LazyMount height="650px">
        <Suspense fallback={<div className="min-h-[650px] bg-transparent" />}>
          <SnowGlobe />
        </Suspense>
      </LazyMount>

      {/* 4. Why Us Section */}
      <section id="why-us">
        <LazyMount height="1400px">
          <Suspense fallback={<div className="min-h-[1400px] bg-transparent" />}>
            <Timeline />
            <EquipmentShowcase />
          </Suspense>
        </LazyMount>
      </section>

      {/* 5. Project Gallery Section */}
      <LazyMount height="650px">
        <Suspense fallback={<div className="min-h-[650px] bg-transparent" />}>
          <ProjectGallery />
        </Suspense>
      </LazyMount>

      {/* 6. Reviews Section */}
      <LazyMount id="reviews" height="550px">
        <Suspense fallback={<div className="min-h-[550px] bg-transparent" />}>
          <Reviews />
        </Suspense>
      </LazyMount>

      {/* 7. Contact Section */}
      <LazyMount id="contact" height="900px">
        <Suspense fallback={<div className="min-h-[900px] bg-transparent" />}>
          <QuoteSection />
        </Suspense>
      </LazyMount>
    </div>
  );
};

export default Home;
