import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, TreePine, Hammer, Ruler } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { furnitureBySlug, woodOptions, finishOptions, sizeOptions } from "@/data/furniture";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import NotFound from "./NotFound";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  wood: z.string().max(50),
  finish: z.string().max(50),
  size: z.string().max(50),
  notes: z.string().trim().max(2000).optional(),
});

const selectCls = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const FurnitureDetail = () => {
  const { slug } = useParams();
  const item = slug ? furnitureBySlug[slug] : undefined;
  const [form, setForm] = useState({ name: "", email: "", wood: "", finish: finishOptions[0], size: sizeOptions[1], notes: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!item) return <NotFound />;
  const wood = form.wood || item.tree.split(" ").pop()!;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ ...form, wood });
    if (!parsed.success) {
      toast({ title: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    const { error } = await supabase.from("furniture_requests").insert({
      furniture_slug: item.slug,
      name: parsed.data.name,
      email: parsed.data.email,
      wood: parsed.data.wood,
      finish: parsed.data.finish,
      size: parsed.data.size,
      notes: parsed.data.notes || null,
    });
    setSending(false);
    if (error) {
      toast({ title: "Couldn't send your request", description: "Please try again.", variant: "destructive" });
      return;
    }
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${item.name} — ${item.tree} Furniture | Botanica Living`}
        description={`${item.pieceStory.slice(0, 140)}`} path={`/furniture/${item.slug}`} />
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <Link to="/#furniture" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to furniture
          </Link>
          <div className="grid lg:grid-cols-2 gap-12">
            <img src={item.image} alt={`${item.name} made from ${item.tree}`} width={1024} height={1024}
              className="w-full rounded-lg object-cover aspect-square" />
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">{item.tree} · <em>{item.treeLatin}</em></p>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">{item.name}</h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h2 className="flex items-center gap-2 font-display text-xl text-foreground mb-2"><TreePine className="w-5 h-5 text-primary" /> The tree</h2>
                  <p className="text-sm mb-1">Origin: {item.treeOrigin}</p>
                  <p>{item.treeStory}</p>
                </div>
                <div>
                  <h2 className="flex items-center gap-2 font-display text-xl text-foreground mb-2"><Hammer className="w-5 h-5 text-primary" /> The piece</h2>
                  <p>{item.pieceStory}</p>
                </div>
                <p className="flex items-center gap-2 text-sm"><Ruler className="w-4 h-4" /> {item.dimensions}</p>
              </div>
            </div>
          </div>

          <section className="mt-20 max-w-2xl mx-auto bg-card rounded-lg border border-border p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Design your own version</h2>
            <p className="text-sm text-muted-foreground mb-6">Choose your wood, finish, and size, and tell us your ideas. We'll reply by email with a quote.</p>
            {sent ? (
              <p className="text-foreground">Thank you! Your custom request has been sent. We'll be in touch soon.</p>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
                <input className={selectCls} placeholder="Your name" value={form.name} onChange={set("name")} maxLength={100} />
                <input className={selectCls} type="email" placeholder="Email" value={form.email} onChange={set("email")} maxLength={255} />
                <label className="text-sm text-muted-foreground">Wood
                  <select className={selectCls} value={wood} onChange={set("wood")}>{woodOptions.map((o) => <option key={o}>{o}</option>)}</select>
                </label>
                <label className="text-sm text-muted-foreground">Finish
                  <select className={selectCls} value={form.finish} onChange={set("finish")}>{finishOptions.map((o) => <option key={o}>{o}</option>)}</select>
                </label>
                <label className="text-sm text-muted-foreground sm:col-span-2">Size
                  <select className={selectCls} value={form.size} onChange={set("size")}>{sizeOptions.map((o) => <option key={o}>{o}</option>)}</select>
                </label>
                <textarea className={`${selectCls} sm:col-span-2 min-h-28`} placeholder="Describe changes you'd like (shape, dimensions, details...)"
                  value={form.notes} onChange={set("notes")} maxLength={2000} />
                <button disabled={sending} className="sm:col-span-2 bg-primary text-primary-foreground rounded-md py-3 font-medium hover:opacity-90 disabled:opacity-60">
                  {sending ? "Sending..." : "Send custom request"}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FurnitureDetail;
