import ProductCarousel from "../components/product-carousel";
import { HomeHero } from "../components/home-hero";
import { FlavorSection } from "../components/flavor-section";
import { CategoryCards } from "../components/category-cards";
import { AdicionalesSection } from "../components/adicionales-section";
import { featuredCarouselProducts } from "../data/heladeria/catalog-enriched";
import { SectionLayout } from "../layouts/section-layout";
import { useColorStore } from "../store/colorStore";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);

  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col p-0 md:p-14 items-center pt-24 md:pt-32 min-h-svh gap-10 md:gap-14 transition-colors duration-700 ease-in-out`}
      >
        <HomeHero />
        <ProductCarousel items={featuredCarouselProducts} />

        <div className="w-full flex flex-col gap-10 md:gap-14 pb-10">
          <FlavorSection />
          <CategoryCards />
          <AdicionalesSection />

          <section className="bg-rojo rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-stopbuck text-3xl md:text-4xl text-white mb-4">
              ¿Listo para antojarte?
            </h2>
            <p className="font-myriad text-white/90 mb-6 max-w-lg mx-auto">
              Explora el menú completo y arma tu pedido favorito.
            </p>
            <Link
              to="/menu"
              className="inline-block font-stopbuck bg-white text-rojo px-10 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Ir al menú
            </Link>
          </section>
        </div>
      </SectionLayout>
    </>
  );
};
