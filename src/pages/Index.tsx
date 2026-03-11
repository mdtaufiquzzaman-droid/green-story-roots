import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import PlantCollection from "@/components/PlantCollection";
import Testimonials from "@/components/Testimonials";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import ServicesTeaser from "@/components/ServicesTeaser";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProps />
        <PlantCollection />
        <Testimonials />
        <StorySection />
        <Gallery />
        <ServicesTeaser />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
