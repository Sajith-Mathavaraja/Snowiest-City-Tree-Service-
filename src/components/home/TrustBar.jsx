import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Star, Zap } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: <CheckCircle2 className="text-success" size={24} />, text: 'ISA Certified' },
    { icon: <ShieldCheck className="text-success" size={24} />, text: 'Fully Insured' },
    { icon: <Star className="text-warning" size={24} />, text: '5-Star Rated' },
    { icon: <Zap className="text-red-500" size={24} />, text: 'Emergency Response' },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-gray-700 font-heading font-semibold text-lg"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
