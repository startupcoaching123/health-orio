import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = ({ theme }) => {
  const isLight = theme === 'light';

  // The banner itself remains dark and rich to pop against any background
  // The outer section background adapts to the theme.
  const outerBg = isLight ? 'bg-[#E6EBE0]' : 'bg-[#1F2022]';

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

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 px-4 md:px-8 lg:px-12 ${outerBg} border-t border-white/5 transition-colors duration-700 overflow-hidden flex items-center justify-center`}
    >

      {/* --- THE MODERN BANNER CONTAINER --- */}
      <div
        className={`relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
        `}
      >
        {/* --- BACKGROUND LAYERS --- */}

        {/* 1. Rich Base Gradient (Teal/Charcoal mix) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#003f5c] to-teal-900"></div>

        {/* 2. Radial Glow Effect (Adds depth) */}
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_70%_30%,rgba(230,235,224,0.2),transparent_50%)]"></div>

        {/* 3. Orio Architectural Grid Overlay --- */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
          <div className="h-full w-full grid grid-cols-12 border-r border-white/30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full border-l border-white/30"></div>
            ))}
          </div>
        </div>

        {/* 4. Subtle Noise Texture for premium feel */}
        <div className='absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url("https://www.transparenttextures.com/patterns/noise.png")]'></div>


        {/* --- CONTENT --- */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

          {/* Text Column */}
          <div className="max-w-2xl">


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Ready to evaluate your hospital’s VBHC potential?
            </h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-lg">
              Take the first step towards outcome-driven architecture with a comprehensive analysis.
            </p>
          </div>

          {/* Button Column */}
          <div className="flex-shrink-0">
            <button className={`group relative inline-flex items-center gap-3 px-8 py-4 ${isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#F5AD3D] text-[#1F2022]'} rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95`}>
              <span>Book a Hospital Assessment</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;