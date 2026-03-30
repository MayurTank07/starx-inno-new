import React from "react";

export default function CareersHero() {
  return (
    <div className="bg-black text-white relative overflow-hidden min-h-[500px]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-10 lg:px-16 pt-28 pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight">
            Start Your <span className="text-orange-600">Internship</span> <br />
            Journey
          </h1>

          <p className="text-gray-300 mt-8 max-w-lg text-lg leading-relaxed">
            Work on live projects with expert mentorship and gain real
            industry experience. Build practical skills and confidence for
            your career.
          </p>

          {/* Badge - Positioned exactly like snapshot */}
          <div className="mt-16 inline-block bg-[#121212] border border-gray-800 px-6 py-2 rounded-full shadow-2xl">
            <span className="text-orange-600/90 text-sm font-medium">
              Updated on December 17, 2025
            </span>
          </div>
        </div>

        {/* Right Side Decorative Swirl (The Abstract Image) */}
        <div className="absolute right-[-10%] top-[10%] opacity-40 pointer-events-none">
          {/* Using a stylized CSS/SVG representation of the copper swirl in your snap */}
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ea580c', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path 
              d="M100,20 C150,20 180,60 180,100 C180,160 120,190 80,170 C40,150 20,100 50,50 C70,20 100,20" 
              fill="none" 
              stroke="url(#grad)" 
              strokeWidth="0.5"
              className="animate-pulse"
            />
            {/* Repeated concentric paths to mimic the wireframe swirl */}
            {[...Array(15)].map((_, i) => (
              <circle 
                key={i} 
                cx="120" cy="80" r={20 + i * 5} 
                fill="none" 
                stroke="url(#grad)" 
                strokeWidth="0.2" 
                opacity={1 - i * 0.05}
              />
            ))}
          </svg>
        </div>

      </section>

      {/* Decorative Blur Bottom */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

    </div>
  );
}