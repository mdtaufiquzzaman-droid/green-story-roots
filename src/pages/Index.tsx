import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import PlantCollection from "@/components/PlantCollection";
import StorySection from "@/components/StorySection";
import ServicesTeaser from "@/components/ServicesTeaser";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProps />
        <PlantCollection />
        <StorySection />
        <ServicesTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
