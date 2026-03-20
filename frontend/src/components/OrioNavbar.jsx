import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import OrioLogo from './OrioLogo';

const handleClientRedirect = () => {
  window.open("https://dev-ui.healthorio.ai/", "_blank", "noopener,noreferrer");
};

const OrioNavbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
  setIsMobileMenuOpen(false);
}, [location.pathname]);

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
    ? 'bg-white border-gray-200 shadow-black/5'
    : 'bg-[#0E0E0F] border-white/10 shadow-white/5';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] font-sans transition-all duration-500 ease-out
        ${navBg} ${scrolled ? 'shadow-xl' : ''} border-b`}
      >
        <div
          className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto animate-fade-in-down"
        >

          {/* --- LOGO SECTION --- */}
          <div onClick={() => navigate('/')} className={`flex items-center gap-3 font-bold text-xl tracking-tighter ${textColor} group cursor-pointer`}>
            <div>
              <OrioLogo theme={theme} className="w-10 h-10" />
            </div>
            <span className="group-hover:opacity-70 transition-opacity">
              <span className={theme === 'light' ? 'text-[#1F2022]' : 'text-[#F5AD3D]'}>HEALTH</span> <span className={theme === 'light' ? 'text-[#1F2022]' : 'text-white'}>ORIO</span>
            </span>
          </div>

          {/* --- DESKTOP LINKS --- */}
          <div className={`hidden md:flex items-center gap-1 font-medium text-sm ${textColor}`}>
{[
  { name: 'Solutions', href: '/solutions-by-role' },
  { name: 'VBHC', href: '/vbhc' },
  { name: 'Platform', href: '/platform' },
  { name: 'IPU', href: '/ipu-solutions' },
  { name: 'Resources', href: '/resources' },
].map((item) => {
  const isActive = location.pathname === item.href;
  return (
  <Link
    key={item.name}
    to={item.href}
    className={`flex items-center gap-1.5 py-2 px-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200
      ${isActive
        ? (theme === 'light' ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]')
        : (theme === 'light' ? 'text-[#1F2022] hover:bg-black/5' : 'text-white hover:bg-white/10')
      }`}
  >
    {item.name}
  </Link>
  );
})}
          </div>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative p-2.5 rounded-full ${theme === 'light' ? 'bg-gray-100 border border-gray-200 hover:bg-gray-200' : 'bg-white/10 border border-white/10 hover:bg-white/20'} hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm`}
              aria-label="Toggle Theme"
            >
              <div className={`relative w-5 h-5 ${textColor}`}>
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />
              </div>
            </button>

            {/* CTA Button - Talk to Us */}
            <Link
              to="/contact"
              className={`hidden md:flex items-center gap-2 ${theme === 'light' ? 'bg-[#1F2022] text-white hover:bg-black' : 'bg-[#F5AD3D] text-[#1F2022] hover:bg-white'} pl-5 pr-4 py-2.5 rounded-xl text-sm font-semibold
              hover:shadow-lg transition-all duration-300 group`}>
              <MessageCircle className="w-4 h-4" />
              Talk to Us
              <ArrowUpRight className={`w-4 h-4 ${theme === 'light' ? 'text-white/50' : 'text-[#1F2022]/50'} group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
            </Link>

            {/* CTA Button - Healthorio Insights */}
            {/* <button onClick={handleClientRedirect} className={`hidden md:flex items-center gap-2 ${theme === 'light' ? 'bg-[#1F2022] text-white hover:bg-black' : 'bg-[#F5AD3D] text-[#1F2022] hover:bg-white'} pl-5 pr-4 py-2.5 rounded-xl text-sm font-semibold
              hover:shadow-lg transition-all duration-300 group`}>
              Healthorio Insights
              <ArrowUpRight className={`w-4 h-4 ${theme === 'light' ? 'text-white/50' : 'text-[#1F2022]/50'} group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
            </button> */}

            {/* Mobile Menu Icon */}
            <button
              className={`md:hidden p-2 ${textColor} active:scale-90 transition-transform`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
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
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 top-[72px] z-[98] bg-black/40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <div className={`absolute top-full left-0 w-full pt-0 px-0 z-[101] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top md:hidden
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 -translate-y-4 scale-95 invisible'}`}>

          <div className={`${theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0E0E0F] border-white/10'} p-6 shadow-2xl border-b flex flex-col gap-2`}>
            {[
              { name: 'Solutions', href: '/solutions-by-role' },
              { name: 'VBHC', href: '/vbhc' },
              { name: 'Platform', href: '/platform' },
              { name: 'IPU', href: '/ipu-solutions' },
              { name: 'Resources', href: '/resources' },
            ].map((item) => {
              const isActive = location.pathname === item.href;
              return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors
                  ${isActive
                    ? (theme === 'light' ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]')
                    : (theme === 'light' ? 'text-[#1F2022] hover:bg-black/5' : 'text-white hover:bg-white/5')
                  }`}
              >
                <span className="font-semibold text-lg">{item.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </Link>
              );
            })}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`mt-4 w-full flex items-center justify-center gap-2 ${theme === 'light' ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]'} py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform`}>
              <MessageCircle className="w-5 h-5" />
              Talk to Us
            </Link>
            {/*<button onClick={handleClientRedirect} className={`w-full ${theme === 'light' ? 'bg-[#1F2022] text-white' : 'bg-[#F5AD3D] text-[#1F2022]'} py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform`}>
              Healthorio Insights
            </button> */}
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[72px]" />

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