import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ChevronRight, Sparkles } from "lucide-react";

// Micro logos optimized for 20-24px height
const MicroSchemeLogos = {
  pmjay: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-white/30">
      <img
        src="https://images.seeklogo.com/logo-png/42/1/ayushman-bharat-logo-png_seeklogo-429020.png"
        alt="PM-JAY"
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement?.classList.add("bg-gradient-to-tr", "from-orange-500", "via-white", "to-green-600");
        }}
      />
    </div>
  ),
  maa: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-sky-300">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#0284c7" strokeWidth="3" />
        <circle cx="50" cy="42" r="9" fill="#0284c7" />
        <path d="M35 66 C35 52 65 52 65 66 Z" fill="#0284c7" />
        <path d="M26 80 C40 74 48 80 50 84 C52 80 60 74 74 80 C68 88 56 90 50 90 C44 90 32 88 26 80 Z" fill="#ea580c" />
      </svg>
    </div>
  ),
  rghs: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-emerald-400">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#15803d" />
        <rect x="36" y="36" width="28" height="28" rx="4" fill="#ffffff" />
        <text x="50" y="56" textAnchor="middle" fontSize="24" fontWeight="900" fill="#eab308" fontFamily="sans-serif">R</text>
      </svg>
    </div>
  ),
  cghs: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-green-400">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#f8fafc" stroke="#16a34a" strokeWidth="4" />
        <circle cx="50" cy="50" r="28" fill="#9333ea" />
        <path d="M50 32 L50 68 M32 50 L68 50" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </div>
  ),
  esi: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-rose-300">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#881337" />
        <path d="M28 40 Q50 34 72 40 L66 48 Q50 44 34 48 Z" fill="#fbbf24" />
        <path d="M36 50 Q50 66 64 50 L60 58 Q50 70 40 58 Z" fill="#fbbf24" />
        <rect x="46" y="60" width="8" height="18" fill="#fbbf24" />
      </svg>
    </div>
  ),
  echs: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-blue-400">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M20 16 L80 16 L80 50 C80 75 50 92 50 92 C50 92 20 75 20 50 Z" fill="#dc2626" />
        <path d="M20 44 L80 44 L80 50 C80 75 50 92 50 92 C50 92 20 75 20 50 Z" fill="#1e3a8a" />
        <circle cx="50" cy="34" r="7" fill="#fef08a" />
        <path d="M36 48 L64 34 M64 48 L36 34" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  ),
  tpa: () => (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm border border-cyan-400">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#f0fdf4" stroke="#0284c7" strokeWidth="4" />
        <circle cx="50" cy="38" r="8" fill="#0284c7" />
        <circle cx="36" cy="44" r="6" fill="#0284c7" />
        <circle cx="64" cy="44" r="6" fill="#0284c7" />
        <path d="M28 66 C38 56 46 68 50 70 C54 68 62 56 72 66 C64 80 36 80 28 66 Z" fill="#0ea5e9" />
      </svg>
    </div>
  ),
};

const schemeItems = [
  {
    name: "Ayushman Bharat PM-JAY",
    code: "PM-JAY",
    logo: MicroSchemeLogos.pmjay,
    highlight: "100% Cashless",
  },
  {
    name: "Mukhyamantri Ayushman (MAA Yojana)",
    code: "MAA YOJANA",
    logo: MicroSchemeLogos.maa,
    highlight: "State Scheme",
  },
  {
    name: "RGHS Rajasthan Govt",
    code: "RGHS",
    logo: MicroSchemeLogos.rghs,
    highlight: "Govt Employees",
  },
  {
    name: "CGHS Central Govt",
    code: "CGHS",
    logo: MicroSchemeLogos.cghs,
    highlight: "Central Govt",
  },
  {
    name: "ESIC Insurance",
    code: "ESI Scheme",
    logo: MicroSchemeLogos.esi,
    highlight: "Card Holders",
  },
  {
    name: "ECHS Armed Forces",
    code: "ECHS",
    logo: MicroSchemeLogos.echs,
    highlight: "Defence Veterans",
  },
  {
    name: "25+ Corporate TPAs & Insurance",
    code: "Cashless TPA",
    logo: MicroSchemeLogos.tpa,
    highlight: "Cashless Claims",
  },
];

export const SchemesTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-[#0b1d33] to-slate-950 text-white border-b border-white/10 text-xs relative overflow-hidden select-none z-30">
      <div className="flex items-center h-8 sm:h-9">
        {/* Left Fixed Badge / Button */}
        <Link
          to="/our-schemes"
          className="shrink-0 z-20 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs tracking-wide shadow-md hover:brightness-110 transition-all border-r border-amber-600/30 group"
          title="Click to view all government and cashless schemes"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
          <span className="whitespace-nowrap uppercase font-black">Our Schemes</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Marquee Container with Left-to-Right Flow */}
        <div className="relative flex-1 overflow-hidden flex items-center h-full mask-linear-gradient">
          <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap animate-marquee-ltr hover:[animation-play-state:paused] cursor-pointer">
            {/* Repeat 3 times for continuous smooth looping */}
            {[...schemeItems, ...schemeItems, ...schemeItems].map((scheme, idx) => (
              <Link
                key={idx}
                to="/our-schemes"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors group/item"
              >
                <scheme.logo />
                <span className="font-semibold text-[11px] sm:text-xs tracking-tight group-hover/item:text-amber-300 transition-colors">
                  {scheme.name}
                </span>
                <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-500/30 rounded px-1.5 py-0.2 hidden sm:inline-block">
                  {scheme.highlight}
                </span>
                <span className="text-white/25 text-xs ml-1">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
