import React, { useEffect, useRef, useState } from 'react';
import { 
  Briefcase, 
  Stethoscope, 
  Server, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Activity,
  Network
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

const SolutionsByRole = ({ theme }) => {
  const isLight = theme === 'light';

  // --- THEME CONFIG ---
  // We use a dark background for the sections to make the Yellow POP.
  const sectionBg = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
  const cardBg = isLight ? 'bg-white' : 'bg-[#2A2B2E]';
  
  // The Signature Orio Yellow
  const accentColor = 'text-[#F5AD3D]';
  const bgAccent = 'bg-[#F5AD3D]';

  // --- 1. PROMOTERS SECTION ---
  const PromoterSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    return (
      <div ref={ref} className="py-24 lg:py-32 px-6 border-b border-current/10">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Content */}
            <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-6`}>
                  <Briefcase size={14} /> For Promoters
               </div>
               <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Maximize <span className={accentColor}>Financial Velocity.</span>
               </h3>
               <p className="text-xl opacity-70 mb-10 leading-relaxed">
                  Shift from operational firefighting to strategic expansion. Our platform creates the predictable cash flow needed for capital-efficient growth.
               </p>

               <ul className="space-y-6">
                  {[
                    { title: "Faster EBITDA Improvement", desc: "Unlock hidden margins through IPU-driven cost containment." },
                    { title: "Capital-Efficient Growth", desc: "Scale outcome models across locations without linear cost increases." },
                    { title: "Predictable Financial Outcomes", desc: "Data-driven forecasting replaces intuition-based budgeting." }
                  ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className={`mt-1 p-1 rounded-full ${bgAccent} text-[#1F2022] shrink-0 h-fit`}>
                           <CheckCircle2 size={16} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">{item.title}</h4>
                           <p className="text-sm opacity-60 mt-1">{item.desc}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Right: Abstract Visualization (Chart) */}
            <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
               <div className={`relative p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-current/20 ${cardBg}`}>
                  {/* Decorative Elements */}
                  <div className={`absolute top-6 right-8 ${accentColor}`}><TrendingUp size={48} /></div>
                  <div className="space-y-4 mt-8">
                     {/* Bar Chart Bars */}
                     <div className="flex items-end gap-4 h-64 border-b-2 border-current/10 pb-4 px-4">
                        <div className={`w-1/4 h-[40%] rounded-t-xl opacity-20 bg-current`}></div>
                        <div className={`w-1/4 h-[55%] rounded-t-xl opacity-40 bg-current`}></div>
                        <div className={`w-1/4 h-[70%] rounded-t-xl opacity-60 bg-current`}></div>
                        <div className={`w-1/4 h-[90%] rounded-t-xl ${bgAccent} shadow-[0_0_30px_rgba(245,173,61,0.5)]`}></div>
                     </div>
                     <div className="flex justify-between px-4 text-xs font-bold opacity-50 uppercase tracking-widest">
                        <span>Q1</span><span>Q2</span><span>Q3</span><span className={accentColor}>Projected</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  };

  // --- 2. MEDICAL DIRECTORS SECTION ---
  const DirectorSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    return (
      <div ref={ref} className="py-24 lg:py-32 px-6 border-b border-current/10">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            
            {/* Content (Right Side) */}
            <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-6`}>
                  <Stethoscope size={14} /> For Medical Directors
               </div>
               <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Standardize <span className={accentColor}>Clinical Excellence.</span>
               </h3>
               <p className="text-xl opacity-70 mb-10 leading-relaxed">
                  Move from variability to reliability. Give your clinicians the condition-level data they need to drive superior patient outcomes.
               </p>

               <ul className="space-y-6">
                  {[
                    { title: "Outcome Transparency", desc: "Real-time visibility into clinical success rates per condition." },
                    { title: "Standardized Pathways", desc: "Ensure adherence to best protocols across all departments." },
                    { title: "Reduced Complications", desc: "Early warning systems to prevent adverse events before they happen." }
                  ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className={`mt-1 p-1 rounded-full ${bgAccent} text-[#1F2022] shrink-0 h-fit`}>
                           <CheckCircle2 size={16} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">{item.title}</h4>
                           <p className="text-sm opacity-60 mt-1">{item.desc}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Visual (Left Side) - Pulse Graph */}
            <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
               <div className={`relative p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-current/20 ${cardBg}`}>
                  <div className={`absolute top-6 right-8 ${accentColor}`}><Activity size={48} /></div>
                  
                  {/* Pulse Animation */}
                  <div className="relative h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-current/5 mt-8">
                     <svg viewBox="0 0 500 150" className="w-full h-full stroke-current fill-none stroke-2">
                        <path d="M0,75 H50 L75,25 L100,125 L125,75 H175 L200,25 L225,125 L250,75 H300 L325,25 L350,125 L375,75 H500" className="opacity-20" />
                        <path 
                           d="M0,75 H50 L75,25 L100,125 L125,75 H175 L200,25 L225,125 L250,75 H300 L325,25 L350,125 L375,75 H500" 
                           stroke="#F5AD3D" 
                           strokeWidth="3"
                           className="drop-shadow-[0_0_10px_rgba(245,173,61,0.8)]"
                           pathLength="1"
                           strokeDasharray="1"
                           strokeDashoffset="0"
                        >
                           <animate attributeName="stroke-dashoffset" from="1" to="0" dur="2s" repeatCount="indefinite" />
                        </path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  };

  // --- 3. CIO/CTO SECTION ---
  const TechSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    return (
      <div ref={ref} className="py-24 lg:py-32 px-6">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Content */}
            <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-6`}>
                  <Server size={14} /> For CIOs & CTOs
               </div>
               <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Future-Proof <span className={accentColor}>Architecture.</span>
               </h3>
               <p className="text-xl opacity-70 mb-10 leading-relaxed">
                  Stop wrestling with legacy silos. Build a unified data layer that integrates seamlessly without disrupting your current HIS/EMR stack.
               </p>

               <ul className="space-y-6">
                  {[
                    { title: "Seamless Integrations", desc: "API-first design connects easily with existing hospital systems." },
                    { title: "Minimal IT Overhead", desc: "Cloud-native deployment means zero hardware maintenance." },
                    { title: "Scalable Architecture", desc: "Grow from 1 hospital to 100 without rebuilding your tech stack." }
                  ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className={`mt-1 p-1 rounded-full ${bgAccent} text-[#1F2022] shrink-0 h-fit`}>
                           <CheckCircle2 size={16} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">{item.title}</h4>
                           <p className="text-sm opacity-60 mt-1">{item.desc}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Visual - Server Nodes */}
            <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
               <div className={`relative p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-current/20 ${cardBg}`}>
                  <div className={`absolute top-6 right-8 ${accentColor}`}><Network size={48} /></div>
                  
                  {/* Abstract Network */}
                  <div className="relative mt-8 grid grid-cols-2 gap-4">
                     <div className="h-24 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center">
                        <span className="font-bold opacity-30">HIS</span>
                     </div>
                     <div className="h-24 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center">
                        <span className="font-bold opacity-30">LIS</span>
                     </div>
                     <div className={`col-span-2 h-32 rounded-2xl ${bgAccent} flex flex-col items-center justify-center text-[#1F2022] shadow-[0_0_40px_rgba(245,173,61,0.3)]`}>
                        <Server size={32} className="mb-2" />
                        <span className="font-black tracking-widest">UNIFIED LAYER</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  };

  return (
    <section className={`relative w-full ${sectionBg} ${textClass} font-sans transition-colors duration-700 pt-20`}>
       
       {/* Section Title */}
       <div className="pt-24 px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] opacity-60 mb-4">Value Proposition</h2>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
             Solutions by <span className={accentColor}>Role</span>
          </h1>
       </div>

       {/* The Blocks */}
       <PromoterSection />
       <DirectorSection />
       <TechSection />

    </section>
  );
};

export default SolutionsByRole;