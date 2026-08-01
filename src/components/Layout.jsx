import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = ({ children }) => {
  const [snowCounts, setSnowCounts] = useState({ slow: 15, mid: 15, fast: 10 });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setSnowCounts(isMobile ? { slow: 6, mid: 6, fast: 3 } : { slow: 15, mid: 15, fast: 10 });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background text-white font-body">
      {/* Global Background Image - Symmetrical Winter Tree Branches Canopy */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 max-md:bg-[url('https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=35&fm=webp')] md:bg-[url('https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60&fm=webp')] bg-cover bg-center opacity-85"></div>
        {/* Charcoal tint overlay matching the #1F2933 theme for maximum global typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2933]/90 via-[#1F2933]/70 to-[#1F2933]/85 mix-blend-multiply"></div>
      </div>
      
      {/* Global Upgraded Multi-Layer 3D Parallax Snow Animation */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Layer 1: Back (Small & Slow) */}
        {[...Array(snowCounts.slow)].map((_, i) => (
          <div 
            key={`slow-${i}`} 
            className="absolute bg-white/40 rounded-full animate-snow-slow"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 2}px`,
              height: `${Math.random() * 2 + 2}px`,
              animationDuration: `${Math.random() * 6 + 9}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Layer 2: Mid (Medium) */}
        {[...Array(snowCounts.mid)].map((_, i) => (
          <div 
            key={`mid-${i}`} 
            className="absolute bg-white/60 rounded-full animate-snow-medium"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 4}px`,
              height: `${Math.random() * 3 + 4}px`,
              animationDuration: `${Math.random() * 5 + 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Layer 3: Front (Large & Fast, blurred for camera depth of field) */}
        {[...Array(snowCounts.fast)].map((_, i) => (
          <div 
            key={`fast-${i}`} 
            className="absolute bg-white/30 blur-[1px] rounded-full animate-snow-fast"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 8}px`,
              height: `${Math.random() * 5 + 8}px`,
              animationDuration: `${Math.random() * 3 + 3.5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <Navigation />
      
      <main className="flex-grow z-10 pb-20 md:pb-0 relative">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
