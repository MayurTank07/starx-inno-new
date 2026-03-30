import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* 404 Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500 mb-4">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="text-7xl md:text-9xl font-bold font-monsterrat text-white/10 select-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold font-monsterrat mt-2 -mt-4 relative z-10">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            to="/"
            className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

      </section>
    </MainLayout>
  );
}
