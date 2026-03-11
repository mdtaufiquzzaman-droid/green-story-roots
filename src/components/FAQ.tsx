import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are your plants selected?",
    answer:
      "Every plant in our collection is hand-picked by our botanical team. We focus on plants with rich cultural histories, strong aesthetic appeal, and proven adaptability to indoor environments.",
  },
  {
    question: "Do you ship nationwide?",
    answer:
      "Yes! We ship to all major cities with careful packaging designed to keep your plant healthy during transit. Each order includes a freshness guarantee.",
  },
  {
    question: "What's included with each plant purchase?",
    answer:
      "Every plant comes with its origin story, detailed botanical history, personalized care instructions, and interior styling advice — all accessible through your order.",
  },
  {
    question: "How do your styling services work?",
    answer:
      "Our botanical styling services (launching soon) include virtual and in-home consultations where our designers help you select and arrange plants to transform your space.",
  },
  {
    question: "What if my plant doesn't survive?",
    answer:
      "We stand behind every plant we sell. If your plant doesn't thrive within the first 30 days despite following our care guide, we'll replace it free of charge.",
  },
  {
    question: "Can I return or exchange a plant?",
    answer:
      "We offer exchanges within 7 days of delivery for any reason. Returns are accepted for damaged or unhealthy plants — just reach out to our support team.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Common questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to know about Botanica Living and our plants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
