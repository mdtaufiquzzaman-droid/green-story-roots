import { useState } from "react";
import { z } from "zod";
import PageLayout from "@/components/PageLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  ease_rating: z.number().int().min(1, "Please choose a number from 1 to 5").max(5),
  care_info: z.enum(["Yes", "Partly", "No"], { errorMap: () => ({ message: "Please choose an answer" }) }),
  would_buy: z.enum(["Yes", "Maybe", "No"], { errorMap: () => ({ message: "Please choose an answer" }) }),
  improve: z.string().trim().max(1000).optional(),
});

const Choice = ({ options, value, onChange, name }: { options: string[]; value: string; onChange: (v: string) => void; name: string }) => (
  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
    {options.map((o) => (
      <button type="button" key={o} role="radio" aria-checked={value === o} onClick={() => onChange(o)}
        className={`px-4 py-2 rounded-md border text-sm ${value === o ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-muted"}`}>{o}</button>
    ))}
  </div>
);

const Feedback = () => {
  const [f, setF] = useState({ ease: "", care: "", buy: "", improve: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = schema.safeParse({ ease_rating: Number(f.ease) || 0, care_info: f.care, would_buy: f.buy, improve: f.improve });
    if (!p.success) { setErrors(Object.fromEntries(p.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setErrors({}); setSending(true);
    const { error } = await supabase.from("feedback").insert({ ...p.data, improve: p.data.improve || null } as never);
    setSending(false);
    if (error) { toast({ title: "Couldn't send feedback", description: "Please try again.", variant: "destructive" }); return; }
    setSent(true);
  };

  return (
    <PageLayout title="Give Feedback | Botanica Living" description="Tell us how we can improve Botanica Living." path="/feedback" eyebrow="Feedback" heading="Help us grow" intro="Four quick questions about your visit.">
      {sent ? <p className="bg-card border border-border rounded-lg p-6 text-foreground">Thank you! Your feedback has been sent.</p> : (
        <form onSubmit={submit} noValidate className="space-y-8">
          <fieldset><legend className="font-medium text-foreground mb-3">How easy was it to find a plant? (1–5)</legend>
            <Choice name="Ease" options={["1", "2", "3", "4", "5"]} value={f.ease} onChange={(v) => setF({ ...f, ease: v })} />
            {errors.ease_rating && <p className="text-sm text-destructive mt-1">{errors.ease_rating}</p>}</fieldset>
          <fieldset><legend className="font-medium text-foreground mb-3">Did you find the care information you needed?</legend>
            <Choice name="Care information" options={["Yes", "Partly", "No"]} value={f.care} onChange={(v) => setF({ ...f, care: v })} />
            {errors.care_info && <p className="text-sm text-destructive mt-1">{errors.care_info}</p>}</fieldset>
          <fieldset><legend className="font-medium text-foreground mb-3">Would you buy a plant here?</legend>
            <Choice name="Would buy" options={["Yes", "Maybe", "No"]} value={f.buy} onChange={(v) => setF({ ...f, buy: v })} />
            {errors.would_buy && <p className="text-sm text-destructive mt-1">{errors.would_buy}</p>}</fieldset>
          <label className="block font-medium text-foreground">What should we improve?
            <textarea rows={4} maxLength={1000} value={f.improve} onChange={(e) => setF({ ...f, improve: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-ring" /></label>
          <button disabled={sending} className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium disabled:opacity-60">{sending ? "Sending…" : "Send feedback"}</button>
        </form>
      )}
    </PageLayout>
  );
};
export default Feedback;
