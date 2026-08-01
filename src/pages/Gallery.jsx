import React from 'react';
import ProjectGallery from '../components/home/ProjectGallery';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1F2933]/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">Project Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mt-4 mb-6 text-white">Before & After Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-body">Hover over any card to reveal the dramatic transformation after our professional tree care team completed the job.</p>
        </div>
      </div>

      <ProjectGallery />
    </div>
  );
};

export default Gallery;
