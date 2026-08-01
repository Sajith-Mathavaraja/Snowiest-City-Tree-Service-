import React from 'react';
import QuoteSection from '../components/home/QuoteSection';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 pointer-events-none bg-[#1F2933]/60" />
      <div className="container mx-auto px-6 max-w-6xl mb-16 text-center relative z-10">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get in touch with our team for emergency services, estimates, or general inquiries.</p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md border border-white/15 text-center">
          <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📍</div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">Our Office</h3>
          <p className="text-gray-300">9950 County Rd<br/>Clarence Center, NY 14032</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md border border-white/15 text-center">
          <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⏰</div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">Business Hours</h3>
          <p className="text-gray-300">Mon-Fri: 8am - 6pm<br/>Emergency: 24/7</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md border border-white/15 text-center">
          <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📞</div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">Direct Contact</h3>
          <p className="text-gray-300">315-375-7877<br/>syracuse@syracusetreeservices.com</p>
        </div>
      </div>

      <QuoteSection />
    </div>
  );
};

export default Contact;
