import { useEffect, useState } from "react";
import { z } from "zod";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Review { id: string; rating: number; name: string; comment: string; created_at: string }
const schema = z.object({
  rating: z.number().int().min(1, "Please choose a star rating").max(5),
  name: z.string().trim().min(1, "Please enter your name").max(100),
  comment: z.string().trim().min(1, "Please write a short comment").max(1000),
});
const inputCls = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Stars = ({ value, size = "w-4 h-4" }: { value: number; size?: string }) => (
  <span className="inline-flex" aria-label={`${value} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => <Star key={n} className={`${size} ${n <= Math.round(value) ? "fill-accent text-accent" : "text-muted-foreground"}`} />)}
  </span>
);

const Reviews = ({ slug }: { slug: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ rating: 0, name: "", comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const load = async () => {
    const { data } = await supabase.from("reviews").select("id,rating,name,comment,created_at").eq("plant_slug", slug).order("created_at", { ascending: false });
    setReviews(data ?? []);
    setLoading(false);
  };
  useEffect(() => { setLoading(true); load(); }, [slug]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = schema.safeParse(form);
    if (!p.success) { setErrors(Object.fromEntries(p.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setErrors({});
    setSending(true);
    const { error } = await supabase.from("reviews").insert({ plant_slug: slug, rating: p.data.rating, name: p.data.name, comment: p.data.comment });
    setSending(false);
    if (error) { toast({ title: "Couldn't post your review", description: "Please try again.", variant: "destructive" }); return; }
    setForm({ rating: 0, name: "", comment: "" });
    toast({ title: "Thank you for your review!" });
    load();
  };

  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <section className="py-20 md:py-28" id="reviews">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Reviews</p>
        <h2 className="text-3xl font-display font-semibold text-foreground mb-4">What growers say</h2>
        {!loading && reviews.length > 0 && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-8"><Stars value={avg} /> {avg.toFixed(1)} out of 5 · {reviews.length} review{reviews.length > 1 ? "s" : ""}</p>
        )}
        {loading ? <p className="text-sm text-muted-foreground mb-8">Loading reviews…</p> : reviews.length === 0 ? (
          <p className="text-muted-foreground mb-8">No reviews yet – be the first to review this plant.</p>
        ) : (
          <ul className="space-y-4 mb-10">
            {reviews.map((r) => (
              <li key={r.id} className="bg-card border border-border rounded-lg p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-medium text-foreground">{r.name}</span>
                  <span className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</span>
                </div>
                <Stars value={r.rating} />
                <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={submit} className="bg-card border border-border rounded-lg p-6 space-y-4" noValidate>
          <h3 className="font-display text-xl text-foreground">Write a review</h3>
          <div>
            <span className="text-sm text-muted-foreground block mb-1">Your rating</span>
            <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" role="radio" aria-checked={form.rating === n} aria-label={`${n} star${n > 1 ? "s" : ""}`} onClick={() => setForm({ ...form, rating: n })}>
                  <Star className={`w-7 h-7 ${n <= form.rating ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>
            {errors.rating && <p className="text-sm text-destructive mt-1">{errors.rating}</p>}
          </div>
          <div>
            <input aria-label="Your name" className={inputCls} placeholder="Your name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <textarea aria-label="Comment" className={inputCls} rows={3} placeholder="A short comment" maxLength={1000} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
            {errors.comment && <p className="text-sm text-destructive mt-1">{errors.comment}</p>}
          </div>
          <button disabled={sending} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium disabled:opacity-60">{sending ? "Posting…" : "Post review"}</button>
        </form>
      </div>
    </section>
  );
};
export default Reviews;
