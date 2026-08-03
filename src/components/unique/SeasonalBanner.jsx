import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Sun, CloudRain, Wind, AlertCircle } from 'lucide-react';

const seasons = {
  Winter: {
    icon: Snowflake,
    accentBg: 'from-blue-900/30 via-blue-950/20 to-[#1F2933]/40 border-blue-500/30',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    badge: 'Winter Freeze Alert',
    title: 'Heavy Snow & Ice Hazard Season',
    desc: 'Heavy ice accumulation can cause severe branch breakage. Get a pre-storm hazard inspection now.',
    cta: 'Schedule Winter Audit'
  },
  Spring: {
    icon: CloudRain,
    accentBg: 'from-green-900/30 via-green-950/20 to-[#1F2933]/40 border-green-500/30',
    badgeBg: 'bg-green-500/20 text-green-300 border-green-400/30',
    badge: 'Spring Growth Peak',
    title: 'Optimal Pruning & Planting Time',
    desc: 'Early spring is ideal for structural pruning before full foliage. Schedule your spring health check.',
    cta: 'Book Spring Pruning'
  },
  Summer: {
    icon: Sun,
    accentBg: 'from-amber-900/30 via-amber-950/20 to-[#1F2933]/40 border-amber-500/30',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    badge: 'Summer Heat & Pest Watch',
    title: 'Drought Defense & Pest Control',
    desc: 'Keep your trees hydrated and shielded against emerald ash borer and summer pest infestation.',
    cta: 'Get Health Assessment'
  },
  Fall: {
    icon: Wind,
    accentBg: 'from-orange-900/30 via-orange-950/20 to-[#1F2933]/40 border-orange-500/30',
    badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
    badge: 'Fall Storm Preparation',
    title: 'Pre-Winter Canopy Thinning',
    desc: 'Clear weak limbs before lake-effect snowstorms arrive. Protect your home before freezing starts.',
    cta: 'Prepare for Winter'
  }
};

const SeasonalBanner = () => {
  const [activeSeason, setActiveSeason] = useState('Winter');
  const currentSeasonData = seasons[activeSeason];

  return (
    <div className="container mx-auto px-6 max-w-6xl my-10">
      <div className="flex justify-center gap-2 mb-4">
        {Object.keys(seasons).map((s) => (
          <button
            key={s}
            onClick={() => setActiveSeason(s)}
            className={`px-5 py-2 rounded-full text-xs font-heading font-bold transition-all ${
              activeSeason === s
                ? 'bg-primary text-white shadow-md border border-primary/40'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
            }`}
          >
            {s} Mode
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSeason}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={`bg-gradient-to-r ${currentSeasonData.accentBg} bg-secondary p-8 rounded-3xl border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden`}
        >
          <div className="flex items-center gap-5 relative z-10">
            <div className="p-4 bg-white/10 text-accent rounded-2xl shrink-0 border border-white/20">
              <currentSeasonData.icon size={36} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${currentSeasonData.badgeBg}`}>
                  {currentSeasonData.badge}
                </span>
                <span className="text-xs text-gray-300 flex items-center gap-1">
                  <AlertCircle size={13} className="text-accent" /> Season Alert Active
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-1">{currentSeasonData.title}</h3>
              <p className="text-base text-gray-200 font-body max-w-2xl">{currentSeasonData.desc}</p>
            </div>
          </div>

          <button className="bg-accent text-white hover:bg-white hover:text-secondary px-7 py-3 rounded-full font-bold text-sm transition-all shrink-0 shadow-lg hover:shadow-accent/40 relative z-10">
            {currentSeasonData.cta} →
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SeasonalBanner;
