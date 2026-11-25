import { Link } from "react-router-dom";
import { Leaf, ShoppingBag, ClipboardList, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const steps = [
  { icon: Leaf, title: "Choose a plant", text: "Browse the collection and open any plant to read its story, care guide and styling tips." },
  { icon: ShoppingBag, title: "Add to cart", text: "Pick a quantity and press “Add to cart”. The cart icon at the top shows how many items you have." },
  { icon: ClipboardList, title: "Checkout", text: "Open your cart, check the total and fill in your delivery details and preferred date." },
  { icon: CheckCircle2, title: "Confirmation", text: "You'll see an order number and a summary of your order straight away." },
];

const HowToOrder = () => (
  <PageLayout title="How to Order | Botanica Living" description="Order a plant from Botanica Living in four simple steps." path="/how-to-order" eyebrow="Help" heading="How to order" intro="Four simple steps from browsing to confirmation.">
    <ol className="space-y-4 mb-10">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4 bg-card border border-border rounded-lg p-5">
          <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><s.icon className="w-5 h-5 text-primary" /></span>
          <div><h2 className="font-display text-lg text-foreground">{i + 1}. {s.title}</h2><p className="text-sm text-muted-foreground">{s.text}</p></div>
        </li>
      ))}
    </ol>
    <p className="text-sm text-muted-foreground">Questions? See the <Link to="/help" className="text-primary hover:underline">FAQ</Link> or <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
  </PageLayout>
);
export default HowToOrder;
