import React from 'react';
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
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
              <div className="bg-white p-1 rounded-full">
                <OrioLogo theme="dark" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-black tracking-wide text-white">ORIO LABS.</span>
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
                className="flex-grow bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#E6EBE0] focus:ring-1 focus:ring-[#E6EBE0] transition-all"
              />
              <button className="bg-[#F5AD3D] text-[#1F2022] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,173,61,0.3)]">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>


        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Platform</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['IPU Architecture', 'Clinical Data', 'Financial ROI', 'Outcomes'].map(item => (
                <li key={item}>
                  <a href="#" className={`hover:${accentColor} hover:translate-x-1 transition-all inline-block`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['About Us', 'Case Studies', 'Careers', 'Press Kit'].map(item => (
                <li key={item}>
                  <a href="#" className={`hover:${accentColor} hover:translate-x-1 transition-all inline-block`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['Blog', 'Whitepapers', 'Hospital Assessment', 'Help Center'].map(item => (
                <li key={item}>
                  <a href="#" className={`hover:${accentColor} hover:translate-x-1 transition-all inline-block`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className={`space-y-5 ${mutedText}`}>
              <li className="flex items-start gap-3 group">
                <div className={`mt-1 ${accentColor} group-hover:text-white transition-colors`}>
                  <MapPin size={20} />
                </div>
                <span>123 Innovation Drive,<br />Bangalore, India 560001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className={`${accentColor} group-hover:text-white transition-colors`}>
                  <Mail size={20} />
                </div>
                <a href="mailto:hello@oriolabs.health" className="hover:text-white transition-colors">hello@oriolabs.health</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className={`${accentColor} group-hover:text-white transition-colors`}>
                  <Phone size={20} />
                </div>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>


        {/* --- BOTTOM SECTION: COPYRIGHT & SOCIAL --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5">

          <div className={`text-sm ${mutedText} mb-4 md:mb-0`}>
            © 2025 Orio Labs Pvt Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className={`hover:${accentColor} transition-colors ${mutedText}`}><Linkedin size={20} /></a>
            <a href="#" className={`hover:${accentColor} transition-colors ${mutedText}`}><Twitter size={20} /></a>
            <a href="#" className={`hover:${accentColor} transition-colors ${mutedText}`}><Instagram size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;