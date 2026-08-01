import React from 'react';
import CostCalculator from '../components/unique/CostCalculator';
import TreeHealthScanner from '../components/unique/TreeHealthScanner';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-primary pt-32 pb-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542158359-5fbe6058be91?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-4">Tree Removal</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Safe, efficient, and fully insured tree removal services.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Professional Removal?</h2>
              <p className="text-gray-600 mb-6 text-lg">Dead or dying trees pose a significant risk to your property, especially during severe winter storms. Our experts assess the situation and utilize state-of-the-art rigging and crane equipment to safely dismantle and remove hazardous trees without damaging your landscape.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="text-accent font-bold">✓</span> Prevent property damage</li>
                <li className="flex items-center gap-3"><span className="text-accent font-bold">✓</span> Stop disease spread</li>
                <li className="flex items-center gap-3"><span className="text-accent font-bold">✓</span> Clear space for new growth</li>
              </ul>
            </div>
            <div className="flex-1 w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1622384784400-9856f6b57db4?w=800" alt="Tree Removal Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Interactive Tools</h2>
            <p className="text-lg text-gray-600">Evaluate your tree's health or get a quick estimate.</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            <TreeHealthScanner />
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="font-heading font-bold text-lg mb-2 text-primary">Do I need a permit to remove a tree?</h3>
              <p className="text-gray-600">Depending on your municipality and the size of the tree, a permit may be required. We handle the entire permitting process for you.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="font-heading font-bold text-lg mb-2 text-primary">Is stump grinding included?</h3>
              <p className="text-gray-600">Stump grinding is offered as an additional service. We highly recommend it to prevent pest infestation and clear the area completely.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
