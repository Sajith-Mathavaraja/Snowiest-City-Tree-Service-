import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Search, FileText, CheckCircle2, Recycle } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Request', desc: 'Contact us online or call our 24/7 line.' },
  { icon: Search, title: 'Inspect', desc: 'Our arborists assess the site and tree health.' },
  { icon: FileText, title: 'Estimate', desc: 'Receive a transparent, no-obligation quote.' },
  { icon: CheckCircle2, title: 'Complete', desc: 'Safe, efficient execution by certified pros.' },
  { icon: Recycle, title: 'Cleanup', desc: 'We leave your property cleaner than we found it.' },
];

const Timeline = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1F2933]/65 backdrop-blur-[1px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Our streamlined process ensures you get the best service with zero hassle.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-full md:w-1/5"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 text-accent mb-6 z-10">
                  <step.icon size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
