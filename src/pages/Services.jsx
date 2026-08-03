import React from 'react';
import CostCalculator from '../components/unique/CostCalculator';
import TreeHealthScanner from '../components/unique/TreeHealthScanner';
import { Axe, Scissors, AlertTriangle, HeartPulse, Leaf, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  { icon: Axe, title: 'Hazardous Tree Removal', desc: 'Complete and safe removal of hazardous, dead, or diseased trees using precision rigging and cranes.' },
  { icon: AlertTriangle, title: '24/7 Emergency Service', desc: 'Rapid storm damage response to clear fallen trees from homes, power lines, and driveways.' },
  { icon: Scissors, title: 'Pruning & Canopy Thinning', desc: 'Expert pruning to enhance tree structure, air flow, light penetration, and health.' },
  { icon: Leaf, title: 'Stump Grinding & Removal', desc: 'Deep stump grinding to eliminate trip hazards and prepare your soil for landscaping.' },
  { icon: HeartPulse, title: 'Plant Health Care', desc: 'Diagnosis, insect treatment, fungal disease mitigation, and deep root fertilization.' },
  { icon: Truck, title: 'Land Clearing', desc: 'Site clearing for residential expansion, new builds, and commercial property development.' },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Services Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1F2933]/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">Professional Solutions</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mt-4 mb-6 text-white">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-body">From delicate pruning to heavy crane removals, explore our full suite of professional tree care services.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-6 max-w-7xl relative">
        <div className="absolute inset-0 bg-[#16222F]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-[#25323E] p-8 rounded-3xl shadow-xl border border-white/15 flex flex-col justify-between hover:-translate-y-1.5 transition-all">
              <div>
                <div className="w-14 h-14 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">{service.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/15">
                <Link to="/contact" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
                  Book This Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Estimator Tools */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#16222F]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Tree Care Diagnostic & Cost Estimator</h2>
            <p className="text-lg text-gray-300">Scan your tree's condition or calculate an estimated service price.</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            <TreeHealthScanner />
            <CostCalculator />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
