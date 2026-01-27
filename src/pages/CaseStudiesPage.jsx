import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  TrendingDown, 
  Clock, 
  TrendingUp, 
  CheckCircle2,
  Stethoscope
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

const CaseStudiesPage = ({ theme }) => {
  const isLight = theme === 'light';
  
  // Theme Variables
  // Using a Professional "Teal/Blue" accent for Trust & Healthcare
  const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
  const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-white/5 border-white/10';
  const mutedText = isLight ? 'text-gray-500' : 'text-gray-400';

  // --- FEATURED CASE STUDY SECTION ---
  const FeaturedCase = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    return (
      <section ref={ref} className="w-full max-w-6xl mx-auto px-6 py-35">
         
         {/* Section Header */}
         <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4">
               <Building2 size={12} /> Real World Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
               Case Studies
            </h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
               See how leading hospitals are transforming their operations with our platform.
            </p>
         </div>

         {/* CASE STUDY CARD */}
         <div className={`group relative rounded-[2.5rem] border overflow-hidden transition-all duration-1000 
            ${cardBg}
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
         `}>
            
            <div className="flex flex-col lg:flex-row">
               
               {/* LEFT COLUMN: CONTEXT (Challenge & Solution) */}
               <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-current/10">
                  
                  {/* Hospital Identity */}
                  <div className="flex items-start justify-between mb-8">
                     <div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-60 mb-2">
                           <MapPin size={14} /> North India
                        </div>
                        <h2 className="text-3xl font-black leading-tight">Multi-Specialty <br/> Hospital</h2>
                     </div>
                     <div className={`p-3 rounded-xl ${isLight ? 'bg-blue-50 text-blue-600' : 'bg-blue-500/20 text-blue-400'}`}>
                        <Building2 size={24} />
                     </div>
                  </div>

                  {/* The Story Grid */}
                  <div className="space-y-8">
                     
                     {/* Challenge */}
                     <div className="relative pl-6 border-l-2 border-red-400/50">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-2">The Challenge</h3>
                        <p className={`text-lg font-medium leading-relaxed ${mutedText}`}>
                           Rising operational costs and inconsistent clinical outcomes across departments.
                        </p>
                     </div>

                     {/* Arrow */}
                     <div className="pl-6 opacity-30">
                        <ArrowRight size={20} className="rotate-90 lg:rotate-0" />
                     </div>

                     {/* Solution */}
                     <div className="relative pl-6 border-l-2 border-emerald-500/50">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-2">The Solution</h3>
                        <div className="flex flex-wrap gap-3">
                           <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm ${isLight ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/20 text-emerald-300'}`}>
                              <Stethoscope size={16} /> Diabetes IPU
                           </div>
                           <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm ${isLight ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/20 text-emerald-300'}`}>
                              <Stethoscope size={16} /> Orthopedic IPU
                           </div>
                        </div>
                     </div>

                  </div>
               </div>


               {/* RIGHT COLUMN: RESULTS (Metrics) */}
               <div className={`lg:w-1/2 p-8 md:p-12 flex flex-col justify-center ${isLight ? 'bg-gray-50/50' : 'bg-white/5'}`}>
                  
                  <h3 className="text-center text-sm font-bold uppercase tracking-widest opacity-60 mb-10">
                     Validated Results
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                     {/* Metric 1: Cost */}
                     <div className={`p-6 rounded-2xl border transition-transform hover:-translate-y-1 ${isLight ? 'bg-white border-gray-200' : 'bg-[#1F2022] border-white/10'}`}>
                        <div className="flex items-center gap-2 mb-2 text-emerald-500">
                           <TrendingDown size={20} />
                           <span className="text-xs font-bold uppercase tracking-wider">Cost Reduction</span>
                        </div>
                        <div className="text-5xl font-black tracking-tight">12%</div>
                     </div>

                     {/* Metric 2: LOS */}
                     <div className={`p-6 rounded-2xl border transition-transform hover:-translate-y-1 ${isLight ? 'bg-white border-gray-200' : 'bg-[#1F2022] border-white/10'}`}>
                        <div className="flex items-center gap-2 mb-2 text-blue-500">
                           <Clock size={20} />
                           <span className="text-xs font-bold uppercase tracking-wider">LOS Reduction</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                           <span className="text-5xl font-black tracking-tight">1.2</span>
                           <span className="text-lg font-bold opacity-60">Days</span>
                        </div>
                     </div>

                     {/* Metric 3: EBITDA (Spans 2 cols on md) */}
                     <div className={`md:col-span-2 p-6 rounded-2xl border transition-transform hover:-translate-y-1 ${isLight ? 'bg-white border-gray-200' : 'bg-[#1F2022] border-white/10'}`}>
                        <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center gap-2 text-[#F5AD3D]">
                              <TrendingUp size={20} />
                              <span className="text-xs font-bold uppercase tracking-wider">EBITDA Uplift</span>
                           </div>
                           <CheckCircle2 size={20} className="text-emerald-500 opacity-50" />
                        </div>
                        <div className="text-6xl font-black tracking-tighter">5%</div>
                        <p className="text-sm font-medium opacity-60 mt-2">Significant margin improvement post-implementation.</p>
                     </div>

                  </div>
               </div>

            </div>
         </div>

      </section>
    );
  };

  return (
    <div className={`w-full min-h-[80vh] ${bgClass} ${textClass} font-sans transition-colors duration-700`}>
       <FeaturedCase />
    </div>
  );
};

export default CaseStudiesPage;