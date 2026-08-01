import React, { useEffect, useState, useRef } from 'react';

const QuoteSection = () => {
  const [loadForm, setLoadForm] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadForm(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Pre-load 200px before reaching viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadForm) return;

    // Remove any existing script instance to allow clean re-initialization
    const existingScript = document.querySelector('script[src*="form_embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Load the official GoHighLevel global script to bypass local DNS issues
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;

    // Append script with a minor delay so React has fully rendered the iframe first
    const timer = setTimeout(() => {
      document.body.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [loadForm]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[#1F2933]/65" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/15">
          <div className="text-white p-12 lg:w-2/5 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598462057375-7b830d1ff6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-6">Ready for a <span className="text-accent font-bold">healthier landscape?</span></h3>
              <p className="text-gray-200 mb-10 text-lg">Get a free, transparent estimate from our certified arborists today.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3b9ae1]/20 flex items-center justify-center shrink-0 text-[#3b9ae1] font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">Fast Response</h4>
                    <p className="text-sm text-gray-300">We get back to you within 24 hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3b9ae1]/20 flex items-center justify-center shrink-0 text-[#3b9ae1] font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">On-site Assessment</h4>
                    <p className="text-sm text-gray-300">Free evaluation by a certified pro.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3b9ae1]/20 flex items-center justify-center shrink-0 text-[#3b9ae1] font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">No Hidden Fees</h4>
                    <p className="text-sm text-gray-300">Clear pricing upfront.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Side - Embedded Official Lead Iframe Form */}
          <div className="p-8 lg:p-12 lg:w-3/5 w-full flex flex-col justify-center min-h-[600px] lg:min-h-[881px]">
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Request an Estimate</h3>
            <div 
              className="w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-inner flex items-center justify-center"
              style={{ height: '881px' }}
            >
              {loadForm ? (
                /* Bypassed the down white-label DNS subdomain and pointed directly to the global GoHighLevel forms server */
                <iframe
                  src="https://link.msgsndr.com/widget/form/h9c9mJ6SUuZjn8wwdzNG"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                  id="inline-h9c9mJ6SUuZjn8wwdzNG" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Snowiest City Tree Service"
                  data-height="881"
                  data-layout-iframe-id="inline-h9c9mJ6SUuZjn8wwdzNG"
                  data-form-id="h9c9mJ6SUuZjn8wwdzNG"
                  title="Snowiest City Tree Service"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent mx-auto mb-4"></div>
                  <p className="text-sm">Loading Estimate Form...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
