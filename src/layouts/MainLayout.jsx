import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Common/Footer";

const pageTitles = {
  "/": "StarX Innovations — IT Solutions & Career Programs",
  "/landing": "MERN Stack Training — StarX Innovations",
  "/about": "About Us — StarX Innovations",
  "/app": "App Development — StarX Innovations",
  "/web": "Website Development — StarX Innovations",
  "/software": "Software Development — StarX Innovations",
  "/digital": "Digital Marketing — StarX Innovations",
  "/job": "Job Opportunities — StarX Innovations",
  "/internships": "Internships — StarX Innovations",
  "/testimonial": "Testimonials — StarX Innovations",
  "/contact": "Contact Us — StarX Innovations",
};

export default function MainLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "StarX Innovations";
    document.title = title;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
