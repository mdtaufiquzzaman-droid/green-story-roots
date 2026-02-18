import { motion } from "framer-motion";
import plantMonstera from "@/assets/plant-monstera.jpg";
import plantSnake from "@/assets/plant-snake.jpg";
import plantFiddle from "@/assets/plant-fiddle.jpg";

const plants = [
  {
    name: "Monstera Deliciosa",
    origin: "Southern Mexico",
    light: "Bright indirect",
    image: plantMonstera,
    tag: "Popular",
  },
  {
    name: "Snake Plant",
    origin: "West Africa",
    light: "Low to bright",
    image: plantSnake,
    tag: "Low Maintenance",
  },
  {
    name: "Fiddle Leaf Fig",
    origin: "West Africa",
    light: "Bright indirect",
    image: plantFiddle,
    tag: "Statement",
  },
];

const PlantCollection = () => {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Our Collection
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Each plant includes its botanical history, origin story, care instructions, and styling advice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plants.map((plant, i) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-card mb-5 aspect-[4/5]">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {plant.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {plant.name}
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{plant.origin}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{plant.light} light</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCollection;
