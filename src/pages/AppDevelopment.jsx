import React from "react";
import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../components/Common/LandingLayout.jsx";
import LandingContent from "../components/App/LandingContent.jsx";
import SkillsSection from "../components/App/SkillSection.jsx";
import SuccessFramework from "../components/Landing/SuccessFramework.jsx";
import ToolsSection from "../components/App/ToolSection.jsx";
import AppShowcaseSection from "../components/App/appshowsection.jsx";

export default function AppDevelopmentPage() {
  return (
    <MainLayout>
      <LandingLayout>
        <LandingContent />
      </LandingLayout>
      <SkillsSection />
      <SuccessFramework />
      <ToolsSection />
      <AppShowcaseSection />
    </MainLayout>
  );
}
