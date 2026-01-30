import React, { useEffect, useRef, useState } from 'react';
import {
   Heart,
   Baby,
   Activity, // For Ortho/Generic
   TrendingUp,
   DollarSign,
   CheckCircle2,
   PieChart,
   Stethoscope,
   ArrowRight,
   Cross
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
      return () => { if (ref.current) observer.disconnect() };
   }, [options]);
   return [ref, isVisible];
};

const IPUSolutionsPage = ({ theme }) => {
   const isLight = theme === 'light';

   // Theme Variables
   const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
   const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
   const mutedText = isLight ? 'text-gray-500' : 'text-gray-400';
   const cardBg = isLight ? 'bg-white border-gray-100' : 'bg-[#1F2022] border-white/10';

   // --- 1. DIABETES FEATURE SECTION ---
   const DiabetesFeature = () => {
      const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

      return (
         <section ref={ref} className="w-full max-w-7xl mx-auto px-6 py-35">

            {/* Section Header */}
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="flex items-center gap-2 mb-4">
                  <span className={`w-12 h-[2px] bg-[#F5AD3D]`}></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Condition Architecture</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                  IPU Solutions
               </h2>
               <p className="text-xl opacity-70 max-w-2xl">
                  Specialized care models designed to optimize outcomes and costs for specific medical conditions.
               </p>
            </div>

            {/* MAIN FEATURE CARD: DIABETES */}
            <div className={`relative w-full rounded-[2.5rem] overflow-hidden border transition-all duration-1000 ${cardBg} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

               {/* Header Banner */}
               <div className="relative p-8 md:p-12 border-b border-current/10 bg-gradient-to-r from-blue-600/10 to-transparent">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                     <Activity size={200} />
                  </div>
                  <div className="relative z-10">
                     <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5AD3D]/10 text-[#F5AD3D] font-bold text-xs uppercase tracking-widest mb-4`}>
                        Flagship Model
                     </div>
                     <h3 className="text-4xl font-black mb-2">Diabetes IPU</h3>
                     <p className="text-lg opacity-70 max-w-xl">
                        Enable end-to-end diabetes care across screening, diagnosis, and long-term management.
                     </p>
                  </div>
               </div>

               {/* 3-Column Content Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-current/10">

                  {/* Col 1: Scope */}
                  <div className="p-8 md:p-12">
                     <div className={`flex items-center gap-3 mb-6 text-[#F5AD3D]`}>
                        <Stethoscope size={24} />
                        <span className="font-bold text-sm uppercase tracking-wider">Care Scope</span>
                     </div>
                     <ul className="space-y-4">
                        {["Screening & Diagnosis", "Clinical Management", "Monitoring & Follow-ups"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-[#1F2022]' : 'bg-[#E6EBE0]'}`}></div>
                              <span className="font-medium opacity-80">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Col 2: Outcomes */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-3 mb-6 text-teal-500">
                        <PieChart size={24} />
                        <span className="font-bold text-sm uppercase tracking-wider">Outcomes Tracked</span>
                     </div>
                     <ul className="space-y-4">
                        {[
                           { label: "HbA1c Improvement", icon: TrendingUp },
                           { label: "Complication Rates", icon: Activity },
                           { label: "Cost Per Patient/Year", icon: DollarSign }
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <item.icon size={16} className="opacity-50" />
                              <span className="font-medium opacity-80">{item.label}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Col 3: Financials */}
                  <div className="p-8 md:p-12 bg-current/5">
                     <div className={`flex items-center gap-3 mb-6 text-[#F5AD3D]`}>
                        <DollarSign size={24} />
                        <span className="font-bold text-sm uppercase tracking-wider">Financial Impact</span>
                     </div>
                     <ul className="space-y-4">
                        {[
                           "Higher lifetime patient value",
                           "Improved follow-up revenue",
                           "Reduced complications & admissions"
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className={`mt-1 text-[#F5AD3D]`} />
                              <span className="font-bold opacity-90">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>
         </section>
      );
   };

   // --- 2. GRID SECTION: OTHER IPUS ---
   const OtherIPUs = () => {
      const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

      // Card Data
      const specialties = [
         {
            title: "Orthopedics IPU",
            icon: Cross, // Represents structure/bone
            color: "text-orange-500",
            bgHover: "hover:border-orange-500/30",
            points: ["Standardized care pathways", "Reduced Length of Stay (LOS)", "Improved OT utilization"]
         },
         {
            title: "Maternity IPU",
            icon: Baby,
            color: "text-pink-500",
            bgHover: "hover:border-pink-500/30",
            points: ["Improved maternal & neonatal outcomes", "Lower complication costs", "Stronger bundled care models"]
         },
         {
            title: "Cardiac IPU",
            icon: Heart,
            color: "text-red-500",
            bgHover: "hover:border-red-500/30",
            points: ["Full episode-of-care visibility", "Better ICU utilization", "Improved payer negotiations"]
         }
      ];

      return (
         <section ref={ref} className="w-full max-w-7xl mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {specialties.map((item, index) => (
                  <div
                     key={index}
                     className={`group relative p-8 rounded-[2rem] border transition-all duration-500 
                    ${cardBg} ${item.bgHover} hover:shadow-2xl hover:-translate-y-2
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                 `}
                     style={{ transitionDelay: `${index * 150}ms` }}
                  >
                     {/* Icon */}
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 ${isLight ? 'bg-white' : 'bg-[#1F2022] border border-white/10'}`}>
                        <item.icon size={28} className={item.color} />
                     </div>

                     <h3 className="text-2xl font-bold mb-6">{item.title}</h3>

                     {/* Divider */}
                     <div className="w-full h-px bg-current opacity-10 mb-6"></div>

                     <ul className="space-y-4">
                        {item.points.map((pt, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                              <span className={`text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity`}>
                                 {pt}
                              </span>
                           </li>
                        ))}
                     </ul>

                     {/* Hover Arrow */}
                     <div className={`absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 ${item.color}`}>
                        <ArrowRight size={24} />
                     </div>
                  </div>
               ))}
            </div>
         </section>
      );
   };

   return (
      <div className={`w-full min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-700`}>
         <DiabetesFeature />
         <OtherIPUs />
      </div>
   );
};

export default IPUSolutionsPage;