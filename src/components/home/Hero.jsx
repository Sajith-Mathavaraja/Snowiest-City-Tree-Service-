import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, AlertTriangle, ArrowRight, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden bg-transparent" id="home">
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16 pt-2">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-[1.15]"
          >
            Professional Tree Care <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-sage">
              Built for Every Season
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 font-body leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Experience the premium standard in tree services. From emergency removals to seasonal pruning, our ISA-certified arborists deliver pristine property results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button 
              onClick={scrollToContact}
              className="bg-accent text-secondary px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Get Free Estimate
              <ArrowRight size={18} />
            </button>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 hover:scale-105 transition-all flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Content - Premium Photo with a suitable Lightly Dark Overlay */}
        <div className="flex-1 w-full max-w-lg relative h-[480px] hidden lg:block select-none">
          {/* Main Arborist Image with atmospheric dark filter overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative"
          >
            <img 
              src="https://res.cloudinary.com/qzlxlo1n/image/upload/f_auto,q_auto,w_1200,c_scale/v1785601203/hero_arborist_si2qaf.jpg" 
              alt="Professional arborist climbing a majestic pine tree in winter" 
              className="w-full h-full object-cover brightness-[0.70] contrast-[1.05] saturate-[0.85] transition-all duration-500 hover:brightness-[0.80]"
              fetchPriority="high"
            />
            {/* Soft dark vignette gradient to integrate with the layout */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/60 via-transparent to-[#1F2933]/30 pointer-events-none" />

            {/* Separate Pill 1: Fully Insured (Bottom Left) */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-md text-secondary select-none flex items-center gap-1.5 text-[0.68rem] xl:text-[0.72rem] font-heading font-bold uppercase tracking-wider">
              <ShieldCheck className="text-primary w-4 h-4" />
              <span>Fully Insured</span>
            </div>

            {/* Separate Pill 2: 5-Star Rated (Bottom Right) */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-md text-secondary select-none flex items-center gap-1.5 text-[0.68rem] xl:text-[0.72rem] font-heading font-bold uppercase tracking-wider">
              <Star className="text-accent fill-accent w-4 h-4 animate-pulse" />
              <span>5-Star Rated</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
