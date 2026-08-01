import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sarah Jenkins', role: 'Homeowner', text: 'Incredible service! They removed a massive oak tree that was threatening our roof. The crew was professional and cleaned up perfectly.' },
  { name: 'Mike Thompson', role: 'Property Manager', text: 'We use Snowiest City for all our properties. Their winter emergency response is unmatched in the city.' },
  { name: 'Emily Davis', role: 'Homeowner', text: 'The pruning work they did on our maple trees completely transformed our front yard. Highly recommend their arborists!' },
  { name: 'Robert Chen', role: 'Business Owner', text: 'Fast, efficient, and fully insured. They took care of a stump that had been bothering us for years in just a few hours.' },
];

const Reviews = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1F2933]/60" />
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">What Our Clients Say</h2>
        <div className="flex justify-center items-center gap-2 text-accent mb-2">
          {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" />)}
        </div>
        <p className="text-lg text-gray-300 font-semibold">4.9/5 based on 250+ Google Reviews</p>
      </div>

      {/* Auto-scrolling container */}
      <div className="relative w-full flex overflow-hidden z-10">
        <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/15 w-80 md:w-96 flex-shrink-0">
              <div className="flex text-accent mb-4 gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-200 mb-6 italic font-body">"{review.text}"</p>
              <div>
                <h3 className="font-heading font-bold text-white">{review.name}</h3>
                <p className="text-sm text-gray-300">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
