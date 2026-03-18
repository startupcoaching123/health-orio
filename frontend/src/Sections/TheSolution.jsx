import React, { useEffect, useRef, useState } from 'react';
import {
  Boxes,
  DatabaseZap,
  Scale,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Clock,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
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

  const stats = [
    {
      id: 1,
      label: "Revenue Growth",
      subLabel: "Increase in ARPOB / ARPE",
      value: "8–15%",
      icon: TrendingUp,
      color: "text-emerald-500",
      bgAccent: "bg-emerald-500",
      trend: "up"
    },
    {
      id: 2,
      label: "Cost Efficiency",
      subLabel: "Reduction in Cost per Episode",
      value: "10–20%",
      icon: TrendingDown,
      color: "text-blue-500",
      bgAccent: "bg-blue-500",
      trend: "down"
    },
    {
      id: 3,
      label: "Operational Speed",
      subLabel: "Reduction in Avg. Length of Stay",
      value: "0.5–1.5",
      unit: "Days",
      icon: Clock,
      color: isLight ? "text-[#1F2022]" : "text-[#F5AD3D]",
      bgAccent: isLight ? "bg-[#1F2022]" : "bg-[#F5AD3D]",
      trend: "down"
    },
    {
      id: 4,
      label: "Profitability",
      subLabel: "Improvement in EBITDA Margins",
      value: "3–8%",
      icon: PieChart,
      color: "text-purple-500",
      bgAccent: "bg-purple-500",
      trend: "up"
    }
  ];

  const cardBgStats = isLight
    ? 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
    : 'bg-white/5 border-white/10 hover:bg-white/10';

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-20 px-6 ${sectionBg} ${textColor} border-t border-white/5 transition-colors duration-700 overflow-hidden`}
    >

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

        {/* --- STATS GRID --- */}
        <div className={`w-full mb-12 text-left transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${isLight ? 'border-gray-200 bg-white' : 'border-white/20 bg-white/10'}`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Real World Data</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group relative p-5 md:p-6 rounded-3xl border transition-all duration-500 flex flex-col
                  ${cardBgStats}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                {/* Header: icon + label — fixed height */}
                <div className="flex items-center gap-3 mb-5 min-h-[40px]">
                  <div className={`shrink-0 p-2 rounded-lg inline-flex items-center justify-center ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <h3 className={`font-bold text-xs uppercase tracking-wider opacity-60 leading-tight ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {stat.label}
                  </h3>
                </div>
                {/* Value — fixed layout, no wrapping */}
                <div className="mb-3 flex items-baseline gap-1 flex-wrap">
                  <span className={`text-4xl font-black tracking-tight leading-none ${isLight ? 'text-[#1F2022]' : 'text-white'}`}>
                    {stat.value}
                  </span>
                  {stat.unit && <span className="text-base font-bold opacity-60 ml-1">{stat.unit}</span>}
                </div>
                {/* Sub label — grows to fill space */}
                <p className={`text-sm font-medium leading-snug mb-5 flex-grow ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  {stat.subLabel}
                </p>
                {/* Progress bar — always at bottom */}
                <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden mt-auto">
                  <div className={`h-full w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full ${stat.bgAccent}`} style={{ transitionDelay: `${index * 100 + 300}ms` }}></div>
                </div>
              </div>
            ))}
          </div>
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