import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Clock,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const MeasurableImpact = ({ theme }) => {
  // --- THEME LOGIC ---
  const isLight = theme === 'light';

  // Background: 
  // Light: Soft Gray/Sage for contrast against white cards
  // Dark: Deep Charcoal for contrast against Yellow/Blue previous sections
  const sectionBg = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textColor = isLight ? 'text-[#1F2022]' : 'text-white';

  // Card Styling
  const cardBg = isLight
    ? 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
    : 'bg-white/5 border-white/10 hover:bg-white/10';

  // --- ANIMATION OBSERVER ---
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

  // --- DATA ---
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

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 px-6 lg:px-12 ${sectionBg} ${textColor} border-t border-white/5 transition-colors duration-700 overflow-hidden`}
    >
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full grid grid-cols-6 lg:grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-current"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* --- SECTION HEADER --- */}
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border ${isLight ? 'border-gray-200 bg-white' : 'border-white/20 bg-white/10'}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">Real World Data</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Measurable Impact
            </h2>
          </div>
          <p className={`max-w-md text-lg font-medium opacity-70 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
            Hospitals using our platform achieve significant improvements across key performance indicators.
          </p>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative p-8 rounded-3xl border transition-all duration-500
                ${cardBg}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header: Icon & Label */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`font-bold text-sm uppercase tracking-wider opacity-60 mb-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {stat.label}
                  </h3>
                  <div className={`p-2 rounded-lg inline-flex items-center justify-center ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                    <stat.icon size={20} className={stat.color} />
                  </div>
                </div>

                {/* Trend Arrow */}
                <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0 ${stat.color}`}>
                  {stat.trend === 'up' ? <ArrowUpRight size={24} /> : <ArrowDownRight size={24} />}
                </div>
              </div>

              {/* The BIG Number */}
              <div className="mb-2 flex items-baseline gap-1">
                <span className={`text-4xl lg:text-5xl font-black tracking-tight ${isLight ? 'text-[#1F2022]' : 'text-white'}`}>
                  {stat.value}
                </span>
                {stat.unit && <span className="text-lg font-bold opacity-60">{stat.unit}</span>}
              </div>

              {/* Sub Label */}
              <p className={`text-sm font-medium leading-snug mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                {stat.subLabel}
              </p>

              {/* Decorative Progress Bar */}
              <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full ${stat.bgAccent}`} style={{ transitionDelay: `${index * 100 + 300}ms` }}></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeasurableImpact;