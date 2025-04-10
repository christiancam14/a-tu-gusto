"use client";

import { SectionLayout } from "./section-layout";
import { useColorStore } from "../store/colorStore";
import { NavCartBtn } from "../components/nav-cart-btn";

export const Navbar = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm z-10 p-4">
      <SectionLayout
        className={`mx-auto max-w-screen-xl px-6 py-4 sm:px-6 lg:px-8 shadow-lg rounded-2xl transition-colors duration-700 ease-in-out ${
          ColorClass === "bg-amarillo" ? "bg-rojo" : "bg-amarillo"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <picture>
                <img
                  src="/logo/logo-azul.svg"
                  alt="logo"
                  className="h-16  transition duration-500 ease-in-out hover:scale-105"
                />
              </picture>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a
                    className="text-white transition hover:text-white/65 font-myriad"
                    href="menu"
                  >
                    {" "}
                    Menú{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/65 font-myriad"
                    href="contacto"
                  >
                    {" "}
                    Contacto{" "}
                  </a>
                </li>
                <a href="/carrito" className="cursor-pointer">
                  <NavCartBtn />
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </SectionLayout>
    </header>
  );
};
