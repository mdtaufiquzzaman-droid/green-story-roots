import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-semibold text-foreground">Botanica Living</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              A curated plant discovery platform where customers explore plants through their history, origin, and care guidance.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#discover" className="hover:text-foreground transition-colors">Why Botanica</a></li>
              <li><a href="#collection" className="hover:text-foreground transition-colors">Collection</a></li>
              <li><a href="#story" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Connect</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Botanica Living. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
