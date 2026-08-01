import React from 'react';
import { Truck, Search, Scissors, Leaf, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const equipment = [
  { icon: Truck, name: 'Bucket Trucks', desc: 'For safe access to tall canopies.' },
  { icon: HardHat, name: 'Cranes', desc: 'Heavy lifting for hazardous removals.' },
  { icon: Scissors, name: 'Wood Chippers', desc: 'Efficiently processing debris on-site.' },
  { icon: Search, name: 'Stump Grinders', desc: 'Complete removal below grade.' },
];

const EquipmentShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1F2933]/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">State-of-the-Art Equipment</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">We invest in the best machinery to ensure safety, efficiency, and minimal impact on your property.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover:bg-white/20 transition-colors group"
            >
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{item.name}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
