import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";




export const metadata = {
  title: "Home | Stay Smart AI",
  description: "Welcome to Stay Smart AI — your hub for AI insights and blogs.",
};

export default function Home() {
  return (
    <main style={{ paddingTop: "0px", marginTop: "0px" }}>
      <HeroSection />
      <CategoriesSection />
    </main>

  );
}
