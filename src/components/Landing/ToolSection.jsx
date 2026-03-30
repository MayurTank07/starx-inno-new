import React from "react";
import { motion } from "framer-motion";

// Ensure these paths are correct in your local project
import html from "../../assets/images/tool/html.png";
import css from "../../assets/images/tool/tailwind.png"; 
import react from "../../assets/images/tool/react.png";
import node from "../../assets/images/tool/nodejs.png";
import github from "../../assets/images/tool/git.png";
import android from "../../assets/images/tool/android.png";
import mongodb from "../../assets/images/tool/mongodb.png";
import bootstrap from "../../assets/images/tool/bootstrap.png";
import js from "../../assets/images/tool/js.png";
import vscode from "../../assets/images/tool/vscode.png"; 
import mysql from "../../assets/images/tool/mysql.png";
import tailwind from "../../assets/images/tool/tailwind.png";
import postman from "../../assets/images/tool/postman.png";
import express from "../../assets/images/tool/express.png"; 

const tools = [
  { src: html, className: "top-[15%] left-[5%] -rotate-12 w-16 lg:w-20" },
  { src: react, className: "top-[10%] left-[30%] -rotate-6 w-20 lg:w-24" },
  { src: node, className: "top-[8%] left-[52%] rotate-12 w-16 lg:w-20" },
  { src: github, className: "top-[12%] right-[10%] -rotate-12 w-12 lg:w-16" },
  { src: android, className: "top-[35%] left-[8%] rotate-6 w-16 lg:w-20" },
  { src: css, className: "top-[25%] left-[18%] rotate-12 w-16 lg:w-20" },
  { src: mongodb, className: "top-[38%] left-[42%] -rotate-6 w-20 lg:w-24" },
  { src: mysql, className: "top-[48%] left-[58%] -rotate-6 w-20 lg:w-24" },
  { src: bootstrap, className: "top-[32%] right-[22%] rotate-12 w-16 lg:w-20" },
  { src: js, className: "bottom-[15%] left-[8%] -rotate-12 w-20 lg:w-24" },
  { src: vscode, className: "bottom-[30%] left-[25%] rotate-12 w-16 lg:w-20" },
  { src: postman, className: "bottom-[25%] right-[5%] -rotate-12 w-16 lg:w-20" },
  { src: tailwind, className: "bottom-[12%] right-[24%] rotate-6 w-16 lg:w-20" },
  { src: express, className: "bottom-[10%] left-[48%] rotate-0 w-16 lg:w-20" },
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
      <div className="relative h-[550px] max-w-6xl mx-auto">
        
        {/* Updated Dots: Expanded to full width of section to cover left/right */}
        <div
          className="absolute -inset-x-24 top-0 bottom-0
          bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] 
          [background-size:18px_18px] 
          pointer-events-none
          opacity-70"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {tools.map((tool, index) => (
          <motion.img
            key={index}
            src={tool.src}
            alt="tool"
            className={`absolute object-contain ${tool.className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
          />
        ))}
      </div>
    </section>
  );
}