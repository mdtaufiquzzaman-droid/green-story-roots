import { useState } from "react";
import { z } from "zod";
import PageLayout from "@/components/PageLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5, "Please write a message").max(2000, "Message is too long"),
});
type Form = z.infer<typeof schema>;
const inputCls = "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Contact = () => {
  const [f, setF] = useState<Form>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = schema.safeParse(f);
    if (!p.success) { setErrors(Object.fromEntries(p.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setErrors({}); setSending(true);
    const { error } = await supabase.from("messages").insert({ name: p.data.name, email: p.data.email, subject: p.data.subject || null, message: p.data.message });
    setSending(false);
    if (error) { toast({ title: "Couldn't send your message", description: "Please try again.", variant: "destructive" }); return; }
    setSent(true);
  };
  const field = (k: keyof Form, label: string, type = "text") => (
    <label className="block text-sm text-muted-foreground">{label}
      <input type={type} className={inputCls} value={f[k] ?? ""} onChange={(e) => setF({ ...f, [k]: e.target.value })} />
      {errors[k] && <span className="block text-destructive mt-1">{errors[k]}</span>}
    </label>
  );

  return (
    <PageLayout title="Contact | Botanica Living" description="Get in touch with Botanica Living." path="/contact" eyebrow="Contact" heading="Get in touch" intro="Send us a message and we'll reply by email.">
      {sent ? <p className="bg-card border border-border rounded-lg p-6 text-foreground">Thank you! Your message has been sent.</p> : (
        <form onSubmit={submit} noValidate className="space-y-4">
          {field("name", "Name")}{field("email", "Email", "email")}{field("subject", "Subject (optional)")}
          <label className="block text-sm text-muted-foreground">Message
            <textarea rows={5} className={inputCls} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
            {errors.message && <span className="block text-destructive mt-1">{errors.message}</span>}
          </label>
          <button disabled={sending} className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium disabled:opacity-60">{sending ? "Sending…" : "Send message"}</button>
        </form>
      )}
    </PageLayout>
  );
};
export default Contact;
