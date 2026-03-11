import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Droplets, Thermometer, MapPin, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import plantMonstera from "@/assets/plant-monstera.jpg";
import plantSnake from "@/assets/plant-snake.jpg";
import plantFiddle from "@/assets/plant-fiddle.jpg";

const plantDetails: Record<string, {
  name: string;
  origin: string;
  light: string;
  image: string;
  tag: string;
  scientificName: string;
  family: string;
  water: string;
  temperature: string;
  humidity: string;
  history: string;
  care: string[];
  styling: string[];
}> = {
  "monstera-deliciosa": {
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    family: "Araceae",
    origin: "Southern Mexico & Central America",
    light: "Bright indirect",
    water: "Every 1–2 weeks",
    temperature: "18–30°C (65–85°F)",
    humidity: "Medium to high",
    image: plantMonstera,
    tag: "Popular",
    history:
      "Native to the tropical forests of southern Mexico and Central America, the Monstera deliciosa was first described by Danish botanist Frederik Michael Liebmann in 1849. Its name comes from the Latin word 'monstrous' — referring to its enormous, fenestrated leaves. In its natural habitat, it climbs trees using aerial roots, reaching heights of over 20 metres. The plant produces an edible fruit that tastes like a blend of banana, pineapple, and mango, which is how it earned the name 'deliciosa.' It became a beloved houseplant in the mid-20th century and has experienced a massive resurgence in popularity since the 2010s.",
    care: [
      "Place in bright, indirect light — avoid direct sun which can scorch leaves.",
      "Water when the top 5 cm of soil feels dry, roughly every 1–2 weeks.",
      "Mist leaves occasionally or use a humidifier to maintain humidity above 50%.",
      "Feed with a balanced liquid fertiliser monthly during spring and summer.",
      "Clean leaves with a damp cloth to remove dust and improve photosynthesis.",
      "Repot every 1–2 years in spring using well-draining aroid mix.",
    ],
    styling: [
      "Use as a statement floor plant in a living room corner with a woven basket planter.",
      "Pair with mid-century modern furniture for a retro-tropical aesthetic.",
      "Place near a bookshelf or behind a sofa to add vertical drama.",
      "Combine with trailing pothos and a snake plant for a layered indoor jungle.",
    ],
  },
  "snake-plant": {
    name: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    family: "Asparagaceae",
    origin: "West Africa (Nigeria & Congo)",
    light: "Low to bright indirect",
    water: "Every 2–6 weeks",
    temperature: "15–29°C (60–85°F)",
    humidity: "Low — tolerates dry air",
    image: plantSnake,
    tag: "Low Maintenance",
    history:
      "Originally from tropical West Africa, the snake plant has been cultivated for centuries. It was historically used in Africa for its strong fibres to make bowstrings, earning it the nickname 'bowstring hemp.' The plant was formally classified by Swedish botanist Carl Peter Thunberg in 1794. It was long known as Sansevieria trifasciata before being reclassified under the Dracaena genus in 2017. NASA's Clean Air Study found it to be one of the best air-purifying houseplants, capable of filtering toxins like formaldehyde and benzene. In Chinese feng shui, it is considered a plant of good luck when placed near entrances.",
    care: [
      "Thrives in low to bright indirect light — one of the most adaptable houseplants.",
      "Water sparingly; allow soil to dry completely between waterings (every 2–6 weeks).",
      "Avoid overwatering — root rot is the most common issue.",
      "Use well-draining cactus or succulent soil mix.",
      "Fertilise lightly once in spring and once in summer.",
      "Wipe leaves occasionally to keep them dust-free and vibrant.",
    ],
    styling: [
      "Perfect for narrow spaces — place in a tall, cylindrical ceramic planter.",
      "Group three varying heights together for an architectural display.",
      "Ideal for bedrooms — it releases oxygen at night, improving air quality.",
      "Use as a modern accent on a minimalist desk or console table.",
    ],
  },
  "fiddle-leaf-fig": {
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    family: "Moraceae",
    origin: "West Africa (Cameroon to Sierra Leone)",
    light: "Bright indirect",
    water: "Every 1–2 weeks",
    temperature: "16–27°C (60–80°F)",
    humidity: "Medium to high",
    image: plantFiddle,
    tag: "Statement",
    history:
      "The fiddle leaf fig is native to the tropical rainforests of western Africa, where it grows as a banyan tree — starting life as an epiphyte high in the canopy before sending roots down to the forest floor. Its large, violin-shaped leaves (hence 'fiddle') can grow up to 45 cm long in the wild. The species was first described by botanist William Jackson Hooker in 1846. It became the 'it' plant of interior design in the 2010s, dominating magazine covers, Instagram feeds, and design blogs. Despite its popularity, it is notoriously finicky indoors, earning a reputation as a 'diva plant.'",
    care: [
      "Provide bright, indirect light — rotate the pot monthly for even growth.",
      "Water when the top 5 cm of soil is dry; use room-temperature filtered water.",
      "Avoid moving the plant frequently — it dislikes changes in environment.",
      "Keep away from drafts, heaters, and air conditioning vents.",
      "Prune in spring to encourage branching and a fuller shape.",
      "Fertilise every 4 weeks during the growing season with a diluted liquid feed.",
    ],
    styling: [
      "Place as a solo statement piece in a bright living room corner.",
      "Use a terracotta or matte black planter for an editorial, designer look.",
      "Position beside a floor-length window with sheer curtains for diffused light.",
      "Pair with warm-toned rugs and natural materials like rattan and linen.",
    ],
  },
};

const PlantDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const plant = slug ? plantDetails[slug] : undefined;

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
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                {plant.tag}
              </span>
            </div>

            <div className="flex items-center p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to collection
                </Link>

                <p className="text-sm text-primary font-medium tracking-[0.15em] uppercase mb-2">
                  {plant.family}
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-2 leading-tight">
                  {plant.name}
                </h1>
                <p className="text-muted-foreground italic mb-8">
                  {plant.scientificName}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Origin</p>
                      <p className="text-sm font-medium text-foreground">{plant.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <Sun className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Light</p>
                      <p className="text-sm font-medium text-foreground">{plant.light}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <Droplets className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Water</p>
                      <p className="text-sm font-medium text-foreground">{plant.water}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <Thermometer className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Temp</p>
                      <p className="text-sm font-medium text-foreground">{plant.temperature}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
                Botanical History
              </p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
                The story behind the plant
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {plant.history}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Care */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
                Care Guide
              </p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-8">
                How to keep it thriving
              </h2>
              <ul className="space-y-4">
                {plant.care.map((tip, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 items-start"
                  >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
                Styling Advice
              </p>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-8">
                How to style it in your space
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {plant.styling.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card rounded-lg p-6 border border-border"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlantDetail;
