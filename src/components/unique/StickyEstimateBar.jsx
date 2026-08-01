import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const StickyEstimateBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-secondary/95 text-white backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-white/10 z-30 hidden md:block"
        >
          <div className="container mx-auto px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Logo" className="w-9 h-9 rounded-full border border-accent/40 object-cover" />
              <div>
                <h4 className="font-heading font-bold text-white text-base">Need Professional Tree Care?</h4>
                <p className="text-xs text-gray-300">Fast on-site estimates by ISA certified arborists.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="tel:3153757877" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2 rounded-full transition-all text-sm flex items-center gap-2 border border-white/10"
              >
                <Phone size={15} className="text-accent" />
                315-375-7877
              </a>
              <button 
                onClick={scrollToContact} 
                className="bg-accent text-white hover:bg-white hover:text-secondary font-bold px-6 py-2 rounded-full transition-all text-sm flex items-center gap-2 shadow-lg hover:shadow-accent/20"
              >
                Get Free Estimate
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyEstimateBar;
