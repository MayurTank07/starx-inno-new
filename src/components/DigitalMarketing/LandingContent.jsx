import React from "react";
import ContactFormCard from "../Common/ContactFormCard";

export default function LandingContent() {
  return (
    <>
      {/* Left Text Content */}
      <div className="max-w-xl animate-slideLeft">
        <h1 className="text-5xl md:text-6xl font-monsterrat font-bold leading-[1.1] tracking-tight">
          Scalable <span className="text-orange-500">Digital</span><br />
          <span className="text-orange-500">Marketing</span> for Growing<br />
          Brands
        </h1>

        <p className="mt-6 text-gray-400 text-lg font-metropolis max-w-lg leading-relaxed">
          We craft data-driven digital marketing strategies that 
          boost visibility, generate quality leads, and accelerate 
          business growth across platforms
        </p>

        <button className="mt-8 px-8 py-3 border border-[#ff7a00] rounded-lg text-[#ff7a00] font-medium hover:bg-[#ff7a00] hover:text-black transition-all duration-300 font-monsterrat">
          Get Brochure
        </button>
      </div>

      {/* Right Form Card */}
      <ContactFormCard formTitle={`Let's talk about your\nDigital strategy`} />
    </>
  );
}