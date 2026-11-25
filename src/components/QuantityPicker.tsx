import { Minus, Plus } from "lucide-react";

const QuantityPicker = ({ value, onChange, label = "Quantity" }: { value: number; onChange: (n: number) => void; label?: string }) => (
  <div className="inline-flex items-center border border-border rounded-md" role="group" aria-label={label}>
    <button type="button" aria-label="Decrease quantity" onClick={() => onChange(Math.max(1, value - 1))} className="p-2 hover:bg-muted"><Minus className="w-4 h-4" /></button>
    <span className="w-10 text-center text-sm font-medium" aria-live="polite">{value}</span>
    <button type="button" aria-label="Increase quantity" onClick={() => onChange(Math.min(99, value + 1))} className="p-2 hover:bg-muted"><Plus className="w-4 h-4" /></button>
  </div>
);
export default QuantityPicker;
