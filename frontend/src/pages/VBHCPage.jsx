import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Network,
  Users,
  HeartPulse,
  Coins,
  Smile,
  Unplug,
  Settings,
  TrendingDown,
  XCircle,
  Activity,
  CheckCircle2,
  ArrowDown,
  Sparkles
} from 'lucide-react';

// --- SHARED ANIMATION HOOK ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Trigger once
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect() };
  }, [ref, options]);

  return [ref, isVisible];
};

const VBHCPage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- HERO SECTION ---
  const HeroSection = () => {
    // --- Theme Colors ---
    const bgClass = isLight ? 'bg-[#E6EBE0]' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]';

    // Card Styles (Glassy)
    const cardBg = isLight
      ? 'bg-white/60 border-white/40 shadow-sm'
      : 'bg-white/10 border-white/10 shadow-lg';

    // --- Animation State ---
    const [offset, setOffset] = useState(0);

    // Parallax effect
    useEffect(() => {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <section className={`relative w-full min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-700 ease-in-out overflow-hidden flex flex-col items-center justify-center pt-30`}>

        {/* --- 1. BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ transform: `translateY(${offset * 0.2}px)` }}>
          <div className="w-full h-[150%] grid grid-cols-12 border-r border-current">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-l border-current h-full"></div>
            ))}
          </div>
        </div>

        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-40 animate-pulse-slow ${isLight ? 'bg-white' : 'bg-white/10'}`}></div>

        {/* --- 2. MAIN CONTENT --- */}
        <div className="relative z-10 max-w-5xl px-6 w-full flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-in fade-in zoom-in duration-1000 delay-100">
            Value-Based <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? 'from-[#1F2022] to-[#1F2022]/60' : 'from-[#E6EBE0] to-[#E6EBE0]/60'}`}>Healthcare</span>
          </h1>

          <p className="text-lg md:text-xl font-medium opacity-70 leading-relaxed max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            We focus on outcomes that matter to patients relative to the cost of delivering those outcomes—measured across the full cycle of care, not isolated services.
          </p>

          {/* --- 3. TRANSITION CARDS --- */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {[
              { from: "Volume", to: "Value" },
              { from: "Departments", to: "Conditions" },
              { from: "Revenue / Service", to: "Outcome / Rupee" }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 duration-300 ${cardBg}`}>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 line-through decoration-red-500/40">{item.from}</span>
                <ArrowDown size={20} className="text-current opacity-60 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                <span className="text-xl font-black tracking-tight">{item.to}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    );
  };

  // --- WHAT IS VBHC SECTION ---
  const WhatIsVBHCSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const bgClass = isLight ? 'bg-white' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]';
    const cardBorder = isLight ? 'border-gray-200' : 'border-white/10';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-12 h-[2px] ${isLight ? 'bg-[#1F2022]' : 'bg-[#E6EBE0]'}`}></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">The Concept</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              What is <span className="text-[#F5AD3D]">Value-Based Healthcare?</span>
            </h2>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed font-medium">
              Value-Based Healthcare focuses on outcomes that matter to patients relative to the cost of delivering those outcomes—measured across the full cycle of care, not isolated services.
            </p>
          </div>

          <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-8 text-center">VBHC shifts healthcare from:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { from: "Volume", to: "Value", icon: TrendingUp },
                { from: "Departments", to: "Conditions", icon: Network },
                { from: "Revenue per service", to: "Outcome per rupee spent", icon: Coins }
              ].map((item, i) => (
                <div key={i} className={`text-center p-8 rounded-2xl border ${cardBorder} hover:border-current transition-all group`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#E6EBE0] text-[#1F2022]'}`}>
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-3">
                    <div className="text-lg font-medium opacity-50 decoration-2 decoration-red-500/30 line-through">{item.from}</div>
                    <ArrowRight className={`${isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]'} mx-auto w-6 h-6 group-hover:translate-x-1 transition-transform`} />
                    <div className="text-xl font-bold">{item.to}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- WHY VBHC MATTERS SECTION ---
  const WhyVBHCMattersSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const bgClass = isLight ? 'bg-[#E6EBE0]' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-12 h-[2px] ${isLight ? 'bg-[#1F2022]' : 'bg-[#E6EBE0]'}`}></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">The Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              Why VBHC Matters for <span className={isLight ? 'opacity-60' : 'text-white'}>Hospitals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-6">Modern Hospitals operate under intense pressure:</h3>
              <div className="space-y-4">
                {["Thin margins", "Rising clinical input costs", "Increasing insurer scrutiny", "Limited pricing power"].map((challenge, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <span className="text-lg font-medium">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-6">VBHC allows hospitals to:</h3>
              <div className="space-y-4">
                {["Improve outcomes while controlling costs", "Strengthen insurer negotiations", "Create predictable, scalable care models"].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full ${isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#E6EBE0] text-[#1F2022]'} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- IPU MODEL SECTION ---
  const IPUSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    const bgClass = isLight ? 'bg-[#1F2022]' : 'bg-[#E6EBE0]';
    const textClass = isLight ? 'text-[#E6EBE0]' : 'text-[#1F2022]';
    const accentClass = isLight ? 'text-[#E6EBE0]' : 'text-[#1F2022]';

    return (
      <section ref={ref} className={`relative py-32 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full grid grid-cols-6 border-r border-current">
            {[...Array(6)].map((_, i) => <div key={i} className="border-l border-current h-full"></div>)}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`flex items-center gap-3 mb-6 ${accentClass}`}>
              <Network size={28} />
              <span className="font-bold uppercase tracking-widest text-xs">Structural Change</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              From Departments to <br /> Integrated Practice Units
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-80">
              An <span className="font-bold underline decoration-2 underline-offset-4">IPU</span> is a multidisciplinary team organized around a medical condition, not a department.
            </p>
          </div>

          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full border border-current opacity-20 animate-[spin_20s_linear_infinite]"></div>
              <div className={`absolute inset-0 m-auto w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl z-20 ${isLight ? 'bg-white text-[#1F2022]' : 'bg-[#1F2022] text-white'}`}>
                <Users size={32} className="mb-2" />
                <span className="font-black text-xl tracking-tighter">IPU</span>
              </div>
              {[
                { label: "Clinical Outcomes", icon: HeartPulse, top: '0%', left: '50%' },
                { label: "Cost Per Episode", icon: Coins, top: '75%', left: '90%' },
                { label: "Patient Exp", icon: Smile, top: '75%', left: '10%' },
              ].map((node, i) => (
                <div key={i} className={`absolute w-28 h-28 rounded-2xl flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 font-bold text-xs transform -translate-x-1/2 -translate-y-1/2 ${isLight ? 'bg-[#2A2B2E] text-white' : 'bg-white text-[#1F2022]'}`}
                  style={{ top: node.top, left: node.left }}>
                  <node.icon size={20} className="mb-2 opacity-80" />
                  {node.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- WHAT WE SOLVE SECTION ---
  const SolveSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const bgClass = isLight ? 'bg-slate-50' : 'bg-[#0A0A0A]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-white';
    const cardBg = isLight ? 'bg-white border-gray-100 hover:shadow-xl' : 'bg-[#1F2022] border-white/5 hover:bg-[#252629] hover:shadow-2xl';

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-red-500/10 text-red-500 font-bold text-xs uppercase tracking-widest">
              The Core Problem
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              What We <span className="text-red-500">Solve.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fragmented Tech", icon: Unplug, points: ["Incomplete patient journeys", "Data duplication", "Manual reporting"] },
              { title: "Operational Inefficiency", icon: Settings, points: ["Wide variable LOS", "Misallocated OT/ICU", "Suboptimal staff productivity"] },
              { title: "Financial Leakage", icon: TrendingDown, points: ["Missed diagnostics", "Poor follow-ups", "Unbundled care delivery"] }
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden ${cardBg} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${isLight ? 'bg-[#1F2022] text-[#E6EBE0]' : 'bg-[#E6EBE0] text-[#1F2022]'}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <div className="space-y-3">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-semibold opacity-90">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // --- HOW WE SOLVE SECTION ---
  const HowWeSolveSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const bgClass = isLight ? 'bg-white' : 'bg-[#1F2022]';
    const textClass = isLight ? 'text-[#1F2022]' : 'text-[#E6EBE0]';
    const cardBg = isLight ? 'bg-white border-gray-200 hover:shadow-xl' : 'bg-[#252629] border-white/10 hover:bg-[#2A2B2E] hover:shadow-2xl';

    const paths = [
      {
        number: "01",
        title: "Full Data Stack Migration",
        subtitle: "High Control, High Cost",
        when: "Fragmented systems, sunsetting legacy platforms, preparing for large‑scale digital transformation.",
        whatWeDo: "Ingests full historical and operational datasets, normalizes into a compliance‑first schema, creates a single source of truth.",
        value: "Clean slate, future‑proof architecture, maximum interoperability.",
        quote: "Full migration eliminates decades of technical debt."
      },
      {
        number: "02",
        title: "Selective ETL on Existing Systems",
        subtitle: "Fastest, Lowest Cost",
        when: "Want AI insights quickly, don't want to touch HIS/EMR, have budget constraints.",
        whatWeDo: "Extracts only fields needed for AI, maps into AI‑ready schema, leaves core systems untouched.",
        value: "Minimal disruption, rapid deployment, fast ROI.",
        quote: "AI without migration."
      },
      {
        number: "03",
        title: "Mixed Data Sourcing",
        subtitle: "Hybrid Strategy",
        when: "Structured + unstructured mix, phased modernization.",
        whatWeDo: "Pulls structured data via APIs, extracts unstructured data via OCR/NLP, harmonizes both.",
        value: "Modernization without waiting for perfect data.",
        quote: "Start where you are, modernize as you go."
      },
      {
        number: "04",
        title: "Refactor Existing Data Store",
        subtitle: "Schema Modernization",
        when: "Want faster search, digital forms, MDT workflows, better clinician UX.",
        whatWeDo: "Rebuilds or optimizes schema, adds indexing and metadata, enables structured capture and rapid retrieval.",
        value: "Better clinician experience, faster access, foundation for future AI.",
        quote: "Upgrade your existing system without migration."
      }
    ];

    return (
      <section ref={ref} className={`relative py-24 px-6 lg:px-12 ${bgClass} ${textClass} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-yellow-500/10 text-yellow-500 font-bold text-xs uppercase tracking-widest">
              The Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              How We <span className="text-yellow-500">Solve.</span>
            </h2>
          </div>

          {/* Problem Statement */}
          <div className={`mb-20 text-center max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className={`p-6 rounded-2xl border ${isLight ? 'border-red-200 bg-red-50' : 'border-red-500/20 bg-red-500/5'}`}>
                <h3 className="text-lg font-bold mb-4 text-red-500">Fragmented Data</h3>
                <p className="text-sm opacity-80">
                  Healthcare data is scattered across legacy systems, paper files, siloed databases, and outdated schemas.
                </p>
              </div>
              <div className={`p-6 rounded-2xl border ${isLight ? 'border-orange-200 bg-orange-50' : 'border-orange-500/20 bg-orange-500/5'}`}>
                <h3 className="text-lg font-bold mb-4 text-orange-500">Unready Infrastructure</h3>
                <p className="text-sm opacity-80">
                  Hospitals want AI, analytics, and digital workflows — but their data isn't structured, accessible, or compliant.
                </p>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border-2 ${isLight ? 'border-blue-500 bg-blue-50' : 'border-blue-400 bg-blue-500/10'}`}>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">The HealthOrio Bridge Solution</h3>
              <p className="text-lg opacity-90 font-medium">
                A secure, compliant, API‑powered data backbone that modernizes any hospital at any maturity level.
              </p>
            </div>
          </div>

          {/* Four Paths */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-center mb-4">
              Four Paths. <span className="text-yellow-500">One Platform.</span> Built for Every Hospital's Digital Maturity.
            </h3>
            <p className="text-center opacity-70 mb-12 max-w-3xl mx-auto">
              Hospitals don't need to choose between expensive migration and doing nothing. HealthOrioBridge offers four paths — each designed for different budgets, timelines, and digital maturity levels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paths.map((path, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border transition-all duration-700 group relative overflow-hidden ${cardBg} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`} style={{ transitionDelay: `${idx * 100}ms` }}>
                  {/* Path Number */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${isLight ? 'bg-blue-500 text-white' : 'bg-blue-400 text-[#1F2022]'}`}>
                      {path.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 pr-12 leading-tight">{path.title}</h3>
                    <p className="text-xs font-bold opacity-60 uppercase tracking-wider">{path.subtitle}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">When:</h4>
                      <p className="text-xs opacity-90 leading-relaxed">{path.when}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">What we do:</h4>
                      <p className="text-xs opacity-90 leading-relaxed">{path.whatWeDo}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">Value:</h4>
                      <p className="text-xs opacity-90 leading-relaxed">{path.value}</p>
                    </div>

                    <div className={`pt-3 border-t ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
                      <p className={`text-xs font-bold italic ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                        "{path.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <WhatIsVBHCSection />
      <WhyVBHCMattersSection />
      <IPUSection />
      <SolveSection />
      <HowWeSolveSection />
    </div>
  );
};

export default VBHCPage;