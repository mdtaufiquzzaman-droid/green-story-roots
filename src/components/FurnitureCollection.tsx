import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { furniture } from "@/data/furniture";

const FurnitureCollection = () => (
  <section id="furniture" className="py-24 md:py-32 bg-card/40">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Made from trees</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Natural Wood Furniture</h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          Every piece carries the story of the tree it came from. Request your own custom version.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {furniture.map((f, i) => (
          <motion.div
            key={f.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group"
          >
            <Link to={`/furniture/${f.slug}`} className="block">
              <div className="relative overflow-hidden rounded-lg bg-card mb-5 aspect-[4/5]">
                <img src={f.image} alt={`${f.name} made from ${f.tree}`} loading="lazy" width={1024} height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {f.tree}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{f.name}</h3>
              <p className="text-sm text-muted-foreground">{f.treeOrigin}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FurnitureCollection;
