"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BasketItem from "./BasketItem";
import { ShoppingCart } from "lucide-react";

export default function Basket() {
  const items = useSelector((state: RootState) => state.basket.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-t-2xl  rounded-b-none shadow-xl  flex flex-col h-115">
      {/* 🔒 Header (Fixed) */}
      <div className="flex items-center  justify-between p-6 border border-gray-100">
        <span className="flex items-center text-2xl font-bold text-gray-800 gap-2">
          <ShoppingCart className="w-6 h-6 text-indigo-600" />
          Basket
        </span>

        {totalItems > 0 && (
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full animate-pulse shadow-lg">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {/* 🧾 Scrollable Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent">
        {items.length === 0 ? (
          <div className="text-center py-12 animate-fadeIn">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-3" />
            <p className="text-gray-400 text-lg">Your basket is empty</p>
          </div>
        ) : (
          items.map((item, idx) => (
            <div key={item.id} style={{ animationDelay: `${idx * 50}ms` }}>
              <BasketItem item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
