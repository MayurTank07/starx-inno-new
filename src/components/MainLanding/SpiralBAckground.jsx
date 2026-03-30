import React from "react";

export default function SpiralBackground() {
  const count = 50; // Higher density for that fine mesh look

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      <svg
        viewBox="0 0 1000 1000"
        className="absolute w-[150%] h-[150%] -left-[20%] -bottom-[35%]"
      >
        <defs>
          <linearGradient id="spiralGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            {/* Dark base color for the origin point */}
            <stop offset="0%" stopColor="#2e1065" /> 
            {/* The primary orange curve color */}
            <stop offset="40%" stopColor="#ea580c" />
            {/* Fading to golden yellow then transparency */}
            <stop offset="80%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
        </defs>

        {Array.from({ length: count }).map((_, i) => {
          // Subtle rotation increment creates the diamond pattern
          const rotate = i * 3.8; 
          
          // These multipliers create the flat, sweeping fan shape
          const scaleX = 1 + i * 0.045;
          const scaleY = 1 + i * 0.012; // Much flatter than scaleX

          return (
            <ellipse
              key={i}
              cx="-50"  // Origin is off-screen to the left
              cy="1050" // Origin is off-screen to the bottom
              rx={600 * scaleX} 
              ry={200 * scaleY} 
              fill="none"
              stroke="url(#spiralGrad)"
              strokeWidth="0.4" // Hair-thin lines
              strokeOpacity={0.7 - (i * 0.01)}
              transform={`rotate(${rotate} -50 1050)`}
            />
          );
        })}
      </svg>
    </div>
  );
}