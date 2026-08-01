import React from 'react';
import Reviews from '../components/home/Reviews';
import { Star } from 'lucide-react';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1F2933]/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">Client Testimonials</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mt-4 mb-6 text-white">Reviews & Ratings</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-body">Read verified feedback from homeowners and commercial clients across the snowiest city region.</p>
        </div>
      </div>

      <Reviews />

      {/* Review Submission CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#1F2933]/60" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md text-white p-12 rounded-3xl shadow-2xl border border-white/15">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Are you a recent client?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">We value your feedback! Leave us a review on Google to help others find trusted tree care services.</p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="bg-accent text-secondary px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all shadow-lg inline-flex items-center gap-2">
              <Star className="fill-secondary" size={18} />
              Leave a 5-Star Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
