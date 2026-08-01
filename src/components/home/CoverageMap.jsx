import React from 'react';
import { MapPin } from 'lucide-react';

const CoverageMap = () => {
  const cities = ['Buffalo', 'Cheektowaga', 'Amherst', 'Tonawanda', 'Hamburg', 'Orchard Park', 'West Seneca'];

  return (
    <section className="py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Service Area Coverage</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in the heart of the snowiest city, we provide rapid response and scheduled maintenance across the entire metropolitan area and surrounding suburbs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700 font-semibold">
                  <MapPin size={20} className="text-accent" />
                  {city}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner">
            {/* Map placeholder - In a real app this would be a Google Map or Mapbox */}
            <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-gray-400">
              <MapPin size={64} className="mb-4 opacity-50" />
              <p className="font-heading font-semibold text-lg">Interactive Map Placeholder</p>
            </div>
            {/* Simulated map points */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(73,198,229,0.8)] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-pulse border-2 border-white flex items-center justify-center"><span className="text-[10px] text-white font-bold">HQ</span></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(73,198,229,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
