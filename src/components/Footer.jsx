import {
  ArrowRight,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from 'lucide-react';
import OrioLogo from './OrioLogo';

const Footer = () => {
  const bgClass = 'bg-[#0A0A0A]';
  const textClass = 'text-white';
  const mutedText = 'text-zinc-400';
  const accentColor = 'text-[#E6EBE0]';

  return (
    <footer className={`relative w-full ${bgClass} ${textClass} font-sans overflow-hidden border-t border-white/5`}>


      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-r border-white">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-full border-l border-white"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-12 border-b border-white/5">

          {/* Brand Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <OrioLogo theme="dark" className="w-10 h-10" />
              <span className="text-2xl font-black tracking-wide text-white uppercase">
                <span className="text-[#F5AD3D]">Health</span> Orio.
              </span>
            </div>
            <p className={`text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 ${mutedText}`}>
              Transforming healthcare operations through Value-Based Healthcare architecture and IPU-driven technology.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center lg:text-left opacity-70">
              Stay Updated
            </h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Work email address"
                className="grow bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F5AD3D] transition-all text-sm"
              />
              <button className="bg-[#F5AD3D] text-[#1F2022] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(245,173,61,0.15)] active:scale-95">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE SECTION: DUAL CONTACT (NO ADDRESS) --- */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            
            {/* Email Box */}
            <a 
              href="mailto:hello@oriolabs.health" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${accentColor} group-hover:bg-[#F5AD3D] group-hover:text-[#0A0A0A] transition-all`}>
                <Mail size={22} />
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Email Us</h5>
                <p className="text-sm md:text-base font-medium">hello@oriolabs.health</p>
              </div>
            </a>

            {/* Phone Box */}
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${accentColor} group-hover:bg-[#F5AD3D] group-hover:text-[#0A0A0A] transition-all`}>
                <Phone size={22} />
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Call Us</h5>
                <p className="text-sm md:text-base font-medium">+91 98765 43210</p>
              </div>
            </a>

          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4 text-center md:text-left">
          <div className={`text-xs tracking-wider ${mutedText}`}>
            &copy; 2026 HEALTH ORIO PVT LTD.
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${accentColor} hover:bg-[#F5AD3D] hover:text-[#0A0A0A] transition-all`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${accentColor} hover:bg-[#F5AD3D] hover:text-[#0A0A0A] transition-all`}
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${accentColor} hover:bg-[#F5AD3D] hover:text-[#0A0A0A] transition-all`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;