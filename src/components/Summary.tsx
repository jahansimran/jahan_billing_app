"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { calculateOffers } from "@/utils/calculateOffers";
import { Sparkles } from "lucide-react";

export default function Summary() {
  const items = useSelector((state: RootState) => state.basket.items);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const offers = calculateOffers(items);
  const savings = offers.reduce((s, o) => s + o.saving, 0);

  return (
    <div className="bg-linear-to-br from-indigo-500 to-purple-800 p-6 rounded-b-2xl rounded-t-none shadow-2xl hover:shadow-3xl transition-all duration-300 border border-indigo-400 animate-fadeIn">
      <div className="space-y-3 mb-4">
        <p className="text-lg text-indigo-100 flex justify-between items-center">
          <span>Subtotal:</span>
          <span className="font-semibold text-white">
            £{subtotal.toFixed(2)}
          </span>
        </p>

        {offers.map((o, idx) => (
          <div
            key={o.description}
            className="bg-white/10 backdrop-blur-sm p-3 rounded-lg animate-slideIn hover:bg-white/20 transition-all duration-200"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <p className="text-sm flex justify-between items-center text-white">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                {o.description}
              </span>
              <span className="font-bold text-amber-300">
                -£{o.saving.toFixed(2)}
              </span>
            </p>
          </div>
        ))}
      </div>

      <hr className="my-4 border-white/30" />

      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-white">Total:</p>
        <p className="text-3xl font-bold text-white">
          £{(subtotal - savings).toFixed(2)}
        </p>
      </div>

      {savings > 0 && (
        <p className="text-right text-amber-300 text-sm mt-3 font-medium animate-pulse">
          You saved £{savings.toFixed(2)}! 🎉
        </p>
      )}
    </div>
  );
}
