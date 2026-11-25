export interface CartItem { slug: string; kind: "plant" | "furniture"; name: string; image: string; price: number; quantity: number }

export const DELIVERY_FEE = 4.95;
export const FREE_DELIVERY_ABOVE = 50;

export const subtotalOf = (items: CartItem[]) =>
  Math.round(items.reduce((s, i) => s + i.price * i.quantity, 0) * 100) / 100;

export const deliveryFor = (subtotal: number) =>
  subtotal === 0 || subtotal > FREE_DELIVERY_ABOVE ? 0 : DELIVERY_FEE;

export const totalsOf = (items: CartItem[]) => {
  const subtotal = subtotalOf(items);
  const delivery = deliveryFor(subtotal);
  return { subtotal, delivery, total: Math.round((subtotal + delivery) * 100) / 100 };
};

export const formatEUR = (n: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(n);
