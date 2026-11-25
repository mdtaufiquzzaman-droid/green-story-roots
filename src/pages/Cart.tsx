import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import QuantityPicker from "@/components/QuantityPicker";
import { useCart } from "@/context/CartContext";
import { totalsOf, formatEUR, FREE_DELIVERY_ABOVE } from "@/lib/cart";

const Cart = () => {
  const { items, setQty, remove } = useCart();
  const { subtotal, delivery, total } = totalsOf(items);
  return (
    <PageLayout title="Your Cart | Botanica Living" description="Review the plants and pieces in your cart." path="/cart" heading="Your cart">
      {items.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <a href={`${import.meta.env.BASE_URL}#collection`} className="text-primary hover:underline">Browse the collection</a>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-border border border-border rounded-lg bg-card mb-8">
            {items.map((i) => (
              <li key={i.slug} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                <img src={i.image} alt={i.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1">
                  <Link to={`/${i.kind}/${i.slug}`} className="font-medium text-foreground hover:text-primary">{i.name}</Link>
                  <p className="text-sm text-muted-foreground">{formatEUR(i.price)} each</p>
                </div>
                <div className="flex items-center gap-4">
                  <QuantityPicker value={i.quantity} onChange={(n) => setQty(i.slug, n)} />
                  <span className="w-24 text-right font-medium text-foreground">{formatEUR(i.price * i.quantity)}</span>
                  <button aria-label={`Remove ${i.name}`} onClick={() => remove(i.slug)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatEUR(subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{delivery === 0 ? "Free" : formatEUR(delivery)}</span></div>
            {delivery > 0 && <p className="text-xs text-muted-foreground">Free delivery on orders above {formatEUR(FREE_DELIVERY_ABOVE)}.</p>}
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-border"><span>Total</span><span>{formatEUR(total)}</span></div>
            <Link to="/checkout" className="block text-center mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-botanical-light transition-colors">Go to checkout</Link>
          </div>
        </>
      )}
    </PageLayout>
  );
};
export default Cart;
