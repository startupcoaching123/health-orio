import React from 'react';
import { ArrowRight } from 'lucide-react';
import OrioLogo from './OrioLogo';

const HeroSection = ({ theme }) => {
  // --- THEME LOGIC ---
  const bgClass = theme === 'light' ? 'bg-[#E6EBE0]' : 'bg-[#0E0E0F]';
  const textClass = theme === 'light' ? 'text-[#1F2022]' : 'text-white';
  const borderClass = theme === 'light' ? 'border-[#1F2022]/10' : 'border-white/5';

  return (
    <div className={`relative w-full min-h-screen ${bgClass} font-sans ${textClass} transition-colors duration-700 ease-in-out overflow-hidden flex flex-col`}>

      {/* --- 1. BACKGROUND GRID --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`w-full h-full grid grid-cols-12 max-w-[90%] mx-auto border-r ${borderClass}`}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`h-full border-l ${borderClass} ${i === 0 || i === 11 ? 'block' : 'hidden md:block'}`}></div>
          ))}
        </div>
        <div className={`absolute top-1/2 w-full border-b ${borderClass}`}></div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center pt-12">

        {/* A. HEADLINE */}
        <h1 className="max-w-6xl text-4xl md:text-6xl lg:text-[3.8rem] font-black tracking-tighter leading-[1.15] mb-8 animate-in fade-in zoom-in duration-1000">

          {/* --- THE HIGHLIGHT BLOCK --- */}
          <span className="relative inline-block transform -rotate-2">
            {/* The Background Block */}
            <span className="absolute inset-0 bg-[#F5AD3D] w-full h-full block"></span>

            {/* The Text */}
            <span className="relative px-2 md:px-4 text-[#1F2022]">TRANSFORM</span>
          </span>
          {/* ---------------------------------- */}

          <span className="ml-2 md:ml-4">Hospital Outcomes,</span> <br className="hidden lg:block" />
          Costs & Margins
          <span className="inline-block mt-2 ml-3">
            with <span className={theme === 'dark' ? 'text-[#F5AD3D] underline decoration-white/20' : 'underline decoration-4 decoration-[#1F2022]/20 underline-offset-8'}>Value-Based Care</span>
          </span>
        </h1>

        {/* B. SUB-HEADLINE */}
        <p className={`max-w-3xl text-lg md:text-xl font-medium leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'opacity-80'} mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200`}>
          We help 50–100 bed hospitals integrate fragmented systems and implement IPU-based care models to improve clinical outcomes, reduce cost per episode, and increase EBITDA—without heavy capex.
        </p>

        {/* C. CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

          {/* Primary Button */}
          <button className={`h-14 px-8 rounded-xl ${theme === 'light' ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#F5AD3D] text-[#1F2022]'} text-base md:text-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300`}>
            Request a VBHC Readiness Assessment
          </button>

          {/* Secondary Button */}
          <button className={`h-14 px-4 flex items-center gap-2 ${theme === 'light' ? 'text-[#1F2022]' : 'text-white'} text-base md:text-lg font-bold border-b-2 border-transparent hover:border-current transition-all duration-300`}>
            See IPU ROI for Your Hospital <ArrowRight size={20} className={theme === 'dark' ? 'text-[#F5AD3D]' : ''} />
          </button>

        </div>
      </div>

      {/* --- 3. BRANDING --- */}
      <div className=" absolute bottom-8 left-8 lg:left-12 z-20 flex items-center gap-5 tracking-tighter group cursor-pointer">
        <OrioLogo theme={theme} className=" w-14 h-14 drop-shadow-2xl" />
        <span className={`text-3xl font-black tracking-wide`}>
          <span className={theme === 'light' ? 'text-[#1F2022]' : 'text-[#F5AD3D]'}>HEALTH</span> <span className={`font-light transition-colors duration-700 ${theme === 'light' ? 'text-[#1F2022]/60' : 'text-white/60'}`}>ORIO</span>
        </span>
      </div>

    </div>
  );
};

export default HeroSection;