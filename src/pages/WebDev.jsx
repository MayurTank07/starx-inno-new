import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../components/Common/LandingLayout.jsx";
import LandingContent from "../components/Web/LandingContent.jsx";
import SkillsSection from "../components/Web/SkillSection.jsx";
import ProcessTime from "../components/Web/ProcessTime.jsx";
import ToolsSection from "../components/Landing/ToolSection.jsx";
import AppShowcaseSection from "../components/Web/appshowsection.jsx";

export default function WebDevelopmentPage() {
  return (
    <MainLayout>
      <LandingLayout>
        <LandingContent />
      </LandingLayout>
      <SkillsSection />
      <ProcessTime />
      <ToolsSection />
      <AppShowcaseSection />
    </MainLayout>
  );
}
