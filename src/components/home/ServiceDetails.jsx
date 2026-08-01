import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetails = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1622384784400-9856f6b57db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional Tree Pruning" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Expert Tree Care When You Need It Most</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Snowiest City Tree Service provides top-tier tree care designed to withstand harsh winters and flourish in the spring. Our ISA-certified arborists utilize state-of-the-art equipment to ensure your property remains safe and beautiful year-round.
            </p>
            <ul className="space-y-4 mb-10">
              {['Precision Pruning', 'Hazardous Tree Removal', 'Deep Root Fertilization', 'Emergency Storm Damage'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-accent/20 text-primary flex items-center justify-center font-bold">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-colors shadow-lg">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
