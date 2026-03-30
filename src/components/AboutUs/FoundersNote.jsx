import React from "react";

export default function FoundersNote() {
  return (
    <section className="relative bg-[#f6f6f6] py-24 px-6 md:px-16 overflow-hidden">

      {/* ================= BACKGROUND SHAPES ================= */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide font-monsterrat">
          FOUNDERS <span className="text-orange-500">NOTE</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
          Execution-driven solutions that deliver measurable growth and real-world impact.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ================= NOTE CARD ================= */}
        <div className="relative">

          {/* Paper Clip */}
          <div className="absolute -top-6 left-8 text-gray-400 text-2xl rotate-[20deg]">
            📎
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              StarX Innovations bridges the gap between knowledge and execution,
              delivering real-world experience, measurable results, and long-term
              growth. More than a service provider, we’re your growth partner.
            </p>

            <p className="mt-6 text-gray-600 italic text-sm">
              — Mayor Tank Founder & CEO, StarX Innovations
            </p>
          </div>
        </div>

        {/* ================= FOUNDER IMAGE ================= */}
        <div className="relative flex justify-center md:justify-end">

          <img
            src="/founder.png"
            alt="Founder"
            loading="lazy"
            className="w-[320px] md:w-[380px] object-contain z-10"
          />

          {/* Curved Arrow */}
          <div className="absolute bottom-10 left-10 text-4xl text-gray-400 rotate-12">
            ↺
          </div>

          {/* Spark Decoration */}
          <div className="absolute bottom-6 left-1/2 text-xl text-gray-500">
            ✦
          </div>

        </div>
      </div>
    </section>
  );
}