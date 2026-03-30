import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import R1 from "../../assets/images/Landing/R1.png";
import R2 from "../../assets/images/Landing/R2.png";
import R3 from "../../assets/images/Landing/R3.png";

const skillsData = [
  {
    img: R1,
    title: "Languages and Tools",
    desc: "Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.",
  },
  {
    img: R2,
    title: "280+ Live Session hours",
    desc: "Choose from various time slots to fit yoga seamlessly into your schedule.",
  },
  {
    img: R3,
    title: "30+ Projects",
    desc: "Receive gentle nudges to build and maintain your healthy habits effortlessly.",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6 lg:px-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-monsterrat font-bold text-gray-900">
          Build for <span className="text-orange-500">Real-World Skills</span>
        </h1>
        <p className="mt-5 text-[#000000CC] text-lg leading-relaxed font-monsterrat">
          Learn through hands-on projects, live sessions, and industry-relevant tools.
          Gain practical experience that prepares you for real development roles.
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            // 1. Subtle lift and scale on hover
            // 2. Background color transitions to Black
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              backgroundColor: "#010307" // Tailwind gray-900 (Deep Black)
            }}
            // 3. Smooth transition settings
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              backgroundColor: { duration: 0.3 } 
            }}
            className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm p-4 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="rounded-xl w-full object-contain"
            />

            {/* Title - Changes to white on hover via 'group-hover' */}
            <h3 className="mt-5 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {item.title}
            </h3>

            {/* Description - Changes to gray-300 on hover */}
            <p className="mt-2 text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}