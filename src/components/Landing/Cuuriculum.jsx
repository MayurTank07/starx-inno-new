import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculumData = [
  { week: "Week 1", title: "React JS Fundamentals" },
  { week: "Week 2", title: "Advanced React Concepts" },
  { week: "Week 3", title: "UI/UX & State Management" },
  { week: "Week 4", title: "Frontend Mini-Project" },
  { week: "Week 5", title: "Introduction to Node.js & Express.js" },
  { week: "Week 6", title: "Database Integration with MongoDB" },
  { week: "Week 7", title: "Advanced Backend Features" },
  { week: "Week 8", title: "Backend Mini-Project" },
  { week: "Week 9", title: "Full-Stack Integration" },
  { week: "Week 10", title: "Cloud Deployment & DevOps" },
  { week: "Week 11", title: "Freelancing & Client Work" },
  { week: "Week 12", title: "Capstone Project" },
];

export default function CurriculumSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black font-monsterrat">
          <span className="text-orange-500">MERN Stack</span> Curriculum
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-5xl mx-auto space-y-5">
        {curriculumData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition"
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-8 py-6 text-left"
            >
              <div className="text-base md:text-lg">
                <span className="text-gray-700 font-medium">
                  {item.week} :
                </span>{" "}
                <span className="text-orange-500 font-semibold">
                  {item.title}
                </span>
              </div>

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-black transition-all duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={18} className="text-white" />
              </div>
            </button>

            {/* Content */}
            <div
              className={`px-8 transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-52 py-5 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="text-gray-600 text-sm md:text-base">
                Detailed topics, practical exercises, and hands-on projects will
                be covered this week.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}