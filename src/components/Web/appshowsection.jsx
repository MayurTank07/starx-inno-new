import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import M1 from "../../assets/images/web/Frame 1.png";
import M2 from "../../assets/images/web/Frame 2.png";
import M3 from "../../assets/images/web/Frame 3.png";
import M4 from "../../assets/images/web/Frame 4.png";
import M5 from "../../assets/images/web/Frame 5.png";

export default function AppShowcaseSection() {

  const images = [M1, M2, M3, M4, M5];
  const [order, setOrder] = useState([0,1,2,3,4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift());
        return newOrder;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const positions = [
    { x: -180, scale: 0.85, zIndex: 10 },
    { x: -90, scale: 0.95, zIndex: 20 },
    { x: 0, scale: 1.15, zIndex: 30 },
    { x: 90, scale: 0.95, zIndex: 20 },
    { x: 180, scale: 0.85, zIndex: 10 }
  ];

  return (
    <section className="bg-[#EDEDED] py-20">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center space-y-5 px-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight font-monsterrat">
          <span className="text-orange-500">Next-Gen</span>{" "}
          <span className="text-black">Apps for Brands</span>
        </h2>

        <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
          From structure to aesthetics, we build websites that perform and convert.
          Crafted to attract users, communicate value, and drive growth.
        </p>
      </div>

      {/* Mobile Mockups */}
      <div className="mt-20 relative flex justify-center items-end h-[420px]">

        {order.map((imgIndex, i) => (
          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            alt="app"
            className="absolute w-[340px]"
            animate={positions[i]}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

      </div>

    </section>
  );
}