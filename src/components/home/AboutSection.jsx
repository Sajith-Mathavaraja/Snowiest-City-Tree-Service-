import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'Started with one bucket truck and a mission to set a new standard in tree safety.' },
  { year: '2018', title: 'Expanded Arborist Crew', desc: 'Grew into a full-scale team of ISA-certified tree care professionals.' },
  { year: '2021', title: '1,000+ Projects Completed', desc: 'Recognized as the region\'s highest-rated storm response tree service.' },
  { year: '2026', title: 'Snowiest City Era', desc: 'Pioneering eco-friendly equipment, instant pricing tools, and 24/7 care.' },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle dark glass overlay for this section */}
      <div className="absolute inset-0 bg-[#1F2933]/60 backdrop-blur-[2px]" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3.5 py-1.5 rounded-full">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-4">About Snowiest City Tree Service</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Built on a foundation of safety, precision, and dedication to protecting local properties in severe winter weather.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text & Stats */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Master Arborists Dedicated to Property Protection</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Founded in the snowiest city, our team understands the unique stress severe ice and heavy snowfall place on trees. We combine traditional arboriculture with heavy machinery to safely handle any job size.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <span className="text-4xl font-heading font-extrabold text-accent">10+</span>
                <p className="text-gray-200 font-semibold text-sm mt-1">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <span className="text-4xl font-heading font-extrabold text-white">100%</span>
                <p className="text-gray-200 font-semibold text-sm mt-1">Insured & Certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <span className="text-4xl font-heading font-extrabold text-accent">4.9★</span>
                <p className="text-gray-200 font-semibold text-sm mt-1">Google Reviews</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <span className="text-4xl font-heading font-extrabold text-white">24/7</span>
                <p className="text-gray-200 font-semibold text-sm mt-1">Emergency Crew</p>
              </div>
            </div>
          </div>

          {/* Right Milestone Timeline */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 shadow-lg">
            <h4 className="text-xl font-heading font-bold text-white mb-6 border-b border-white/20 pb-4">Company Milestones</h4>
            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-accent text-secondary font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    {idx !== milestones.length - 1 && <div className="w-0.5 h-full bg-white/20 my-1" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent">{m.year}</span>
                    <h5 className="font-heading font-bold text-white text-base">{m.title}</h5>
                    <p className="text-sm text-gray-300 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
