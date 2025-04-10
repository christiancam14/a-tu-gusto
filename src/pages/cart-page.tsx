import CartItem from "../components/cart-item";
import { SectionLayout } from "../layouts/section-layout";
import useCartStore from "../store/cartStore";
import { useColorStore } from "../store/colorStore";

export const CartPage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * (item.price || 0),
    0
  );
  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out`}
      >
        <div className="p-4 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Tu carrito</h1>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <div className="mt-6 text-right">
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            </div>
          )}
        </div>
      </SectionLayout>
    </>
  );
};
