import React, { useState } from 'react';
import { Settings, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

const WorkflowVisualizer: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="workflow" className="py-32 bg-midnight relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The CALYVIRT Difference
          </h2>
          <p className="text-xl text-slate-400">
            Drag the slider to see the difference between manual chaos and automated perfection.
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl">
          
          {/* Base Layer: Before (Manual Workflow) */}
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8">
            <h3 className="absolute top-8 left-8 text-2xl font-bold text-red-500 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Traditional Workflow
            </h3>
            
            <div className="flex items-center gap-4 text-slate-400 opacity-60">
              <div className="w-24 h-24 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center relative">
                <span className="text-xs absolute -top-3 bg-red-900/50 px-2 rounded text-red-200">Manual Entry</span>
                <Settings className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-16 h-1 bg-red-500/20 relative">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-500 font-bold whitespace-nowrap">Bottleneck</div>
              </div>
              <div className="w-24 h-24 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center relative">
                 <span className="text-xs absolute -top-3 bg-orange-900/50 px-2 rounded text-orange-200">Review</span>
                 <AlertTriangle className="w-8 h-8 text-orange-500" />
              </div>
              <div className="w-16 h-1 bg-red-500/20 relative">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-500 font-bold whitespace-nowrap">Delay</div>
              </div>
              <div className="w-24 h-24 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center relative">
                 <span className="text-xs absolute -top-3 bg-red-900/50 px-2 rounded text-red-200">Fulfillment</span>
                 <Settings className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <div className="absolute bottom-8 right-8 text-slate-500 text-sm">
              Data flow is slow, error-prone, and expensive.
            </div>
          </div>

          {/* Top Layer: After (Automated Workflow) */}
          <div 
            className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-8 border-r border-cyan-glow/50"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <h3 className="absolute top-8 left-8 text-2xl font-bold text-cyan-glow flex items-center gap-3">
              <Zap className="w-8 h-8" />
              CALYVIRT AI Workflow
            </h3>
            
            <div className="flex items-center gap-4 text-cyan-100">
              <div className="w-24 h-24 rounded-lg bg-cyan-500/10 border border-cyan-glow/50 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <span className="text-xs absolute -top-3 bg-cyan-900/80 px-2 rounded text-cyan-200 shadow-[0_0_10px_rgba(0,240,255,0.8)]">API Webhook</span>
                <CheckCircle2 className="w-8 h-8 text-cyan-glow" />
              </div>
              <div className="w-32 h-1 bg-cyan-glow relative shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-white animate-ping"></div>
              </div>
              <div className="w-32 h-32 rounded-xl bg-cyan-900/30 border-2 border-cyan-glow flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                 <span className="text-xs absolute -top-3 bg-cyan-900/80 px-2 rounded text-cyan-200 shadow-[0_0_10px_rgba(0,240,255,0.8)]">AI Brain</span>
                 <Zap className="w-12 h-12 text-cyan-glow mb-2" />
                 <span className="text-xs text-cyan-glow font-bold">Instant</span>
              </div>
              <div className="w-32 h-1 bg-cyan-glow relative shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-white animate-ping"></div>
              </div>
              <div className="w-24 h-24 rounded-lg bg-cyan-500/10 border border-cyan-glow/50 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                 <span className="text-xs absolute -top-3 bg-cyan-900/80 px-2 rounded text-cyan-200 shadow-[0_0_10px_rgba(0,240,255,0.8)]">Fulfillment</span>
                 <CheckCircle2 className="w-8 h-8 text-cyan-glow" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-cyan-200/70 text-sm">
              Data moves instantly, flawlessly bypassing all bottlenecks.
            </div>
          </div>

          {/* Slider Input Handle */}
          <input 
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
          />

          {/* Custom Slider Indicator */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-slate-800 rounded-full"></div>
                <div className="w-0.5 h-3 bg-slate-800 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualizer;
