import ProductCarousel from "../components/product-carousel";
// import { carouselData } from "../data/carousel-data";
import { productsData } from "../data/data-heladeria";
import { SectionLayout } from "../layouts/section-layout";
import { useColorStore } from "../store/colorStore";
import { Product } from "../types/product";

export const HomePage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);
  // const productsCaroulse = productsData.Crepes;

  const selectedProducts: Product[] = [
    ...productsData.Obleas.slice(0, 2), //  First 2 Obleas
    productsData.Ensaladas[0], //  First Ensalada
    ...productsData.Malteadas.slice(1, 3), //  2 Malteadas
    productsData.Copas[2], //  One Copa
  ];

  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out`}
      >
        <ProductCarousel items={selectedProducts} />
      </SectionLayout>
    </>
  );
};
