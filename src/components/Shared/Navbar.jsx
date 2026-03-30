import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const solutionsLinks = [
  { label: "Website Development", to: "/web" },
  { label: "Software Development", to: "/software" },
  { label: "App Development", to: "/app" },
  { label: "MERN Training", to: "/landing" },
  { label: "Digital Marketing", to: "/digital" },
  { label: "Internships", to: "/internships" },
];

const productsLinks = [
  { label: "Career Programs", to: "/landing" },
  { label: "Job Opportunities", to: "/job" },
  { label: "Testimonials", to: "/testimonial" },
];

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const solutionsRef = useRef(null);
  const productsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-xl border-b border-white/10"
          : "bg-black/40 backdrop-blur-lg border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-white/20 text-white text-lg font-semibold hover:border-orange-500 transition-colors duration-300"
        >
          S
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-white">

          <li>
            <Link
              to="/"
              className={`transition-colors duration-200 hover:text-orange-400 ${
                isActive("/") ? "text-orange-500" : ""
              }`}
            >
              Home
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative" ref={solutionsRef}>
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setProductsOpen(false);
              }}
              className="flex items-center gap-1 transition-colors duration-200 hover:text-orange-400"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2">
                  <p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                    Our Services
                  </p>
                  {solutionsLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] transition-all duration-150 ${
                        isActive(item.to)
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-gray-300 hover:bg-white/10 hover:text-orange-400"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Products Dropdown */}
          <li className="relative" ref={productsRef}>
            <button
              onClick={() => {
                setProductsOpen(!productsOpen);
                setSolutionsOpen(false);
              }}
              className="flex items-center gap-1 transition-colors duration-200 hover:text-orange-400"
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2">
                  <p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                    Explore
                  </p>
                  {productsLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] transition-all duration-150 ${
                        isActive(item.to)
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-gray-300 hover:bg-white/10 hover:text-orange-400"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/testimonial"
              className={`transition-colors duration-200 hover:text-orange-400 ${
                isActive("/testimonial") ? "text-orange-500" : ""
              }`}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`transition-colors duration-200 hover:text-orange-400 ${
                isActive("/about") ? "text-orange-500" : ""
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="px-5 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold text-[13px]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          <Link
            to="/"
            className={`block px-4 py-2.5 rounded-xl text-sm transition ${
              isActive("/") ? "text-orange-500 bg-orange-500/10" : "text-white hover:bg-white/10 hover:text-orange-400"
            }`}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-white hover:bg-white/10 transition"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSolutionsOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                {solutionsLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-xl text-sm text-gray-400 hover:bg-white/10 hover:text-orange-400 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-white hover:bg-white/10 transition"
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                {productsLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-xl text-sm text-gray-400 hover:bg-white/10 hover:text-orange-400 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/testimonial"
            className={`block px-4 py-2.5 rounded-xl text-sm transition ${
              isActive("/testimonial") ? "text-orange-500 bg-orange-500/10" : "text-white hover:bg-white/10 hover:text-orange-400"
            }`}
          >
            Testimonials
          </Link>

          <Link
            to="/about"
            className={`block px-4 py-2.5 rounded-xl text-sm transition ${
              isActive("/about") ? "text-orange-500 bg-orange-500/10" : "text-white hover:bg-white/10 hover:text-orange-400"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block px-4 py-2.5 rounded-xl text-sm text-orange-500 border border-orange-500/40 hover:bg-orange-500 hover:text-black transition text-center mt-2 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
