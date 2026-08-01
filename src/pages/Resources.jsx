import React from 'react';

const articles = [
  { title: 'How to Prepare Your Trees for Winter', category: 'Guides', image: 'https://images.unsplash.com/photo-1542158359-5fbe6058be91?w=600' },
  { title: 'Signs Your Oak Tree is Dying', category: 'Tree Health', image: 'https://images.unsplash.com/photo-1622384784400-9856f6b57db4?w=600' },
  { title: 'When is the Best Time to Prune?', category: 'Tips', image: 'https://images.unsplash.com/photo-1593527263548-522db9ff1c20?w=600' },
];

const Resources = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-heading font-bold text-primary mb-4">Tree Care Resources</h1>
        <p className="text-xl text-gray-600 mb-12">Expert advice, guides, and tips from certified arborists.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer hover:-translate-y-2 transition-transform">
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-sm font-bold text-accent uppercase tracking-wider">{article.category}</span>
                <h3 className="text-xl font-heading font-bold text-primary mt-2 mb-4 group-hover:text-secondary transition-colors">{article.title}</h3>
                <p className="text-gray-500 text-sm">Read full article →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
