import ProductCarousel from "../components/product-carousel";
import { carouselData } from "../data/carousel-data";
import { SectionLayout } from "../layouts/section-layout";
import { useColorStore } from "../store/colorStore";

export const HomePage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);

  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col items-center pt-40 min-h-svh transition-colors duration-700 ease-in-out`}
      >
        <ProductCarousel items={carouselData} />
      </SectionLayout>
    </>
  );
};
