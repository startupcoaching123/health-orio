import React from 'react';
import { ArrowRight } from 'lucide-react';
import OrioLogo from './OrioLogo';

const HeroSection = ({ theme }) => {
  // --- THEME LOGIC ---
  const bgClass = theme === 'light' ? 'bg-[#E6EBE0]' : 'bg-[#0E0E0F]';
  const textClass = theme === 'light' ? 'text-[#1F2022]' : 'text-white';
  const borderClass = theme === 'light' ? 'border-[#1F2022]/10' : 'border-white/5';

  return (
    <div className={`relative w-full min-h-screen ${bgClass} font-sans ${textClass} transition-colors duration-700 ease-in-out overflow-hidden flex flex-col pt-10`}>

      {/* --- 1. BACKGROUND GRID --- */}
      {/* Added 'overflow-hidden' and ensured lines don't create scrollbars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`w-full h-full grid grid-cols-6 md:grid-cols-12 max-w-[90%] mx-auto border-r ${borderClass}`}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`h-full border-l ${borderClass} ${i < 6 ? 'block' : 'hidden md:block'}`}
            ></div>
          ))}
        </div>
        <div className={`absolute top-1/2 w-full border-b ${borderClass}`}></div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      {/* Adjusted padding: pt-24 ensures space for fixed headers, pb-32 leaves room for the logo below */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-5 sm:px-10 text-center pt-20 pb-32 md:pb-20">

        {/* A. HEADLINE */}
        {/* Adjusted text size for mobile (text-4xl) vs desktop */}
        <h1 className="max-w-6xl text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-black tracking-tighter leading-[1.1] md:leading-[1.15] mb-6 md:mb-8 animate-in fade-in zoom-in duration-1000">

          {/* --- THE HIGHLIGHT BLOCK --- */}
          <span className="relative inline-block transform -rotate-2 mr-2">
            <span className="absolute inset-0 bg-[#F5AD3D] w-full h-full block"></span>
            <span className="relative px-2 md:px-4 text-[#1F2022]">TRANSFORM</span>
          </span>

          <span className="block sm:inline">Hospital Outcomes,</span> 
          <br className="hidden lg:block" />
          <span className="block sm:inline"> Costs & Margins</span>
          
          <div className="mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem]">
            with <span className={`inline-block ${theme === 'dark' ? 'text-[#F5AD3D] underline decoration-white/20' : 'underline decoration-2 md:decoration-4 decoration-[#1F2022]/20 underline-offset-4 md:underline-offset-8'}`}>Value-Based Care</span>
          </div>
        </h1>

        {/* B. SUB-HEADLINE */}
        <p className={`max-w-2xl text-base md:text-xl font-medium leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'opacity-80'} mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200`}>
          We help 50–100 bed hospitals integrate fragmented systems and implement IPU-based care models to improve clinical outcomes and increase EBITDA—without heavy capex.
        </p>

        {/* C. CTAs */}
        {/* w-full on mobile for better tap targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

          {/* Primary Button */}
          <button className={`w-full sm:w-auto h-14 px-6 md:px-8 rounded-xl ${theme === 'light' ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#F5AD3D] text-[#1F2022]'} text-sm md:text-lg font-bold hover:scale-105 transition-all active:scale-95`}>
            Request VBHC Assessment
          </button>

          {/* Secondary Button */}
          <button className={`w-full sm:w-auto h-14 px-4 flex items-center justify-center gap-2 ${theme === 'light' ? 'text-[#1F2022]' : 'text-white'} text-sm md:text-lg font-bold border-b-2 border-transparent hover:border-current transition-all`}>
            See IPU ROI <ArrowRight size={18} className={theme === 'dark' ? 'text-[#F5AD3D]' : ''} />
          </button>

        </div>
      </div>

      {/* --- 3. BRANDING --- */}
      {/* Centered on mobile, left-aligned on desktop */}
      <div className="absolute bottom-6 left-0 right-0 md:left-12 md:right-auto z-20 flex items-center justify-center md:justify-start gap-3 md:gap-5 tracking-tighter group cursor-pointer">
        <OrioLogo theme={theme} className="w-10 h-10 md:w-14 md:h-14 drop-shadow-2xl" />
        <span className="text-2xl md:text-3xl font-black tracking-wide">
          <span className={theme === 'light' ? 'text-[#1F2022]' : 'text-[#F5AD3D]'}>HEALTH</span> 
          <span className={`font-light transition-colors duration-700 ${theme === 'light' ? 'text-[#1F2022]/60' : 'text-white/60'}`}>ORIO</span>
        </span>
      </div>

    </div>
  );
};

export default HeroSection;