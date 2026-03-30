import MainLayout from "../layouts/MainLayout";
import Hero from "../components/MainLanding/Hero"
import Value from "../components/MainLanding/ValueSection.jsx"
import Tech from "../components/MainLanding/TechStackSection.jsx"
import CareerPrograms from "../components/MainLanding/Program.jsx";
import TestimonialsSection from "../components/Landing/Testimonals.jsx";
import Gallery from "../components/Landing/CampusPlacement.jsx"

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Value />
      <Tech />
      <CareerPrograms />
      <TestimonialsSection />
      <Gallery />
    </MainLayout>
  );
}