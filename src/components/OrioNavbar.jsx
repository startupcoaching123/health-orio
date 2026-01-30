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
  const textColor = theme === 'light' ? 'text-[#1F2022]' : 'text-white';
  const navBg = theme === 'light'
    ? (scrolled ? 'bg-white/60 border-white/40 shadow-black/5' : 'bg-white/30 border-white/20')
    : (scrolled ? 'bg-[#0E0E0F]/80 border-white/10 shadow-white/5' : 'bg-[#0E0E0F]/40 border-white/5');

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl font-sans transition-all duration-500 ease-out
        ${scrolled ? 'top-4' : 'top-6'}`}
      >
        <div
          className={`
            relative flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 border backdrop-blur-xl shadow-xl
            ${navBg}
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
          <div className={`hidden md:flex items-center gap-8 font-medium text-sm ${textColor}`}>
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
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${theme === 'light' ? 'bg-[#1F2022]' : 'bg-[#F5AD3D]'} transition-all duration-300 group-hover:w-full ease-in-out`}></span>
              </Link>
            ))}
          </div>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle (Tactile Switch) */}
            <button
              onClick={toggleTheme}
              className={`relative p-2.5 rounded-full ${theme === 'light' ? 'bg-white/40 border-white/20 hover:bg-white hover:border-black/5' : 'bg-black/40 border-white/10 hover:bg-black/60 hover:border-white/20'} hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm group overflow-hidden`}
              aria-label="Toggle Theme"
            >
              <div className={`relative w-5 h-5 ${textColor}`}>
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />
              </div>
            </button>

            {/* CTA Button (Modern & Shiny) */}
            <button className={`hidden md:flex items-center gap-2 ${theme === 'light' ? 'bg-[#1F2022] text-white hover:bg-black' : 'bg-[#F5AD3D] text-[#1F2022] hover:bg-white'} pl-5 pr-4 py-2.5 rounded-xl text-sm font-semibold 
              hover:shadow-lg transition-all duration-300 group`}>
              Get Started
              <ArrowUpRight className={`w-4 h-4 ${theme === 'light' ? 'text-white/50' : 'text-[#1F2022]/50'} group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
            </button>

            {/* Mobile Menu Icon */}
            <button
              className={`md:hidden p-2 ${textColor} active:scale-90 transition-transform`}
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

          <div className={`${theme === 'light' ? 'bg-white/90 border-white/20' : 'bg-[#0E0E0F]/90 border-white/10'} backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border flex flex-col gap-2`}>
            {[
              { name: 'Solutions', href: '/solutions-by-role' },
              { name: 'VBHC', href: '/vbhc' },
              { name: 'Platform', href: '/platform' },
              { name: 'IPU', href: '/ipu-solutions' },
              { name: 'ROI', href: '/roi' }
            ].map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center justify-between py-3 px-4 rounded-xl hover:${theme === 'light' ? 'bg-black/5' : 'bg-white/5'} transition-colors`}
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered Animation
              >
                <span className={`font-semibold text-lg ${textColor}`}>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
            <button className={`mt-4 w-full ${theme === 'light' ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]'} py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform`}>
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