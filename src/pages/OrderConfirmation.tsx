import { Link, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { formatEUR } from "@/lib/cart";

interface Summary {
  order_number: string; subtotal: number; delivery: number; total: number;
  customer: { name: string; email: string; address: string; postcode: string; city: string; delivery_date: string };
  items: { slug: string; name: string; price: number; quantity: number }[];
}

const OrderConfirmation = () => {
  const { state } = useLocation();
  let order = state as Summary | null;
  if (!order) { try { order = JSON.parse(sessionStorage.getItem("botanica-last-order") || "null"); } catch { order = null; } }

  return (
    <PageLayout title="Order Confirmed | Botanica Living" description="Your order confirmation." path="/order-confirmation" heading="Thank you for your order">
      {!order ? (
        <p className="text-muted-foreground">No recent order found. <Link to="/" className="text-primary hover:underline">Back to home</Link></p>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-5">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Order number</p>
              <p className="font-display text-2xl font-semibold text-foreground">{order.order_number}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">This is a prototype – no payment was taken and nothing will be shipped.</p>
          <div className="bg-card border border-border rounded-lg p-5 text-sm space-y-2">
            {order.items.map((i) => (
              <div key={i.slug} className="flex justify-between"><span>{i.quantity} × {i.name}</span><span>{formatEUR(i.price * i.quantity)}</span></div>
            ))}
            <div className="flex justify-between pt-2 border-t border-border text-muted-foreground"><span>Subtotal</span><span>{formatEUR(order.subtotal)}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>{order.delivery === 0 ? "Free" : formatEUR(order.delivery)}</span></div>
            <div className="flex justify-between font-semibold text-base"><span>Total</span><span>{formatEUR(order.total)}</span></div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5 text-sm">
            <p className="font-medium text-foreground mb-1">Delivery to</p>
            <p className="text-muted-foreground">{order.customer.name}<br />{order.customer.address}<br />{order.customer.postcode} {order.customer.city}</p>
            <p className="text-muted-foreground mt-2">Requested date: {order.customer.delivery_date}</p>
          </div>
          <Link to="/" className="inline-block text-primary hover:underline">Continue browsing</Link>
        </div>
      )}
    </PageLayout>
  );
};
export default OrderConfirmation;
