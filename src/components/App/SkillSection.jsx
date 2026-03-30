import React from "react";
import { motion } from "framer-motion"; // Make sure to install: npm install framer-motion
import app1 from "../../assets/images/app/app1.png";
import app2 from "../../assets/images/app/app1.png";
import app3 from "../../assets/images/app/app1.png";

const skills = [
  {
    title: "E-Commerce",
    description: "Scalable online stores built for seamless shopping. Optimized for performance and growth.",
    image: app1,
  },
  {
    title: "Learning Apps",
    description: "Engaging learning platforms designed for modern users. Built for smooth content delivery.",
    image: app3,
  },
  {
    title: "Customised Solutions",
    description: "Digital solutions tailored to your business needs. Flexible, scalable, and growth-ready.",
    image: app2,
  },
];

export default function AppSkillsSection() {
  return (
    <section className="bg-[#EDEDED] flex flex-col justify-center py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black font-monsterrat">
          Build for <span className="text-orange-500">Real-World Skills</span>
        </h2>
        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
          Learn through hands-on projects, live sessions, and industry-relevant tools.
          Gain practical experience that prepares you for real development roles.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            // --- Hover Animations ---
            whileHover={{ 
              y: -12, // Professional "lift"
              scale: 1.02, 
              backgroundColor: "#03050a" // Deep professional black (Gray-900)
            }}
            // --- Tap/Touch Animations (Mobile) ---
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              backgroundColor: { duration: 0.3 } 
            }}
            className="group relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 cursor-pointer"
          >
            {/* Image Container - Background slightly darkens on hover to keep focus */}
            <div className="bg-[#e8eef5] rounded-xl mb-6 transition-colors duration-300 group-hover:bg-[#1f2937]">
              <img
                src={skill.image}
                alt={skill.title}
                loading="lazy"
                className="w-full object-contain rounded-xl"
              />
            </div>

            {/* Title - Transitions to white */}
            <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-white">
              {skill.title}
            </h3>

            {/* Description - Transitions to light gray */}
            <p className="text-gray-600 mt-3 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}