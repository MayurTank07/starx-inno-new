import React from "react";
import "../../css/layout.css";

export default function LandingLayout({ children }) {
  return (
    <div className="landing-container">
      {/* Background Ellipses */}
      <div className="ellipse ellipse-bottom-left"></div>
      <div className="ellipse ellipse-top-right"></div>

      {/* Main Grid Layout */}
      <div className="landing-grid">{children}</div>
    </div>
  );
}
