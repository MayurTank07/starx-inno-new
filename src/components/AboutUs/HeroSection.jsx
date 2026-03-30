import React from "react";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center px-6 md:px-10 lg:px-16 pt-16">

      {/* Glow Effect (Top Right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] 
      bg-[radial-gradient(circle_at_top_right,_rgba(255,115,0,0.25),_transparent_60%)] blur-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full pt-28">
      <div className="max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide font-monsterrat">
          About Us
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 max-w-xl font-metropolis">
          Building Technology. Driving Digital Growth. Creating Future-Ready Talent.
        </p>

        {/* Button */}
        <button className="border border-orange-500 text-white px-5 py-2 text-sm rounded-md 
        hover:bg-orange-500 hover:text-black transition-all duration-300 font-monsterrat">
          Build With Us
        </button>

      </div>
      </div>
    </section>
  );
}