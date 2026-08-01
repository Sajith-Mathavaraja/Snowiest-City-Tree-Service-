import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const CostCalculator = () => {
  const [size, setSize] = useState('medium');
  const [service, setService] = useState('removal');
  const [urgency, setUrgency] = useState('standard');

  const calculatePrice = () => {
    let base = 500;
    
    // Size multiplier
    if (size === 'small') base *= 0.5;
    if (size === 'large') base *= 2;
    if (size === 'xlarge') base *= 4;

    // Service multiplier
    if (service === 'pruning') base *= 0.6;
    if (service === 'stump') base *= 0.3;

    // Urgency multiplier
    if (urgency === 'emergency') base *= 1.5;

    return Math.round(base);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto my-12">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <div className="p-3 bg-secondary/20 text-secondary rounded-full">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl text-primary">Cost Estimator</h3>
          <p className="text-gray-500 text-sm">Get a rough idea before we arrive</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Tree Size</label>
          <div className="grid grid-cols-4 gap-2">
            {['small', 'medium', 'large', 'xlarge'].map((s) => (
              <button 
                key={s}
                onClick={() => setSize(s)}
                className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors ${size === s ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Service Required</label>
          <select 
            value={service} 
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <option value="removal">Complete Removal</option>
            <option value="pruning">Pruning & Trimming</option>
            <option value="stump">Stump Grinding Only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Urgency</label>
          <div className="flex gap-4">
            <button 
              onClick={() => setUrgency('standard')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors border ${urgency === 'standard' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-500'}`}
            >
              Standard
            </button>
            <button 
              onClick={() => setUrgency('emergency')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors border ${urgency === 'emergency' ? 'border-red-500 bg-red-50 text-red-600' : 'border-gray-200 text-gray-500'}`}
            >
              Emergency 24/7
            </button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-background to-white rounded-2xl border border-accent/20 text-center">
          <p className="text-gray-500 text-sm mb-1">Estimated Starting Price</p>
          <motion.div 
            key={calculatePrice()}
            initial={{ scale: 1.1, color: '#49C6E5' }}
            animate={{ scale: 1, color: '#0F3D3E' }}
            className="text-5xl font-heading font-bold"
          >
            ${calculatePrice()}
            <span className="text-xl text-gray-400 font-body font-normal">+</span>
          </motion.div>
          <p className="text-xs text-gray-400 mt-2">*This is a rough estimate. Final price requires on-site inspection.</p>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
