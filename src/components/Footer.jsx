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
import OrioLogo from './OrioLogo'; // Ensure this path is correct

const Footer = () => {
  // Footer is always dark for professional contrast
  const bgClass = 'bg-[#1F2022]'; 
  const textClass = 'text-white';
  const mutedText = 'text-gray-400';
  const borderClass = 'border-white/10';

  return (
    <footer className={`relative w-full ${bgClass} ${textClass} font-sans overflow-hidden`}>
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
         <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-4 border-r border-white">
            {[...Array(4)].map((_, i) => (
               <div key={i} className="h-full border-l border-white"></div>
            ))}
         </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        
        {/* --- TOP SECTION: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white p-1 rounded-full">
                 {/* Force theme='light' so logo cutout is dark (since container is white) or manage svg colors manually */}
                 {/* For simplicity, let's assume the logo handles 'dark' mode by making the accent white */}
                 <OrioLogo theme="dark" className="w-10 h-10" /> 
               </div>
               <span className="text-2xl font-black tracking-wide">ORIO LABS.</span>
            </div>
            <p className={`text-lg leading-relaxed max-w-md ${mutedText}`}>
              Transforming healthcare operations through Value-Based Healthcare architecture and IPU-driven technology.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col justify-center">
             <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Stay Updated</h3>
             <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F5AD3D] transition-colors"
                />
                <button className="bg-[#F5AD3D] text-[#1F2022] px-6 py-4 rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                   Subscribe <ArrowRight size={18} />
                </button>
             </form>
          </div>
        </div>


        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['IPU Architecture', 'Clinical Data', 'Financial ROI', 'Outcomes'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-[#F5AD3D] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['About Us', 'Case Studies', 'Careers', 'Press Kit'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-[#F5AD3D] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              {['Blog', 'Whitepapers', 'Hospital Assessment', 'Help Center'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-[#F5AD3D] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className={`space-y-4 ${mutedText}`}>
              <li className="flex items-start gap-3">
                 <MapPin size={20} className="shrink-0 mt-1 text-[#F5AD3D]" />
                 <span>123 Innovation Drive,<br/>Bangalore, India 560001</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail size={20} className="text-[#F5AD3D]" />
                 <span>hello@oriolabs.health</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone size={20} className="text-[#F5AD3D]" />
                 <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>


        {/* --- BOTTOM SECTION: COPYRIGHT & SOCIAL --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
           
           <div className={`text-sm ${mutedText} mb-4 md:mb-0`}>
             © 2025 Orio Labs Pvt Ltd. All rights reserved.
           </div>

           <div className="flex items-center gap-6">
              <a href="#" className={`hover:text-[#F5AD3D] transition-colors ${mutedText}`}><Linkedin size={20} /></a>
              <a href="#" className={`hover:text-[#F5AD3D] transition-colors ${mutedText}`}><Twitter size={20} /></a>
              <a href="#" className={`hover:text-[#F5AD3D] transition-colors ${mutedText}`}><Instagram size={20} /></a>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;