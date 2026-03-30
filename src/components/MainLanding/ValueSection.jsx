import React from "react";
import Value1 from "../../assets/images/MainLanding/Value.png";
import Value2 from "../../assets/images/MainLanding/Value.png";
import Value3 from "../../assets/images/MainLanding/Value.png";

export default function ValueSection() {

  const cards = [
    {
      title: "Learn",
      text: "Build strong fundamentals with practical, hands-on training designed for real industry needs. Every lesson prepares you to think, solve, and create like a professional.",
      image: Value1,
    },
    {
      title: "Build",
      text: "Build strong fundamentals with practical, hands-on training designed for real industry needs. Every lesson prepares you to think, solve, and create like a professional.",
      image: Value2,
    },
    {
      title: "Launch",
      text: "Enter the tech world with confidence backed by guidance, internships, and support. Turn your skills into opportunities and start your career the right way.",
      image: Value3,
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black font-monsterrat">
          The <span className="text-orange-500">Value</span> You Will Get
        </h2>

        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
          From classrooms to real client projects, our interns experience what it truly
          means to innovate in the tech world.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-2xl p-8 flex gap-4 min-h-[320px]
              transition-all duration-500 ease-in-out transform
              bg-white text-black border border-gray-100 hover:bg-black hover:text-white hover:shadow-xl hover:scale-105"
            >

              {/* LEFT CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition font-monsterrat">
                    {card.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-gray-600 
                  group-hover:text-gray-300 transition-all duration-300">
                    {card.text}
                  </p>
                </div>

                <button className="mt-8 flex items-center gap-2 text-[15px] font-semibold">
                  Hover here
                  <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full 
                  group-hover:bg-white group-hover:text-black transition">
                    →
                  </span>
                </button>
              </div>

              {/* IMAGE (ONLY ON HOVER) */}
              <div
                className="transition-all duration-500 overflow-hidden w-0 opacity-0
                group-hover:w-[140px] group-hover:opacity-100"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-full object-cover rounded-xl"
                />
              </div>

              {/* Decorative Circles */}
              <div className="absolute bottom-[-20px] left-[-10px] flex opacity-0 
              group-hover:opacity-20 transition">
                <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-500 rounded-full -ml-8"></div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}