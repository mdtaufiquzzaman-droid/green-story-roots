import table from "@/assets/furniture-table.jpg";
import chair from "@/assets/furniture-chair.jpg";
import bench from "@/assets/furniture-bench.jpg";
import shelf from "@/assets/furniture-shelf.jpg";
import stool from "@/assets/furniture-stool.jpg";
import lamp from "@/assets/furniture-lamp.jpg";

export interface Furniture {
  name: string;
  slug: string;
  image: string;
  tree: string;
  treeLatin: string;
  treeOrigin: string;
  treeStory: string;
  pieceStory: string;
  dimensions: string;
}

export const woodOptions = ["Walnut", "Oak", "Teak", "Ash", "Cherry", "Maple"];
export const finishOptions = ["Natural oil", "Matte lacquer", "Hand-waxed", "Smoked", "Raw / unfinished"];
export const sizeOptions = ["Small", "Standard", "Large", "Custom dimensions"];

export const furniture: Furniture[] = [
  {
    name: "Riverbend Dining Table",
    slug: "riverbend-dining-table",
    image: table,
    tree: "Black Walnut",
    treeLatin: "Juglans nigra",
    treeOrigin: "Eastern North America",
    treeStory:
      "Black walnut grows slowly along river valleys, often living more than 150 years. Early settlers prized it so highly that walnut trees were sometimes stolen overnight. Its deep chocolate heartwood darkens beautifully with age.",
    pieceStory:
      "Cut from a single storm-fallen walnut, this table keeps the tree's natural live edge — the shape the river wind carved over a century. The central seam follows the trunk's original split.",
    dimensions: "220 × 95 × 76 cm",
  },
  {
    name: "Meadow Lounge Chair",
    slug: "meadow-lounge-chair",
    image: chair,
    tree: "White Oak",
    treeLatin: "Quercus alba",
    treeOrigin: "Europe & North America",
    treeStory:
      "Oak has symbolised strength and endurance across cultures for thousands of years — Celtic druids held ceremonies in oak groves, and wooden ships of the Age of Sail were built from it.",
    pieceStory:
      "Steam-bent oak arms meet a hand-woven natural cord seat. Each chair takes three days to weave, and the pattern loosens gently to the shape of its owner over time.",
    dimensions: "68 × 78 × 74 cm",
  },
  {
    name: "Heritage Entry Bench",
    slug: "heritage-entry-bench",
    image: bench,
    tree: "Reclaimed Teak",
    treeLatin: "Tectona grandis",
    treeOrigin: "South & Southeast Asia",
    treeStory:
      "Teak's natural oils make it resistant to water and insects, which is why it was used for centuries in temples, ships, and monsoon-season homes across India, Burma, and Java.",
    pieceStory:
      "Built from beams salvaged from a century-old Javanese house. The old joinery holes and weathered surface are kept on purpose — every mark is part of its history.",
    dimensions: "140 × 38 × 46 cm",
  },
  {
    name: "Canopy Floating Shelf",
    slug: "canopy-floating-shelf",
    image: shelf,
    tree: "European Ash",
    treeLatin: "Fraxinus excelsior",
    treeOrigin: "Europe",
    treeStory:
      "In Norse mythology, the World Tree Yggdrasil was an ash that held the nine worlds together. Its flexible, strong wood was used for spears, tool handles, and early aircraft frames.",
    pieceStory:
      "A minimal, pale shelf designed as a stage for trailing plants. Hidden brackets make it appear to grow straight from the wall, like a branch.",
    dimensions: "120 × 22 × 6 cm",
  },
  {
    name: "Fern Hollow Stool",
    slug: "fern-hollow-stool",
    image: stool,
    tree: "American Cherry",
    treeLatin: "Prunus serotina",
    treeOrigin: "Eastern North America",
    treeStory:
      "Cherry wood starts pale pink and slowly deepens to a rich reddish-brown when touched by sunlight — a living wood that records the light of the room it lives in.",
    pieceStory:
      "A three-legged stool turned by hand. Three legs never wobble on uneven floors — a design used by farmhouse craftsmen for generations. Doubles as a plant stand.",
    dimensions: "Ø 36 × 42 cm",
  },
  {
    name: "Ember Table Lamp",
    slug: "ember-table-lamp",
    image: lamp,
    tree: "Hard Maple",
    treeLatin: "Acer saccharum",
    treeOrigin: "Canada & Northeastern USA",
    treeStory:
      "The sugar maple gives us maple syrup and the leaf on Canada's flag. Its dense, fine-grained wood is so hard it's used for bowling alleys and basketball courts.",
    pieceStory:
      "The base is lathe-turned from a single maple block and paired with a natural linen shade, casting a warm glow that makes evening plants feel like a forest at dusk.",
    dimensions: "Ø 40 × 62 cm",
  },
];

export const furnitureBySlug: Record<string, Furniture> = Object.fromEntries(
  furniture.map((f) => [f.slug, f])
);
