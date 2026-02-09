import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  PieChart, 
  Building, 
  Wallet, 
  ArrowUpRight
} from 'lucide-react';

// --- ANIMATION HOOK ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.disconnect() };
  }, [options]);
  return [ref, isVisible];
};

const ROIPage = ({ theme }) => {
  const isLight = theme === 'light';
  
  // Theme Variables
  const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
  const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-white/5 border-white/10';

  // --- 1. COMPARISON SECTION ---
  const ComparisonSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    return (
      <section ref={ref} className="w-full max-w-6xl mx-auto px-6 py-35">
         
         {/* Header - Scaled Down */}
         <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
               <TrendingUp size={12} /> Business Case
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
               Real World <span className="text-emerald-500">ROI.</span>
            </h1>
            <p className="text-lg opacity-70 max-w-xl mx-auto">
               Financial impact analysis for a typical 75-Bed Hospital implementation.
            </p>
         </div>

         {/* THE COMPARISON ENGINE */}
         <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            {/* Arrow Connector (Desktop) */}
            <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-emerald-500 text-white items-center justify-center shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
               <ArrowRight size={20} />
            </div>

            {/* CARD 1: BEFORE (Muted) */}
            <div className={`relative p-8 rounded-[2rem] border-2 border-dashed transition-all duration-1000 
               ${isLight ? 'border-gray-300 bg-gray-50' : 'border-white/10 bg-white/5'}
               ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}>
               <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Before VBHC</h3>
               
               <div className="space-y-6">
                  <div>
                     <p className="text-base font-medium opacity-60 mb-1">Annual Revenue</p>
                     <div className="text-3xl md:text-4xl font-black opacity-60">₹35–40 Cr</div>
                  </div>
                  <div className="w-full h-px bg-current opacity-10"></div>
                  <div>
                     <p className="text-base font-medium opacity-60 mb-1">EBITDA Margin</p>
                     <div className="text-3xl md:text-4xl font-black opacity-60">10–12%</div>
                  </div>
               </div>
            </div>

            {/* CARD 2: AFTER (Vibrant) */}
            <div className={`relative p-8 rounded-[2rem] border-2 shadow-2xl overflow-hidden transition-all duration-1000 delay-200
               ${isLight ? 'bg-white border-emerald-100 shadow-emerald-500/10' : 'bg-[#2A2B2E] border-emerald-500/20 shadow-emerald-900/20'}
               ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}>
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>

               <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500">After VBHC</h3>
                  <div className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md">
                     Active Optimization
                  </div>
               </div>
               
               <div className="space-y-6 relative z-10">
                  <div className="group">
                     <div className="flex justify-between items-end mb-1">
                        <p className="text-base font-medium opacity-60">Annual Revenue</p>
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+20% Growth</span>
                     </div>
                     <div className="text-4xl md:text-5xl font-black text-emerald-500">₹45–48 Cr</div>
                  </div>
                  
                  <div className="w-full h-px bg-current opacity-10"></div>
                  
                  <div>
                     <div className="flex justify-between items-end mb-1">
                        <p className="text-base font-medium opacity-60">EBITDA Margin</p>
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+50% Uplift</span>
                     </div>
                     <div className="text-4xl md:text-5xl font-black text-emerald-500">15–18%</div>
                  </div>
               </div>
            </div>

         </div>

         {/* PAYBACK BADGE */}
         <div className={`mt-12 mx-auto max-w-lg p-6 rounded-2xl text-center border transition-all duration-1000 delay-500
            ${isLight ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-emerald-900/20 border-emerald-500/20 text-emerald-100'}
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
         `}>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Projected Payback Period</p>
            <div className="text-3xl font-black flex items-center justify-center gap-2">
               <Clock className="text-emerald-500" /> Less than 12 Months
            </div>
         </div>

      </section>
    );
  };

  // --- 2. DRIVERS SECTION ---
 const DriversSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    const drivers = [
      { label: "ARPOB Improvement", icon: ArrowUpRight },
      { label: "Cost Standardization", icon: PieChart },
      { label: "LOS Reduction", icon: Clock },
      { label: "Higher Asset Utilization", icon: Building },
      { label: "Better Payer Mix", icon: Wallet } // Changed 'Coins' to 'Wallet' for clearer context
    ];

    return (
      <section ref={ref} className={`relative w-full pb-24 px-6`}>
         <div className="max-w-7xl mx-auto">
            
            <div className={`mb-10 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
               <h3 className="text-2xl font-bold">Where ROI Comes From</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {drivers.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2
                       ${cardBg}
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                        <item.icon size={24} className="opacity-70" />
                     </div>
                     <span className="font-bold text-sm md:text-base leading-tight">{item.label}</span>
                  </div>
               ))}
            </div>

         </div>
      </section>
    );
  };

  return (
    <div className={`w-full min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-700`}>
       <ComparisonSection />
       <DriversSection />
    </div>
  );
};

export default ROIPage;