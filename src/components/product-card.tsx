import { Product } from "../types/product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="mx-auto w-full max-w-4xl min-h-80 py-6 px-6 flex justify-center items-center">
      <div className="flex rounded-lg shadow-xl w-full">
        <div
          className="w-1/2 flex flex-col justify-center items-center relative transition-colors duration-300 ease-in-out rounded-tl-lg rounded-bl-lg"
          style={{ backgroundColor: product.color }}
        >
          <div className="absolute top-0 left-0 m-4 opacity-10 w-full">
            <img
              src="logo-bn.svg"
              alt="Logo A Tu gusto"
              className="w-7/12 opacity-40"
            />
          </div>
          <div className="h-full w-full grid place-items-center items-center animate-float">
            <div className="absolute w-full transform rotate-[-30deg] scale-125 translate-x-[-10%] transition-transform duration-300 ease-in-out shoe-4">
              <img src={product.image} alt={product.name} className="w-full" />
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-stone-50 p-4 rounded-tr-lg rounded-br-lg flex flex-col justify-between">
          <div className="p-4">
            <h2
              className="text-4xl font-bold transition-colors duration-300 ease-in-out"
              style={{ color: product.color }}
            >
              {product.name}
            </h2>
            {/* You might want to make this dynamic too */}
          </div>

          <p className="mx-4 mb-4 mt-6 text-stone-700">{product.description}</p>

          <div className="flex justify-between items-center py-4 px-4">
            <h2
              className="text-4xl font-bold transition-colors duration-300 ease-in-out"
              style={{ color: product.color }}
            >
              $ {product.price.toFixed(2)}
            </h2>
            <button
              className="bg-stone-800 text-white rounded-full py-2 px-4 hover:bg-stone-700 transition-colors duration-300 ease-in-out"
              style={{ backgroundColor: product.color }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
