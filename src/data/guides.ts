export interface ClusterArticle {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  content: { heading: string; body: string }[];
}

export interface Pillar {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  clusters: ClusterArticle[];
}

export const pillars: Pillar[] = [
  {
    slug: "plant-care",
    title: "Plant Care",
    tagline: "Everything you need to keep your plants thriving.",
    intro:
      "Healthy plants start with the basics: the right light, the right water, and a little observation. This pillar gathers the fundamental skills every indoor gardener needs — from reading your plant's signals to building a sustainable care routine that fits your life.",
    metaTitle: "Plant Care Guide — Watering, Light & Troubleshooting | Botanica Living",
    metaDescription:
      "Master indoor plant care with our complete guide to watering, light, humidity, fertilising and troubleshooting common houseplant problems.",
    keywords: [
      "plant care",
      "indoor plant care",
      "houseplant care guide",
      "watering plants",
      "plant light requirements",
      "plant troubleshooting",
    ],
    clusters: [
      {
        slug: "watering-houseplants",
        title: "How to Water Houseplants the Right Way",
        excerpt: "Overwatering kills more houseplants than anything else. Here's how to get it right.",
        metaDescription:
          "Learn how often to water houseplants, how to test soil moisture, and how to avoid root rot from overwatering.",
        keywords: ["watering houseplants", "how often to water plants", "overwatering", "root rot"],
        content: [
          {
            heading: "Forget schedules — read the soil",
            body: "The single biggest mistake new plant owners make is watering on a fixed weekly schedule. Plants don't drink on calendars; they drink based on light, temperature, season, and pot size. Push a finger 2–3 cm into the soil. If it's dry, water. If it's damp, wait.",
          },
          {
            heading: "Water thoroughly, then drain completely",
            body: "When you do water, soak the soil until water runs freely from the drainage holes. Then let the pot drain completely — never let it sit in a saucer of water. This mimics tropical rainfall and prevents the stagnant conditions that cause root rot.",
          },
          {
            heading: "Adjust for the season",
            body: "Most houseplants need significantly less water in winter when growth slows. Cut your watering frequency in half from November to February and watch your plants thank you in spring.",
          },
        ],
      },
      {
        slug: "understanding-plant-light",
        title: "Understanding Light: Bright, Indirect, and Low",
        excerpt: "Decoding the most confusing instruction in plant care.",
        metaDescription:
          "What does 'bright indirect light' actually mean? A clear guide to plant light requirements and how to choose the right spot.",
        keywords: ["bright indirect light", "low light plants", "plant light requirements", "best window for plants"],
        content: [
          {
            heading: "Direct vs indirect",
            body: "Direct light means the sun's rays hit the leaves unfiltered — usually within a metre of a south or west-facing window. Indirect light means the room is bright but the leaves aren't in the sun's path. Most tropical houseplants want indirect; succulents and cacti want direct.",
          },
          {
            heading: "The window test",
            body: "Stand where your plant will live and look at the window. Can you see the sky? Bright. Can you see only a wall opposite a window? Medium. Is the nearest window more than 3 m away? Low. Match the spot to the plant's label.",
          },
          {
            heading: "Rotate weekly",
            body: "Plants grow toward light. Give each pot a quarter turn every week so growth stays even and your plant doesn't lean like a teenager into the window.",
          },
        ],
      },
      {
        slug: "humidity-for-tropical-plants",
        title: "Humidity for Tropical Houseplants",
        excerpt: "Why crispy leaf tips happen and how to fix them.",
        metaDescription:
          "How to raise humidity for tropical houseplants like Monstera, Calathea and ferns — without buying expensive equipment.",
        keywords: ["humidity for plants", "tropical houseplants", "humidifier for plants", "crispy leaf tips"],
        content: [
          {
            heading: "Why humidity matters",
            body: "Tropical plants evolved under a rainforest canopy where humidity sits at 70–90%. Most heated homes in winter drop to 30%. That gap is what causes brown crispy edges on Calatheas, ferns, and Marantas.",
          },
          {
            heading: "Cheap fixes that actually work",
            body: "Group plants together — they release moisture and create a microclimate. Move humidity-lovers to the bathroom. Place pots on a tray of pebbles and water (the pot sits on the pebbles, above the waterline).",
          },
          {
            heading: "When to buy a humidifier",
            body: "If you keep crispy-edged plants like Calathea orbifolia, a small ultrasonic humidifier near your plant shelf is the single best upgrade you can make. Aim for 55–65% humidity.",
          },
        ],
      },
      {
        slug: "fertilising-houseplants",
        title: "Fertilising Houseplants Without Burning the Roots",
        excerpt: "When to feed, what to feed, and the rule that prevents disaster.",
        metaDescription:
          "A simple guide to fertilising houseplants: NPK basics, dilution rates, and a seasonal schedule that prevents root burn.",
        keywords: ["fertilising houseplants", "houseplant fertilizer", "NPK", "liquid fertilizer plants"],
        content: [
          {
            heading: "Less is more",
            body: "Nurseries grow plants in nutrient-rich conditions, but indoor plants in stable conditions need surprisingly little. A balanced liquid fertiliser diluted to half-strength, once a month from March to September, is enough for most foliage plants.",
          },
          {
            heading: "Stop in winter",
            body: "Plants barely grow in low winter light. Feeding a dormant plant just builds up salt in the soil and burns the roots. Pause fertilising entirely from October to February.",
          },
          {
            heading: "Flush the salts annually",
            body: "Once a year, water the plant with three times the pot's volume of plain water, letting it drain fully. This flushes accumulated fertiliser salts and resets the soil chemistry.",
          },
        ],
      },
      {
        slug: "common-houseplant-pests",
        title: "Spotting and Treating Common Houseplant Pests",
        excerpt: "Fungus gnats, spider mites, mealybugs — and what to do at the first sign.",
        metaDescription:
          "Identify and treat the most common houseplant pests including fungus gnats, spider mites, mealybugs and scale.",
        keywords: ["houseplant pests", "fungus gnats", "spider mites", "mealybugs", "plant pest treatment"],
        content: [
          {
            heading: "Inspect on watering day",
            body: "Every time you water, take 20 seconds to check the underside of a few leaves and the soil surface. Most infestations start small and are easy to wipe out if you catch them in the first week.",
          },
          {
            heading: "The four you'll see most",
            body: "Fungus gnats (tiny black flies — let soil dry out, use sticky traps). Spider mites (fine webbing, stippled leaves — shower the plant, treat with neem). Mealybugs (white cotton on stems — dab with rubbing alcohol). Scale (brown bumps on stems — scrape off, treat with horticultural oil).",
          },
          {
            heading: "Isolate new plants for two weeks",
            body: "The number one source of indoor pests is a new plant from the shop. Quarantine new arrivals on a separate shelf for 14 days before adding them to your collection.",
          },
        ],
      },
    ],
  },
  {
    slug: "indoor-gardening",
    title: "Indoor Gardening",
    tagline: "Build a thriving indoor garden, no garden required.",
    intro:
      "Indoor gardening is the art of growing plants without a backyard. Whether you live in a studio flat or a townhouse, this pillar walks you through choosing the right plants for your space, setting up grow systems, and turning windowsills into productive green corners.",
    metaTitle: "Indoor Gardening Guide — Setup, Plants & Small Spaces | Botanica Living",
    metaDescription:
      "Start your indoor garden with our complete guide to plant selection, low-light spaces, edible windowsills and apartment-friendly setups.",
    keywords: [
      "indoor gardening",
      "apartment gardening",
      "urban gardening",
      "indoor garden setup",
      "small space gardening",
      "windowsill garden",
    ],
    clusters: [
      {
        slug: "best-plants-for-beginners",
        title: "The 7 Best Indoor Plants for Beginners",
        excerpt: "Forgiving, hardy, and beautiful — the plants that build confidence.",
        metaDescription:
          "Discover the best indoor plants for beginners: low-maintenance, forgiving houseplants that thrive even when you forget to water.",
        keywords: ["best indoor plants for beginners", "easy houseplants", "low maintenance plants", "hardy houseplants"],
        content: [
          {
            heading: "Start with three",
            body: "Don't fill a flat with 30 plants on week one. Start with three different species and learn how each one signals thirst, light stress, and happiness. Once you can read them, scale up.",
          },
          {
            heading: "Our beginner shortlist",
            body: "Snake plant (Sansevieria) — almost unkillable. Pothos — thrives in any light, trails beautifully. ZZ plant — survives months of neglect. Spider plant — clear feedback when thirsty. Peace lily — dramatic droop tells you when to water. Philodendron heartleaf — fast, rewarding growth. Aloe vera — useful and decorative.",
          },
          {
            heading: "Buy from a real nursery",
            body: "Supermarket plants are often grown in greenhouse conditions and stressed by transit. A local nursery plant will adapt to your home faster and is usually healthier at point of sale.",
          },
        ],
      },
      {
        slug: "low-light-apartments",
        title: "Indoor Gardening in Low-Light Apartments",
        excerpt: "North-facing windows and basement flats are not a death sentence.",
        metaDescription:
          "How to garden indoors in a low-light apartment — the best low-light plants, layout tips, and when to use grow lights.",
        keywords: ["low light plants", "north facing window plants", "apartment plants", "basement plants"],
        content: [
          {
            heading: "Pick true shade-tolerators",
            body: "Most 'low light' labels actually mean 'medium light at minimum'. True low-light champions: ZZ plant, snake plant, cast iron plant, pothos, and Chinese evergreen. These will live — slowly — in genuinely dim corners.",
          },
          {
            heading: "Layer your space",
            body: "Put your brightest-loving plants closest to windows, shade-tolerators deepest into the room. A simple rule: if you can comfortably read a book without turning a lamp on, a snake plant will be fine there.",
          },
          {
            heading: "Grow lights are not cheating",
            body: "A small 20–40W LED grow bar over a shelf can turn a dark wall into a productive plant zone. Modern panels are slim, white-light, and far from the purple horror of a decade ago.",
          },
        ],
      },
      {
        slug: "windowsill-herb-garden",
        title: "Building a Windowsill Herb Garden",
        excerpt: "Fresh basil, mint, and thyme on tap — even in a studio flat.",
        metaDescription:
          "Step-by-step guide to a productive windowsill herb garden — best herbs, pot sizes, light needs, and harvest tips.",
        keywords: ["windowsill herb garden", "indoor herbs", "growing basil indoors", "kitchen garden"],
        content: [
          {
            heading: "South-facing wins",
            body: "Culinary herbs are sun-worshippers. Without 6+ hours of direct light, basil and rosemary will stretch and weaken. A south or west-facing kitchen window is ideal; anywhere else, plan to use a grow light.",
          },
          {
            heading: "Six herbs that earn their pot",
            body: "Basil (sun, generous water). Mint (in its own pot — it bullies neighbours). Chives (cut and come again). Parsley (slow but generous). Thyme (drier soil, drought tolerant). Oregano (full sun, sparse water).",
          },
          {
            heading: "Harvest aggressively",
            body: "Herbs grow bushier the more you cut. Pinch basil tops weekly even if you don't need them — it doubles the leaf production within a month.",
          },
        ],
      },
      {
        slug: "small-space-vertical-gardens",
        title: "Vertical Gardens for Small Spaces",
        excerpt: "When floor space runs out, go up.",
        metaDescription:
          "Build a vertical indoor garden in small apartments — wall planters, plant ladders, trailing plants, and weight-safe mounting.",
        keywords: ["vertical garden", "wall planters", "small space plants", "trailing houseplants"],
        content: [
          {
            heading: "Trailers are your friends",
            body: "Pothos, string of hearts, philodendron Brasil, and English ivy will cascade from a high shelf or wall planter and add metres of green without claiming a centimetre of floor.",
          },
          {
            heading: "Plant ladders and étagères",
            body: "A four-tier wooden plant ladder is the highest plant-per-square-metre ratio possible in a small flat. Place against a bright wall and rotate plants weekly.",
          },
          {
            heading: "Mind the weight",
            body: "Wet potting mix is heavy. Use lightweight nursery pots inside decorative covers, choose ceramic over terracotta for wall mounts, and use proper wall anchors rated above the wet pot weight.",
          },
        ],
      },
      {
        slug: "propagating-plants-at-home",
        title: "Propagating Plants at Home",
        excerpt: "Multiply your collection for free, with a glass of water and patience.",
        metaDescription:
          "Beginner's guide to propagating houseplants — water propagation, soil cuttings, and the best plants to start with.",
        keywords: ["propagating houseplants", "water propagation", "plant cuttings", "free plants"],
        content: [
          {
            heading: "Water propagation basics",
            body: "Cut a stem just below a node (the bump where leaves emerge). Put it in a glass of room-temperature water, change the water weekly, and wait. Roots appear in 2–4 weeks for fast plants like pothos and tradescantia.",
          },
          {
            heading: "Easiest first projects",
            body: "Pothos, philodendron heartleaf, tradescantia, spider plant babies, and string of pearls all propagate easily in water. Avoid succulents and fiddle leaf figs as first attempts — they need soil and patience.",
          },
          {
            heading: "Pot up at 5cm roots",
            body: "Wait until roots are at least 5 cm long before transferring to soil, then keep the new soil consistently moist (not wet) for the first two weeks while the roots adapt.",
          },
        ],
      },
    ],
  },
  {
    slug: "plant-styling",
    title: "Plant Styling",
    tagline: "Compose rooms that feel alive, layered, and intentional.",
    intro:
      "A great plant is good. A great plant in the right pot, in the right corner, against the right wall is unforgettable. This pillar treats plants as design objects — covering composition, planters, room-by-room placement, and the art of building a layered indoor jungle.",
    metaTitle: "Plant Styling Guide — Interior Design With Plants | Botanica Living",
    metaDescription:
      "Style your home with plants — room-by-room placement, planter pairing, indoor jungle composition, and decorating with statement greenery.",
    keywords: [
      "plant styling",
      "decorating with plants",
      "indoor jungle",
      "plant interior design",
      "statement plants",
      "biophilic design",
    ],
    clusters: [
      {
        slug: "styling-living-room-plants",
        title: "Styling Plants in the Living Room",
        excerpt: "The single room where plant choice changes everything.",
        metaDescription:
          "How to style plants in your living room — statement floor plants, shelf compositions, and the rule of three.",
        keywords: ["living room plants", "statement plants", "floor plants", "decorating with plants"],
        content: [
          {
            heading: "Anchor with one statement",
            body: "Every living room benefits from one large floor plant — a fiddle leaf fig, bird of paradise, or kentia palm — placed where it has space to be seen. This is the visual anchor everything else supports.",
          },
          {
            heading: "The rule of three",
            body: "On shelves and side tables, plants look best in odd-numbered groupings with varied heights. A trailing pothos, an upright snake plant, and a low succulent in pots of similar tone reads as composed; one of each at random reads as clutter.",
          },
          {
            heading: "Match planters to the room palette",
            body: "Pick planters in the same colour family as your largest soft furnishings. Neutral linen sofa? Cream, terracotta, and stone planters. Dark velvet? Brass, charcoal, and forest green. The plants become the colour pop.",
          },
        ],
      },
      {
        slug: "bedroom-plants",
        title: "The Best Plants for Your Bedroom",
        excerpt: "Soft, calm, and surprisingly good for sleep.",
        metaDescription:
          "Best bedroom plants for a calm sleep space — air-purifying choices, low-light tolerant species and styling tips.",
        keywords: ["bedroom plants", "best plants for bedroom", "air purifying plants", "plants for sleep"],
        content: [
          {
            heading: "Soft shapes, low maintenance",
            body: "Bedrooms are for rest, so pick plants you don't have to fuss over. Snake plant, ZZ, peace lily, and pothos all thrive on neglect and bring a soft, organic silhouette to a calm room.",
          },
          {
            heading: "Light considerations",
            body: "Most bedrooms have curtains closed half the day, so true low-light tolerators win. Place trailing plants on a high shelf above the bedhead and an upright snake plant on the dresser.",
          },
          {
            heading: "Skip the strong-scented species",
            body: "Beautiful as they are, jasmine and gardenia can be overwhelming in a small bedroom. Save them for living areas and let your bedroom stay scent-neutral.",
          },
        ],
      },
      {
        slug: "bathroom-plants",
        title: "Bathroom Plants That Love the Humidity",
        excerpt: "The one room where tropical plants finally feel at home.",
        metaDescription:
          "Best plants for bathrooms — humidity-loving tropical species that thrive in showers and low-light wet rooms.",
        keywords: ["bathroom plants", "humidity loving plants", "shower plants", "tropical bathroom"],
        content: [
          {
            heading: "Humidity is a feature",
            body: "Your bathroom replicates the rainforest understory every time you shower. Use this. Ferns, calatheas, marantas, and orchids that struggle elsewhere in the home often thrive on a bathroom shelf.",
          },
          {
            heading: "Mind the light",
            body: "Bathrooms often have small windows or none. Pair humidity-lovers with low-light tolerance: Boston fern, bird's nest fern, pothos, and ZZ are the safest picks.",
          },
          {
            heading: "Pots that handle splashes",
            body: "Glazed ceramic, sealed concrete, and plastic nursery pots inside decorative covers handle bathroom moisture without warping or staining.",
          },
        ],
      },
      {
        slug: "building-an-indoor-jungle",
        title: "Building an Indoor Jungle (Without Chaos)",
        excerpt: "The art of dense planting that still feels designed.",
        metaDescription:
          "How to build an indoor jungle that feels lush but not chaotic — layering, repetition, height, and curated species selection.",
        keywords: ["indoor jungle", "plant collection", "layered planting", "urban jungle home"],
        content: [
          {
            heading: "Limit your species, repeat your colours",
            body: "An indoor jungle with 40 different species reads as a plant shop. The same density built from 8–10 species, repeated across different pots and heights, reads as a designed environment.",
          },
          {
            heading: "Three height layers",
            body: "Build every plant grouping in three vertical layers — floor (tall palms, fiddles), mid (medium shrubby plants on stools or low shelves), and high (trailing plants from shelves or hooks). The eye moves through the layers and the room feels generous.",
          },
          {
            heading: "Negative space matters",
            body: "Leave actual empty wall and floor between groupings. Plants need breathing room to read as intentional rather than overgrown.",
          },
        ],
      },
      {
        slug: "choosing-planters-and-pots",
        title: "Choosing Planters and Pots That Elevate Your Plant",
        excerpt: "The planter is half the styling decision.",
        metaDescription:
          "How to choose planters and pots that elevate your plants — material, colour, size, and the cover-pot system.",
        keywords: ["planters", "plant pots", "ceramic pots", "decorative planters"],
        content: [
          {
            heading: "Use the cover-pot system",
            body: "Keep plants in their plastic nursery pots and drop them inside decorative covers. You can rearrange, water in the sink, and swap planters seasonally without ever repotting. This is how every styled interior actually works.",
          },
          {
            heading: "Material guide",
            body: "Terracotta — porous, breathable, great for succulents and drought-tolerant plants. Glazed ceramic — retains moisture, ideal for tropicals. Concrete — heavy, modern, good for statement plants. Woven baskets — warm, textural, perfect for large floor plants.",
          },
          {
            heading: "Size up gently",
            body: "When repotting, choose a pot 2–3 cm wider than the current one. Jumping to a much larger pot leaves soil holding water around inactive roots and invites rot.",
          },
        ],
      },
    ],
  },
];

export const pillarsBySlug: Record<string, Pillar> = Object.fromEntries(
  pillars.map((p) => [p.slug, p]),
);

export const findCluster = (
  pillarSlug: string,
  clusterSlug: string,
): { pillar: Pillar; cluster: ClusterArticle } | null => {
  const pillar = pillarsBySlug[pillarSlug];
  if (!pillar) return null;
  const cluster = pillar.clusters.find((c) => c.slug === clusterSlug);
  if (!cluster) return null;
  return { pillar, cluster };
};
