import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, AlertTriangle, Leaf, Axe, HeartPulse } from 'lucide-react';

const services = [
  { 
    id: 'removal', 
    title: 'Tree Removal', 
    icon: Axe, 
    color: 'bg-primary', 
    desc: 'Safely dismantle hazardous, structurally compromised, or dead trees near your home. Our certified arborists utilize state-of-the-art rigging systems, compact cranes, and directional felling techniques to guarantee absolute protection for your property under heavy snow and winter wind loads.',
    image: `${import.meta.env.BASE_URL}service_removal.jpg`
  },
  { 
    id: 'emergency', 
    title: 'Emergency Care', 
    icon: AlertTriangle, 
    color: 'bg-red-600', 
    desc: 'Rapid storm damage mitigation when you need it most. Our specialized emergency crew is on standby 24/7 with heavy snow-clearing equipment to safely remove massive ice-laden limbs and fallen trees from roofs, driveways, and municipal access routes within hours.',
    image: `${import.meta.env.BASE_URL}service_emergency.jpg`
  },
  { 
    id: 'pruning', 
    title: 'Pruning & Trimming', 
    icon: Scissors, 
    color: 'bg-amber-600', 
    desc: 'Enhance your landscape\'s health and structural resilience. We perform expert winter pruning to remove weak or dead branches, thin out dense canopies, and optimize wind flow. This prevents catastrophic branch failure from heavy lake-effect snow accumulation.',
    image: `${import.meta.env.BASE_URL}service_pruning.jpg`
  },
  { 
    id: 'stump', 
    title: 'Stump Grinding', 
    icon: Leaf, 
    color: 'bg-emerald-600', 
    desc: 'Completely eliminate unsightly and hazardous tree stumps from your yard. Using high-powered hydraulic stump grinders, we grind stumps deep below grade, turning solid wood into clean mulch, destroying pests, and prepping the soil for spring landscaping.',
    image: `${import.meta.env.BASE_URL}service_stump.jpg`
  },
  { 
    id: 'health', 
    title: 'Plant Health Care', 
    icon: HeartPulse, 
    color: 'bg-teal-600', 
    desc: 'Proactive diagnostics to protect your trees from harsh winter conditions. Our ISA-certified arborists conduct thorough health audits, administer deep root organic fertilization, treat bark infestations, and implement custom disease mitigation plans.',
    image: `${import.meta.env.BASE_URL}service_health.jpg`
  },
];

const SnowGlobe = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const activeIndex = services.findIndex(s => s.id === activeService.id);
  const parentRotation = -activeIndex * 72; // 360 / 5 = 72 degrees per segment

  const [radius, setRadius] = useState(135);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(105);
      } else {
        setRadius(135);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const angleStep = (2 * Math.PI) / services.length;

  // Auto-play slideshow timer that rotates/cycles the services every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => {
        const currentIndex = services.findIndex((s) => s.id === prev.id);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex];
      });
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [activeService]); // Reset the timer when a user manually clicks/selects a service

  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-[#1F2933]/50" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3.5 py-1.5 rounded-full">Interactive Solutions</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-4">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Click any outer service node to view our premium tree solutions and photos in real-time.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* Left Side: Circular Service Wheel */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] shrink-0 flex items-center justify-center select-none">
            
            {/* Center Circle: Shows Current Active Service Logo and Name - Clickable redirect */}
            <button 
              onClick={handleBookNow}
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full hover:bg-white/15 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-center p-4 sm:p-5 shadow-[0_0_50px_rgba(255,255,255,0.05)] z-20 transition-all duration-300 group/center cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-2 sm:mb-2.5 shadow-inner group-hover/center:scale-105 transition-transform duration-300">
                    <activeService.icon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[0.7rem] sm:text-xs md:text-sm text-white uppercase tracking-wider leading-tight max-w-[100px] sm:max-w-[130px]">
                    {activeService.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Circular Orbit Ring Decorator - Perfectly matched to current dynamic radius */}
            <div 
              className="absolute rounded-full border border-white/10 pointer-events-none z-0" 
              style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
            />

            {/* Dynamic Spinning Parent Container */}
            <motion.div
              animate={{ rotate: parentRotation }}
              transition={{ type: 'spring', stiffness: 90, damping: 16 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Outer Service Segments placement (placed dynamically on the circle) */}
              {services.map((service, index) => {
                const isActive = activeService.id === service.id;
                
                // Angle offset by -90 degrees (Math.PI / 2) to place the first segment at the top center
                const angle = index * angleStep - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const offset = radius === 105 ? 28 : 32;

                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{ 
                      x: x - offset, // Center the button based on dynamic offset
                      y: y - offset,
                      rotate: -parentRotation 
                    }}
                    transition={{ type: 'spring', stiffness: 90, damping: 16 }}
                    className={`absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex flex-col items-center justify-center z-10 shadow-lg group ${
                      isActive 
                        ? 'bg-accent border-accent text-white scale-110 shadow-accent/25' 
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-gray-300 hover:text-white'
                    }`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                    <span className="sr-only">{service.title}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Service Details and Photos */}
          <div className="flex-1 w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col md:flex-row h-auto md:h-[380px]"
              >
                
                {/* Details Section */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest bg-accent/25 px-3 py-1 rounded-full">
                      Arborist Specialization
                    </span>
                    <h3 className="text-3xl font-heading font-extrabold text-white mt-4 mb-4">
                      {activeService.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body">
                      {activeService.desc}
                    </p>
                  </div>
                  
                  <button 
                    onClick={handleBookNow}
                    className="self-start text-accent font-extrabold text-sm flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider mt-auto"
                  >
                    Book Service Now <span>→</span>
                  </button>
                </div>

                {/* Photo Section */}
                <div className="md:w-2/5 relative h-64 md:h-full overflow-hidden select-none">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover brightness-[0.80] contrast-[1.05] saturate-[0.90] transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1F2933]/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SnowGlobe;
