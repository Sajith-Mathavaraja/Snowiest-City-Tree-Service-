import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CheckCircle, AlertTriangle } from 'lucide-react';

const questions = [
  { id: 1, text: 'Is the tree leaning significantly?', yes: 2, no: 3 },
  { id: 2, text: 'Did the lean happen suddenly (e.g., after a storm)?', yes: 'danger', no: 4 },
  { id: 3, text: 'Are there large dead branches in the canopy?', yes: 4, no: 5 },
  { id: 4, text: 'Are there cracks in the main trunk?', yes: 'danger', no: 5 },
  { id: 5, text: 'Do you see fungus or mushrooms growing at the base?', yes: 'warning', no: 'safe' }
];

const TreeHealthScanner = () => {
  const [currentQ, setCurrentQ] = useState(1);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const q = questions.find(q => q.id === currentQ);
    const next = answer === 'yes' ? q.yes : q.no;
    
    if (typeof next === 'string') {
      setResult(next);
    } else {
      setCurrentQ(next);
    }
  };

  const reset = () => {
    setCurrentQ(1);
    setResult(null);
  };

  const currentQuestion = questions.find(q => q.id === currentQ);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto my-12">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <div className="p-3 bg-accent/20 text-primary rounded-full">
          <Activity size={24} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl text-primary">Tree Health Scanner</h3>
          <p className="text-gray-500 text-sm">Quick diagnostic tool</p>
        </div>
      </div>

      <div className="min-h-[200px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl text-center font-medium text-gray-800 mb-8">{currentQuestion.text}</h4>
              <div className="flex justify-center gap-6">
                <button 
                  onClick={() => handleAnswer('yes')}
                  className="bg-red-50 hover:bg-red-100 text-red-600 font-bold px-12 py-3 rounded-full border border-red-200 transition-colors"
                >
                  YES
                </button>
                <button 
                  onClick={() => handleAnswer('no')}
                  className="bg-green-50 hover:bg-green-100 text-green-600 font-bold px-12 py-3 rounded-full border border-green-200 transition-colors"
                >
                  NO
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {result === 'safe' && (
                <>
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-success mb-2">Tree Appears Healthy</h4>
                  <p className="text-gray-600 mb-6">Based on your answers, your tree doesn't show immediate signs of structural failure.</p>
                </>
              )}
              {result === 'warning' && (
                <>
                  <AlertTriangle size={64} className="text-warning mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-warning mb-2">Inspection Recommended</h4>
                  <p className="text-gray-600 mb-6">There are signs of potential disease or decay. An arborist should evaluate it.</p>
                </>
              )}
              {result === 'danger' && (
                <>
                  <AlertTriangle size={64} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-red-500 mb-2">High Risk - Act Now</h4>
                  <p className="text-gray-600 mb-6">Your tree shows signs of imminent failure. Keep away and call for emergency assessment.</p>
                  <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-full mb-4 shadow-lg animate-pulse">Call Emergency Line</button>
                </>
              )}
              <div>
                <button onClick={reset} className="text-gray-500 hover:text-primary underline text-sm">Start Over</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TreeHealthScanner;
