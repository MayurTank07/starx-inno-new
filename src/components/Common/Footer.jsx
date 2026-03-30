import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* ================= LEFT SECTION: BRANDING ================= */}
        <div className="md:col-span-5">
          <div className="flex items-start gap-4 mb-6">
            {/* Large Styled 'S' */}
            <span className="text-6xl font-light leading-none">S</span>
            <div>
              <h2 className="text-2xl font-medium leading-tight">StarX</h2>
              <p className="text-xl font-light">Innovations & IT Solutions</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Scroll down the page for more recommendations. Below you will find a 
            variety of products from all categories on Steam that may be of 
            interest to you.
          </p>
        </div>

        {/* ================= MIDDLE SECTION: CATEGORY ================= */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Category</h3>
          <ul className="space-y-4 text-gray-300 text-base">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Solutions</li>
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Resources</li>
            <li className="hover:text-white cursor-pointer transition">Testimonials</li>
          </ul>
        </div>

        {/* ================= RIGHT SECTION: CONTACT ================= */}
        <div className="md:col-span-5">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-5 text-gray-300 text-sm">
            <div className="flex items-start gap-4">
              <FiMapPin className="text-lg mt-1 flex-shrink-0" />
              <p className="leading-relaxed">
                StarX Innovations and IT Solutions, Marathon Maxima, Lal Bahadur Shastri Marg, 
                near Sonapur Signal, Moti Nagar, Mulund Colony, Mulund West, 
                Mumbai, Maharashtra 400080, IN
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-lg flex-shrink-0" />
              <p>9167422024</p>
            </div>

            <div className="flex items-center gap-4">
              <FiMail className="text-lg flex-shrink-0" />
              <p>starxinnovations@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION: SOCIALS ================= */}
      {/* In the image, icons appear to be bottom-aligned to the right */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-end gap-4">
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-black transition">
          <FaFacebookF size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-black transition">
          <FaInstagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-black transition">
          <FaLinkedinIn size={18} />
        </a>
      </div>
    </footer>
  );
}