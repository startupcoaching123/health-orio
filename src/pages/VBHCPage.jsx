import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Network, 
  Users, 
  HeartPulse, 
  Coins, 
  Smile, 
  Unplug, 
  Settings, 
  TrendingDown, 
  XCircle,
  Activity,
  CheckCircle2,
  ArrowDown,
  Sparkles
} from 'lucide-react';

// --- SHARED ANIMATION HOOK ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Trigger once
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.disconnect() };
  }, [ref, options]);

  return [ref, isVisible];
};

const VBHCPage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- HERO SECTION ---


const HeroSection = ({ theme }) => {
  const isLight = theme === 'light';

  // --- Theme Colors ---
  const bgClass = isLight ? 'bg-[#E6EBE0]' : 'bg-[#F5AD3D]';
  const textClass = 'text-[#1F2022]'; 
  
  // Card Styles (Glassy)
  const cardBg = isLight 
    ? 'bg-white/60 border-white/40 shadow-sm' 
    : 'bg-white/20 border-white/20 shadow-lg';

  // --- Animation State ---
  const [offset, setOffset] = useState(0);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative w-full min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-700 ease-in-out overflow-hidden flex flex-col items-center justify-center pt-30`}>
      
      {/* --- 1. BACKGROUND LAYERS --- */}
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      {/* Parallax Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ transform: `translateY(${offset * 0.2}px)` }}>
        <div className="w-full h-[150%] grid grid-cols-12 border-r border-[#1F2022]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[#1F2022] h-full"></div>
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-40 animate-pulse-slow ${isLight ? 'bg-white' : 'bg-white/30'}`}></div>


      {/* --- 2. MAIN CONTENT --- */}
      <div className="relative z-10 max-w-5xl px-6 w-full flex flex-col items-center text-center">
        
        {/* Top Tag */}
       

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-in fade-in zoom-in duration-1000 delay-100">
           Value-Based <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2022] to-[#1F2022]/60">Healthcare</span>
        </h1>

        {/* Definition */}
        <p className="text-lg md:text-xl font-medium opacity-70 leading-relaxed max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          We focus on outcomes that matter to patients relative to the cost of delivering those outcomes—measured across the full cycle of care, not isolated services.
        </p>


        {/* --- 3. TRANSITION CARDS --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
           
           {/* Card 1 */}
           <div className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 duration-300 ${cardBg}`}>
              <span className="text-xs font-bold uppercase tracking-widest opacity-50 line-through decoration-red-500/40">Volume</span>
              <ArrowDown size={20} className="text-current opacity-60 animate-bounce" />
              <span className="text-xl font-black tracking-tight">Value</span>
           </div>

           {/* Card 2 */}
           <div className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 duration-300 ${cardBg}`}>
              <span className="text-xs font-bold uppercase tracking-widest opacity-50 line-through decoration-red-500/40">Departments</span>
              <ArrowDown size={20} className="text-current opacity-60 animate-bounce" style={{ animationDelay: '0.1s' }} />
              <span className="text-xl font-black tracking-tight">Conditions</span>
           </div>

           {/* Card 3 */}
           <div className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 duration-300 ${cardBg}`}>
              <span className="text-xs font-bold uppercase tracking-widest opacity-50 line-through decoration-red-500/40">Revenue / Service</span>
              <ArrowDown size={20} className="text-current opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="text-xl font-black tracking-tight">Outcome / Rupee</span>
           </div>

        </div>


        {/* --- 4. SCROLL TRIGGER (Preserved) --- */}
        

      </div>

      {/* --- CSS --- */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};


  // --- WHAT IS VBHC SECTION ---
  const WhatIsVBHCSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    const bgClass = isLight ? 'bg-white' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    const cardBorder = isLight ? 'border-gray-200' : 'border-white/10';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`mb-16 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-[#F5AD3D]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">The Concept</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                What is <span className="text-[#F5AD3D]">Value-Based Healthcare?</span>
             </h2>
             <p className="text-lg md:text-xl opacity-80 leading-relaxed font-medium">
                Value-Based Healthcare focuses on outcomes that matter to patients relative to the cost of delivering those outcomes—measured across the full cycle of care, not isolated services.
             </p>
          </div>

          {/* VBHC Shifts */}
          <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-8 text-center">VBHC shifts healthcare from:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { from: "Volume", to: "Value", icon: TrendingUp },
                { from: "Departments", to: "Conditions", icon: Network },
                { from: "Revenue per service", to: "Outcome per rupee spent", icon: Coins }
              ].map((item, i) => (
                <div key={i} className={`text-center p-8 rounded-2xl border ${cardBorder} hover:border-[#F5AD3D] transition-all group`}>
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg ${isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D] text-[#1F2022]'}`}>
                      <item.icon size={24} />
                   </div>
                   <div className="space-y-3">
                     <div className="text-lg font-medium opacity-50 decoration-2 decoration-red-500/30 line-through">{item.from}</div>
                     <ArrowRight className="text-[#F5AD3D] mx-auto w-6 h-6 group-hover:translate-x-1 transition-transform" />
                     <div className="text-xl font-bold">{item.to}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- WHY VBHC MATTERS SECTION ---
  const WhyVBHCMattersSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    const bgClass = isLight ? 'bg-[#E6EBE0]' : 'bg-[#F5AD3D]';
    const textClass = 'text-[#1F2022]';
    const accentClass = isLight ? 'text-[#F5AD3D]' : 'text-white';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`mb-16 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-[#1F2022]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">The Impact</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                Why VBHC Matters for <span className={accentClass}>Indian Hospitals</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* LEFT: Challenges */}
             <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-6">Indian hospitals operate under intense pressure:</h3>
                
                <div className="space-y-4">
                  {[
                    "Thin margins",
                    "Rising clinical input costs",
                    "Increasing insurer scrutiny",
                    "Limited pricing power"
                  ].map((challenge, i) => (
                    <div key={i} className="flex items-start gap-4">
                       <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                       <span className="text-lg font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* RIGHT: Benefits */}
             <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-6">VBHC allows hospitals to:</h3>
                
                <div className="space-y-4">
                  {[
                    "Improve outcomes while controlling costs",
                    "Strengthen insurer negotiations",
                    "Create predictable, scalable care models"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                       <div className="w-8 h-8 rounded-full bg-[#F5AD3D] flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} className="text-[#1F2022]" />
                       </div>
                       <span className="text-lg font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    );
  };
  const WhySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    // Theme Logic: Light = White, Dark = Dark Gray
    const bgClass = isLight ? 'bg-white' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    const cardBorder = isLight ? 'border-gray-200' : 'border-white/10';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-[#F5AD3D]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">The Philosophy</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Why <span className="text-[#F5AD3D]">Value-Based Healthcare?</span>
             </h2>
             <p className="text-xl opacity-80 leading-relaxed font-medium">
                VBHC focuses on outcomes that matter to patients relative to the cost of delivering those outcomes—measured across the full cycle of care, not isolated services.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
             
             {/* LEFT: The Shift (Volume -> Value) */}
             <div className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">The Strategic Shift</h3>
                {[
                  { from: "Volume", to: "Value" },
                  { from: "Departments", to: "Conditions" },
                  { from: "Revenue per Service", to: "Outcome per Rupee" }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 rounded-2xl border ${cardBorder} hover:border-[#F5AD3D] transition-all group bg-opacity-50 bg-current`}>
                     <span className="font-medium opacity-50 decoration-2 decoration-red-500/30 line-through">{item.from}</span>
                     <ArrowRight className="text-[#F5AD3D] group-hover:translate-x-2 transition-transform" />
                     <span className="text-xl font-bold">{item.to}</span>
                  </div>
                ))}
             </div>

             {/* RIGHT: Why it Matters (Card) */}
             <div className={`relative p-8 md:p-10 rounded-[2.5rem] ${isLight ? 'bg-[#F5AD3D]/10' : 'bg-[#F5AD3D]/5'} transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-8 right-8 text-[#F5AD3D] opacity-20"><ShieldCheck size={64} /></div>
                
                <h3 className="text-2xl font-bold mb-6">Why it Matters for Indian Hospitals</h3>
                <p className="opacity-80 mb-8 font-medium">
                   Indian hospitals operate under intense pressure: <span className="text-[#F5AD3D]">thin margins</span>, rising clinical costs, and increasing insurer scrutiny.
                </p>
                
                <ul className="space-y-4">
                   {[
                     "Improve outcomes while controlling costs",
                     "Strengthen insurer negotiations",
                     "Create predictable, scalable care models"
                   ].map((pt, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-[#F5AD3D] text-[#1F2022]"><CheckCircle2 size={14} /></div>
                        <span className="font-bold text-sm md:text-base">{pt}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>
    );
  };

  // --- 2. IPU MODEL SECTION ---
  const IPUSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    
    // Inverted Theme for Visual Break
    // Light Mode -> Dark Section
    // Dark Mode -> Yellow Section
    const bgClass = isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D]';
    const textClass = isLight ? 'text-white' : 'text-[#1F2022]';
    const mutedText = isLight ? 'text-gray-400' : 'text-[#1F2022]/70';

    return (
      <section ref={ref} className={`relative py-32 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full grid grid-cols-6 border-r border-current">
              {[...Array(6)].map((_,i)=><div key={i} className="border-l border-current h-full"></div>)}
           </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
           
           {/* Left Content */}
           <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-3 mb-6 text-[#F5AD3D]">
                 <Network size={28} />
                 <span className={`font-bold uppercase tracking-widest text-xs ${isLight ? 'text-[#F5AD3D]' : 'text-white'}`}>Structural Change</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                 From Departments to <br/> Integrated Practice Units
              </h2>
              
              <p className={`text-xl mb-8 leading-relaxed ${mutedText}`}>
                 An <span className="font-bold underline decoration-2 underline-offset-4">IPU</span> is a multidisciplinary team organized around a medical condition, not a department.
              </p>

              <div className={`pl-6 border-l-2 ${isLight ? 'border-[#F5AD3D]' : 'border-white'} space-y-2`}>
                 <p className="font-medium italic opacity-90">"This alignment drives accountability, efficiency, and continuous improvement."</p>
              </div>
           </div>

           {/* Right Visualization (Orbit Animation) */}
           <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                 
                 {/* Orbits */}
                 <div className="absolute inset-0 rounded-full border border-current opacity-20 animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute inset-8 rounded-full border border-current opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>

                 {/* Center Core */}
                 <div className={`absolute inset-0 m-auto w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl z-20 ${isLight ? 'bg-white text-[#1F2022]' : 'bg-[#1F2022] text-white'}`}>
                    <Users size={32} className="mb-2" />
                    <span className="font-black text-xl tracking-tighter">IPU</span>
                 </div>

                 {/* Floating Nodes */}
                 {[
                   { label: "Clinical Outcomes", icon: HeartPulse, top: '0%', left: '50%' },
                   { label: "Cost Per Episode", icon: Coins, top: '75%', left: '90%' },
                   { label: "Patient Exp", icon: Smile, top: '75%', left: '10%' },
                 ].map((node, i) => (
                    <div 
                      key={i} 
                      className={`absolute w-28 h-28 rounded-2xl flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 font-bold text-xs transform -translate-x-1/2 -translate-y-1/2
                      ${isLight ? 'bg-[#2A2B2E] text-white' : 'bg-white text-[#1F2022]'}`}
                      style={{ top: node.top, left: node.left }}
                    >
                       <node.icon size={20} className="mb-2 opacity-80" />
                       {node.label}
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    );
  };

  // --- 3. WHAT WE SOLVE SECTION ---
  const SolveSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    
    const bgClass = isLight ? 'bg-slate-50' : 'bg-[#151618]'; // Slightly lighter dark
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    
    // Card Styles
    const cardBg = isLight 
      ? 'bg-white border-gray-100 hover:shadow-xl' 
      : 'bg-[#1F2022] border-white/5 hover:bg-[#252629] hover:shadow-2xl';

    const problems = [
      {
        title: "Fragmented Tech",
        icon: Unplug,
        desc: "Systems that don't talk to each other.",
        points: ["Incomplete patient journeys", "Data duplication", "Manual reporting", "Intuition-based decisions"]
      },
      {
        title: "Operational Inefficiency",
        icon: Settings,
        desc: "No condition-level visibility.",
        points: ["Wide variable LOS", "Misallocated OT/ICU", "Suboptimal staff productivity", "Workflow bottlenecks"]
      },
      {
        title: "Financial Leakage",
        icon: TrendingDown,
        desc: "Revenue lost in the cracks.",
        points: ["Missed diagnostics", "Poor follow-ups", "Unbundled care delivery", "Weak post-discharge monetization"]
      }
    ];

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto">
          
          <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-red-500/10 text-red-500 font-bold text-xs uppercase tracking-widest">
               The Core Problem
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
               What We <span className="text-red-500">Solve.</span>
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
               Our platform identifies operational leaks and connects the dots to fix these three critical hospital failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {problems.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden
                    ${cardBg}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                   {/* Icon */}
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D] text-[#1F2022]'}`}>
                      <item.icon size={28} />
                   </div>

                   <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                   <p className="text-sm font-medium opacity-60 mb-6">{item.desc}</p>
                   
                   <div className="space-y-3">
                      {item.points.map((pt, i) => (
                         <div key={i} className="flex items-start gap-3">
                            <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                            <span className="text-sm font-semibold opacity-90">{pt}</span>
                         </div>
                      ))}
                   </div>
                   
                   {/* Bottom Gradient Line */}
                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
             ))}
          </div>

        </div>
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <WhatIsVBHCSection />
      <WhyVBHCMattersSection />
      <IPUSection />
      <SolveSection />
    </div>
  );

};

export default VBHCPage;