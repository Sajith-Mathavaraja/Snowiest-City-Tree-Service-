import React from 'react';
import ProjectGallery from '../components/home/ProjectGallery';

const Projects = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="bg-primary pt-32 pb-20 px-6 text-center text-white">
        <h1 className="text-5xl font-heading font-bold mb-4">Our Work</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Browse through our portfolio of complex removals, delicate pruning, and emergency responses.</p>
      </div>
      {/* We reuse the home gallery but in a real app this would be a masonry grid of more items */}
      <ProjectGallery />
    </div>
  );
};

export default Projects;
