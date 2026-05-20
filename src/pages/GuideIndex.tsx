import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pillars } from "@/data/guides";

const GuideIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Plant & Gardening Guides — Care, Indoor Gardening, Styling | Botanica Living"
        description="Explore our three pillar guides: plant care, indoor gardening, and plant styling. Practical, beautifully written articles for every level of green thumb."
        path="/guides"
        keywords={["plant care guide", "indoor gardening", "plant styling", "houseplant guides", "urban gardening"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Botanica Living Guides",
          url: "https://botanicaliving.xyz/guides",
        }}
      />
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Guides</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-5 leading-tight">
              Field notes for a greener home
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three deep guides — plant care, indoor gardening, and plant styling — built around the questions real plant owners ask. Browse a pillar, dive into a cluster article, or follow the links between them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 flex flex-col"
              >
                <BookOpen className="w-6 h-6 text-primary mb-5" />
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {pillar.tagline}
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  {pillar.clusters.slice(0, 3).map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/guides/${pillar.slug}/${c.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        → {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/guides/${pillar.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Read the {pillar.title} guide <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideIndex;
