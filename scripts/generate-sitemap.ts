// Runs before `vite dev` and `vite build` via predev/prebuild hooks; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://botanicaliving.xyz";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

// Static + dynamic routes
const plantSlugs = [
  "monstera-deliciosa",
  "snake-plant",
  "fiddle-leaf-fig",
  "golden-pothos",
  "peace-lily",
  "zz-plant",
  "bird-of-paradise",
  "aloe-vera",
  "rubber-plant",
];

const pillars: { slug: string; clusters: string[] }[] = [
  {
    slug: "plant-care",
    clusters: [
      "watering-houseplants",
      "understanding-plant-light",
      "humidity-for-tropical-plants",
      "fertilising-houseplants",
      "common-houseplant-pests",
    ],
  },
  {
    slug: "indoor-gardening",
    clusters: [
      "best-plants-for-beginners",
      "low-light-apartments",
      "windowsill-herb-garden",
      "small-space-vertical-gardens",
      "propagating-plants-at-home",
    ],
  },
  {
    slug: "plant-styling",
    clusters: [
      "styling-living-room-plants",
      "bedroom-plants",
      "bathroom-plants",
      "building-an-indoor-jungle",
      "choosing-planters-and-pots",
    ],
  },
];

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/guides", changefreq: "weekly", priority: "0.9" },
  ...pillars.map((p) => ({ path: `/guides/${p.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
  ...pillars.flatMap((p) =>
    p.clusters.map((c) => ({ path: `/guides/${p.slug}/${c}`, changefreq: "monthly" as const, priority: "0.7" })),
  ),
  ...plantSlugs.map((s) => ({ path: `/plant/${s}`, changefreq: "monthly" as const, priority: "0.7" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
