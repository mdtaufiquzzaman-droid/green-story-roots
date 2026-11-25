import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageLayout from "@/components/PageLayout";

const faqs = [
  { q: "How long does delivery take?", a: "This site is a prototype, so nothing is shipped yet. When we launch, you'll choose your preferred delivery date at checkout." },
  { q: "How much does delivery cost?", a: "Delivery is €4.95. Orders above €50 are delivered free." },
  { q: "Can I return a plant?", a: "Our return policy will be published before launch. Until then, please contact us with any questions." },
  { q: "Where can I get help caring for my plant?", a: "Every plant page has a full care guide, and our Guides section covers light, watering, soil and more." },
  { q: "How do I contact you?", a: "Use the contact form and we'll reply by email." },
];

const HelpFAQ = () => (
  <PageLayout title="FAQ – Delivery, Returns & Care | Botanica Living" description="Answers about delivery times, delivery cost, returns, plant care help and contacting Botanica Living." path="/help" eyebrow="Help" heading="Frequently asked questions">
    <Accordion type="single" collapsible className="mb-8">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`f${i}`}>
          <AccordionTrigger className="text-left font-display text-foreground">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    <p className="text-sm text-muted-foreground">See <Link to="/guides" className="text-primary hover:underline">care guides</Link>, <Link to="/how-to-order" className="text-primary hover:underline">how to order</Link>, or <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
  </PageLayout>
);
export default HelpFAQ;
