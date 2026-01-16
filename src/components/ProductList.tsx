"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/basketSlice";
import { Plus, Sparkles } from "lucide-react";

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-amber-500" />
        Products
      </h2>

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-gray-50 to-white border border-gray-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
          >
            {/* Left: Image + Name */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={98}
                  height={98}
                  className="object-contain"
                />
              </div>

              <div>
                <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {p.name}
                </p>
                <p className="text-sm text-gray-500">£{p.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Right: Button */}
            <button
              onClick={() => dispatch(addItem(p))}
              title="Add item"
              className="relative overflow-hidden bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1 cursor-pointer">
                <Plus className="w-4 h-4" />
                Add
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
