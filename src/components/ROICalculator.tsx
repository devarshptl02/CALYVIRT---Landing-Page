import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState(20);
  
  // Weekly hours * 4 weeks/month
  const timeSaved = hours * 4; 
  // Arbitrary hourly rate of $50/hr for calculation
  const hourlyRate = 50; 
  const costSavings = timeSaved * hourlyRate;

  return (
    <section id="roi" className="py-32 bg-slate-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Calculate Your <span className="text-gold-glow drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">ROI</span>
          </h2>
          <p className="text-xl text-slate-400">
            See exactly how much time and money CALYVIRT can save your business.
          </p>
        </div>

        <div className="bg-midnight border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-glow/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            
            {/* Input Side */}
            <div className="flex-1 w-full space-y-8">
              <div>
                <label className="block text-slate-300 font-medium mb-4 text-lg">
                  Hours spent on manual tasks per week
                </label>
                <div className="flex items-center gap-6">
                  <input 
                    type="range"
                    min="1"
                    max="100"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-glow outline-none focus:ring-2 focus:ring-gold-glow/50"
                  />
                  <span className="text-3xl font-bold text-white w-16 text-right">
                    {hours}h
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Data entry, report generation, email follow-ups, lead qualification, and process syncing.
              </p>
            </div>

            {/* Output Side */}
            <div className="flex-1 w-full flex flex-col gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              
              <motion.div 
                key={`time-${timeSaved}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-white/5"
              >
                <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Time Saved Monthly</div>
                <div className="text-4xl font-bold text-cyan-glow">
                  {timeSaved} <span className="text-2xl text-slate-300">Hours</span>
                </div>
              </motion.div>

              <motion.div 
                key={`cost-${costSavings}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-gold-glow/20 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
              >
                <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Estimated Cost Savings</div>
                <div className="text-4xl font-bold text-gold-glow">
                  ${costSavings.toLocaleString()} <span className="text-2xl text-slate-300">/mo</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
