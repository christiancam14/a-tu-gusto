import { adicionales } from "../data/heladeria";
import { SectionHeading } from "./section-heading";

export const AdicionalesSection = () => (
  <section className="bg-azul rounded-3xl p-8 md:p-12 shadow-xl">
    <SectionHeading
      title="Adicionales"
      subtitle="Personaliza tu postre favorito con estos extras"
    />
    <ul className="flex flex-wrap gap-3 justify-center">
      {adicionales.map((item) => (
        <li
          key={item}
          className="font-myriad bg-white text-azul px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  </section>
);
