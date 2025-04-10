import ProductCarousel from "../components/product-carousel";
// import { carouselData } from "../data/carousel-data";
import { productsData } from "../data/data-heladeria";
import { SectionLayout } from "../layouts/section-layout";
import { useColorStore } from "../store/colorStore";
import { Product } from "../types/product";

export const HomePage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);

  const selectedProducts: Product[] = [
    productsData.Cholaos[1],
    productsData.Cholaos[1],
    productsData.Cholaos[2],
    productsData.Copas[0],
  ];

  console.log(productsData.Cholaos);

  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh `}
      >
        <ProductCarousel items={selectedProducts} />
      </SectionLayout>
    </>
  );
};
