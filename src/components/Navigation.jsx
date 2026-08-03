import React, { useState, useEffect, useRef } from 'react';
import { Home, Trees, BookOpen, Mail, Plus, Phone, AlertTriangle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

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

  const mobileDockIcons = [
    { icon: <Home size={22} />, id: 'home' },
    { icon: <Trees size={22} />, id: 'services' },
    { icon: 'center', id: '#' },
    { icon: <Phone size={22} />, id: 'contact' },
  ];

  // Robust, high-performance scroll listener for both header style and focal-point active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only run scroll-spy on the homepage
      if (location.pathname !== '/' || isScrollingRef.current) return;

      const sectionIds = ['home', 'about', 'services', 'why-us', 'reviews', 'contact'];
      let currentSection = 'home';
      
      // The visual focal point of the screen is at 30% of the viewport height
      const focalPoint = window.innerHeight * 0.3;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element crosses the focal point line of the screen
          if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load to establish current state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [location.pathname]);

  // Reset active section when navigating away from homepage to avoid highlighting header links on legal pages
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
    } else {
      setTimeout(() => {
        if (window.scrollY < 100) setActiveSection('home');
      }, 50);
    }
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
        // Lock scroll spy updates during smooth scroll transition to prevent flickering
        isScrollingRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 800); // 800ms lock duration covers standard smooth scrolls
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation Header - Symmetrical Layout with Frosted Transparent Glass Theme */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] hidden md:flex justify-center pt-2 px-6 animate-header-slide-down"
      >
        <div 
          className={`backdrop-blur-md border border-white/15 rounded-full grid grid-cols-3 items-center shadow-xl max-w-6xl mx-auto overflow-hidden text-white transition-all duration-350 ease-in-out ${scrolled ? 'w-[75%] px-10 py-1.5 bg-[#1F2933]/45' : 'w-[82%] px-14 py-2.5 bg-white/8'}`}
        >
          
          {/* COLUMN 1: Left Links */}
          <nav 
            className={`flex items-center justify-start gap-6 lg:gap-8 transition-transform duration-350 ease-in-out ${scrolled ? 'translate-x-6' : 'translate-x-0'}`}
          >
            {leftNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors duration-300 relative px-1 ${scrolled ? 'text-xs' : 'text-sm'} ${activeSection === link.id ? 'text-accent font-bold' : 'text-gray-200 hover:text-accent'}`}
              >
                {link.name}
                <div 
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full origin-left transition-transform duration-200 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} 
                />
              </button>
            ))}
          </nav>

          {/* COLUMN 2: CENTER Logo - Snowiest City Tree Service (Perfectly static, does not move or scale on scroll) */}
          <div className="flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-3 hover:scale-105 transition-transform py-1.5 shrink-0 z-10"
            >
              <div className="w-[2.8rem] h-[2.8rem] rounded-full overflow-hidden border border-white/30 shadow-md shrink-0 flex items-center justify-center bg-[#02493e]">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.webp`} 
                  alt="Snowiest City Tree Service Logo" 
                  className="w-full h-full object-cover scale-[1.55]" 
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
          <nav 
            className={`flex items-center justify-end gap-6 lg:gap-8 transition-transform duration-350 ease-in-out ${scrolled ? '-translate-x-6' : '-translate-x-0'}`}
          >
            {rightNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors duration-300 relative px-1 ${scrolled ? 'text-xs' : 'text-sm'} ${activeSection === link.id ? 'text-accent font-bold' : 'text-gray-200 hover:text-accent'}`}
              >
                {link.name}
                <div 
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full origin-left transition-transform duration-200 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} 
                />
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* Mobile Top Header Brand Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#1F2933]/90 backdrop-blur-md border-b border-white/10 px-6 py-3 flex items-center justify-between shadow-md">
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2"
        >
          <div className="w-[2.2rem] h-[2.2rem] rounded-full overflow-hidden border border-white/20 shrink-0 flex items-center justify-center bg-[#02493e]">
            <img 
              src={`${import.meta.env.BASE_URL}logo.webp`} 
              alt="Logo" 
              className="w-full h-full object-cover scale-[1.55]" 
            />
          </div>
          <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3b9ae1] uppercase text-xs tracking-wider">
            Snowiest City
          </span>
        </button>
        <a 
          href="tel:3153757877"
          className="bg-accent text-secondary px-3 py-1.5 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5"
        >
          <Phone size={12} />
          <span>Call Now</span>
        </a>
      </div>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex flex-col items-center">
        {/* Expanded Quick Actions Popup */}
        <div
          className={`glass p-4 rounded-3xl mb-4 w-full max-w-xs shadow-2xl border border-white/20 space-y-2 bg-[#1F2933]/95 backdrop-blur-xl text-white transition-all duration-300 transform origin-bottom ${
            menuOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none absolute'
          }`}
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
        </div>

        <div className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-sm relative bg-[#1F2933]/95 border-white/10 text-white">
          {mobileDockIcons.map((item, index) => (
            item.icon === 'center' ? (
              <button 
                key="center" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Quick Actions Menu"
                className="bg-primary text-white p-4 rounded-full -mt-8 shadow-lg shadow-primary/40 border-4 border-secondary transition-transform hover:scale-105"
              >
                <Plus size={28} />
              </button>
            ) : (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.id === '#' ? 'top' : item.id} section`}
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
