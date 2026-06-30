import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { businessInfo } from "../data/heladeria/business-info";
import { saboresHelado } from "../data/heladeria";
import { SectionLayout } from "../layouts/section-layout";

export const ContactPage = () => {
  return (
    <SectionLayout className="bg-amarillo flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out">
      <SectionHeading
        title="Contacto"
        subtitle="Visítanos y disfruta de la mejor experiencia heladería"
        light={false}
      />

      <div className="w-full grid md:grid-cols-2 gap-6 pb-14">
        <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
          <div>
            <h3 className="font-stopbuck text-2xl text-azul mb-2">
              {businessInfo.nombre}
            </h3>
            <p className="font-myriad text-stone-600">{businessInfo.descripcion}</p>
          </div>

          <div className="flex gap-4 items-start">
            <MapPin className="text-rojo shrink-0 mt-1" size={22} />
            <div>
              <p className="font-amsi text-stone-800">Dirección</p>
              <p className="font-myriad text-stone-600">{businessInfo.direccion}</p>
            </div>
          </div>

          {businessInfo.telefono && (
            <div className="flex gap-4 items-start">
              <Phone className="text-rojo shrink-0 mt-1" size={22} />
              <div>
                <p className="font-amsi text-stone-800">Teléfono</p>
                <a
                  href={`tel:${businessInfo.telefono}`}
                  className="font-myriad text-azul hover:underline"
                >
                  {businessInfo.telefono}
                </a>
              </div>
            </div>
          )}

          <div className="flex gap-4 items-start">
            <Clock className="text-rojo shrink-0 mt-1" size={22} />
            <div>
              <p className="font-amsi text-stone-800 mb-2">Horarios</p>
              <ul className="font-myriad text-stone-600 space-y-1">
                {businessInfo.horarios.map(({ dia, hora }) => (
                  <li key={dia}>
                    <span className="font-medium">{dia}:</span> {hora}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/menu"
            className="inline-block font-stopbuck bg-azul text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Ver menú completo
          </Link>
        </div>

        <div className="bg-rojo rounded-3xl p-8 shadow-xl text-white">
          <h3 className="font-stopbuck text-2xl mb-4">
            {saboresHelado.length} sabores de helado
          </h3>
          <p className="font-myriad text-white/90 mb-6">
            Ven por tu favorito o prueba algo nuevo. También tenemos adicionales
            para personalizar cualquier postre.
          </p>
          <ul className="flex flex-wrap gap-2">
            {saboresHelado.slice(0, 10).map((sabor) => (
              <li
                key={sabor}
                className="font-myriad bg-white/20 px-3 py-1 rounded-full text-sm"
              >
                {sabor}
              </li>
            ))}
            <li className="font-myriad bg-white/30 px-3 py-1 rounded-full text-sm">
              +{saboresHelado.length - 10} más
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};
