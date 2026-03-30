import MainLayout from "../layouts/MainLayout";
import LandingContent from "../components/Internship/LandingContent.jsx";
import OpportunitySection from "../components/Internship/Opportunity.jsx";

export default function InternshipPage() {
  return (
    <MainLayout>
      <LandingContent />
      <OpportunitySection />
    </MainLayout>
  );
}