import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";

const PageLayout = ({ title, description, path, eyebrow, heading, intro, children }: {
  title: string; description: string; path: string; eyebrow?: string; heading: string; intro?: string; children: ReactNode;
}) => (
  <div className="min-h-screen bg-background">
    <SEO title={title} description={description} path={path} />
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        {eyebrow && <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">{heading}</h1>
        {intro && <p className="text-muted-foreground leading-relaxed mb-10">{intro}</p>}
        {children}
      </div>
    </main>
    <Footer />
  </div>
);
export default PageLayout;
