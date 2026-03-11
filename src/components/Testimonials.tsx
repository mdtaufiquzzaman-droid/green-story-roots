import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Interior Designer",
    text: "Botanica Living transformed how I source plants for my clients. The botanical histories and styling advice are invaluable — it's not just a shop, it's a design resource.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Apartment Resident",
    text: "I used to kill every plant I bought. The detailed care guides that come with each plant have been a game-changer. My monstera is thriving!",
    rating: 5,
  },
  {
    name: "Priya D.",
    role: "Remote Worker",
    text: "My home office went from sterile to serene. The curated selection meant I didn't have to spend hours deciding — every plant was a perfect fit.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            What our community says
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Real stories from plant lovers who found their green companion through Botanica Living.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
