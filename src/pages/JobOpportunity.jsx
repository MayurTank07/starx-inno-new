import MainLayout from "../layouts/MainLayout";
import LandingContent from "../components/Job/LandingContent.jsx";
import OpportunitySection from "../components/Job/opportunity.jsx";

export default function JobOpportunityPage() {
  return (
    <MainLayout>
      <LandingContent />
      <OpportunitySection />
    </MainLayout>
  );
}
