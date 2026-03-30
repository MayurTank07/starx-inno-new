import React from "react";

const SpiralCorner = () => (
  <svg
    viewBox="0 0 300 200"
    className="absolute top-0 right-0 w-40 opacity-40 pointer-events-none"
  >
    {Array.from({ length: 40 }).map((_, i) => (
      <ellipse
        key={i}
        cx="260"
        cy="-10"
        rx={i * 4.8}
        ry={i * 2.4}
        fill="none"
        stroke="url(#grad)"
        strokeWidth="0.6"
        transform={`rotate(${i * 6} 260 -10)`}
      />
    ))}

    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff7a00" />
        <stop offset="100%" stopColor="#ff008c" />
      </linearGradient>
    </defs>
  </svg>
);

const ProgramCard = () => (
  <div
    className="
    relative bg-[#f6f6f6]
    rounded-[22px]
    px-6 py-6
    shadow-sm border border-gray-200
    overflow-hidden
    h-[320px]
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-1
  "
  >
    <SpiralCorner />

    <div className="relative z-10 text-left">
      {/* Title */}
      <h3 className="text-[17px] font-semibold leading-snug text-gray-900">
        Android Development Program
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-[5px] bg-teal-100 text-teal-700 text-[11px] rounded-full font-semibold">
          Career-Boosting Add-ons
        </span>
        <span className="px-3 py-[5px] bg-pink-100 text-pink-700 text-[11px] rounded-full font-semibold">
          Get Certified and Job Ready
        </span>
      </div>

      {/* Points */}
      <ul className="text-[13px] text-gray-600 space-y-1.5 leading-snug mt-5">
        <li>• Master Android Development with Java and XML in Android Studio.</li>
        <li>• Build apps from basic UI to full-featured mobile solutions.</li>
        <li>• Perfect for beginners aiming to become Android developers.</li>
      </ul>
    </div>

    {/* Arrow Button */}
    <button
      className="
      absolute bottom-4 right-4
      w-9 h-9 rounded-full
      bg-black text-white
      flex items-center justify-center
      text-sm
      hover:bg-orange-500 transition
    "
    >
      →
    </button>
  </div>
);

export default function CareerPrograms() {
  return (
    <section className="bg-[#f4f4f4] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[34px] font-semibold tracking-tight text-gray-900">
          Create your{" "}
          <span className="text-orange-500 font-bold">
            Career Opportunities
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-gray-600 text-[15px] max-w-xl mx-auto leading-relaxed">
          Build in-demand skills and get real-world experience through projects,
          internships, and expert guidance.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7 mt-10">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>

        {/* Button */}
        <button className="mt-10 px-7 py-2.5 bg-black text-white rounded-md text-[13px] hover:bg-orange-500 transition">
          View More
        </button>
      </div>
    </section>
  );
}