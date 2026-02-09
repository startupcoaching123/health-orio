import React from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import OrioLogo from './OrioLogo';

const Footer = () => {
  // UPDATED: A rich, deep black/charcoal for a premium feel
  const bgClass = 'bg-[#0A0A0A]';
  const textClass = 'text-white';
  const mutedText = 'text-zinc-400'; // Zinc is slightly cooler/more modern than standard gray
  const accentColor = 'text-[#E6EBE0]';

  return (
    <footer className={`relative w-full ${bgClass} ${textClass} font-sans overflow-hidden border-t border-white/5`}>

      {/* --- BACKGROUND DECOR --- */}
      {/* Grid lines set to very low opacity for texture without distraction */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-4 border-r border-white">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-full border-l border-white"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">

        {/* --- TOP SECTION: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-12 border-b border-white/5 pb-12">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className=" p-1 rounded-full">
                <OrioLogo theme="dark" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-black tracking-wide text-white">
              <span className="text-[#F5AD3D]">HEALTH</span> <span className="text-white">ORIO.</span>
            </span>
            </div>
            <p className={`text-lg leading-relaxed max-w-md ${mutedText}`}>
              Transforming healthcare operations through Value-Based Healthcare architecture and IPU-driven technology.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                // UPDATED: Input background is slightly lighter than footer for depth
                className="grow bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#E6EBE0] focus:ring-1 focus:ring-[#E6EBE0] transition-all"
              />
              <button className="bg-[#F5AD3D] text-[#1F2022] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,173,61,0.3)]">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE SECTION: CONTACT INFO --- */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h4 className="font-bold text-2xl mb-8 text-white">Get in Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center text-center group`}>
              <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 ${accentColor} group-hover:bg-white group-hover:text-[#0A0A0A] transition-all`}>
                <MapPin size={24} />
              </div>
              <h5 className="font-bold text-white mb-2">Address</h5>
              <p className={`${mutedText} text-sm leading-relaxed`}>
                123 Innovation Drive,<br />Bangalore, India 560001
              </p>
            </div>

            <div className={`flex flex-col items-center text-center group`}>
              <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 ${accentColor} group-hover:bg-white group-hover:text-[#0A0A0A] transition-all`}>
                <Mail size={24} />
              </div>
              <h5 className="font-bold text-white mb-2">Email</h5>
              <a href="mailto:hello@oriolabs.health" className={`${mutedText} text-sm hover:text-white transition-colors`}>
                hello@oriolabs.health
              </a>
            </div>

            <div className={`flex flex-col items-center text-center group`}>
              <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 ${accentColor} group-hover:bg-white group-hover:text-[#0A0A0A] transition-all`}>
                <Phone size={24} />
              </div>
              <h5 className="font-bold text-white mb-2">Phone</h5>
              <p className={`${mutedText} text-sm`}>
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-6 border-t border-white/5">
          <div className={`text-sm ${mutedText}`}>
            2025 Health Orio Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;