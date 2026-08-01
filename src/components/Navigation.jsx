import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Trees, BookOpen, MessageSquare, Plus, Phone, Mail, AlertTriangle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const leftNavLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
  ];

  const rightNavLinks = [
    { name: 'Why Us', id: 'why-us' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  const mobileDockIcons = [
    { icon: <Home size={22} />, id: 'home' },
    { icon: <Trees size={22} />, id: 'services' },
    { icon: 'center', id: '#' },
    { icon: <Phone size={22} />, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Only highlight sections based on scroll if on home page
      if (location.pathname !== '/') return;

      setScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 220;
      for (let i = allNavLinks.length - 1; i >= 0; i--) {
        const element = document.getElementById(allNavLinks[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(allNavLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle incoming redirect hash scrolling
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActiveSection(id);
        }
      }, 300); // 300ms delay to ensure DOM is ready
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    
    if (location.pathname !== '/') {
      // Navigate to homepage with section hash
      navigate(`/#${id}`);
    } else {
      // Scroll directly on homepage
      setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation Header - Symmetrical Layout with Frosted Transparent Glass Theme */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] hidden md:flex justify-center pt-4 px-6 transition-all duration-300"
      >
        <motion.div 
          animate={{
            width: scrolled ? '75%' : '82%',
            paddingLeft: scrolled ? '2.5rem' : '3.5rem',
            paddingRight: scrolled ? '2.5rem' : '3.5rem',
            paddingTop: scrolled ? '0.55rem' : '0.85rem',
            paddingBottom: scrolled ? '0.55rem' : '0.85rem',
            backgroundColor: scrolled ? 'rgba(31, 41, 51, 0.45)' : 'rgba(255, 255, 255, 0.08)',
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="backdrop-blur-md border border-white/15 rounded-full grid grid-cols-3 items-center shadow-xl max-w-6xl mx-auto overflow-hidden text-white"
        >
          
          {/* COLUMN 1: Left Links */}
          <motion.nav 
            animate={{ x: scrolled ? 24 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex items-center justify-start gap-6 lg:gap-8"
          >
            {leftNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors duration-300 relative px-1 ${scrolled ? 'text-xs' : 'text-sm'} ${activeSection === link.id ? 'text-accent font-bold' : 'text-gray-200 hover:text-accent'}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div layoutId="active-nav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </motion.nav>

          {/* COLUMN 2: CENTER Logo - Snowiest City Tree Service (Perfectly static, does not move or scale on scroll) */}
          <div className="flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-3 hover:scale-105 transition-transform py-1.5 shrink-0 z-10"
            >
              <div className="w-[2.8rem] h-[2.8rem] rounded-full overflow-hidden border border-white/30 shadow-[0_0_15px_rgba(0,210,255,0.3)] shrink-0 flex items-center justify-center bg-white/5">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.jpg`} 
                  alt="Snowiest City Tree Service Logo" 
                  className="w-full h-full object-cover scale-[1.35]" 
                />
              </div>
              <span 
                className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sage to-[#00d2ff] uppercase whitespace-nowrap text-[0.88rem] tracking-[0.1em]"
              >
                Snowiest City Tree Service
              </span>
            </button>
          </div>

          {/* COLUMN 3: Right Links */}
          <motion.nav 
            animate={{ x: scrolled ? -24 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex items-center justify-end gap-6 lg:gap-8"
          >
            {rightNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors duration-300 relative px-1 ${scrolled ? 'text-xs' : 'text-sm'} ${activeSection === link.id ? 'text-accent font-bold' : 'text-gray-200 hover:text-accent'}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div layoutId="active-nav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </motion.nav>

        </motion.div>
      </motion.header>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex flex-col items-center">
        {/* Expanded Quick Actions Popup */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="glass p-4 rounded-3xl mb-4 w-full max-w-xs shadow-2xl border border-white/20 space-y-2 bg-[#1F2933]/95 backdrop-blur-xl text-white"
            >
              <div className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wider text-center mb-2">Quick Actions</div>
              <button onClick={() => scrollToSection('contact')} className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-primary text-white font-medium hover:bg-secondary transition-colors text-sm">
                <BookOpen size={18} className="text-accent" />
                <span>Request Quote</span>
              </button>
              <a href="tel:3153757877" onClick={() => setMenuOpen(false)} className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm">
                <AlertTriangle size={18} />
                <span>Emergency 24/7</span>
              </a>
              <a href="tel:3153757877" onClick={() => setMenuOpen(false)} className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors text-sm border border-white/10">
                <Phone size={18} className="text-accent" />
                <span>Call Us Direct</span>
              </a>
              <a href="mailto:syracuse@syracusetreeservices.com" onClick={() => setMenuOpen(false)} className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors text-sm border border-white/10">
                <Mail size={18} className="text-accent" />
                <span>Email Support</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-sm relative bg-[#1F2933]/95 border-white/10 text-white">
          {mobileDockIcons.map((item, index) => (
            item.icon === 'center' ? (
              <button 
                key="center" 
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-primary text-white p-4 rounded-full -mt-8 shadow-lg shadow-primary/40 border-4 border-secondary transition-transform hover:scale-105"
              >
                <Plus size={28} />
              </button>
            ) : (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 transition-colors ${activeSection === item.id ? 'text-accent font-bold scale-110' : 'text-gray-300'}`}
              >
                {item.icon}
              </button>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
