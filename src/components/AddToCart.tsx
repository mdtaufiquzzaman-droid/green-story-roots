import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { prices } from "@/data/prices";
import { formatEUR } from "@/lib/cart";
import { toast } from "@/hooks/use-toast";
import QuantityPicker from "./QuantityPicker";

interface Props { slug: string; kind: "plant" | "furniture"; name: string; image: string }

const AddToCart = ({ slug, kind, name, image }: Props) => {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const price = prices[slug];
  if (price === undefined) return null;
  return (
    <div className="space-y-3">
      <p className="text-2xl font-display font-semibold text-foreground">{formatEUR(price)}</p>
      <div className="flex flex-wrap items-center gap-3">
        <QuantityPicker value={qty} onChange={setQty} />
        <button
          onClick={() => { add({ slug, kind, name, image, price }, qty); toast({ title: `${qty} × ${name} added to your cart` }); setQty(1); }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-botanical-light transition-colors"
        >
          <ShoppingBag className="w-4 h-4" /> Add to cart
        </button>
        <Link to="/cart" className="text-sm text-primary hover:underline">View cart</Link>
      </div>
    </div>
  );
};
export default AddToCart;
