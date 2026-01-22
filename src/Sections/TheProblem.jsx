import React, { useEffect, useRef, useState } from 'react';
import { 
  Unplug, 
  EyeOff, 
  TrendingUp, 
  LayoutList, 
  UserX,
  AlertOctagon,
  ArrowRight
} from 'lucide-react';

const TheProblem = ({ theme }) => {
  // --- THEME LOGIC ---
  const isLight = theme === 'light';

  // 1. Light Theme = Yellow BG
  // 2. Dark Theme = White BG
  const sectionBg = isLight ? 'bg-white' : 'bg-[#F5AD3D]';
  
  // Text is always dark charcoal for readability on both Yellow and White
  const mainTextColor = 'text-[#1F2022]';
  const mutedTextColor = isLight ? 'text-[#1F2022]/80' : 'text-gray-500';

  // Card Styling (Adaptive)
  // On Yellow BG -> Cards are white with low opacity (Glassy)
  // On White BG -> Cards are gray with border
  const cardBg = isLight 
    ? 'bg-white/20 border-black/5 hover:bg-white/40' 
    : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-md';

  const iconBg = isLight ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]';

  // --- ANIMATION STATE ---
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

  const problems = [
    {
      icon: Unplug,
      title: "Fragmented Ecosystems",
      desc: "HIS, EMR, LIS, RIS, billing and pharmacy systems operate in isolation."
    },
    {
      icon: EyeOff,
      title: "Limited Visibility",
      desc: "Blind spots across the full cycle of patient care prevent optimization."
    },
    {
      icon: TrendingUp,
      title: "Rising Costs, Stagnant Margins",
      desc: "Clinical input costs are increasing while operational margins shrink."
    },
    {
      icon: LayoutList,
      title: "Department-Centric Operations",
      desc: "Workflows focus on isolated departments instead of patient conditions."
    },
    {
      icon: UserX,
      title: "Revenue Leakage",
      desc: "Poor post-discharge engagement results in lost follow-up revenue."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`relative w-full py-24 px-6 lg:px-12 ${sectionBg} ${mainTextColor} transition-colors duration-700 ease-in-out overflow-hidden`}
    >
      {/* --- ENHANCED ARCHITECTURAL GRID --- */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        {/* Vertical Lines */}
        <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-12 border-r border-[#1F2022]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-l border-[#1F2022] relative">
               {/* Add small crosshairs at intersections for "Blueprint" feel */}
               <div className="absolute top-24 -left-1.5 w-3 h-[1px] bg-[#1F2022]"></div>
               <div className="absolute top-24 -left-[1px] w-[1px] h-3 bg-[#1F2022]"></div>
            </div>
          ))}
        </div>
        {/* Horizontal Guide Lines */}
        <div className="absolute top-24 w-full border-t border-[#1F2022]"></div>
        <div className="absolute bottom-24 w-full border-t border-[#1F2022]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* --- LEFT: BIG HEADLINE --- */}
        <div className={`lg:w-1/3 flex flex-col justify-start pt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg ${iconBg}`}>
              <AlertOctagon size={20} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
              The Reality
            </h4>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            The Problem with <br/>
            <span className="opacity-50">Today’s Hospital Model</span>
          </h2>

          <p className="text-xl font-medium leading-relaxed opacity-90 mb-8 max-w-md">
            Most Indian hospitals struggle with disconnected systems. This results in <span className="underline decoration-2 underline-offset-4">higher costs</span>, <span className="underline decoration-2 underline-offset-4">inconsistent outcomes</span>, and underutilized capacity.
          </p>

          <div className="hidden lg:block mt-auto">
             <div className="h-24 w-[1px] bg-[#1F2022] opacity-30 ml-4"></div>
          </div>
        </div>

        {/* --- RIGHT: INTERACTIVE LIST --- */}
        <div className="lg:w-2/3">
          <div className="flex flex-col gap-4">
            {problems.map((item, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl border transition-all duration-300
                  ${cardBg}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start md:items-center gap-6">
                  {/* Icon Box */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${iconBg}`}>
                    <item.icon size={22} />
                  </div>

                  {/* Text */}
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </h3>
                    <p className={`text-sm md:text-base font-medium leading-snug ${mutedTextColor}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator (Visible on hover) */}
                  <div className="hidden md:flex opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheProblem;