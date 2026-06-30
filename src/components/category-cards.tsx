import { Link } from "react-router-dom";
import { categorias } from "../data/heladeria";
import { SectionHeading } from "./section-heading";

export const CategoryCards = () => (
  <section className="bg-amarillo rounded-3xl p-8 md:p-12 shadow-xl">
    <SectionHeading
      title="Explora nuestro menú"
      subtitle="Postres, bebidas y mucho más para compartir"
      light={false}
    />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          to={`/menu#${categoria.id}`}
          className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
        >
          <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">
            {categoria.emoji}
          </span>
          <span className="font-amsi text-sm md:text-base text-stone-800 leading-tight">
            {categoria.nombre}
          </span>
          <span className="font-myriad text-xs text-azul mt-1 block">
            {categoria.productos.length} productos
          </span>
        </Link>
      ))}
    </div>
  </section>
);
