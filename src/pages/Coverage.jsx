import React from 'react';
import CoverageMap from '../components/home/CoverageMap';

const Coverage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-red-600 pt-32 pb-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 backdrop-blur border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-pulse">
            24/7 Emergency Service
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Storm Damage Response</h1>
          <p className="text-xl text-white/90 mb-10">When severe weather strikes, we are ready to respond immediately to clear hazardous trees from your property safely.</p>
          <a href="tel:3153757877" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl inline-block">
            Call Now: 315-375-7877
          </a>
        </div>
      </div>
      <CoverageMap />
    </div>
  );
};

export default Coverage;
