import React from 'react';

const BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    before: `${BASE_URL}gallery_removal_before.webp`,
    after: `${BASE_URL}gallery_removal_after.webp`,
    title: 'Hazardous Tree Removal',
    location: 'Buffalo, NY'
  },
  {
    before: `${BASE_URL}gallery_pruning_before.webp`,
    after: `${BASE_URL}gallery_pruning_after.webp`,
    title: 'Winter Canopy Pruning',
    location: 'Syracuse, NY'
  },
  {
    before: 'https://res.cloudinary.com/qzlxlo1n/image/upload/f_webp,q_35,w_350,c_scale/v1785604942/gallery_stump_before_ux2fd1.jpg',
    after: `${BASE_URL}gallery_stump_after.webp`,
    title: 'Deep Stump Grinding',
    location: 'Rochester, NY'
  }
];

const ProjectGallery = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-[#1F2933]/60" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Gallery</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Hover over the images to see the before and after transition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              {/* Before Image */}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 z-10">
                <img src={proj.before} alt="Before" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded text-sm font-semibold">Before</div>
              </div>
              
              {/* After Image */}
              <div className="absolute inset-0 z-0">
                <img src={proj.after} alt="After" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-accent text-secondary px-3 py-1 rounded text-sm font-semibold shadow-lg">After</div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 z-20">
                <h3 className="text-white font-heading font-bold text-xl">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
