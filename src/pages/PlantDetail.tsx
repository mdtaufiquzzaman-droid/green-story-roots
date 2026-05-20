import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Droplets, Thermometer, MapPin, Leaf, PlayCircle, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { plantsBySlug } from "@/data/plants";

const PlantDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const plant = slug ? plantsBySlug[slug] : undefined;

  if (!plant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">Plant not found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative">
          <div className="grid md:grid-cols-2 min-h-[60vh]">
            <div className="relative aspect-square md:aspect-auto">
              <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
              <span className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                {plant.tag}
              </span>
            </div>
            <div className="flex items-center p-8 md:p-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to collection
                </Link>
                <p className="text-sm text-primary font-medium tracking-[0.15em] uppercase mb-2">{plant.family}</p>
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-2 leading-tight">{plant.name}</h1>
                <p className="text-muted-foreground italic mb-8">{plant.scientificName}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: MapPin, label: "Origin", value: plant.origin, color: "text-primary" },
                    { icon: Sun, label: "Light", value: plant.light, color: "text-accent" },
                    { icon: Droplets, label: "Water", value: plant.water, color: "text-primary" },
                    { icon: Thermometer, label: "Temp", value: plant.temperature, color: "text-accent" },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                      <Icon className={`w-5 h-5 ${color} shrink-0`} />
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-sm font-medium text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Botanical History</p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-6">The story behind the plant</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{plant.history}</p>
            </motion.div>
          </div>
        </section>

        {/* Care */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Care Guide</p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-8">How to keep it thriving</h2>
              <ul className="space-y-4">
                {plant.care.map((tip, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 items-start">
                    <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Leaf className="w-3 h-3 text-primary" />
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-sm">{tip}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Styling */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Styling Advice</p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-8">How to style it in your space</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {plant.styling.map((tip, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card rounded-lg p-6 border border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Stream / Video Guide */}
        {plant.streamUrl && plant.streamName && (
          <section className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Watch & Learn</p>
                <h2 className="text-3xl font-display font-semibold text-foreground mb-8">Featured stream</h2>
                <a
                  href={plant.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
                >
                  <span className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <PlayCircle className="w-7 h-7 text-primary" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Stream</p>
                    <p className="text-base font-medium text-foreground truncate">{plant.streamName}</p>
                    <p className="text-xs text-muted-foreground truncate mt-1">{plant.streamUrl}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default PlantDetail;
