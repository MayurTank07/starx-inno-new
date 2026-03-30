import React from "react";
import { motion } from "framer-motion";

const row1Images = [
  "/placements/1.jpg",
  "/placements/2.jpg",
  "/placements/3.jpg",
  "/placements/4.jpg",
];

const row2Images = [
  "/placements/5.jpg",
  "/placements/6.jpg",
  "/placements/7.jpg",
  "/placements/8.jpg",
];

export default function CampusPlacement() {
  return (
    <section className="bg-gray-200 py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-monsterrat text-gray-900">
          <span className="text-orange-500">Campus Placement</span> Drives
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl text-base md:text-lg mx-auto">
          From classroom learning to corporate success — our students have secured roles 
          in leading tech firms thanks to their strong MERN stack foundation.
        </p>
      </div>

      {/* Row 1 - Left to Right Continuous */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...row1Images, ...row1Images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="placement"
              loading="lazy"
              className="w-80 h-52 object-cover rounded-2xl shadow-md"
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left Continuous */}
      <div className="overflow-hidden mt-8">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: [-1000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...row2Images, ...row2Images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="placement"
              loading="lazy"
              className="w-80 h-52 object-cover rounded-2xl shadow-md"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}


