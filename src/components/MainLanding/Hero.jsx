import React, { useEffect, useState } from "react";
import "../../css/layout.css";

export default function Hero() {
  const words = ["Application", "Website", "Software", "Career Opportunity"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(80);
  const [showCursor, setShowCursor] = useState(true);
  const [activeTab, setActiveTab] = useState("Professional");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = wordIndex % words.length;
    let fullText = words[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col pt-16">

      {/* Orange Ellipse Effects — clean minimal background */}
      <div className="ellipse ellipse-bottom-left" />
      <div className="ellipse ellipse-top-right" style={{ animationDirection: "reverse" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-16 py-12 gap-8 mt-5">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          
          <h1 className="text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-tight">
            Looking to<br />
            create your<br />
            <span className="text-[#ff7a00]">
              {text}
              {showCursor && <span className="inline-block w-[3px] h-[1em] bg-[#ff7a00] ml-1">|</span>}
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-lg leading-relaxed">
            StarX Innovations & IT Solutions empowers brands and students
            with smart IT solutions and skills.
          </p>

          <button className="px-8 py-3 border border-[#ff7a00] rounded-lg text-[#ff7a00] font-medium hover:bg-[#ff7a00] hover:text-black transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Contact Card */}
        <div className="bg-[#f3f4f6] text-black rounded-[32px] p-10 w-full max-w-[440px] shadow-2xl">
          <h2 className="text-center text-3xl font-bold text-[#ff7a00]">
            Contact
          </h2>
          <p className="text-center text-gray-500 mt-2 text-sm leading-tight">
            Got Questions or ready to start? <br />
            I’m here with you
          </p>

          <div className="flex bg-gray-200/50 p-1 rounded-xl mt-8">
            <button
              onClick={() => setActiveTab("Professional")}
              className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "Professional"
                  ? "bg-[#ff7a00] text-white shadow-sm"
                  : "text-gray-400"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab("Student")}
              className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "Student"
                  ? "bg-[#ff7a00] text-white shadow-sm"
                  : "text-gray-400"
              }`}
            >
              Student
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name*" className="w-1/2 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="text" placeholder="Last Name*" className="w-1/2 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <input type="email" placeholder="Email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="tel" placeholder="Phone no." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="text" placeholder="Query Type" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
            <textarea placeholder="Message" rows="3" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" />
            
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mt-2 hover:bg-gray-800 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}