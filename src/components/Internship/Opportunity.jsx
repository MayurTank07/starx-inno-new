import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobsData = [
  {
    title: "Looking for a creative UIX Designer to build your app",
    tags: [
      { name: "UIUX", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "User Interface", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "User Research", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "Product Design", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Looking for passionate UI/UX designers with a grasp of user-centered design. Proficiency in Figma, strong layout, color, and typography skills are a plus. Must be eager to learn, iterate, and thrive in a fast-paced startup.",
    salary: "Unpaid",
  },
  {
    title: "Looking for a skilled Full Stack Developer to build scalable products",
    tags: [
      { name: "Frontend", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "Backend", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "System Design", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "APIs", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Looking for passionate full stack developers with a solid understanding of frontend and backend technologies. Comfortable with modern frameworks, databases, and APIs. Must be eager to learn, iterate, and grow in a fast-paced startup.",
    salary: "15000 Rs/month",
  },
  {
    title: "Looking for a creative Frontend Developer to craft engaging interfaces",
    tags: [
      { name: "React", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "Responsive Design", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "UI", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "Performance", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Seeking frontend developers with strong fundamentals in HTML, CSS, and JavaScript. Experience with modern frameworks and an eye for UI details is a plus. Should be eager to learn and build high-quality user experiences.",
    salary: "Unpaid",
  },
  {
    title: "Looking for a Backend Developer to power reliable systems",
    tags: [
      { name: "APIs", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "Databases", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "Server Architecture", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "Logic", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Looking for backend developers who understand server-side logic, databases, and API development. Familiarity with scalability and performance is a plus. Must be ready to learn, iterate, and work in a startup environment.",
    salary: "10000 Rs/month",
  },
  {
    title: "Looking for a Digital Marketer to grow our online presence",
    tags: [
      { name: "SEO", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "Social Media", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "Analytics", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "Campaigns", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Seeking digital marketers with a basic understanding of SEO, content, and social media strategies. Creative thinking and data-driven decision-making are a plus. Ideal for someone eager to learn and grow in a fast-paced startup.",
    salary: "Unpaid",
  },
  {
    title: "Looking for a creative Content Creator to tell our story",
    tags: [
      { name: "Content", bg: "bg-emerald-100", text: "text-emerald-600" },
      { name: "Social Media", bg: "bg-pink-100", text: "text-pink-600" },
      { name: "Storytelling", bg: "bg-orange-100", text: "text-orange-600" },
      { name: "Branding", bg: "bg-blue-100", text: "text-blue-600" },
    ],
    desc: "Seeking digital marketers with a basic understanding of SEO, content, and social media strategies. Creative thinking and data-driven decision-making are a plus. Ideal for someone eager to learn and grow in a fast-paced startup.",
    salary: "8000 Rs/month",
  },
];

export default function JobsSection() {
  const [activeTab, setActiveTab] = useState("Internships");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Internships") {
      navigate("/internships");
    } else {
      navigate("/job");
    }
  };

  return (
    <section className="bg-[#f3f4f6] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation Row */}
        <div className="flex flex-col items-center mb-12">
          {/* Main Tabs Container */}
          <div className="flex bg-[#e5e7eb] border border-gray-200 rounded-full p-1 mb-8">
            <button
              onClick={() => handleTabClick("Internships")}
              className={`px-10 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "Internships" 
                  ? "bg-black text-white shadow-lg" 
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => handleTabClick("Jobs")}
              className={`px-10 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "Jobs" 
                  ? "bg-black text-white shadow-lg" 
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Jobs
            </button>
          </div>

          {/* Filter Dropdown */}
          <div className="w-full flex justify-start">
            <div className="relative inline-block">
              <select className="appearance-none border border-gray-300 rounded-2xl pl-5 pr-12 py-2.5 text-sm bg-white font-bold text-gray-700 focus:outline-none cursor-pointer shadow-sm">
                <option>All Locations</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsData.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <h3 className="text-[1.35rem] font-bold text-gray-900 leading-[1.3] mb-6">
                {job.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-[0.7rem] font-bold px-4 py-1.5 rounded-full ${tag.bg} ${tag.text}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-[0.85rem] leading-relaxed mb-8 flex-grow">
                {job.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-transparent">
                <span className="text-sm font-bold text-gray-800">
                  {job.salary}
                </span>

                <button className="w-11 h-11 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 active:scale-95 transition-all">
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}