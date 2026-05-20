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
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Botanica Living — Premium Plants, Gardening Guides & Plant Styling"
        description="Shop curated indoor plants and learn from our pillar guides on plant care, indoor gardening, and styling. Bring nature home with confidence."
        path="/"
        keywords={[
          "indoor plants",
          "houseplants",
          "plant care",
          "indoor gardening",
          "plant styling",
          "home gardening",
          "urban gardening",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Botanica Living",
          url: "https://botanicaliving.xyz",
          description:
            "Curated indoor plants and expert gardening guides for modern homes.",
        }}
      />
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
