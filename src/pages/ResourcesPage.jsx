import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  BarChart2, 
  ClipboardCheck, 
  Download, 
  Lock, 
  ArrowRight,
  FileText,
  Sparkles
} from 'lucide-react';

// --- ANIMATION HOOK ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.disconnect() };
  }, [options]);
  return [ref, isVisible];
};

const ResourcesPage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- THEME CONFIG ---
  const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
  const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-[#2A2B2E] border-white/10';
  const mutedText = isLight ? 'text-gray-500' : 'text-gray-400';
  const accentColor = 'text-[#F5AD3D]';
  const bgAccent = 'bg-[#F5AD3D]';

  // Resource Data
  const resources = [
    {
      title: "VBHC Implementation Playbooks",
      category: "Strategy Guide",
      icon: BookOpen,
      desc: "A step-by-step manual for transitioning from Fee-For-Service to Value-Based Care models.",
      isGated: true
    },
    {
      title: "IPU Setup Guides",
      category: "Operational Framework",
      icon: Settings,
      desc: "Blueprints for structuring multidisciplinary teams around medical conditions.",
      isGated: true
    },
    {
      title: "Hospital KPI Benchmarks",
      category: "Data Report",
      icon: BarChart2,
      desc: "Compare your clinical and financial performance against top-tier Indian hospitals.",
      isGated: true
    },
    {
      title: "Readiness Checklists",
      category: "Self-Assessment",
      icon: ClipboardCheck,
      desc: "Evaluate your digital infrastructure and cultural readiness for transformation.",
      isGated: false // Free resource example
    }
  ];

  // --- RENDER SECTION ---
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className={`relative w-full py-30 px-6 ${bgClass} ${textClass} transition-colors duration-700 font-sans`}>
      <div className="max-w-7xl mx-auto">
         
         {/* Header */}
         <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-6`}>
               <Sparkles size={14} /> Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
               Insights & <span className={accentColor}>Guides</span>
            </h1>
            <p className={`text-xl opacity-70 max-w-2xl mx-auto leading-relaxed`}>
               Expert resources to guide your hospital's transformation journey.
            </p>
         </div>

         {/* Resource Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {resources.map((item, index) => (
               <div 
                 key={index}
                 className={`group relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden
                    ${cardBg}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                 `}
                 style={{ transitionDelay: `${index * 150}ms` }}
               >
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-8">
                     <span className={`text-xs font-bold uppercase tracking-widest opacity-60`}>
                        {item.category}
                     </span>
                     {item.isGated ? (
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-current/5 text-xs font-bold opacity-60 group-hover:bg-[#F5AD3D] group-hover:text-[#1F2022] group-hover:opacity-100 transition-all`}>
                           <Lock size={12} /> Premium
                        </div>
                     ) : (
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold`}>
                           Free Access
                        </div>
                     )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-6 mb-6">
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 ${isLight ? 'bg-gray-100 text-[#1F2022]' : 'bg-white/10 text-white'}`}>
                        <item.icon size={32} strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:text-[#F5AD3D] transition-colors">{item.title}</h3>
                     </div>
                  </div>

                  {/* Description */}
                  <p className={`text-lg font-medium opacity-70 mb-10 leading-relaxed max-w-md`}>
                     {item.desc}
                  </p>

                  {/* Action Button */}
                  <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300
                     ${item.isGated 
                        ? `bg-current/5 hover:bg-[#F5AD3D] hover:text-[#1F2022] text-current` 
                        : `${bgAccent} text-[#1F2022] hover:bg-white`
                     }
                  `}>
                     {item.isGated ? (
                        <>
                           <span className="group-hover:hidden flex items-center gap-2"><Lock size={16} /> Unlock Resource</span>
                           <span className="hidden group-hover:flex items-center gap-2"><Download size={16} /> Download Now</span>
                        </>
                     ) : (
                        <><Download size={16} /> Download Now</>
                     )}
                  </button>

                  {/* Decorative Corner */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${bgAccent} opacity-10 group-hover:scale-150 transition-transform duration-700`}></div>
               </div>
            ))}
         </div>

         {/* Bottom CTA: Lead Gen */}
         <div className={`relative rounded-[3rem] overflow-hidden p-8 md:p-12 text-center border ${isLight ? 'bg-[#1F2022] text-white border-transparent' : 'bg-white text-[#1F2022] border-transparent'} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <FileText size={48} className="mx-auto mb-6 opacity-80" />
               <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Get Full Access to the Library
               </h2>
               <p className="text-lg opacity-70 mb-8">
                  Join 500+ hospital leaders receiving our weekly insights on Value-Based Healthcare.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                     type="email" 
                     placeholder="Enter your work email" 
                     className={`px-6 py-4 rounded-full text-lg outline-none w-full sm:w-80 border-2 border-transparent focus:border-[#F5AD3D] transition-colors ${isLight ? 'bg-white/10 text-white placeholder-white/40' : 'bg-[#1F2022]/5 text-[#1F2022] placeholder-black/40'}`}
                  />
                  <button className={`px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl ${isLight ? 'bg-[#F5AD3D] text-[#1F2022]' : 'bg-[#1F2022] text-white'}`}>
                     Subscribe <ArrowRight size={20} />
                  </button>
               </div>
               <p className="mt-4 text-xs opacity-40 uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
            </div>
         </div>

      </div>
    </section>
  );
};

export default ResourcesPage;