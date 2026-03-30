import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Search and Website Growth",
    tags: [
      { name: "SEO", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Website", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "Conversions", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "Growth", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Grow your online visibility with SEO-optimized websites built to rank higher, load faster, and convert visitors into customers.",
  },
  {
    title: "Social Media Growth & Management",
    tags: [
      { name: "Content", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Engagement", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "Branding", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "Community", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Build a strong social presence with strategic content, consistent branding, and active community engagement across platforms.",
  },
  {
    title: "Paid Ads & Performance Marketing",
    tags: [
      { name: "Ads", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Leads", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "Sales", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "ROI", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Launch high-performing ad campaigns designed to generate quality leads, boost sales, and maximize ROI.",
  },
  {
    title: "Content & Creative Branding",
    tags: [
      { name: "Content", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Design", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "Storytelling", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "Trust", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Create compelling content and visuals that build trust, tell your brand story, and leave a lasting impression.",
  },
  {
    title: "Analytics, Automation & CRM",
    tags: [
      { name: "Analytics", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Automation", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "CRM", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "Funnels", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Track performance, automate marketing, and nurture leads with data-driven insights and smart CRM systems.",
  },
  {
    title: "Online Reputation & Local Marketing",
    tags: [
      { name: "Reviews", color: "bg-[#e2fbf4] text-[#24d1a0]" },
      { name: "Local SEO", color: "bg-[#ffe8f3] text-[#f453a2]" },
      { name: "Visibility", color: "bg-[#fff0e5] text-[#ff8142]" },
      { name: "Trust", color: "bg-[#e6f2ff] text-[#55a2ff]" },
    ],
    desc: "Strengthen your brand’s credibility and attract local customers through reviews, local SEO, and trust-building strategies.",
  },
];

export default function GrowBrandsSection() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6 font-sans">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black font-monsterrat">
          <span className="text-[#ff7a00]">Grow</span> Brands Digitally
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Learn how to attract, engage, and convert audiences online. Build
          practical skills through real campaigns and tools.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white backdrop-blur-md rounded-[40px] p-10 border border-gray-100 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col justify-between hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black leading-tight">
                {service.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-[13px] font-medium px-4 py-1.5 rounded-full ${tag.color} bg-opacity-80`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                {service.desc}
              </p>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-semibold text-black">
                ₹ 15000 /month
              </p>
              <button className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#ff7a00] transition-all duration-300">
                <ArrowRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
