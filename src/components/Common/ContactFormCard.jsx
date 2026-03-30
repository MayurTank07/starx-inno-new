import React, { useState } from "react";

export default function ContactFormCard({ formTitle = "Let's talk about your\ncareer growth" }) {
  const [activeTab, setActiveTab] = useState("Student");

  const lines = formTitle.split("\n");

  return (
    <div className="bg-[#f3f4f6] text-black rounded-[32px] p-8 lg:p-10 w-full max-w-[440px] shadow-2xl ml-auto">

      {/* Title */}
      <h2 className="text-center text-xl font-bold text-[#ff7a00] leading-snug">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <p className="text-center text-gray-500 mt-2 text-sm leading-tight">
        Got Questions or ready to start? <br />
        I'm here with you
      </p>

      {/* Student / Professional Toggle */}
      <div className="flex bg-gray-200/60 p-1 rounded-xl mt-4">
        {["Student", "Professional"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#ff7a00] text-white shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="mt-4 space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name*"
            className="w-1/2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="w-1/2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          placeholder="Phone no."
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          placeholder="What would you like to discuss"
          rows={3}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-base mt-1 hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
