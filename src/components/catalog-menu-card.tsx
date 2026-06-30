import useCartStore from "../store/cartStore";
import {
  EnrichedCatalogProduct,
  formatPrice,
} from "../data/heladeria/catalog-enriched";

interface Props {
  producto: EnrichedCatalogProduct;
  categoryEmoji: string;
}

export const CatalogMenuCard = ({ producto, categoryEmoji }: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  const tags = [
    ...(producto.sabores ?? []),
    ...(producto.variaciones ?? []),
  ];

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
      {producto.imagen && (
        <div className="bg-stone-100 h-36 flex items-center justify-center p-4">
          <img
            src={`/products/${producto.imagen}`}
            alt={producto.nombre}
            className="max-h-full max-w-full object-contain drop-shadow-md"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-amsi text-lg text-stone-800 leading-tight">
            <span className="mr-1">{categoryEmoji}</span>
            {producto.nombre}
          </h3>
          {producto.precio != null && (
            <span className="font-stopbuck text-rojo whitespace-nowrap text-sm md:text-base">
              {formatPrice(producto.precio)}
            </span>
          )}
        </div>

        {producto.descripcion && (
          <p className="font-myriad text-sm text-stone-600 flex-1">
            {producto.descripcion}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-myriad text-xs bg-azul/10 text-azul px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {producto.cartProduct ? (
          <button
            onClick={() => addItem(producto.cartProduct!)}
            className="mt-3 font-stopbuck w-full bg-azul text-white py-2 px-4 rounded-full hover:bg-azul/90 transition-colors cursor-pointer text-sm"
          >
            Agregar al carrito
          </button>
        ) : (
          <p className="mt-3 font-myriad text-xs text-stone-400 italic">
            Pregunta en mostrador por opciones y precios
          </p>
        )}
      </div>
    </article>
  );
};
