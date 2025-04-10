import { SectionLayout } from "../layouts/section-layout";
import { productsData } from "../data/data-heladeria";
import { Product } from "../types/product";
import { ProductCard } from "../components/product-card";

export const MenuPage = () => {
  return (
    <>
      <SectionLayout
        className={`bg-azul flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out`}
      >
        <div>
          <h1 className="text-4xl font-extrabold">Nuestros Productos</h1>
          <div className="flex flex-col gap-8">
            {Object.entries(productsData).map(([category, products]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold">{category}</h2>

                <div className="grid grid-cols-2 gap-2">
                  {products.map((product: Product, index: number) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
};
