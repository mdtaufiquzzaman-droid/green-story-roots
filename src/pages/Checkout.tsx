import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Info } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useCart } from "@/context/CartContext";
import { totalsOf, formatEUR } from "@/lib/cart";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const tomorrow = () => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().slice(0, 10); };

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().regex(/^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number"),
  address: z.string().trim().min(5, "Please enter your street and house number").max(200),
  postcode: z.string().trim().regex(/^[A-Za-z0-9 -]{3,10}$/, "Please enter a valid postcode"),
  city: z.string().trim().min(2, "Please enter your city").max(100),
  delivery_date: z.string().min(1, "Please choose a delivery date").refine((d) => d >= tomorrow(), "Choose a date from tomorrow onwards"),
  note: z.string().trim().max(500, "Note is too long").optional(),
});
type Form = z.infer<typeof schema>;
const fields: { key: keyof Form; label: string; type?: string; full?: boolean }[] = [
  { key: "name", label: "Full name" }, { key: "email", label: "Email", type: "email" },
  { key: "phone", label: "Phone", type: "tel" }, { key: "delivery_date", label: "Delivery date", type: "date" },
  { key: "address", label: "Delivery address", full: true },
  { key: "postcode", label: "Postcode" }, { key: "city", label: "City" },
];
const inputCls = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Checkout = () => {
  const { items, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<Form>({ name: "", email: "", phone: "", address: "", postcode: "", city: "", delivery_date: "", note: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sending, setSending] = useState(false);
  const totals = totalsOf(items);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = schema.safeParse(form);
    if (!p.success) { setErrors(Object.fromEntries(p.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setErrors({});
    setSending(true);
    const order_number = `BL-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
    const orderItems = items.map(({ slug, kind, name, price, quantity }) => ({ slug, kind, name, price, quantity }));
    const { error } = await supabase.from("orders").insert({ order_number, ...p.data, note: p.data.note || null, items: orderItems, ...totals } as never);
    setSending(false);
    if (error) { toast({ title: "Couldn't place your order", description: "Please try again.", variant: "destructive" }); return; }
    const summary = { order_number, customer: p.data, items: orderItems, ...totals };
    sessionStorage.setItem("botanica-last-order", JSON.stringify(summary));
    clear();
    navigate("/order-confirmation", { state: summary });
  };

  return (
    <PageLayout title="Checkout | Botanica Living" description="Enter your delivery details." path="/checkout" heading="Checkout">
      <div className="flex gap-3 items-start bg-accent/15 border border-accent rounded-lg p-4 mb-8 text-sm text-foreground">
        <Info className="w-5 h-5 shrink-0 text-accent" />
        <p>This is a prototype – no payment is taken and no plant will be shipped.</p>
      </div>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty. <Link to="/cart" className="text-primary hover:underline">Go to cart</Link></p>
      ) : (
        <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-4">
          {fields.map((f) => (
            <label key={f.key} className={`text-sm text-muted-foreground ${f.full ? "sm:col-span-2" : ""}`}>
              {f.label}
              <input type={f.type ?? "text"} min={f.type === "date" ? tomorrow() : undefined} className={`${inputCls} mt-1`} value={form[f.key] ?? ""}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} aria-invalid={!!errors[f.key]} />
              {errors[f.key] && <span className="block text-destructive mt-1">{errors[f.key]}</span>}
            </label>
          ))}
          <label className="text-sm text-muted-foreground sm:col-span-2">Note (optional)
            <textarea rows={3} maxLength={500} className={`${inputCls} mt-1`} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
            {errors.note && <span className="block text-destructive mt-1">{errors.note}</span>}
          </label>
          <div className="sm:col-span-2 bg-card border border-border rounded-lg p-5 text-sm space-y-1">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatEUR(totals.subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{totals.delivery === 0 ? "Free" : formatEUR(totals.delivery)}</span></div>
            <div className="flex justify-between font-semibold text-base pt-2 border-t border-border"><span>Total</span><span>{formatEUR(totals.total)}</span></div>
          </div>
          <button disabled={sending} className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-botanical-light disabled:opacity-60">
            {sending ? "Placing order…" : "Place order"}
          </button>
        </form>
      )}
    </PageLayout>
  );
};
export default Checkout;
