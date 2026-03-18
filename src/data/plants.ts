import plantMonstera from "@/assets/plant-monstera.jpg";
import plantSnake from "@/assets/plant-snake.jpg";
import plantFiddle from "@/assets/plant-fiddle.jpg";
import plantPothos from "@/assets/plant-pothos.jpg";
import plantPeaceLily from "@/assets/plant-peace-lily.jpg";
import plantZZ from "@/assets/plant-zz.jpg";
import plantBird from "@/assets/plant-bird-of-paradise.jpg";
import plantAloe from "@/assets/plant-aloe-vera.jpg";
import plantRubber from "@/assets/plant-rubber.jpg";

export interface PlantSummary {
  name: string;
  slug: string;
  origin: string;
  light: string;
  image: string;
  tag: string;
}

export interface PlantDetail extends PlantSummary {
  scientificName: string;
  family: string;
  water: string;
  temperature: string;
  humidity: string;
  history: string;
  care: string[];
  styling: string[];
}

export const plants: PlantDetail[] = [
  {
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    origin: "Southern Mexico",
    light: "Bright indirect",
    image: plantMonstera,
    tag: "Popular",
    scientificName: "Monstera deliciosa",
    family: "Araceae",
    water: "Every 1–2 weeks",
    temperature: "18–30°C (65–85°F)",
    humidity: "Medium to high",
    history: "Native to the tropical forests of southern Mexico and Central America, the Monstera deliciosa was first described by Danish botanist Frederik Michael Liebmann in 1849. Its name comes from the Latin word 'monstrous' — referring to its enormous, fenestrated leaves. In its natural habitat, it climbs trees using aerial roots, reaching heights of over 20 metres. The plant produces an edible fruit that tastes like a blend of banana, pineapple, and mango, which is how it earned the name 'deliciosa.' It became a beloved houseplant in the mid-20th century and has experienced a massive resurgence in popularity since the 2010s.",
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
  {
    name: "Snake Plant",
    slug: "snake-plant",
    origin: "West Africa",
    light: "Low to bright",
    image: plantSnake,
    tag: "Low Maintenance",
    scientificName: "Dracaena trifasciata",
    family: "Asparagaceae",
    water: "Every 2–6 weeks",
    temperature: "15–29°C (60–85°F)",
    humidity: "Low — tolerates dry air",
    history: "Originally from tropical West Africa, the snake plant has been cultivated for centuries. It was historically used in Africa for its strong fibres to make bowstrings, earning it the nickname 'bowstring hemp.' The plant was formally classified by Swedish botanist Carl Peter Thunberg in 1794. It was long known as Sansevieria trifasciata before being reclassified under the Dracaena genus in 2017. NASA's Clean Air Study found it to be one of the best air-purifying houseplants, capable of filtering toxins like formaldehyde and benzene.",
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
  {
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    origin: "West Africa",
    light: "Bright indirect",
    image: plantFiddle,
    tag: "Statement",
    scientificName: "Ficus lyrata",
    family: "Moraceae",
    water: "Every 1–2 weeks",
    temperature: "16–27°C (60–80°F)",
    humidity: "Medium to high",
    history: "The fiddle leaf fig is native to the tropical rainforests of western Africa, where it grows as a banyan tree — starting life as an epiphyte high in the canopy before sending roots down to the forest floor. Its large, violin-shaped leaves can grow up to 45 cm long in the wild. The species was first described by botanist William Jackson Hooker in 1846. It became the 'it' plant of interior design in the 2010s, dominating magazine covers, Instagram feeds, and design blogs.",
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
  {
    name: "Golden Pothos",
    slug: "golden-pothos",
    origin: "Southeast Asia",
    light: "Low to bright indirect",
    image: plantPothos,
    tag: "Beginner Friendly",
    scientificName: "Epipremnum aureum",
    family: "Araceae",
    water: "Every 1–2 weeks",
    temperature: "18–30°C (65–85°F)",
    humidity: "Low to medium",
    history: "Native to the Solomon Islands in the South Pacific, the Golden Pothos has become one of the most widespread tropical plants in the world. It was first described by botanists in 1880 and has been reclassified multiple times across different genera. Often called 'Devil's Ivy' because it is nearly impossible to kill and stays green even in darkness. In tropical regions, it can grow as an invasive species, climbing trees with leaves reaching over 60 cm. It is one of NASA's top air-purifying plants, effectively removing formaldehyde, xylene, and benzene from indoor air.",
    care: [
      "Tolerates low light but grows faster in bright, indirect light.",
      "Water when the top 3 cm of soil is dry — roughly every 1–2 weeks.",
      "Trim leggy vines to encourage bushier growth.",
      "Propagates easily in water — simply cut below a node and place in a jar.",
      "Feed monthly during spring and summer with diluted liquid fertiliser.",
      "Wipe leaves to prevent dust buildup and maintain glossy appearance.",
    ],
    styling: [
      "Hang in a macramé planter for a boho, trailing effect.",
      "Train along a shelf or bookcase to create a living green garland.",
      "Place on top of a kitchen cabinet and let vines cascade down.",
      "Pair with other trailing plants like String of Hearts for a lush display.",
    ],
  },
  {
    name: "Peace Lily",
    slug: "peace-lily",
    origin: "Central America",
    light: "Low to medium",
    image: plantPeaceLily,
    tag: "Air Purifier",
    scientificName: "Spathiphyllum wallisii",
    family: "Araceae",
    water: "Every 1–2 weeks",
    temperature: "18–30°C (65–85°F)",
    humidity: "Medium to high",
    history: "Peace lilies are native to the tropical rainforests of Central and South America, as well as Southeast Asia. The genus Spathiphyllum was first described by Heinrich Wilhelm Schott in 1832. Despite their name, peace lilies are not true lilies — they belong to the Araceae family. Their distinctive white 'flower' is actually a modified leaf called a spathe that surrounds the true flowers on the spadix. NASA's Clean Air Study identified them as one of the most effective houseplants for removing airborne toxins including ammonia, benzene, and formaldehyde.",
    care: [
      "Thrives in low to medium indirect light — avoid direct sunlight.",
      "Water when the top layer of soil feels dry; the plant will droop when thirsty.",
      "Mist regularly or place on a pebble tray to boost humidity.",
      "Remove spent flowers by cutting the stem at the base.",
      "Fertilise every 6–8 weeks during the growing season.",
      "Repot every 1–2 years when roots become crowded.",
    ],
    styling: [
      "Perfect for bathrooms — thrives in humidity and low light.",
      "Place on a side table or desk for an elegant, calming accent.",
      "Group with ferns and calatheas for a lush, tropical corner.",
      "Use a white or neutral ceramic pot to complement the white blooms.",
    ],
  },
  {
    name: "ZZ Plant",
    slug: "zz-plant",
    origin: "Eastern Africa",
    light: "Low to bright indirect",
    image: plantZZ,
    tag: "Drought Tolerant",
    scientificName: "Zamioculcas zamiifolia",
    family: "Araceae",
    water: "Every 2–3 weeks",
    temperature: "18–26°C (65–79°F)",
    humidity: "Low — very tolerant",
    history: "The ZZ plant is native to the grasslands and dry forests of eastern Africa, from Kenya to South Africa. It was first described in 1829 but didn't gain popularity as a houseplant until the late 1990s when Dutch nurseries began mass-propagating it. Its thick, potato-like rhizomes store water, making it extremely drought-tolerant. The plant can survive months without watering and tolerates neglect better than almost any other houseplant. Its glossy, naturally waxy leaves are so perfect-looking that people often mistake it for an artificial plant.",
    care: [
      "Tolerates very low light but grows best in bright, indirect light.",
      "Water only when soil is completely dry — every 2–3 weeks or less.",
      "Extremely forgiving of neglect; overwatering is the main killer.",
      "Use a well-draining potting mix to prevent root rot.",
      "Fertilise just 2–3 times per year during the growing season.",
      "Clean leaves with a damp cloth to maintain their natural shine.",
    ],
    styling: [
      "Use as a sleek, architectural accent in modern minimalist interiors.",
      "Place in a matte ceramic or concrete planter for a contemporary look.",
      "Perfect for offices and low-light rooms where other plants struggle.",
      "Pair with a snake plant for a low-maintenance, sculptural duo.",
    ],
  },
  {
    name: "Bird of Paradise",
    slug: "bird-of-paradise",
    origin: "South Africa",
    light: "Bright direct to indirect",
    image: plantBird,
    tag: "Tropical",
    scientificName: "Strelitzia reginae",
    family: "Strelitziaceae",
    water: "Every 1–2 weeks",
    temperature: "18–30°C (65–85°F)",
    humidity: "Medium to high",
    history: "The Bird of Paradise is native to South Africa and was named after Queen Charlotte of Mecklenburg-Strelitz in the 18th century. Its striking flowers resemble a brightly coloured tropical bird in flight, which gave the plant its common name. The species was first described by Sir Joseph Banks in 1788. In its native habitat, the flowers are pollinated by sunbirds that perch on the sturdy spathe. It has become a symbol of tropical luxury and is widely used in resort-style landscaping around the world. Indoors, it rarely flowers but is treasured for its dramatic, banana-like foliage.",
    care: [
      "Provide as much bright light as possible — can tolerate some direct sun.",
      "Water when the top 5 cm of soil is dry; reduce watering in winter.",
      "Mist leaves regularly or use a humidifier for best growth.",
      "Feed monthly with a balanced fertiliser during spring and summer.",
      "Wipe large leaves with a damp cloth to remove dust.",
      "Repot every 2–3 years; it prefers to be slightly root-bound.",
    ],
    styling: [
      "Use as a bold statement plant in a bright living room or sunroom.",
      "Place in a large woven basket or terracotta pot for tropical vibes.",
      "Position in a corner to add dramatic height and architectural interest.",
      "Pair with rattan furniture and tropical prints for a resort aesthetic.",
    ],
  },
  {
    name: "Aloe Vera",
    slug: "aloe-vera",
    origin: "Arabian Peninsula",
    light: "Bright direct",
    image: plantAloe,
    tag: "Medicinal",
    scientificName: "Aloe barbadensis miller",
    family: "Asphodelaceae",
    water: "Every 2–3 weeks",
    temperature: "13–27°C (55–80°F)",
    humidity: "Low",
    history: "Aloe vera has been used for medicinal purposes for over 5,000 years, dating back to ancient Egypt where it was known as the 'plant of immortality.' Cleopatra reportedly used aloe gel as part of her beauty regimen. The plant is native to the Arabian Peninsula but has naturalised across the globe. Ancient Greek physicians used it to treat wounds, and Alexander the Great is said to have conquered the island of Socotra to secure supplies of aloe for his soldiers. The gel inside the leaves contains over 75 active compounds including vitamins, minerals, amino acids, and enzymes.",
    care: [
      "Place in bright, direct sunlight — a south-facing windowsill is ideal.",
      "Water deeply but infrequently; let soil dry completely between waterings.",
      "Use sandy, well-draining cactus mix to prevent root rot.",
      "Avoid overwatering — aloe stores water in its thick leaves.",
      "Fertilise sparingly, once or twice a year in spring.",
      "Remove pups (baby plants) and repot them to propagate.",
    ],
    styling: [
      "Place on a sunny kitchen windowsill for easy access to its healing gel.",
      "Group with other succulents in a terracotta trough for a desert display.",
      "Use a warm-toned ceramic pot to complement the green foliage.",
      "Perfect for a bathroom shelf near a window for a spa-like feel.",
    ],
  },
  {
    name: "Rubber Plant",
    slug: "rubber-plant",
    origin: "Southeast Asia",
    light: "Medium to bright indirect",
    image: plantRubber,
    tag: "Hardy",
    scientificName: "Ficus elastica",
    family: "Moraceae",
    water: "Every 1–2 weeks",
    temperature: "16–27°C (60–80°F)",
    humidity: "Medium",
    history: "The rubber plant is native to the tropical regions of India and Southeast Asia, where it grows into massive trees reaching heights of 30–40 metres. In the 19th century, its milky latex sap was used to produce natural rubber before the discovery of the more productive Hevea brasiliensis (rubber tree). The plant was a Victorian-era favourite in European parlours and has remained a popular houseplant ever since. Modern cultivars come in a variety of colours including the deep burgundy 'Burgundy,' the variegated 'Tineke,' and the pink-splashed 'Ruby.' Its large, glossy leaves make it one of the most visually impactful indoor plants.",
    care: [
      "Provide medium to bright indirect light — avoid harsh direct sun.",
      "Water when the top 3–5 cm of soil is dry; reduce in winter.",
      "Dust large leaves regularly with a damp cloth to maintain shine.",
      "Prune in spring to control height and encourage bushier growth.",
      "Feed monthly during the growing season with liquid fertiliser.",
      "Watch for sap when pruning — it can irritate skin, so wear gloves.",
    ],
    styling: [
      "Use as a bold floor plant in an entryway or living room.",
      "Dark-leaved varieties look stunning in white or brass planters.",
      "Place against a light wall to highlight the rich, glossy foliage.",
      "Pair with lighter plants like pothos for a beautiful contrast.",
    ],
  },
];

export const plantsBySlug: Record<string, PlantDetail> = Object.fromEntries(
  plants.map((p) => [p.slug, p])
);
