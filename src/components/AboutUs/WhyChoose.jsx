import React from "react";

import img1 from "../../assets/images/About/img1.png"; // illustration
import img2 from "../../assets/images/About/img2.png"; // laptop
import img3 from "../../assets/images/About/img3.png"; // meeting room
import img4 from "../../assets/images/About/img4.png"; // office logo

export default function WhyChoose() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 relative overflow-hidden">
      
      {/* Background Gradient Shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 opacity-40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-monsterrat">
            Why Choose{" "}
            <span className="text-orange-500">StarX Innovations</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Execution-driven solutions that deliver measurable growth and real-world impact.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative">
            
            {/* Decorative line */}
            <div className="absolute -top-4 left-4 w-10 h-10 border-l-4 border-t-4 border-black rounded-tl-lg"></div>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>Tech and marketing expertise under one roof</li>
              <li>Hands-on, real-world execution</li>
              <li>Data-driven decision making</li>
              <li>Startup speed with professional discipline</li>
              <li>ROI-focused approach for growth and careers</li>
            </ul>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            
            <img src={img1} alt="illustration" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
            <img src={img2} alt="laptop" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
            <img src={img3} alt="meeting room" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
            <img src={img4} alt="office" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}