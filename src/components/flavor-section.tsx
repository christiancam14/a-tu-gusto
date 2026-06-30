import { saboresHelado } from "../data/heladeria";
import { SectionHeading } from "./section-heading";

export const FlavorSection = () => (
  <section className="bg-rojo rounded-3xl p-8 md:p-12 shadow-xl">
    <SectionHeading
      title="Sabores de helado"
      subtitle="Más de 18 sabores artesanales para combinar como quieras"
    />
    <ul className="flex flex-wrap gap-3 justify-center">
      {saboresHelado.map((sabor) => (
        <li
          key={sabor}
          className="font-myriad bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm md:text-base border border-white/30"
        >
          {sabor}
        </li>
      ))}
    </ul>
  </section>
);
