"use client";

import { BasketItem as BasketItemType } from "@/types";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "@/redux/basketSlice";
import { Minus, Plus, Trash2 } from "lucide-react";

type Props = {
  item: BasketItemType;
};

export default function BasketItem({ item }: Props) {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const remove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-800">{item.name}</p>
          <p className="text-sm text-gray-500">
            £{item.price.toFixed(2)} × {item.quantity} ={" "}
            <span className="font-semibold text-gray-700">
              £{(item.price * item.quantity).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* CONDITIONAL BUTTON */}
          {item.quantity === 1 ? (
            <button
              onClick={remove}
              className="w-8 h-8 flex items-center justify-center rounded border border-red-300 text-red-600 hover:bg-red-50 transition cursor-pointer"
              title="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={decrease}
              title="Decrease item"
              className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 hover:bg-slate-100 transition cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
          )}

          <span className="w-6 text-center font-medium">{item.quantity}</span>

          <button
            onClick={increase}
            title="Increase item"
            className="w-8 h-8 flex items-center justify-center rounded bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
