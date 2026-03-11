import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Monstera plant overhead view" },
  { src: gallery2, alt: "Plant shelf with ceramic pots" },
  { src: gallery3, alt: "Hands repotting a succulent" },
  { src: gallery4, alt: "Trailing pothos in macrame hanger" },
  { src: gallery5, alt: "Minimalist desk with snake plant" },
  { src: gallery6, alt: "Lush indoor garden corner" },
];

const Gallery = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="w-4 h-4 text-primary" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              @botanicaliving
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            From our community
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Real spaces, real plants, real inspiration. Tag us to be featured.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
