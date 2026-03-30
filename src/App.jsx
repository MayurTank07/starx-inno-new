import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AppDevelopment from "./pages/AppDevelopment";
import WebDevelopmentPage from "./pages/WebDev";
import JobOpportunity from "./pages/JobOpportunity";
import DigitalMarketingPage from "./pages/DigitalMarketing";
import ContactUs from "./pages/ContactUs";
import Software from "./pages/Software";
import Internship from "./pages/Internship";
import Testimonial from "./pages/Testimonial";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/web" element={<WebDevelopmentPage />} />
        <Route path="/job" element={<JobOpportunity />} />
        <Route path="/digital" element={<DigitalMarketingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/software" element={<Software />} />
        <Route path="/internships" element={<Internship />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
