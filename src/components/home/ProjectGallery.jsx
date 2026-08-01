import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    before: `${import.meta.env.BASE_URL}gallery_removal_before.jpg`,
    after: `${import.meta.env.BASE_URL}gallery_removal_after.jpg`,
    title: 'Hazardous Tree Removal',
    location: 'Buffalo, NY'
  },
  {
    before: `${import.meta.env.BASE_URL}gallery_pruning_before.jpg`,
    after: `${import.meta.env.BASE_URL}gallery_pruning_after.jpg`,
    title: 'Winter Canopy Pruning',
    location: 'Syracuse, NY'
  },
  {
    before: `${import.meta.env.BASE_URL}gallery_stump_before.jpg`,
    after: `${import.meta.env.BASE_URL}gallery_stump_after.jpg`,
    title: 'Deep Stump Grinding',
    location: 'Rochester, NY'
  }
];

const SliderCard = ({ proj }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          handleMove(e.touches[0].clientX);
        }
      }}
      className="group relative rounded-2xl overflow-hidden shadow-xl h-[400px] select-none cursor-ew-resize border border-white/10"
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={proj.after} alt="After" className="w-full h-full object-cover pointer-events-none" />
        <div className="absolute top-4 right-4 bg-accent text-secondary px-3 py-1 rounded text-sm font-semibold shadow-lg z-20">After</div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-y-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-y-0 left-0"
          style={{ width: containerWidth ? `${containerWidth}px` : '380px' }}
        >
          <img 
            src={proj.before} 
            alt="Before" 
            className="w-full h-full object-cover pointer-events-none" 
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded text-sm font-semibold z-20">Before</div>
        </div>
      </div>

      {/* Slider Split Line & Handle */}
      <div 
        className="absolute inset-y-0 z-20 w-0.5 bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white text-secondary rounded-full flex items-center justify-center shadow-2xl border border-white/20 font-bold text-sm pointer-events-none">
          ↔
        </div>
      </div>

      {/* Bottom Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 z-20 pointer-events-none">
        <h3 className="text-white font-heading font-bold text-xl">{proj.title}</h3>
        <p className="text-gray-300 text-sm">{proj.location}</p>
      </div>
    </div>
  );
};

const ProjectGallery = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-[#1F2933]/60" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Gallery</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Move your mouse or swipe across the images to compare before and after.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <SliderCard key={idx} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
