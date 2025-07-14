import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import Navbar from "@/components/Navbar";
import AboutAISection from "@/components/AboutAISection";

export const metadata = {
  title: "Home | Stay Smart AI",
  description: "Welcome to Stay Smart AI — your hub for AI insights and blogs.",
};

export default function Home() {
  return (
    <main>
      {/* Hero section with full-screen background image */}
      <div className="hero-wrapper">
        <Navbar />
        <HeroSection />
      </div>

      {/* White/light background starts here */}
      <section className="section">
      
      
        <CategoriesSection />
         <AboutAISection /> 
      </section>
    </main>
  );
}
