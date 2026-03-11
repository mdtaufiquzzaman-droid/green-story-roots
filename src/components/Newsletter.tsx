import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Welcome to the community! 🌿",
      description: "You'll receive our latest plant stories and tips soon.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-3">
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Join the Botanica community
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-10">
            Get weekly plant care tips, new arrivals, styling inspiration, and exclusive offers — straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary-foreground/50 transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-xs text-primary-foreground/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
