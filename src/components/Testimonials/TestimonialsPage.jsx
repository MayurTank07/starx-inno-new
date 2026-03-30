import React from "react";

const mernReviews = [
  {
    name: "Jitesh Shah",
    role: "Managing Director",
    initials: "JS",
    rating: 5,
    review:
      "StarX Innovations transformed our digital presence completely. Their MERN stack expertise helped us build a scalable platform that handles thousands of users daily.",
  },
  {
    name: "Priya Sharma",
    role: "Software Developer",
    initials: "PS",
    rating: 5,
    review:
      "The training program at StarX is truly world-class. I went from knowing basic JavaScript to building full-stack applications in just a few months.",
  },
  {
    name: "Rahul Verma",
    role: "Full Stack Developer",
    initials: "RV",
    rating: 5,
    review:
      "Outstanding mentorship and hands-on projects. The real-world experience gained at StarX gave me the confidence to crack interviews at top tech companies.",
  },
  {
    name: "Ananya Patel",
    role: "React Developer",
    initials: "AP",
    rating: 5,
    review:
      "The project-based learning approach at StarX is exceptional. Every concept was taught with practical implementation which made learning much more effective.",
  },
  {
    name: "Vikram Singh",
    role: "Backend Engineer",
    initials: "VS",
    rating: 5,
    review:
      "StarX's structured curriculum and expert instructors helped me master Node.js and MongoDB. Got placed within 2 months of completing the course.",
  },
  {
    name: "Sneha Nair",
    role: "MERN Developer",
    initials: "SN",
    rating: 5,
    review:
      "Best investment in my career. The mentors at StarX are industry professionals who prepare you for the real world beyond just coding.",
  },
];

const studentReviews = [
  {
    name: "Rohan Mehta",
    role: "Placed at TCS",
    initials: "RM",
    rating: 5,
    review:
      "Thanks to StarX's placement support, I secured a position at TCS within weeks of graduating. The mock interviews and resume workshops were incredibly helpful.",
  },
  {
    name: "Divya Kumar",
    role: "Software Engineer, Infosys",
    initials: "DK",
    rating: 5,
    review:
      "StarX's hands-on training style is unlike any other institute. I learned to build real applications, not just theory, and that made all the difference in interviews.",
  },
  {
    name: "Arjun Rao",
    role: "Frontend Developer, Wipro",
    initials: "AR",
    rating: 5,
    review:
      "The React.js curriculum at StarX is comprehensive and industry-relevant. I was able to apply everything I learned directly in my first job at Wipro.",
  },
  {
    name: "Pooja Gupta",
    role: "React Developer",
    initials: "PG",
    rating: 5,
    review:
      "From zero coding knowledge to a confident React developer in 6 months — StarX made this possible with their patient mentors and structured learning path.",
  },
  {
    name: "Karthik M",
    role: "Full Stack Developer",
    initials: "KM",
    rating: 5,
    review:
      "The internship program at StarX gave me real client experience before I even graduated. This hands-on exposure was a game changer for my career.",
  },
  {
    name: "Ayesha Khan",
    role: "Web Developer",
    initials: "AK",
    rating: 5,
    review:
      "StarX doesn't just teach coding — they teach you how to think like a developer. The problem-solving mindset they instill stays with you throughout your career.",
  },
];

const digitalReviews = [
  {
    name: "Akash Sharma",
    role: "Marketing Manager",
    initials: "AS",
    rating: 5,
    review:
      "StarX's digital marketing team delivered exceptional results. Our organic traffic increased by 300% within 3 months of working with them.",
  },
  {
    name: "Neha Patel",
    role: "Business Owner",
    initials: "NP",
    rating: 5,
    review:
      "The social media campaigns created by StarX were creative and data-driven. Our brand engagement went through the roof after partnering with them.",
  },
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    initials: "RK",
    rating: 5,
    review:
      "StarX helped us launch our brand from scratch. Their end-to-end digital marketing strategy, from SEO to paid ads, delivered measurable ROI from day one.",
  },
  {
    name: "Priya Nair",
    role: "E-Commerce Owner",
    initials: "PN",
    rating: 5,
    review:
      "Our online store's conversion rate doubled after StarX redesigned our marketing funnel. Their performance marketing expertise is truly exceptional.",
  },
  {
    name: "Suresh Reddy",
    role: "Startup Founder",
    initials: "SR",
    rating: 5,
    review:
      "Working with StarX on our content strategy was transformative. They understood our brand voice perfectly and created campaigns that resonated with our audience.",
  },
  {
    name: "Meena Shah",
    role: "Brand Manager",
    initials: "MS",
    rating: 5,
    review:
      "StarX's integrated approach — combining SEO, content, and social — helped us build a consistent brand identity across all channels.",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-orange-500 text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function DarkCard({ review }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-orange-500/40 hover:bg-white/[0.08] transition-all duration-300 group h-full">
      <StarRating count={review.rating} />
      <p className="text-gray-300 text-sm leading-relaxed flex-grow font-metropolis">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="border-t border-white/10 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
          {review.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm font-monsterrat">
            {review.name}
          </p>
          <p className="text-gray-500 text-xs mt-0.5 font-metropolis">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function LightCard({ review }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 group h-full">
      <StarRating count={review.rating} />
      <p className="text-gray-600 text-sm leading-relaxed flex-grow font-metropolis">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xs flex-shrink-0 group-hover:bg-orange-200 transition-colors">
          {review.initials}
        </div>
        <div>
          <p className="text-gray-900 font-semibold text-sm font-monsterrat">
            {review.name}
          </p>
          <p className="text-gray-500 text-xs mt-0.5 font-metropolis">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, title, highlight, description, dark = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span
        className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${
          dark ? "text-orange-400" : "text-orange-500"
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-bold font-monsterrat leading-tight mb-4 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}{" "}
        <span className="text-orange-500">{highlight}</span>
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed font-metropolis ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="bg-black text-white pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-400 mb-4">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-monsterrat leading-tight mb-6">
            Voices of Trust <br />
            <span className="text-orange-500">From Our Clients</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-metropolis leading-relaxed">
            Real results from real people. See what our clients and students say
            about their experience with StarX Innovations.
          </p>
        </div>
      </section>

      {/* ─── MERN STACK REVIEWS ─── */}
      <section className="bg-[#050505] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Client Reviews"
            title="What Our"
            highlight="MERN Stack Clients Say"
            description="Industry leaders and businesses share their experience working with StarX on web development projects."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mernReviews.map((r, i) => (
              <DarkCard key={i} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDENT SUCCESS ─── */}
      <section className="bg-[#f3f4f6] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Student Success"
            title="Students Who Turned Skills"
            highlight="into Careers"
            description="Our students land jobs at top companies and startups. Here's what they have to say about their journey with StarX."
            dark={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentReviews.map((r, i) => (
              <LightCard key={i} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIGITAL MARKETING REVIEWS ─── */}
      <section className="bg-[#050505] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Digital Marketing"
            title="Brands That Grew With"
            highlight="Our Marketing"
            description="From startups to established brands, see how StarX's digital marketing strategies delivered measurable growth."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalReviews.map((r, i) => (
              <DarkCard key={i} review={r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
