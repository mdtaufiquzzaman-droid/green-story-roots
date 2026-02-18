import { motion } from "framer-motion";
import { BookOpen, Palette, Heart, Sprout } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Botanical Stories",
    description: "Every plant comes with its cultural history, origin, and the story behind its journey to your home.",
  },
  {
    icon: Sprout,
    title: "Expert Care Guides",
    description: "Detailed, personalized care instructions so your plants thrive in any environment.",
  },
  {
    icon: Palette,
    title: "Design Guidance",
    description: "Styling advice to help you create elegant, cohesive indoor plant arrangements.",
  },
  {
    icon: Heart,
    title: "Curated Selection",
    description: "Carefully chosen plants — no overwhelming choice, just meaningful, beautiful greenery.",
  },
];

const ValueProps = () => {
  return (
    <section id="discover" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            Why Botanica
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            More than a plant shop
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide knowledge, design guidance, and an emotional connection to every plant you bring home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
