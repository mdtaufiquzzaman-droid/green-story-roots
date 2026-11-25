import { describe, it, expect } from "vitest";
import { deliveryFor, totalsOf } from "./cart";

describe("delivery cost", () => {
  it("charges €4.95 at or below €50", () => {
    expect(deliveryFor(30)).toBe(4.95);
    expect(deliveryFor(50)).toBe(4.95);
  });
  it("is free above €50", () => expect(deliveryFor(50.01)).toBe(0));
  it("totals subtotal plus delivery", () => {
    expect(totalsOf([{ slug: "a", kind: "plant", name: "A", image: "", price: 14.95, quantity: 2 }]).total).toBe(34.85);
  });
});
