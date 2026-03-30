import React from "react";

export default function ClosingStatement() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-16 text-center relative overflow-hidden">

      {/* ================= HEADING ================= */}
      <h2 className="text-3xl md:text-4xl font-bold font-monsterrat">
        <span className="text-orange-500">Closing</span>{" "}
        <span className="text-black">Statement</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        Built for sustainable growth through clear strategy, strong systems,
        and real-world execution.
      </p>

      {/* ================= CARD ================= */}
      <div className="relative max-w-4xl mx-auto mt-12">

        {/* Card */}
        <div className="relative bg-[#efefef] border border-gray-300 rounded-3xl px-8 py-10 shadow-md">

          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            At StarX Innovations, we don’t chase trends — we build scalable
            systems, strategies, and skills that drive real growth.
          </p>

          {/* Button */}
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Build With Us
          </button>

          {/* Decorative Shape (bottom-right curve) */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
}