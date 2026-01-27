import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrioLogo from './OrioLogo';
import { useNavigate } from 'react-router-dom';

const OrioNavbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base text color
  const textColor = 'text-[#1F2022]';

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl font-sans transition-all duration-500 ease-out
        ${scrolled ? 'top-4' : 'top-6'}`}
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 border
            ${scrolled 
              ? 'bg-white/60 backdrop-blur-xl border-white/40 shadow-xl shadow-black/5' 
              : 'bg-white/30 backdrop-blur-md border-white/20 shadow-lg'
            }
            animate-fade-in-down
          `}
        >
          
          {/* --- LOGO SECTION --- */}
          <div onClick={() => navigate('/')} className={`flex items-center gap-3 font-bold text-xl tracking-tighter ${textColor} group cursor-pointer`}>
             <div className="transition-transform duration-500 group-hover:rotate-180">
               <OrioLogo theme={theme} className="w-10 h-10" /> 
             </div>
             <span className="group-hover:opacity-70 transition-opacity">ORIO LABS</span>
          </div>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#1F2022]">
            {[
              { name: 'Solutions', href: '/solutions-by-role' },
              { name: 'VBHC', href: '/vbhc' },
              { name: 'Platform', href: '/platform' },
              { name: 'IPU', href: '/ipu-solutions' },
              { name: 'ROI', href: 'roi' },
              { name: 'Resources', href: '/resources' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="relative group py-1"
              >
                <span className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.name}
                </span>
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1F2022] transition-all duration-300 group-hover:w-full ease-in-out"></span>
              </Link>
            ))}
          </div>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle (Tactile Switch) */}
            <button 
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full bg-white/40 hover:bg-white border border-white/20 hover:border-black/5 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm group overflow-hidden"
              aria-label="Toggle Theme"
            >
              <div className="relative w-5 h-5 text-[#1F2022]">
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />
              </div>
            </button>

            {/* CTA Button (Modern & Shiny) */}
            <button className="hidden md:flex items-center gap-2 bg-[#1F2022] text-white pl-5 pr-4 py-2.5 rounded-xl text-sm font-semibold 
              hover:bg-black hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 group">
              Get Started
              <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            {/* Mobile Menu Icon */}
            <button 
              className="md:hidden p-2 text-[#1F2022] active:scale-90 transition-transform" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                 {/* CSS Transition for Icon Swap */}
                 <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <Menu />
                 </div>
                 <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                    <X />
                 </div>
              </div>
            </button>
          </div>
        </div>
        
        {/* --- MOBILE DROPDOWN (Smooth Reveal) --- */}
        <div className={`absolute top-full left-0 w-full pt-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 -translate-y-4 scale-95 invisible'}`}>
          
          <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col gap-2">
             {[
               { name: 'Solutions', href: '#solutions' },
               { name: 'VBHC', href: '/vbhc' },
               { name: 'Platform', href: '/platform' },
               { name: 'IPU', href: '/ipu-solutions' },
               { name: 'Company', href: '#company' }
             ].map((item, index) => (
               <Link 
                key={item.name} 
                to={item.href}
                className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-black/5 transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered Animation
               >
                 <span className="font-semibold text-lg text-[#1F2022]">{item.name}</span>
                 <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
               </Link>
             ))}
             <button className="mt-4 w-full bg-[#1F2022] text-white py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform">
               Get Started
             </button>
          </div>
        </div>
      </nav>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default OrioNavbar;