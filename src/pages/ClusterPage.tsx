import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { findCluster } from "@/data/guides";

const ClusterPage = () => {
  const { pillar: pillarSlug, cluster: clusterSlug } = useParams<{
    pillar: string;
    cluster: string;
  }>();
  const match = pillarSlug && clusterSlug ? findCluster(pillarSlug, clusterSlug) : null;

  if (!match) return <Navigate to="/guides" replace />;
  const { pillar, cluster } = match;

  const siblings = pillar.clusters.filter((c) => c.slug !== cluster.slug).slice(0, 4);
  const path = `/guides/${pillar.slug}/${cluster.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${cluster.title} | Botanica Living`}
        description={cluster.metaDescription}
        path={path}
        keywords={cluster.keywords}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cluster.title,
            description: cluster.metaDescription,
            url: `https://botanicaliving.xyz${path}`,
            isPartOf: {
              "@type": "CollectionPage",
              name: pillar.title,
              url: `https://botanicaliving.xyz/guides/${pillar.slug}`,
            },
            publisher: {
              "@type": "Organization",
              name: "Botanica Living",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Guides", item: "https://botanicaliving.xyz/guides" },
              {
                "@type": "ListItem",
                position: 2,
                name: pillar.title,
                item: `https://botanicaliving.xyz/guides/${pillar.slug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: cluster.title,
                item: `https://botanicaliving.xyz${path}`,
              },
            ],
          },
        ]}
      />
      <Navbar />
      <main className="pt-24">
        <article className="container mx-auto px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
              <Link to="/guides" className="hover:text-foreground transition-colors">
                Guides
              </Link>
              <span>/</span>
              <Link
                to={`/guides/${pillar.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {pillar.title}
              </Link>
              <span>/</span>
              <span className="text-foreground">{cluster.title}</span>
            </nav>

            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              {pillar.title}
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-5 leading-tight">
              {cluster.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 italic">
              {cluster.excerpt}
            </p>

            <div className="space-y-10">
              {cluster.content.map((section, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </motion.section>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to={`/guides/${pillar.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {pillar.title}
              </Link>
            </div>
          </motion.div>
        </article>

        {/* Related cluster articles — internal linking */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
              More from {pillar.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`/guides/${pillar.slug}/${s.slug}`}
                  className="group block bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClusterPage;
