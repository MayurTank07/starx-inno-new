import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Software & Product Development",
    tags: [
      { name: "Web Apps", color: "bg-[#E0F9F1]/80 text-[#2DD4BF]" },
      { name: "Dashboards", color: "bg-[#FCE7F3]/80 text-[#EC4899]" },
      { name: "Automation", color: "bg-[#FFEDD5]/80 text-[#F97316]" },
    ],
    desc: "We design and build custom web applications, internal tools, and scalable platforms using modern, secure, and performance-driven technologies.",
    cta: "Build with us",
  },
  {
    title: "Digital Marketing & Growth",
    tags: [
      { name: "SEO", color: "bg-[#E0F9F1]/80 text-[#2DD4BF]" },
      { name: "Ads", color: "bg-[#FCE7F3]/80 text-[#EC4899]" },
      { name: "Lead Gen", color: "bg-[#FFEDD5]/80 text-[#F97316]" },
    ],
    desc: "Grow your brand with data-driven SEO, performance ads, and conversion-focused funnels designed to deliver measurable business growth.",
    cta: "Scale your brand",
  },
  {
    title: "Internships & Live Projects",
    tags: [
      { name: "Real Clients", color: "bg-[#E0F9F1]/80 text-[#2DD4BF]" },
      { name: "Live Work", color: "bg-[#FCE7F3]/80 text-[#EC4899]" },
      { name: "Mentorship", color: "bg-[#FFEDD5]/80 text-[#F97316]" },
    ],
    desc: "Gain hands-on experience by working on real products, campaigns, and workflows used in production environments.",
    cta: "Apply now",
  },
  {
    title: "Tech & Digital Skill Training",
    tags: [
      { name: "Full Stack", color: "bg-[#E0F9F1]/80 text-[#2DD4BF]" },
      { name: "Digital Marketing", color: "bg-[#FCE7F3]/80 text-[#EC4899]" },
      { name: "AI Tools", color: "bg-[#FFEDD5]/80 text-[#F97316]" },
    ],
    desc: "Industry-aligned programs focused on real-world skills, practical execution, and making learners job-ready from day one.",
    cta: "Explore programs",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#F3F4F6] py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Background Glow Decorations (Essential for Glass visibility) */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-orange-300 rounded-full blur-[120px] opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-pink-200 rounded-full blur-[120px] opacity-50 -z-10"></div>

      {/* Heading Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-monsterrat">
          <span className="text-[#FF7A00]">What</span> We Do
        </h2>
        <p className="text-[#666666] mt-5 text-lg max-w-2xl mx-auto font-light">
          At StarX Innovations, we work across four key verticals:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between 
                       bg-white/40 backdrop-blur-md 
                       rounded-[40px] p-10 
                       shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
                       border border-white/40 
                       hover:border-orange-300/50 hover:bg-white/60
                       transition-all duration-500 ease-in-out"
          >
            <div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-6 tracking-tight">
                {card.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#444444] text-base leading-relaxed mb-10 font-normal">
                {card.desc}
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-base font-semibold text-[#1A1A1A] cursor-pointer group-hover:text-[#FF7A00] transition-colors">
                {card.cta}
              </span>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white group-hover:bg-[#FF7A00] transition-all duration-300 shadow-lg group-hover:shadow-orange-200">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}