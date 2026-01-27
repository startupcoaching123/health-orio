import React, { useEffect, useRef, useState } from 'react';
import { 
  ClipboardCheck, 
  Building2, 
  Stethoscope, 
  AlertCircle, 
  Target, 
  ArrowRight,
  CalendarCheck,
  Check
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

const ContactAssessment = ({ theme }) => {
  const isLight = theme === 'light';
  
  // Theme Variables
  const bgClass = isLight ? 'bg-slate-50' : 'bg-[#1F2022]';
  const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
  const inputBg = isLight ? 'bg-white border-gray-200 focus:border-[#F5AD3D]' : 'bg-[#2A2B2E] border-white/10 focus:border-[#F5AD3D]';
  const accentColor = 'text-[#F5AD3D]';
  const bgAccent = 'bg-[#F5AD3D]';

  // --- RENDER SECTION ---
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className={`relative w-full min-h-screen py-40 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 font-sans flex items-center`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #F5AD3D 0%, transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
         {/* LEFT: THE PITCH */}
         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent}/10 ${accentColor} font-bold text-xs uppercase tracking-widest mb-6`}>
               <ClipboardCheck size={14} /> Next Steps
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
               Start with a VBHC <br/>
               <span className={accentColor}>Readiness Assessment.</span>
            </h1>
            
            <p className="text-xl opacity-70 mb-12 max-w-lg">
               Let's evaluate your current architecture. To get the most out of your assessment, tell us about:
            </p>

            {/* The Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { label: "Hospital Size", icon: Building2, desc: "Bed capacity & locations" },
                 { label: "Specialties", icon: Stethoscope, desc: "Key focus areas" },
                 { label: "Current Challenges", icon: AlertCircle, desc: "Operational pain points" },
                 { label: "Priority Conditions", icon: Target, desc: "Areas for IPU setup" }
               ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-2xl border transition-all hover:bg-current/5 ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
                     <div className={`mt-1 p-2 rounded-lg ${isLight ? 'bg-white shadow-sm' : 'bg-white/10'} ${accentColor}`}>
                        <item.icon size={20} />
                     </div>
                     <div>
                        <h3 className="font-bold text-lg">{item.label}</h3>
                        <p className="text-sm opacity-60">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

         </div>


         {/* RIGHT: THE BOOKING FORM */}
         <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className={`relative p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden border ${isLight ? 'bg-white border-gray-100' : 'bg-[#151618] border-white/10'}`}>
               
               {/* Form Header */}
               <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2">Book Your Assessment Call</h3>
                  <p className="text-sm opacity-60">Fill out the details below to schedule a consultation with our experts.</p>
               </div>

               {/* Inputs */}
               <form className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50">Name</label>
                        <input type="text" placeholder="Dr. / Mr. / Ms." className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${inputBg}`} />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50">Work Email</label>
                        <input type="email" placeholder="name@hospital.com" className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${inputBg}`} />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50">Hospital Name</label>
                        <input type="text" placeholder="Organization Name" className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${inputBg}`} />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50">Bed Capacity</label>
                        <select className={`w-full px-4 py-3 rounded-xl outline-none transition-all appearance-none ${inputBg}`}>
                           <option>Select Size</option>
                           <option>50-100 Beds</option>
                           <option>100-300 Beds</option>
                           <option>300+ Beds</option>
                        </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest opacity-50">Priority Challenge</label>
                     <textarea rows="3" placeholder="Briefly describe your current operational or clinical challenges..." className={`w-full px-4 py-3 rounded-xl outline-none transition-all resize-none ${inputBg}`}></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="button" className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl ${isLight ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]'}`}>
                     <CalendarCheck size={20} /> Schedule Assessment
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs opacity-40">
                     <Check size={12} /> Confidential & Secure
                  </div>

               </form>
            </div>

            {/* Decorative Behind Element */}
            <div className={`absolute -top-6 -right-6 w-full h-full rounded-[2.5rem] -z-10 opacity-20 border-2 border-dashed border-current`}></div>

         </div>

      </div>
    </section>
  );
};

export default ContactAssessment;