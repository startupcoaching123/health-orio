import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Activity,
  ShieldCheck,
  Users,
  DollarSign,
  Play,
  PlayCircle,
  X
} from 'lucide-react';
import demoVideo from '../assets/video.mp4';

const WhyVBHC = ({ theme }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // ---------------------------
  // THEME INVERSION LOGIC
  // ---------------------------
  const isLight = theme === 'light';

  const bgColor = isLight ? 'bg-[#E6EBE0]' : 'bg-[#151618]';
  const textColor = theme === 'light' ? 'text-[#1F2022]' : 'text-white';

  const borderColor = isLight
    ? 'border-[#1F2022]/10'
    : 'border-white/5';

  const cardBg = isLight
    ? 'bg-white/40'
    : 'bg-white/5';

  return (
    <section
      className={`relative w-full py-24 px-6 lg:px-12
      ${bgColor} ${textColor} border-t border-white/5
      transition-colors duration-700 overflow-hidden`}
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 border-b-2 ${isLight ? 'border-[#1F2022]' : 'border-white/10'} pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4`}>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">
              The Shift
            </h4>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Realizing the Promise of <br />
              <span className="text-[#F5AD3D]">Value-Based Healthcare.</span>
            </h2>
          </div>

          <p className="max-w-md font-medium text-lg opacity-80 pb-1">
            Moving from volume to value: outcomes relative to cost.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1 */}
          <div
            className={`lg:col-span-7 ${cardBg}
            backdrop-blur-sm rounded-3xl p-8
            border ${borderColor}
            shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 ${isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D]'} rounded-full ${isLight ? 'text-white' : 'text-[#1F2022]'}`}>
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold">The Core Definition</h3>
            </div>

            <p className="text-xl font-medium leading-relaxed mb-8 opacity-90">
              VBHC focuses on outcomes that matter to patients relative to the
              cost of delivering those outcomes across the full cycle of care.
            </p>

            <div className="space-y-4">
             {[
  { from: 'Volume', to: 'Value' },
  { from: 'Departments', to: 'Conditions' },
  { from: 'Revenue per Service', to: 'Outcome per Rupee' }
].map((item, idx) => (
  <div
    key={idx}
    className={`
      grid grid-cols-[1fr_auto_1fr] items-center gap-3
      p-4 rounded-xl border
      ${isLight 
        ? 'bg-white/40 border-white/50' 
        : 'bg-white/5 border-white/10'
      }
    `}
  >
    {/* Left Text */}
    <span
      className={`font-semibold text-sm sm:text-base
      ${isLight ? 'text-gray-500' : 'text-white/40'}`}
    >
      {item.from}
    </span>

    {/* Arrow */}
    <ArrowRight
      className={`w-5 h-5 shrink-0
      ${!isLight ? 'text-[#F5AD3D]' : ''}
      animate-pulse`}
    />

    {/* Right Text */}
    <span
      className={`font-bold text-sm sm:text-lg text-right break-words
      ${!isLight ? 'text-white' : ''}`}
    >
      {item.to}
    </span>
  </div>
))}
            </div>
          </div>

          {/* Card 2 – Intentional Dark Contrast */}
          <div className="lg:col-span-5 bg-[#1F2022] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">
                  Hospital Context
                </h3>
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-400" />
                  <div>
                    <h5 className="font-bold text-lg">Pressure Points</h5>
                    <p className="opacity-70 text-sm mt-1">
                      Thin margins, rising clinical costs, insurer scrutiny.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-400" />
                  <div>
                    <h5 className="font-bold text-lg">VBHC Advantage</h5>
                    <p className="opacity-70 text-sm mt-1">
                      Better outcomes with controlled costs and leverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-8 border-t ${isLight ? 'border-[#1F2022]/10' : 'border-white/10'}`}>
              <div className={`text-4xl font-black ${!isLight ? 'text-[#F5AD3D]' : ''}`}>ROI ↑</div>
              <div className="text-sm opacity-60">
                Built for scalable care
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`lg:col-span-12 rounded-3xl p-8 shadow-sm
            ${isLight ? 'bg-white/60' : 'bg-white/5'}
            border ${borderColor}
            flex flex-col md:flex-row gap-8 items-center justify-between`}
          >
            {/* Text Section */}
            <div className="md:w-1/3 flex flex-col justify-center">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase mb-4">
                  The Architecture
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Integrated Practice Units
                </h3>
                <p className={`font-medium mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  Multidisciplinary teams organized around conditions, not
                  departments.
                </p>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                    ${isLight ? 'bg-[#1F2022] text-[#E6EBE0] hover:bg-black' : 'bg-[#F5AD3D] text-[#1F2022] hover:bg-[#ffb649]'}`}
                >
                  <PlayCircle size={18} />
                  View Demo
                </button>
              </div>
            </div>

            {/* Grid Section */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {[
                { icon: Activity, label: 'Clinical Outcomes' },
                { icon: DollarSign, label: 'Cost per Episode' },
                { icon: Users, label: 'Patient Journey' }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center p-6 h-full
                  ${isLight ? 'bg-gray-100 border-gray-200' : 'bg-white/5 border-white/10'} rounded-2xl border
                  text-center hover:${isLight ? 'bg-gray-200' : 'bg-white/10'} transition-colors`}
                >
                  <item.icon className={`w-8 h-8 mb-3 ${isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]'}`} />
                  <span className="font-bold leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Close button top right of screen */}
          <button 
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all transform hover:scale-105 border border-white/20"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative w-auto h-[80vh] md:h-[90vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={demoVideo}
              className="w-full h-full object-contain"
              controls 
              autoPlay 
              playsInline 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyVBHC;
