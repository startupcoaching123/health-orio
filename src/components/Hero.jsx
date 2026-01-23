import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import OrioLogo from './OrioLogo'; // Importing your logo component

const HeroSection = ({ theme }) => {
  // --- THEME LOGIC ---
  // Light (Sage Green) vs Dark (Orio Yellow)
  const bgClass = theme === 'light' ? 'bg-[#E6EBE0]' : 'bg-[#F5AD3D]';
  
  // Grid Lines: Always dark but subtle
  const gridColor = 'border-[#1F2022]/10';
  const textColor = 'text-[#1F2022]';

  // Pulse Line Color logic:
  // We want the pulse to be dark to match the text/grid
  const pulseColor = '#1F2022';

  return (
    <div className={`relative w-full h-screen ${bgClass} font-sans ${textColor} transition-colors duration-700 ease-in-out overflow-hidden flex flex-col`}>
      
      {/* --- 1. ARCHITECTURAL GRID & HEARTBEAT ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Vertical Columns - Reduced for cleaner look */}
        <div className={`w-full h-full grid grid-cols-2 lg:grid-cols-6 max-w-[80%] mx-auto border-r ${gridColor}`}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`relative h-full border-l ${gridColor} ${i === 0 || i === 2 ? 'block' : 'hidden lg:block'}`}>
            </div>
          ))}
        </div>
        
        {/* Horizontal Guide Lines */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-between">
          <div className={`w-full border-b ${gridColor} h-1/4`}></div>
          <div className={`w-full border-b ${gridColor} h-1/4`}></div>
          {/* This middle line acts as the "Monitor Baseline" */}
          <div className={`w-full border-b ${gridColor} h-1/4`}>
          </div>
          <div className="w-full h-1/4"></div>
        </div>
      </div>

      {/* --- 2. HERO CONTENT (Centered) --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-20 text-center">
        

        {/* Right Side Vertical Text */}
        <div className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center pointer-events-none opacity-10">
           <h2 className="text-[6vh] font-black uppercase tracking-widest whitespace-nowrap -rotate-90 origin-center text-[#1F2022]">
             Value Based Design
           </h2>
        </div>

        {/* Main Typography */}
        <div className="max-w-4xl space-y-8 animate-in fade-in zoom-in duration-1000">
          
          <h1 className="text-5xl md:text-7xl leading-[1.05] font-extrabold tracking-tight text-[#1F2022]">
            Transform Outcomes with <br className="hidden md:block"/> 
            <span className={`inline-block px-2 decoration-4 underline-offset-4 ${theme === 'dark' ? 'text-white' : 'text-[#1F2022]'}`}>
              Value‑Based Care
            </span>
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-80 max-w-2xl mx-auto">
            Integrate clinical, operational, and financial systems to improve ROI using IPU‑driven architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <button className="h-[60px] px-10 bg-[#1F2022] text-white rounded-xl text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Book a Demo
            </button>

            <button className="h-[60px] px-8 flex items-center text-[#1F2022] text-lg font-bold hover:opacity-70 transition-opacity group rounded-xl border-2 border-transparent hover:border-[#1F2022]/10 hover:bg-[#1F2022]/5">
              View Framework
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* --- 3. BOTTOM LEFT BRANDING (Using Component) --- */}
      <div className="absolute bottom-8 left-8 lg:left-12 z-20 flex items-center gap-5">
        {/* Using the OrioLogo Component now */}
        <OrioLogo theme={theme} className="w-16 h-16 drop-shadow-2xl" />
        
        <span className="text-4xl font-black tracking-wide text-[#1F2022]">
          ORIO <span className={`font-light transition-colors duration-700 ${theme === 'light' ? 'text-[#F5AD3D]' : 'text-white'}`}>LABS.</span>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;