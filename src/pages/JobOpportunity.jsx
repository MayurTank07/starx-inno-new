import MainLayout from "../layouts/MainLayout";
import LandingContent from "../components/Job/LandingContent.jsx";
import OpportunitySection from "../components/Job/Opportunity.jsx";

export default function JobOpportunityPage() {
  return (
    <MainLayout>
      <LandingContent />
      <OpportunitySection />
    </MainLayout>
  );
}
