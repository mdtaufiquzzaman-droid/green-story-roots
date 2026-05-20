import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pillarsBySlug, pillars } from "@/data/guides";
import { plants } from "@/data/plants";

const PillarPage = () => {
  const { pillar: pillarSlug } = useParams<{ pillar: string }>();
  const pillar = pillarSlug ? pillarsBySlug[pillarSlug] : undefined;

  if (!pillar) return <Navigate to="/guides" replace />;

  // Related plants — pick a few of the existing plant detail pages for internal linking
  const relatedPlants = plants.slice(0, 4);
  const otherPillars = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={pillar.metaTitle}
        description={pillar.metaDescription}
        path={`/guides/${pillar.slug}`}
        keywords={pillar.keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pillar.title,
          description: pillar.metaDescription,
          url: `https://botanicaliving.xyz/guides/${pillar.slug}`,
          hasPart: pillar.clusters.map((c) => ({
            "@type": "Article",
            headline: c.title,
            url: `https://botanicaliving.xyz/guides/${pillar.slug}/${c.slug}`,
          })),
        }}
      />
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All guides
            </Link>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Pillar guide
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-5 leading-tight">
              {pillar.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{pillar.intro}</p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            In this guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillar.clusters.map((cluster, i) => (
              <motion.article
                key={cluster.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <Link to={`/guides/${pillar.slug}/${cluster.slug}`} className="block">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {cluster.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cluster.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Related plants — internal linking */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Plants to practise on
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              Apply what you learn here to a real plant from our collection.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {relatedPlants.map((plant) => (
                <Link
                  key={plant.slug}
                  to={`/plant/${plant.slug}`}
                  className="group block bg-background border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={plant.image}
                      alt={`${plant.name} houseplant`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {plant.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{plant.light} light</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other pillars — internal linking */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            Continue exploring
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherPillars.map((p) => (
              <Link
                key={p.slug}
                to={`/guides/${p.slug}`}
                className="block bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-2">
                  Pillar
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PillarPage;
