import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Name:</label>
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Phone:</label>
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Email:</label>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Date:</label>
              <input type="date" defaultValue="2026-06-05" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">From Address:</label>
              <input type="text" placeholder="Moving From" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">To Address:</label>
              <input type="text" placeholder="Moving To" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Bedrooms:</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Move Size:</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Is Packing Required?</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-gray-700 uppercase mb-2 tracking-tight">Additional Info:</label>
              <textarea placeholder="Access, Large Items etc." rows="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8 w-full max-w-[420px] text-gray-800">
      <h2 className="text-xl lg:text-2xl font-bold text-center mb-6">Get a Free Moving Quote</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Step {step} of {totalSteps}
          </span>
        </div>
        <div className="h-1 w-full bg-gray-100 rounded-full flex gap-1 overflow-hidden">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className={`h-full flex-1 transition-all duration-500 rounded-full ${step > idx ? 'bg-primary' : 'bg-gray-200'}`}></div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="min-h-[220px]">
          {renderStepContent()}
        </div>

        <button 
          onClick={() => {
            if (step < 3) setStep(prev => prev + 1);
            else alert("Quote submitted! (Demo only)");
          }}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_8px_15px_rgba(211,47,47,0.3)] active:translate-y-0.5 group uppercase text-sm tracking-widest mt-4"
        >
          <span>{step === 3 ? "Get a Free Estimate" : "Next Step"}</span>
          {step < 3 && <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
        </button>

        <div className="flex justify-between mt-6">
          <span className={`text-[0.65rem] uppercase font-bold tracking-wider ${step === 1 ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-400'}`}>Step 1</span>
          <span className={`text-[0.65rem] uppercase font-bold tracking-wider ${step === 2 ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-400'}`}>Step 2</span>
          <span className={`text-[0.65rem] uppercase font-bold tracking-wider ${step === 3 ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-400'}`}>Step 3</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
