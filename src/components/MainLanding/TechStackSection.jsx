import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import M1 from "../../assets/images/web/Frame 1.png";
import M2 from "../../assets/images/web/Frame 2.png";
import M3 from "../../assets/images/web/Frame 3.png";
import M4 from "../../assets/images/web/Frame 4.png";
import M5 from "../../assets/images/web/Frame 5.png";

export default function TechStackSection() {

  const images = [M1, M2, M3, M4, M5];
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  // 🔁 Loop animation (same as your logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift());
        return newOrder;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🎯 Positions (enhanced for better depth feel)
  const positions = [
    { x: -220, scale: 0.85, zIndex: 10, opacity: 0.4 },
    { x: -110, scale: 0.95, zIndex: 20, opacity: 0.7 },
    { x: 0, scale: 1.15, zIndex: 30, opacity: 1 },
    { x: 110, scale: 0.95, zIndex: 20, opacity: 0.7 },
    { x: 220, scale: 0.85, zIndex: 10, opacity: 0.4 },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden relative">

      {/* 🔥 LEFT LIGHT */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] 
        bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 🔥 RIGHT LIGHT */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] 
        bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-monsterrat">
          Create your{" "}
          <span className="text-orange-500">
            Software | Website | Applications
          </span>{" "}
          with advanced tech stack
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Tell us about your business and what you want to achieve.
          We design and develop a website that reflects your brand and helps
          you stand out online from start to finish.
        </p>

        {/* 🚀 Animated Frames */}
        <div className="relative mt-20 h-[420px] flex items-center justify-center">

          {order.map((imgIndex, i) => (
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              alt="app"
              className="absolute w-[360px] rounded-xl shadow-2xl"
              animate={positions[i]}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          ))}

        </div>

        {/* Button */}
        <button className="
          mt-12 px-8 py-3
          border border-orange-500
          rounded-lg
          text-orange-500
          hover:bg-orange-500 hover:text-black
          transition font-medium
        ">
          Get Started
        </button>

      </div>
    </section>
  );
}