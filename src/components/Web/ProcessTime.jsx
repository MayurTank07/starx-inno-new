import React from "react";

const steps = [
  {
    title: "Master the 3A Formula",
    desc: "Stay consistent with our 3A Framework — Attendance, Assignment & Assessment — for steady growth and success.",
  },
  {
    title: "Industry Focused Expertise",
    desc: "Apply your learning in real projects and case studies to gain workplace readiness.",
  },
  {
    title: "Create a Winning Profile",
    desc: "Get expert help creating a resume, LinkedIn, and portfolio that make you stand out.",
  },
  {
    title: "Test your Readiness",
    desc: "Test your technical and practical skills through a final evaluation exam.",
  },
];

export default function SuccessFramework() {
  return (
    <section className="bg-black text-white py-28 relative overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-monsterrat">
          The StarX{" "}
          <span className="text-orange-500">Success Framework</span>
        </h2>
        <p className="text-gray-400 mt-5 text-lg">
          A 7-step journey designed to turn learning into expertise and expertise into opportunity.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="mt-24 relative">

        {/* Horizontal Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-600"></div>

        <div className="flex justify-center gap-24 relative">

          {steps.map((step, index) => {
            const isActive = index === 3;

            return (
              <div key={index} className="relative flex flex-col items-center">

                {/* Top Dot (on horizontal line) */}
                <div
                  className={`w-5 h-5 rounded-full absolute -top-2 z-20 ${
                    isActive ? "bg-orange-500" : "bg-white"
                  }`}
                ></div>

                {/* Vertical Line */}
                <div
                  className={`w-[2px] h-20 mt-2 ${
                    isActive ? "bg-orange-500" : "bg-gray-500"
                  }`}
                ></div>

                {/* Side Connector Dot */}
                <div
                  className={`w-4 h-4 rounded-full absolute top-[78px] -left-2 ${
                    isActive ? "bg-orange-500" : "bg-white"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`w-[300px] p-7 rounded-2xl mt-6 transition-all duration-300
                  ${
                    isActive
                      ? "border border-orange-500 bg-gradient-to-b from-[#1c1c1c] to-[#111]"
                      : "bg-gradient-to-b from-[#1c1c1c] to-[#141414]"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-20">
        <button className="w-14 h-14 border border-white rounded-xl text-lg flex items-center justify-center hover:bg-white hover:text-black transition-all">
          &lt;
        </button>
        <button className="w-14 h-14 border border-white rounded-xl text-lg flex items-center justify-center hover:bg-white hover:text-black transition-all">
          &gt;
        </button>
      </div>

    </section>
  );
}