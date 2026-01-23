import React, { useEffect, useRef, useState } from 'react';
import { 
  Unplug, 
  Database, 
  FileWarning, 
  BrainCircuit, 
  Clock, 
  BedDouble, 
  Users, 
  TrendingDown, 
  Wallet, 
  Stethoscope, 
  ArrowRight,
  CheckCircle2
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

const WhatWeSolvePage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- 1. HERO SECTION: FRAGMENTED TECHNOLOGY ---
  const FragmentedHero = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    const gridColor = isLight ? 'border-[#1F2022]/5' : 'border-white/5';

    return (
      <section ref={ref} className={`relative min-h-screen w-full ${bgClass} ${textClass} flex flex-col justify-center py-24 px-6 overflow-hidden`}>
        
        {/* Abstract "Broken" Background */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Disconnected Lines */}
           <div className={`absolute top-0 left-1/4 w-px h-1/3 border-l-2 border-dashed ${gridColor}`}></div>
           <div className={`absolute bottom-0 right-1/4 w-px h-1/3 border-l-2 border-dashed ${gridColor}`}></div>
           <div className={`absolute top-1/2 left-0 w-1/4 h-px border-t-2 border-dashed ${gridColor}`}></div>
           
           {/* Floating Icons (Representing Silos) */}
           <div className="absolute top-20 right-20 opacity-10 animate-pulse"><Database size={64} /></div>
           <div className="absolute bottom-20 left-20 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}><Unplug size={64} /></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Left: Main Headline */}
           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-bold text-xs uppercase tracking-widest mb-6">
                 <Unplug size={14} /> The Root Cause
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                 Fragmented <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Tech Ecosystems
                 </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-70 font-medium leading-relaxed max-w-xl">
                 Hospitals often operate with disconnected systems that do not communicate, creating blind spots in care.
              </p>
           </div>

           {/* Right: The Pain Points List */}
           <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Incomplete Patient Journeys", icon: Users, desc: "Clinicians lack a unified view of history." },
                { title: "Data Duplication", icon: Database, desc: "Redundant entries across silos." },
                { title: "Manual Reporting", icon: FileWarning, desc: "Time wasted compiling spreadsheets." },
                { title: "Intuition-Based Decisions", icon: BrainCircuit, desc: "Strategy driven by guesses, not data." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-5 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-700
                    ${isLight ? 'bg-white/60 border-white/60 shadow-sm' : 'bg-white/5 border-white/10'}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                   <div className={`p-3 rounded-xl shrink-0 ${isLight ? 'bg-red-50 text-red-500' : 'bg-red-500/20 text-red-400'}`}>
                      <item.icon size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="opacity-60 text-sm font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 animate-bounce">
           <ArrowRight size={24} className="rotate-90" />
        </div>
      </section>
    );
  };

  // --- 2. MIDDLE SECTION: OPERATIONAL INEFFICIENCIES ---
  const OperationalSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    // Invert Theme for visual separation
    const bgClass = isLight ? 'bg-white' : 'bg-[#18181b]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    
    return (
      <section ref={ref} className={`relative w-full py-32 px-6 ${bgClass} ${textClass} transition-colors duration-700`}>
         <div className="max-w-6xl mx-auto">
            
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h2 className="text-4xl md:text-5xl font-black mb-6">Operational Inefficiencies</h2>
               <p className="text-xl opacity-60 max-w-2xl mx-auto">
                  Without condition-level visibility, resources are misallocated and productivity suffers.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1: LOS */}
               <div className={`p-8 rounded-[2rem] border transition-all duration-700 group
                  ${isLight ? 'bg-gray-50 border-gray-100' : 'bg-[#1F2022] border-white/5'}
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
               `}>
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6 text-2xl font-bold">
                     <Clock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Variable LOS</h3>
                  <p className="opacity-70 leading-relaxed">
                     Length of Stay varies widely for similar medical cases, indicating a lack of standardized care protocols.
                  </p>
               </div>

               {/* Card 2: Resources */}
               <div className={`p-8 rounded-[2rem] border transition-all duration-700 delay-150 group
                  ${isLight ? 'bg-gray-50 border-gray-100' : 'bg-[#1F2022] border-white/5'}
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
               `}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 text-2xl font-bold">
                     <BedDouble size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Resource Misallocation</h3>
                  <p className="opacity-70 leading-relaxed">
                     OT and ICU capacities are often blocked by patients who could be managed in lower-acuity settings.
                  </p>
               </div>

               {/* Card 3: Staff */}
               <div className={`p-8 rounded-[2rem] border transition-all duration-700 delay-300 group
                  ${isLight ? 'bg-gray-50 border-gray-100' : 'bg-[#1F2022] border-white/5'}
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
               `}>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 text-2xl font-bold">
                     <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Suboptimal Productivity</h3>
                  <p className="opacity-70 leading-relaxed">
                     Clinical and non-clinical staff spend excessive time on coordination rather than patient care.
                  </p>
               </div>
            </div>

         </div>
      </section>
    );
  };

  // --- 3. BOTTOM SECTION: FINANCIAL LEAKAGE ---
  const FinancialSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    // High Contrast Theme for Impact
    const bgClass = isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D]';
    const textClass = isLight ? 'text-white' : 'text-[#1F2022]';
    const cardBg = isLight ? 'bg-white/10' : 'bg-black/10';

    return (
      <section ref={ref} className={`relative w-full py-32 px-6 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
         
         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: The Problem */}
            <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">
                  Financial <br/> Leakage.
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Missed Diagnostics", icon: Stethoscope },
                    { title: "Poor Follow-ups", icon: Users },
                    { title: "Unbundled Care", icon: Unplug },
                    { title: "Weak Monetization", icon: Wallet }
                  ].map((item, i) => (
                     <div key={i} className={`flex items-center gap-4 p-5 rounded-xl border border-current/10 ${cardBg}`}>
                        <item.icon size={24} className="opacity-80" />
                        <span className="font-bold text-lg">{item.title}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right: The Solution (CTA) */}
            <div className={`lg:w-1/2 flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
               <div className={`p-10 rounded-[2.5rem] border-2 border-dashed border-current/30 text-center`}>
                  <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl shadow-xl ${isLight ? 'bg-[#F5AD3D] text-[#1F2022]' : 'bg-[#1F2022] text-white'}`}>
                     <TrendingDown size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4">Stop the Bleeding.</h3>
                  <p className="text-xl font-medium opacity-80 mb-8 max-w-md mx-auto">
                     Our platform identifies and fixes these leakages automatically.
                  </p>

                  <button className={`px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center gap-2 mx-auto
                     ${isLight ? 'bg-white text-[#1F2022]' : 'bg-white text-[#1F2022]'}`}>
                     Fix Leakages Now <ArrowRight size={20} />
                  </button>
               </div>
            </div>

         </div>
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col font-sans">
      <FragmentedHero />
      <OperationalSection />
      <FinancialSection />
    </div>
  );
};

export default WhatWeSolvePage;