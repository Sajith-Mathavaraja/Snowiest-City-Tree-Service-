import React from 'react';
import Timeline from '../components/home/Timeline';
import EquipmentShowcase from '../components/home/EquipmentShowcase';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

const WhyUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <div className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1F2933]/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">Trust & Excellence</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mt-4 mb-6 text-white">Why Choose Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-body">Discover why homeowners and businesses across the region trust Snowiest City Tree Service for safety, speed, and precision.</p>
        </div>
      </div>

      {/* Pillars Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#1F2933]/55" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/15 text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">ISA Certified</h3>
              <p className="text-gray-300 text-sm">Our arborists undergo rigorous international training and ongoing certification.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/15 text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">$2M Fully Insured</h3>
              <p className="text-gray-300 text-sm">Comprehensive liability and worker protection on every project.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/15 text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">24/7 Rapid Response</h3>
              <p className="text-gray-300 text-sm">Immediate dispatch for hazardous trees during severe lake-effect snowstorms.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/15 text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">1,000+ Happy Clients</h3>
              <p className="text-gray-300 text-sm">Proven track record of pristine property cleanups and glowing reviews.</p>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <EquipmentShowcase />
    </div>
  );
};

export default WhyUs;
