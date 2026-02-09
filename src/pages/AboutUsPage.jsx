import React, { useEffect, useRef, useState } from 'react';
import {
   Stethoscope,
   Building2,
   TrendingUp,
   Cpu,
   Target,
   Users,
   Globe2,
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
      return () => { if (ref.current) observer.disconnect() };
   }, [options]);
   return [ref, isVisible];
};

const AboutUsPage = ({ theme }) => {
   const isLight = theme === 'light';

   // Theme Variables
   const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
   const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
   const mutedText = isLight ? 'text-gray-500' : 'text-gray-400';
   const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-white/5 border-white/10';
   const accentColor = isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]';
   const bgAccent = isLight ? 'bg-[#1F2022]' : 'bg-[#E6EBE0]';
   const accentIcon = isLight ? 'text-white' : 'text-[#1F2022]';

   // --- 1. MISSION SECTION (The Manifesto) ---
   const MissionSection = () => {
      const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

      return (
         <section ref={ref} className="relative w-full py-35 px-6 lg:px-12 border-b border-current/10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none">
               <Globe2 size={500} strokeWidth={0.5} />
            </div>

            <div className="max-w-5xl mx-auto text-center">

               <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-8`}>
                     <Target size={14} /> Our Mission
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                     To enable hospitals to deliver <br />
                     <span className="text-[#F5AD3D]">
                        Better Outcomes
                     </span> <br />
                     at <span className="underline decoration-4 decoration-current/20 underline-offset-8">Lower Costs.</span>
                  </h1>

                  <p className={`text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto opacity-70`}>
                     We achieve this through value-based, data-driven care models that align clinical excellence with financial sustainability.
                  </p>
               </div>

            </div>
         </section>
      );
   };

   // --- 2. TEAM SECTION (Expertise Pillars) ---
   const TeamSection = () => {
      const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

      const expertise = [
         {
            title: "Clinicians",
            icon: Stethoscope,
            desc: "Medical experts ensuring our pathways adhere to global best practices.",
            color: "text-blue-500",
            bgHover: "group-hover:bg-blue-500"
         },
         {
            title: "Hospital Operators",
            icon: Building2,
            desc: "Veterans in healthcare administration optimizing daily workflows.",
            color: "text-orange-500",
            bgHover: "group-hover:bg-orange-500"
         },
         {
            title: "Health Economists",
            icon: TrendingUp,
            desc: "Strategists analyzing data to maximize ROI and patient value.",
            color: "text-emerald-500",
            bgHover: "group-hover:bg-emerald-500"
         },
         {
            title: "Technology Experts",
            icon: Cpu,
            desc: "Engineers building the secure, scalable backbone of our platform.",
            color: "text-purple-500",
            bgHover: "group-hover:bg-purple-500"
         }
      ];

      return (
         <section ref={ref} className="relative w-full py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

               <div className={`mb-16 flex items-end justify-between gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div>
                     <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-60 mb-2">
                        <Users size={16} /> Our Team
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        A Multidisciplinary <span className={accentColor}>Collective.</span>
                     </h2>
                  </div>
                  <div className="hidden md:block h-px flex-grow bg-current/10 ml-8 mb-4"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {expertise.map((item, index) => (
                     <div
                        key={index}
                        className={`group relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden
                       ${cardBg}
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                        style={{ transitionDelay: `${index * 150}ms` }}
                     >
                        {/* Hover Background Fill */}
                        <div className={`absolute inset-0 opacity-0 ${item.bgHover} group-hover:opacity-5 transition-opacity duration-500`}></div>

                        <div className="relative z-10">
                           {/* Icon */}
                           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 ${isLight ? 'bg-gray-50' : 'bg-white/10'} ${item.color}`}>
                              <item.icon size={28} />
                           </div>

                           {/* Content */}
                           <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                           <p className={`text-sm leading-relaxed mb-6 opacity-70`}>
                              {item.desc}
                           </p>

                           {/* Decorative Line */}
                           <div className={`w-8 h-1 rounded-full bg-current opacity-20 group-hover:w-full transition-all duration-500 ${item.color.replace('text', 'bg')}`}></div>
                        </div>
                     </div>
                  ))}
               </div>

            </div>
         </section>
      );
   };

   return (
      <div className={`w-full min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-700`}>
         <MissionSection />
         <TeamSection />
      </div>
   );
};

export default AboutUsPage;