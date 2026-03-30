import React, { useEffect, useState } from "react";
import ContactFormCard from "../Common/ContactFormCard";

export default function LandingContent() {
  const fullText = `Scalable App
Development for
Modern Businesses`;

  const [text, setText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typing);
        setIsTypingDone(true);
      }
    }, 40);

    return () => clearInterval(typing);
  }, []);

  return (
    <>
      {/* Left Text Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-monsterrat font-bold leading-[1.1] tracking-tight text-white whitespace-pre-line">
          {text.split(/(App|Development)/g).map((part, i) =>
            part === "App" || part === "Development" ? (
              <span key={i} className="text-orange-500">
                {part}
              </span>
            ) : (
              part
            )
          )}

          {!isTypingDone && (
            <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-blink"></span>
          )}
        </h1>

        <p className="mt-6 text-gray-400 text-lg font-metropolis max-w-lg leading-relaxed">
          We build high-performance mobile apps that deliver<br />
          seamless user experiences and drive growth.
        </p>

        <button className="mt-8 px-8 py-3 border border-[#ff7a00] rounded-lg text-[#ff7a00] font-medium hover:bg-[#ff7a00] hover:text-black transition-all duration-300 font-monsterrat">
          Get Brochure
        </button>
      </div>

      {/* Right Form Card */}
      <ContactFormCard formTitle={`Let's talk about your\nApp project`} />
    </>
  );
}