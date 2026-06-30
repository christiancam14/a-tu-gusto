import { Link } from "react-router-dom";
import { businessInfo } from "../data/heladeria/business-info";

export const HomeHero = () => (
  <div className="text-center text-white px-4 pb-6 md:pb-10">
    <p className="font-myriad text-sm md:text-base uppercase tracking-widest text-white/80 mb-2">
      Bienvenidos a
    </p>
    <h1 className="font-stopbuck text-4xl md:text-6xl lg:text-7xl leading-none mb-4">
      {businessInfo.nombre}
    </h1>
    <p className="font-myriad text-lg md:text-xl max-w-xl mx-auto text-white/95 mb-8">
      {businessInfo.tagline}
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/menu"
        className="font-stopbuck bg-white text-azul px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Ver menú
      </Link>
      <Link
        to="/contacto"
        className="font-stopbuck border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/15 transition-colors"
      >
        Contacto
      </Link>
    </div>
  </div>
);
