import { ShoppingCart } from "lucide-react";
import useCartStore from "../store/cartStore";
import { useEffect, useState } from "react";

export const NavCartBtn = () => {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;

    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);

    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <span className="relative">
      <ShoppingCart />
      {cartCount > 0 && (
        <span
          className={`absolute bg-azul rounded-full aspect-square w-4 h-4 text-white text-xs flex items-center justify-center -top-1 -right-3 transition-transform duration-300 ${
            animate ? "scale-125" : "scale-100"
          }`}
        >
          {cartCount}
        </span>
      )}
    </span>
  );
};
