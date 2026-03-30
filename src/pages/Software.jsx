import React from "react";
import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../components/Common/LandingLayout.jsx";
import LandingContent from "../components/Software/LandingContent.jsx";
import SkillsSection from "../components/Software/SkillSection.jsx";
import ProcessTime from "../components/Web/ProcessTime.jsx";
import ToolsSection from "../components/Landing/ToolSection.jsx";
import Appshowsection from "../components/App/appshowsection.jsx";

export default function SoftwarePage() {
  return (
    <MainLayout>
      <LandingLayout>
        <LandingContent />
      </LandingLayout>
      <SkillsSection />
      <ToolsSection />
      <ProcessTime />
      <Appshowsection />
    </MainLayout>
  );
}
