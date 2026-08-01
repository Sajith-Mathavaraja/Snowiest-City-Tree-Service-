import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const milestones = [
    { year: '2015', title: 'Company Started', desc: 'Founded with a single truck and a passion for trees.' },
    { year: '2018', title: 'Growing Team', desc: 'Expanded to a team of 15 certified arborists.' },
    { year: '2021', title: '1000+ Projects', desc: 'Successfully completed over 1,000 major projects.' },
    { year: '2025', title: 'Future Vision', desc: 'Continuing to innovate with eco-friendly practices.' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-[80vh]">
      <div className="absolute inset-0 pointer-events-none bg-[#1F2933]/60" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-5xl font-heading font-bold text-white mb-12 text-center">Our Journey</h1>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/30 before:to-transparent">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white/30 bg-accent text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                {idx + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/15">
                <div className="flex flex-col mb-2">
                  <span className="text-accent font-bold text-lg">{milestone.year}</span>
                  <h3 className="font-heading font-bold text-2xl text-white">{milestone.title}</h3>
                </div>
                <p className="text-gray-300">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
