import { useState } from "react";
import { z } from "zod";
import { Lightbulb, Leaf, PencilRuler, Hammer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import hero from "@/assets/soilheart-hero.jpg";
import bed from "@/assets/soilheart-bed.jpg";
import branchShelf from "@/assets/soilheart-branch-shelf.jpg";
import table from "@/assets/furniture-table.jpg";
import stool from "@/assets/furniture-stool.jpg";
import shelf from "@/assets/furniture-shelf.jpg";
import chair from "@/assets/furniture-chair.jpg";

const ideas = [
  { name: "Root Desk", desc: "Compact desk inspired by tree roots, designed for small workspaces.", inspired: "Tree roots spreading to support the trunk.", img: chair },
  { name: "Canopy Bed", desc: "Bed frame with planter space built into the headboard.", inspired: "Sleeping under a forest canopy.", img: bed },
  { name: "Clearing Dining Table", desc: "Dining table with a small plant feature in the centre.", inspired: "A sunny clearing in the woods.", img: table },
  { name: "Branch Bookshelf", desc: "Wooden bookshelf shaped like growing tree branches.", inspired: "The way branches reach toward light.", img: branchShelf },
  { name: "Seedling Stool", desc: "Small-space student stool that doubles as a plant stand.", inspired: "Young seedlings — small but strong.", img: stool },
  { name: "Moss Office Shelf", desc: "Office desk shelf with natural wood and room for greenery.", inspired: "Soft moss growing on a fallen log.", img: shelf },
];

const steps = [
  { icon: Lightbulb, title: "Share your idea", text: "Tell us what you want to create." },
  { icon: Leaf, title: "Find inspiration", text: "Explore shapes, materials and nature-inspired designs." },
  { icon: PencilRuler, title: "Develop the concept", text: "We discuss your idea and create a possible design." },
  { icon: Hammer, title: "Build the product", text: "Your final design can be developed into a physical product." },
];

const ideaSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  what: z.string().trim().min(1, "Tell us what you'd like to create").max(500),
  purpose: z.string().trim().max(500),
  inspiration: z.string().trim().max(300),
  material: z.string().trim().max(100),
  size: z.string().trim().max(100),
  notes: z.string().trim().max(2000),
});

const input = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const empty = { name: "", email: "", what: "", purpose: "", inspiration: "", material: "", size: "", notes: "" };

