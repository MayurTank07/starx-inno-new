import React from "react";
import Client from "../../assets/images/testimonial/Review.png";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden relative">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 gap-10 pt-16 pb-16">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-monsterrat leading-[1.1] tracking-tight">
            Voices of Trust <br />
            From <span className="text-[#FF7A00]">Our Clients</span>
          </h2>

          <p className="mt-6 text-white text-lg font-light tracking-wide uppercase">
            MERN Stack Reviews
          </p>

          {/* Slider Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="w-14 h-14 flex items-center justify-center border border-white/40 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button className="w-14 h-14 flex items-center justify-center border border-white/40 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative pt-10">
          
          <div className="bg-white text-black rounded-[40px] p-6 md:p-8 w-full lg:w-[680px] min-h-[420px] flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-2xl relative z-10">
            
            {/* Image Wrapper (FIXED — no cut) */}
            {/* Image Wrapper (removed gray bg) */}
<div className="w-[280px] h-[380px] rounded-[30px] overflow-hidden flex-shrink-0 shadow-lg flex items-center justify-center">
  <img
    src={Client}
    alt="Client Video"
    loading="lazy"
    className="w-full h-full object-contain"
  />
</div>

            {/* Content */}
            <div className="flex flex-col justify-center pr-4">
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#FF7A00]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-[17px] text-gray-700 leading-[1.6] font-medium italic">
                "MotionElements is the best online site to download AE templates for free. 
                Choose from free templates for After Effects, free videos and free music."
              </p>

              {/* Author */}
              <div className="mt-8 border-l-4 border-[#FF7A00] pl-4">
                <h4 className="font-bold text-xl text-gray-900">Lihov Sergey</h4>
                <p className="text-sm text-gray-500 font-semibold tracking-wide">
                  UI/UX Designer
                </p>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute bottom-4 right-4 opacity-20 w-32 h-32 pointer-events-none">
              <div className="w-full h-full border border-orange-500 rounded-full scale-150 blur-sm"></div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-600/20 rounded-full blur-[80px]"></div>
        </div>

      </section>
    </div>
  );
}