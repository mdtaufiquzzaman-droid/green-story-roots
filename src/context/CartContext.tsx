import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { CartItem } from "@/lib/cart";

const KEY = "botanica-cart";
interface CartCtx {
  items: CartItem[];
  count: number;
  add: (item: Omit<CartItem, "quantity">, qty: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
}
const Ctx = createContext<CartCtx | null>(null);

const load = (): CartItem[] => {
  try { const v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(load);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const add: CartCtx["add"] = (item, qty) => setItems((cur) => {
    const found = cur.find((i) => i.slug === item.slug);
    if (found) return cur.map((i) => i.slug === item.slug ? { ...i, quantity: Math.min(99, i.quantity + qty) } : i);
    return [...cur, { ...item, quantity: qty }];
  });
  const setQty = (slug: string, qty: number) =>
    setItems((cur) => cur.map((i) => i.slug === slug ? { ...i, quantity: Math.max(1, Math.min(99, qty)) } : i));
  const remove = (slug: string) => setItems((cur) => cur.filter((i) => i.slug !== slug));
  const clear = () => setItems([]);

  return <Ctx.Provider value={{ items, count: items.reduce((s, i) => s + i.quantity, 0), add, setQty, remove, clear }}>{children}</Ctx.Provider>;
};

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
