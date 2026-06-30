import { CatalogMenuCard } from "../components/catalog-menu-card";
import { SectionHeading } from "../components/section-heading";
import { enrichedCategorias } from "../data/heladeria/catalog-enriched";
import { heladeriaCatalog } from "../data/heladeria";
import { SectionLayout } from "../layouts/section-layout";

export const MenuPage = () => {
  return (
    <SectionLayout className="bg-azul flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out">
      <SectionHeading
        title="Nuestro menú"
        subtitle={heladeriaCatalog.meta.descripcion}
      />

      <div className="w-full flex flex-col gap-12 pb-14">
        {enrichedCategorias.map((categoria) => (
          <section
            key={categoria.id}
            id={categoria.id}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{categoria.emoji}</span>
              <h2 className="font-stopbuck text-2xl md:text-3xl text-white">
                {categoria.nombre}
              </h2>
            </div>
            {categoria.descripcion && (
              <p className="font-myriad text-white/80 mb-6 ml-14">
                {categoria.descripcion}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoria.productos.map((producto) => (
                <CatalogMenuCard
                  key={producto.nombre}
                  producto={producto}
                  categoryEmoji={categoria.emoji}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionLayout>
  );
};
