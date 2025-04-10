import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },
      removeItem: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
        } else {
          set({
            cart: get().cart.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          });
        }
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // nombre de la clave en localStorage
    }
  )
);

export default useCartStore;
