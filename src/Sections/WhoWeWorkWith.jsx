import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Users, 
  ArrowUpRight,
  Briefcase,
  Activity
} from 'lucide-react';

const WhoWeWorkWith = ({ theme }) => {
  // --- THEME LOGIC ---
  const isLight = theme === 'light';

  // Backgrounds
  const sectionBg = isLight ? 'bg-[#F5AD3D]' : 'bg-white';
  const textColor = '#1F2022'; // Always dark for sharpness

  // Card Styles (Glassy & Premium)
  // Light: White cards with soft shadow
  // Dark: Dark Glass cards on Yellow background
  const cardBase = "relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden";
  const cardTheme = isLight 
    ? 'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-2xl hover:border-gray-200' 
    : 'bg-[#1F2022] border-[#1F2022] text-white hover:shadow-2xl hover:-translate-y-1';

  // Accent Colors
  const accentColor = isLight ? 'text-blue-600' : 'text-white';
  const mutedText = isLight ? 'text-gray-500' : 'text-gray-400';

  // --- ANIMATION OBSERVER ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative w-full py-24 px-6 lg:px-12 ${sectionBg} ${textColor} transition-colors duration-700 overflow-hidden`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-white/20 to-transparent rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className={`mb-20 flex flex-col md:flex-row items-end justify-between gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-xl">
             <div className="flex items-center gap-2 mb-4">
               <span className="w-12 h-[2px] bg-current opacity-30"></span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Target Partners</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
               Who We <br/> Empower.
             </h2>
          </div>
          <p className={`max-w-sm text-lg font-medium opacity-70 leading-relaxed mb-2 ${isLight ? 'text-gray-600' : 'text-[#1F2022]/80'}`}>
            We partner with forward-thinking institutions ready to embrace data-driven architecture.
          </p>
        </div>

        {/* --- MODERN BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: PRIVATE HOSPITALS (5 Cols) */}
          <div 
            className={`lg:col-span-5 ${cardBase} ${cardTheme} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
               <Building2 size={120} />
            </div>

            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current opacity-40 mb-6 text-xs font-bold uppercase tracking-wider">
                  <Activity size={12} /> Providers
               </div>
               
               {/* Massive Number Typography */}
               <div className="flex items-baseline gap-1 mb-2">
                 <span className="text-7xl font-black tracking-tighter leading-none">50</span>
                 <span className="text-4xl font-light opacity-50">–</span>
                 <span className="text-7xl font-black tracking-tighter leading-none">100</span>
               </div>
               <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6 pl-1">Bed Capacity</div>
               
               <p className={`text-lg font-medium leading-relaxed ${mutedText}`}>
                 Private hospitals looking to optimize operations and maximize ROI through architectural precision.
               </p>
            </div>
          </div>

          {/* CARD 2: CARE FACILITIES (4 Cols) */}
          <div 
            className={`lg:col-span-4 ${cardBase} ${cardTheme} flex flex-col justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '150ms' }}
          >
             <div>
                <div className="w-14 h-14 rounded-2xl bg-current text-white/90 flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform duration-300">
                   {/* Icon color inversion trick */}
                   <Stethoscope size={28} className={isLight ? 'text-white' : 'text-[#F5AD3D]'} /> 
                </div>
                
                <h3 className="text-3xl font-bold mb-4 leading-tight">Specialty & <br/> Multi-Specialty</h3>
                <p className={`font-medium ${mutedText}`}>
                  From focused single-specialty clinics to complex multi-specialty hubs.
                </p>
             </div>
             
             <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                <span>View Scope</span>
                <ArrowUpRight size={16} />
             </div>
          </div>

          {/* CARD 3: LEADERSHIP (3 Cols) */}
          <div 
            className={`lg:col-span-3 ${cardBase} ${cardTheme} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-current opacity-10"><Users size={20} /></div>
                  <h3 className="text-xl font-bold">Decision Makers</h3>
               </div>
               <p className={`text-sm font-medium ${mutedText}`}>
                 Partnering with visionary leadership teams.
               </p>
            </div>

            {/* Interactive Role Tags */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Promoters", icon: Briefcase },
                { label: "Medical Directors", icon: Stethoscope },
                { label: "COOs & CIOs", icon: Activity }
              ].map((role, i) => (
                <div 
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 cursor-default
                    ${isLight 
                      ? 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                   <span className="font-bold text-sm">{role.label}</span>
                   <role.icon size={16} className="opacity-40" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;