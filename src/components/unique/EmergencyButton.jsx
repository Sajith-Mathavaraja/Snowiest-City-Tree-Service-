import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const EmergencyButton = () => {
  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40">
      <motion.a 
        href="tel:3153757877"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-[0_0_25px_rgba(220,38,38,0.6)] flex items-center gap-3 relative group overflow-hidden border-2 border-white/40"
      >
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        <PhoneCall size={22} className="animate-pulse shrink-0" />
        <span className="font-heading font-bold text-sm hidden md:block pr-2">24/7 Emergency</span>
      </motion.a>
    </div>
  );
};

export default EmergencyButton;
