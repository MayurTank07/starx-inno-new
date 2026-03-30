import React from "react";
import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../components/Common/LandingLayout.jsx";
import LandingContent from "../components/DigitalMarketing/LandingContent.jsx";
import ServiceSection from "../components/DigitalMarketing/ServiceSection.jsx";
import SkillsSection from "../components/App/SkillSection.jsx";
import SuccessFramework from "../components/Landing/SuccessFramework.jsx";
import ToolsSection from "../components/Landing/ToolSection.jsx";
import AppShowcaseSection from "../components/App/appshowsection.jsx";

export default function DigitalMarketingPage() {
  return (
    <MainLayout>
      <LandingLayout>
        <LandingContent />
      </LandingLayout>
      <ServiceSection />
      <SkillsSection />
      <SuccessFramework />
      <ToolsSection />
      <AppShowcaseSection />
    </MainLayout>
  );
}