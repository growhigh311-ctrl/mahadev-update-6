import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 group`}>
      <div className={`${className} rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300`}>
        {/* Gold Trishul SVG */}
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-black fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Trishul Prongs */}
          <path d="M 50 15 C 47 30, 47 40, 50 55 C 53 40, 53 30, 50 15 Z" />
          <path d="M 50 50 C 40 50, 30 45, 25 25 C 27 35, 33 43, 45 44 C 45 35, 45 25, 45 25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M 50 50 C 60 50, 70 45, 75 25 C 73 35, 67 43, 55 44 C 55 35, 55 25, 55 25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          {/* Damru (small drum) shape in middle */}
          <path d="M 42 58 L 58 58 L 46 70 L 54 70 Z" />
          {/* Shaft */}
          <rect x="48" y="70" width="4" height="20" rx="2" />
        </svg>
      </div>
      <span className="text-white font-serif font-bold text-xl tracking-wide group-hover:text-amber-400 transition-colors">
        Mahadev <span className="text-amber-500 font-sans font-light">Book</span>
      </span>
    </div>
  );
}
