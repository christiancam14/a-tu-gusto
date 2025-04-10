// components/CartItem.tsx
import React from "react";
import useCartStore from "../store/cartStore";
import { Product } from "../types/product";

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <li className="flex py-6 border-b">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image ? `products/${item.image}` : "/placeholder.jpg"}
          alt={item.introduce.title}
          className="size-full object-contain"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.introduce.title}</h3>
            <p className="ml-4">${(item.price || 0) * item.quantity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.introduce.topic}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm mt-2">
          <div className="flex items-center space-x-2">
            <button
              className="px-2 bg-gray-200 rounded"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="px-2 bg-gray-200 rounded"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="font-medium text-red-500 hover:text-red-600"
            onClick={() => removeItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