const SoilHeart = () => {
  const [form, setForm] = useState(empty);
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [create, setCreate] = useState("");
  const [pay, setPay] = useState("");
  const [fbSent, setFbSent] = useState(false);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submitIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = ideaSchema.safeParse(form);
    if (!p.success) return toast({ title: p.error.issues[0].message, variant: "destructive" });
    if (file && (file.size > 5 * 1024 * 1024 || !file.type.startsWith("image/")))
      return toast({ title: "Please upload an image under 5 MB", variant: "destructive" });
    setSending(true);
    let image_path: string | null = null;
    if (file) {
      const path = `${crypto.randomUUID()}.${file.name.split(".").pop()}`;
      const { error } = await supabase.storage.from("idea-images").upload(path, file);
      if (!error) image_path = path;
    }
    const d = p.data;
    const { error } = await supabase.from("idea_submissions").insert({
      name: d.name, email: d.email, what: d.what,
      purpose: d.purpose || null, inspiration: d.inspiration || null, material: d.material || null,
      size: d.size || null, notes: d.notes || null, image_path,
    });
    setSending(false);
    if (error) return toast({ title: "Couldn't submit your idea", description: "Please try again.", variant: "destructive" });
    setSent(true);
  };

  const submitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!create || !pay) return toast({ title: "Please answer both questions", variant: "destructive" });
    const { error } = await supabase.from("feedback_responses").insert({ would_create: create, would_pay: pay });
    if (error) return toast({ title: "Couldn't send feedback", variant: "destructive" });
    setFbSent(true);
  };

  const pill = (active: boolean) =>
    `px-4 py-2 rounded-full border text-sm transition-colors ${active ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-secondary"}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Soil Heart — Your Furniture Idea, Inspired by Nature"
        description="Soil Heart helps you turn your own furniture ideas into nature-inspired designs. Explore ideas and submit yours."
        path="/soil-heart" />
      <Navbar />
      <nav className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 flex gap-6 overflow-x-auto py-3 text-sm text-muted-foreground">
          {[["sh-home","Home"],["ideas","Explore Ideas"],["how","How It Works"],["submit","Submit Your Idea"],["about","About"]].map(([id,l]) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap hover:text-foreground">{l}</a>
          ))}
        </div>
      </nav>

      <main>
        <section id="sh-home" className="container mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Soil Heart · Student prototype</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground leading-tight mb-4">Your idea. <span className="italic text-primary">Inspired by nature.</span></h1>
            <p className="text-lg text-foreground mb-3">Create furniture that connects your space with nature.</p>
            <p className="text-muted-foreground mb-8">Soil Heart helps you turn your own furniture ideas into nature-inspired designs.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#ideas" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90">Explore Ideas</a>
              <a href="#submit" className="border border-border text-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary">Submit Your Idea</a>
            </div>
          </div>
          <img src={hero} alt="Organic wooden furniture with integrated plants" width={1600} height={912} className="rounded-2xl w-full object-cover aspect-[16/10]" />
        </section>

        <section id="ideas" className="bg-secondary/40 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-2">Explore Ideas</h2>
            <p className="text-muted-foreground mb-10">Example concepts to spark your own design.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((i) => (
                <article key={i.name} className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col">
                  <img src={i.img} alt={i.name} loading="lazy" width={1024} height={1024} className="aspect-[4/3] object-cover w-full" />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">{i.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{i.desc}</p>
                    <p className="text-sm text-foreground mb-5"><span className="text-primary font-medium">Inspired by:</span> {i.inspired}</p>
                    <a href="#submit" onClick={() => setForm((f) => ({ ...f, what: `Something similar to the ${i.name}` }))}
                      className="mt-auto text-center border border-primary text-primary rounded-xl py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                      Create Something Similar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-10">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, n) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-6">
                <s.icon className="w-7 h-7 text-primary mb-4" />
                <p className="text-xs text-muted-foreground mb-1">Step {n + 1}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">Soil Heart is an early concept — we're exploring how ideas can become real products.</p>
        </section>

        <section id="submit" className="bg-secondary/40 py-20">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-8">Tell us your furniture idea</h2>
            {sent ? (
              <p className="bg-card rounded-2xl border border-border p-8 text-foreground">Thank you. Your idea has been submitted.</p>
            ) : (
              <form onSubmit={submitIdea} className="bg-card rounded-2xl border border-border p-6 grid sm:grid-cols-2 gap-4">
                <input className={input} placeholder="Name" value={form.name} onChange={set("name")} maxLength={100} />
                <input className={input} type="email" placeholder="Email" value={form.email} onChange={set("email")} maxLength={255} />
                <input className={`${input} sm:col-span-2`} placeholder="What would you like to create?" value={form.what} onChange={set("what")} maxLength={500} />
                <input className={`${input} sm:col-span-2`} placeholder="What is the main purpose?" value={form.purpose} onChange={set("purpose")} maxLength={500} />
                <input className={`${input} sm:col-span-2`} placeholder="What natural element inspires your idea?" value={form.inspiration} onChange={set("inspiration")} maxLength={300} />
                <input className={input} placeholder="Preferred material" value={form.material} onChange={set("material")} maxLength={100} />
                <input className={input} placeholder="Approximate size" value={form.size} onChange={set("size")} maxLength={100} />
                <label className="sm:col-span-2 text-sm text-muted-foreground">Upload inspiration image (optional)
                  <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className={`${input} mt-1`} />
                </label>
                <textarea className={`${input} sm:col-span-2 min-h-24`} placeholder="Additional notes" value={form.notes} onChange={set("notes")} maxLength={2000} />
                <button disabled={sending} className="sm:col-span-2 bg-primary text-primary-foreground rounded-xl py-3 font-medium hover:opacity-90 disabled:opacity-60">
                  {sending ? "Submitting..." : "Submit My Idea"}
                </button>
              </form>
            )}
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-20 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">About Soil Heart</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Soil Heart is based on a simple idea: furniture can be more personal when it is connected to nature. We want to explore how people's own ideas can become unique furniture concepts.</p>
          <p className="font-display italic text-2xl text-primary">Nature inside modern life.</p>
        </section>

        <section className="bg-secondary/40 py-20">
          <div className="container mx-auto px-6 max-w-xl">
            <div className="bg-card rounded-2xl border border-border p-6">
              {fbSent ? (
                <p className="text-foreground text-center">Thanks for your feedback!</p>
              ) : (
                <form onSubmit={submitFeedback} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">What would you create?</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Desk","Bed","Table","Shelf","Other"].map((o) => <button type="button" key={o} onClick={() => setCreate(o)} className={pill(create === o)}>{o}</button>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">Would you consider paying for a customised furniture product?</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Yes","Maybe","No"].map((o) => <button type="button" key={o} onClick={() => setPay(o)} className={pill(pay === o)}>{o}</button>)}
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground rounded-xl py-3 font-medium hover:opacity-90">Submit</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SoilHeart;
