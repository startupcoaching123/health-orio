import React, { useEffect, useRef, useState } from 'react';
import {
  Boxes,
  DatabaseZap,
  Scale,
  ArrowRight,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const TheSolution = ({ theme }) => {
  // --- THEME LOGIC ---
  const isLight = theme === 'light';

  // 1. Light Theme = White BG
  // 2. Dark Theme = Yellow BG (#F5AD3D)
  const sectionBg = isLight ? 'bg-[#E6EBE0]' : 'bg-[#151618]';
  const textColor = isLight ? 'text-[#1F2022]' : 'text-white';

  // Visual Elements
  const borderColor = isLight ? 'border-gray-100' : 'border-black/5';
  const cardBg = isLight
    ? 'bg-gray-50 border-gray-100 hover:border-gray-300 hover:shadow-lg'
    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:shadow-sm';

  const iconBg = isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#F5AD3D] text-[#1F2022]';

  // --- ANIMATION ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.disconnect();
  }, []);

  // Data
  const pillars = [
    {
      icon: Boxes,
      title: "Integrated Practice Units",
      sub: "Multidisciplinary Teams"
    },
    {
      icon: DatabaseZap,
      title: "Unified Data",
      sub: "Clinical & Financial"
    },
    {
      icon: Scale,
      title: "Full-Cycle Measurement",
      sub: "Outcome vs Cost"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-20 px-6 ${sectionBg} ${textColor} border-t border-white/5 transition-colors duration-700 overflow-hidden`}
    >
      {/* Centered Grid Lines (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-px bg-[#1F2022] absolute left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* --- HEADER --- */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-current opacity-60">
            <span className="text-[10px] font-bold uppercase tracking-widest">Our Solution</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Clinical Care. <br />
            <span className="text-[#F5AD3D]">Measurable Impact.</span>
          </h2>

          <div className="flex items-center justify-center gap-4 text-sm md:text-base font-medium opacity-80 mt-2">
            <span>Volume-Driven</span>
            <ArrowRight size={16} className="animate-pulse" />
            <span className="font-bold underline decoration-2 underline-offset-4">Outcome-Driven</span>
          </div>
        </div>

        {/* --- 3 CARDS ROW (Compact) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-12">
          {pillars.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-500 group flex flex-col items-center
                ${cardBg}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${iconBg}`}>
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold leading-tight mb-1">{item.title}</h3>
              <p className="text-xs font-medium opacity-60 uppercase tracking-wide">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* --- BOTTOM RESULT PILL --- */}
        <div className={`inline-flex items-center gap-6 md:gap-12 px-8 py-4 rounded-full ${isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#F5AD3D] text-[#1F2022]'} shadow-2xl
           transition-all duration-700 delay-300
           ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}>
          <div className="flex items-center gap-3">
            <div className="p-1 bg-green-500 rounded-full text-black"><CheckCircle2 size={16} /></div>
            <span className="text-sm md:text-base font-bold">Better Outcomes</span>
          </div>

          <div className="w-px h-6 bg-white/20"></div>

          <div className="flex items-center gap-3">
            <div className={`p-1 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'} rounded-full text-black`}><TrendingUp size={16} /></div>
            <span className="text-sm md:text-base font-bold">Stronger Financials</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheSolution;