export default function CareersHero() {
  return (
    <div className="bg-black text-white relative overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-10 lg:px-16 pt-28 pb-20">

        {/* Glow Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] 
        bg-gradient-to-tr from-orange-500/20 to-transparent 
        rounded-full blur-3xl opacity-60"></div>

        {/* Circle Ring */}
        <div className="absolute top-10 right-10 w-[280px] h-[280px] 
        border border-orange-400/30 rounded-full opacity-40"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-monsterrat leading-tight">
            Full-Time{" "}
            <span className="text-orange-500 font-monsterrat">Job</span> <br />
            <span className="text-orange-500 font-monsterrat">Opportunities</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl text-lg font-metropolis leading-relaxed">
            We're hiring skilled professionals to work on real-world projects.
            Collaborate with experts, solve meaningful problems, and grow your career.
          </p>

          {/* Badge */}
          <div className="mt-8 inline-block border border-orange-500/50 
          text-orange-400 px-5 py-1 rounded-full text-sm bg-white/5 backdrop-blur-sm">
            Updated on December 17, 2025
          </div>

        </div>

        {/* Bottom Divider */}

      </section>

    </div>
  );
}