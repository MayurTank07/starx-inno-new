import React from "react";
import { motion } from "framer-motion";

// Update these imports to match your assets folder
import figma from "../../assets/images/tool/figma.png";
import reactNative from "../../assets/images/tool/react.png";
import nodejs from "../../assets/images/tool/nodejs.png";
import apple from "../../assets/images/tool/apple.png";
import gitBranch from "../../assets/images/tool/gitskill.png";
import gcp from "../../assets/images/tool/gcp.png";
import postgres from "../../assets/images/tool/postgres.png";
import mongodb from "../../assets/images/tool/mongodb.png";
import aws from "../../assets/images/tool/git.png"; //need to add
import android from "../../assets/images/tool/android.png";
import gitSquare from "../../assets/images/tool/gitsquare.png";
import mysql from "../../assets/images/tool/mysql.png";
import express from "../../assets/images/tool/express.png";
import tailwind from "../../assets/images/tool/tailwind.png";
import postman from "../../assets/images/tool/postman.png";

const tools = [
  // Top Row
  { src: figma, className: "top-[5%] left-[8%] -rotate-12 w-14 lg:w-16" },
  { src: reactNative, className: "top-[12%] left-[34%] rotate-0 w-16 lg:w-20" },
  { src: nodejs, className: "top-[8%] left-[58%] rotate-0 w-12 lg:w-14" },
  { src: apple, className: "top-[5%] left-[72%] rotate-0 w-12 lg:w-14" },
  { src: gitBranch, className: "top-[15%] right-[12%] rotate-0 w-10 lg:w-12" },

  // Middle Row
  { src: gcp, className: "top-[45%] left-[5%] rotate-0 w-12 lg:w-14" },
  { src: postgres, className: "top-[38%] left-[22%] rotate-0 w-16 lg:w-20" },
  { src: mongodb, className: "top-[40%] left-[45%] rotate-0 w-16 lg:w-20" },
  { src: aws, className: "top-[35%] right-[25%] rotate-0 w-24 lg:w-28" },
  { src: android, className: "top-[32%] right-[5%] rotate-0 w-12 lg:w-14" },

  // Bottom Row
  { src: gitSquare, className: "bottom-[12%] left-[12%] rotate-12 w-16 lg:w-20" },
  { src: mysql, className: "bottom-[20%] left-[28%] rotate-0 w-20 lg:w-24" },
  { src: express, className: "bottom-[15%] left-[50%] rotate-0 w-14 lg:w-16" },
  { src: tailwind, className: "bottom-[10%] right-[25%] rotate-0 w-16 lg:w-18" },
  { src: postman, className: "bottom-[25%] right-[8%] rotate-12 w-16 lg:w-20" },
];
export default function ToolsSection() {
  return (
    <section className="bg-black text-white py-24 px-6 lg:px-24 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-monsterrat">
          <span className="text-orange-500">Tools</span> and{" "}
          <span className="text-orange-500">Technology</span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Our curriculum is powered by the latest tools and technologies used by professionals.
        </p>
      </div>

      {/* Icons Area */}
      <div className="relative h-[600px] max-w-6xl mx-auto">
        
        {/* Dots Background */}
        <div
          className="absolute -inset-x-40 top-0 bottom-0
          bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] 
          [background-size:22px_22px] 
          pointer-events-none
          opacity-60"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        {tools.map((tool, index) => (
          <motion.img
            key={index}
            src={tool.src}
            alt="tool"
            className={`absolute object-contain drop-shadow-2xl ${tool.className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 0, 
              zIndex: 50,
              filter: "brightness(1.2)"
            }}
          />
        ))}
      </div>
    </section>
  );
}