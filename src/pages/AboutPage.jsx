import MainLayout from "../layouts/MainLayout";
import Hero from "../components/AboutUs/HeroSection.jsx";
import WhatWeDo from "../components/AboutUs/WhatWeDo.jsx";
import Choose from "../components/AboutUs/WhyChoose.jsx"
import Founder from "../components/AboutUs/FoundersNote.jsx"
import ClosingStatement from "../components/AboutUs/Closing.jsx";

export default function AboutPage() {
  return (
    <MainLayout>
      <Hero />
      <WhatWeDo />
      <Choose />
      <Founder />
      <ClosingStatement />
    </MainLayout>
  );
}