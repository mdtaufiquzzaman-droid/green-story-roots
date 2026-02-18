import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 leading-tight">
              Connecting people
              <br />
              with plants in a
              <br />
              <span className="italic">deeper way</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-primary-foreground/80 leading-relaxed">
              We believe every plant has a story — a history rooted in culture, geography, and design. Botanica Living was created to share those stories with you.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Our platform allows you to discover carefully selected indoor plants, learn about their origins and background, understand detailed care instructions, and purchase with confidence.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              We combine education, design, and commerce into one seamless experience — because the best indoor spaces are built with intention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
