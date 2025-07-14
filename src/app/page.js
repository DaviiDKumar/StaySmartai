import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";

import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Home | Stay Smart AI",
  description: "Welcome to Stay Smart AI — your hub for AI insights and blogs.",
};

export default function Home() {
  return (
    <main>
      {/* Hero section with full-screen background image */}
     
        <Navbar />
        <HeroSection />
     

      {/* White/light background starts here */}
   
      
      
        <CategoriesSection />
      
     
    </main>
  );
}
