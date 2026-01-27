import React, { useEffect, useRef, useState } from 'react';
import { 
  Layers, 
  Database, 
  Server, 
  Activity, 
  ShieldCheck, 
  Lock, 
  FileKey, 
  Eye, 
  Cpu,
  Share2
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

const PlatformPage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- 1. HERO: INTEROPERABILITY (Optimized Size) ---
  const InteroperabilityHero = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    
    // Systems to connect (Positions tweaked for tighter layout)
    const systems = [
      { label: "HIS / EMR", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-8" },
      { label: "LIS & RIS", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-8" },
      { label: "Pharmacy", pos: "left-0 top-1/2 -translate-y-1/2 -translate-x-8" },
      { label: "Billing / ERP", pos: "right-0 top-1/2 -translate-y-1/2 translate-x-8" },
    ];

    return (
      <section ref={ref} className={`relative min-h-[85vh] w-full ${bgClass} ${textClass} flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden`}>
        
        {/* Abstract Connectivity Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-current rounded-full animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-current rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
           
           {/* Header - Compact Typography */}
           <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 backdrop-blur-md mb-6">
                 <Share2 size={12} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Platform & Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
                 Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5AD3D] to-teal-400">Interoperability</span>, <br/>
                 Not Replacement.
              </h1>
              <p className="text-lg font-medium opacity-60 max-w-xl mx-auto leading-relaxed">
                 We integrate seamlessly with your existing infrastructure. <br className="hidden md:block" /> No rip-and-replace. No operational disruption.
              </p>
           </div>

           {/* Connectivity Visualization - Scaled Down */}
           <div className={`relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              
              {/* Center Hub (Orio) */}
              <div className={`absolute inset-0 m-auto w-24 h-24 md:w-28 md:h-28 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20 ${isLight ? 'bg-[#1F2022] text-white' : 'bg-white text-[#1F2022]'}`}>
                 <Cpu size={32} className="mb-1" />
                 <span className="font-bold text-xs tracking-widest">CORE</span>
              </div>

              {/* Connecting Spokes */}
              {systems.map((sys, i) => (
                 <div key={i} className={`absolute ${sys.pos} w-28 h-12 md:w-32 md:h-14 rounded-lg border border-current/20 flex items-center justify-center font-bold text-xs md:text-sm shadow-lg backdrop-blur-sm z-10 ${isLight ? 'bg-white/80' : 'bg-black/40'}`}>
                    {sys.label}
                 </div>
              ))}
              
              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                 <line x1="50" y1="38" x2="50" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                 <line x1="50" y1="62" x2="50" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                 <line x1="38" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                 <line x1="62" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
              </svg>

           </div>

        </div>
      </section>
    );
  };

  // --- 2. MIDDLE: CORE LAYERS ---
  const CoreLayers = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    const bgClass = isLight ? 'bg-white' : 'bg-[#151618]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';

    const layers = [
      { id: "01", title: "IPU Enablement Layer", desc: "Condition-wise dashboards and care pathway tracking.", icon: Activity, color: "text-purple-500" },
      { id: "02", title: "Analytics & Insights Engine", desc: "Tracks outcomes, costs, LOS, utilization, and margins.", icon: Layers, color: "text-[#F5AD3D]" },
      { id: "03", title: "Unified Data Layer", desc: "Combines clinical, operational, and financial data.", icon: Database, color: "text-teal-500" },
      { id: "04", title: "Integration Layer", desc: "Connects all hospital systems into a single data flow.", icon: Server, color: "text-orange-500" },
    ];

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700`}>
         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left: Description */}
            <div className={`lg:w-1/3 sticky top-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                  Core Platform <br/> Layers
               </h2>
               <p className="text-lg opacity-60 leading-relaxed mb-8">
                  A modular architecture designed to turn fragmented data into actionable intelligence.
               </p>
               <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-current to-transparent opacity-20"></div>
            </div>

            {/* Right: The Stack */}
            <div className="lg:w-2/3 flex flex-col gap-3">
               {layers.map((layer, i) => (
                  <div 
                    key={i}
                    className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 
                      ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-[#1F2022] border-white/10'}
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                     <div className="flex items-start gap-6">
                        <span className={`text-3xl font-black opacity-10 font-mono group-hover:opacity-100 transition-opacity duration-300 ${layer.color}`}>
                           {layer.id}
                        </span>
                        
                        <div className="flex-grow">
                           <div className="flex items-center gap-3 mb-1">
                              <layer.icon size={18} className={layer.color} />
                              <h3 className="text-lg font-bold">{layer.title}</h3>
                           </div>
                           <p className="opacity-70 text-sm font-medium leading-relaxed">{layer.desc}</p>
                        </div>
                     </div>
                     <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${layer.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
               ))}
            </div>

         </div>
      </section>
    );
  };

  // --- 3. BOTTOM: SECURITY ---
  const SecuritySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    const bgClass = isLight ? 'bg-[#1F2022]' : 'bg-[#F5AD3D]';
    const textClass = isLight ? 'text-white' : 'text-[#1F2022]';
    const cardBg = isLight ? 'bg-white/10 border-white/10' : 'bg-black/5 border-black/5';

    const features = [
      { title: "Role-Based Access", icon: Lock },
      { title: "Audit Trails", icon: Eye },
      { title: "Privacy & Consent", icon: FileKey },
      { title: "Enterprise Security", icon: ShieldCheck }
    ];

    return (
      <section ref={ref} className={`relative py-20 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700`}>
         <div className="max-w-7xl mx-auto">
            
            <div className={`mb-12 flex flex-col md:flex-row items-end justify-between gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-3">Security & Compliance</h2>
                  <p className="text-lg opacity-80 max-w-lg">Your data is your asset. We protect it with enterprise-grade standards.</p>
               </div>
               
               <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-current/20 font-mono text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  HIPAA / GDPR Ready
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {features.map((item, i) => (
                  <div 
                    key={i}
                    className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-105
                       ${cardBg}
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                     <div className="mb-4 opacity-80">
                        <item.icon size={28} />
                     </div>
                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                     <div className="w-8 h-1 bg-current opacity-40"></div>
                  </div>
               ))}
            </div>

         </div>
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col font-sans">
      <InteroperabilityHero />
      <CoreLayers />
      <SecuritySection />
    </div>
  );
};

export default PlatformPage;