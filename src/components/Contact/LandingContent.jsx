import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">

      {/* ================= MAIN ================= */}
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let’s Talk</h1>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden mb-6">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-40 border-0"
              loading="lazy"
            />
          </div>

          {/* Contact Card */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

            <div className="flex items-start gap-3 text-gray-300 text-sm mb-4">
              <MapPin size={18} />
              <p>
                StarX Innovations and IT Solutions, Marathon Maxima, Lal Bahadur
                Shastri Marg, Mulund West, Mumbai, Maharashtra 400080
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-300 text-sm mb-3">
              <Phone size={18} />
              <p>9167422024</p>
            </div>

            <div className="flex items-center gap-3 text-gray-300 text-sm mb-5">
              <Mail size={18} />
              <p>starxinnovations@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">🌐</div>
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">📷</div>
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">in</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#f3f4f6] text-black rounded-3xl p-6 shadow-xl w-full max-w-md mx-auto">

          <h2 className="text-center text-lg font-semibold text-orange-600 mb-1">
            Contact
          </h2>

          <p className="text-center text-gray-500 text-sm mb-4">
            Got Questions or ready to start ? <br /> I'm here with you
          </p>

          {/* Toggle */}
          <div className="flex bg-gray-200 rounded-full p-1 mb-4">
            <button className="flex-1 bg-orange-500 text-white rounded-full py-2 text-sm font-semibold">
              Student
            </button>
            <button className="flex-1 text-gray-600 py-2 text-sm font-semibold">
              Professional
            </button>
          </div>

          <form className="mt-2 space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              placeholder="Phone no."
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="What would you like to discuss"
              rows="3"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-orange-500 transition duration-300"
            >
              Submit
            </button>
          </form>

        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
    </div>
  );
}