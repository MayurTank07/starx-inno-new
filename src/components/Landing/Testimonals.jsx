import React from "react";

const testimonials = [
  {
    name: "Lihoy Sergey",
    role: "UI/UX designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your path
    text: "MotionElements is the best online site to download AE templates for free. Choose from free templates for After Effects, free videos and free music.",
  },
  {
    name: "Lihoy Sergey",
    role: "UI/UX designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "MotionElements is the best online site to download AE templates for free. Choose from free templates for After Effects, free videos and free music.",
  },
  {
    name: "Lihoy Sergey",
    role: "UI/UX designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "MotionElements is the best online site to download AE templates for free. Choose from free templates for After Effects, free videos and free music.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-6 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-monsterrat font-bold text-[#1a1a1a]">
          Hear from <span className="text-orange-500">Our Graduates</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-[40px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-8 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-medium">
              {item.text}
            </p>

            {/* Name + Role with Orange Bar */}
            <div className="border-l-[3px] border-orange-500 pl-5 mb-6">
              <h4 className="font-bold text-xl text-gray-900 leading-tight">
                {item.name}
              </h4>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                {item.role}
              </span>
            </div>

            {/* Decorative Swirl - Recreating the visual from the snap */}
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 border-[1px] border-orange-200 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle at center, transparent 30%, #fff7ed 100%)",
                maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
              }}
            >
              <div className="absolute inset-4 border-[1px] border-orange-100 rounded-full"></div>
              <div className="absolute inset-8 border-[1px] border-orange-50/50 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-20">
        <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest hover:bg-orange-600 transition-colors duration-300 shadow-lg">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
