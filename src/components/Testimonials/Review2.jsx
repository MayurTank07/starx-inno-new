import React from "react";
import Client from "../../assets/images/testimonial/Review.png";

export default function Home() {

  const title = "Brands That Grew with Our Marketing";
  const highlightWords = ["Our", "Marketing"];
  const subtitle = "Digital Marketing Reviews";

  // Highlight logic (same)
  const renderTitle = () => {
    let words = title.split(" ");
    return words.map((word, i) => {
      const isHighlight =
        highlightWords.includes(
          word + (i < words.length - 1 ? " " + words[i + 1] : "")
        ) || highlightWords.includes(word);

      return (
        <span
          key={i}
          className={isHighlight ? "text-[#FF7A00]" : "text-black"}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-24 gap-10 relative py-16">

      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-semibold">
          {renderTitle()}
        </h2>

        <p className="mt-6 text-gray-500 text-lg font-medium tracking-wide">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button className="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            {"<"}
          </button>

          <button className="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            {">"}
          </button>
        </div>
      </div>

      {/* Right Card (UNCHANGED) */}
      <div className="relative pt-10">
        <div className="bg-[#FFFFFF] text-black rounded-[40px] p-6 md:p-8 w-full lg:w-[680px] min-h-[420px] flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-2xl relative z-10">
          
          {/* Image */}
          <div className="w-[280px] h-[380px] rounded-[30px] overflow-hidden flex-shrink-0 shadow-lg flex items-center justify-center">
            <img
              src={Client}
              alt="Client"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center pr-4">
            
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-[#FF7A00]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>

            <p className="text-[17px] text-gray-700 leading-[1.6] font-medium italic">
              "MotionElements is the best online site to download AE templates for free. 
              Choose from free templates for After Effects, free videos and free music."
            </p>

            <div className="mt-8 border-l-4 border-[#FF7A00] pl-4">
              <h4 className="font-bold text-xl text-gray-900">Lihov Sergey</h4>
              <p className="text-sm text-gray-500 font-semibold tracking-wide">
                UI/UX Designer
              </p>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute bottom-4 right-4 opacity-20 w-32 h-32">
            <div className="w-full h-full border border-orange-500 rounded-full scale-150 blur-sm"></div>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-600/20 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
}