import { motion } from "framer-motion";
import heroImage from "@/assets/hero-plants.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Curated indoor plants collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4"
          >
            Discover · Learn · Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl font-display font-semibold text-foreground leading-[1.1] mb-6"
          >
            Every plant
            <br />
                       <span className="italic text-primary">has a history</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Curated plants with rich botanical history and care guidance —
            designed to transform your living spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#collection"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium hover:bg-botanical-light transition-colors text-sm tracking-wide"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-md font-medium hover:bg-foreground/5 transition-colors text-sm tracking-wide"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
