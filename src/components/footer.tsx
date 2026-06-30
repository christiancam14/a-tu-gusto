import { Link } from "react-router-dom";
import { businessInfo } from "../data/heladeria/business-info";

export const Footer = () => (
  <footer className="bg-rojo text-white mt-auto">
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
      <div>
        <img
          src="/logo/logo-azul.svg"
          alt={businessInfo.nombre}
          className="h-14 mb-4 brightness-0 invert"
        />
        <p className="font-myriad text-white/90 text-sm leading-relaxed">
          {businessInfo.descripcion}
        </p>
      </div>

      <div>
        <h3 className="font-stopbuck text-xl mb-4">Enlaces</h3>
        <ul className="font-myriad space-y-2 text-sm">
          <li>
            <Link to="/" className="hover:text-amarillo transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-amarillo transition-colors">
              Menú
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="hover:text-amarillo transition-colors"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/carrito"
              className="hover:text-amarillo transition-colors"
            >
              Carrito
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-stopbuck text-xl mb-4">Horarios</h3>
        <ul className="font-myriad space-y-2 text-sm">
          {businessInfo.horarios.map(({ dia, hora }) => (
            <li key={dia}>
              <span className="font-medium">{dia}:</span> {hora}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/20 py-4 text-center">
      <p className="font-myriad text-sm text-white/70">
        © {new Date().getFullYear()} {businessInfo.nombre}. Todos los
        derechos reservados.
      </p>
    </div>
  </footer>
);
