import React from "react";
import "../../css/spiral.css";

export default function SpiralBackground() {
  return (
    <div className="spiral-container">
      <svg
        viewBox="0 0 800 800"
        className="spiral-svg"
      >
        <defs>
          {/* Orange → Pink Gradient */}
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a18" />
            <stop offset="100%" stopColor="#ff2d95" />
          </linearGradient>
        </defs>

        <g className="rotate">
          {[...Array(60)].map((_, i) => (
            <circle
              key={i}
              cx="400"
              cy="400"
              r={80 + i * 8}
              fill="none"
              stroke="url(#spiralGradient)"
              strokeWidth="0.8"
              opacity="0.6"
            />
          ))}

          {[...Array(80)].map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="400"
              x2={400 + 600 * Math.cos((i * Math.PI) / 40)}
              y2={400 + 600 * Math.sin((i * Math.PI) / 40)}
              stroke="url(#spiralGradient)"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}