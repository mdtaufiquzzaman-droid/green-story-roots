import { motion } from "framer-motion";
import { Home, Building2, Wrench, Monitor } from "lucide-react";

const services = [
  { icon: Home, title: "Home Plant Styling", description: "Personalized consultations to design your indoor spaces with plants." },
  { icon: Building2, title: "Office Plant Design", description: "Create productive, beautiful workspaces with curated greenery." },
  { icon: Wrench, title: "Installation & Care", description: "Professional setup and ongoing maintenance packages." },
  { icon: Monitor, title: "Virtual Consultation", description: "Expert botanical advice from the comfort of your home." },
];

const ServicesTeaser = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="inline-block bg-warm/10 text-warm text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Botanical Styling Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Expert plant design services to transform your home and office into living, breathing sanctuaries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
