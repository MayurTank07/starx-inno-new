import React from "react";
import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../components/Common/LandingLayout.jsx";
import LandingContent from "../components/Common/LandingContent.jsx";
import SkillsSection from "../components/Landing/SkillSection.jsx";
import CurriculumSection from "../components/Landing/Cuuriculum.jsx";
import SuccessFramework from "../components/Landing/SuccessFramework.jsx";
import ToolsSection from "../components/Landing/ToolSection.jsx";
import TestimonialsSection from "../components/Landing/Testimonals.jsx";
import CampusPlacement from "../components/Landing/CampusPlacement.jsx";

export default function LandingPage() {
  return (
    <MainLayout>
      <LandingLayout>
        <LandingContent />
      </LandingLayout>
      <SkillsSection />
      <CurriculumSection />
      <SuccessFramework />
      <ToolsSection />
      <TestimonialsSection />
      <CampusPlacement />
    </MainLayout>
  );
}
