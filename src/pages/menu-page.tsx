import { Link } from "react-router-dom";
import { SectionLayout } from "../layouts/section-layout";
import { useColorStore } from "../store/colorStore";

export const MenuPage = () => {
  const ColorClass = useColorStore((state) => state.ColorClass);

  return (
    <>
      <SectionLayout
        className={`${ColorClass} flex flex-col p-0 md:p-14 items-center pt-24 md:pt-40 min-h-svh transition-colors duration-700 ease-in-out`}
      >
        <h2>Menu page</h2>
        <div>
          <h1>Nuestros Productos</h1>
          <ul>
            {productList.map((product) => (
              <li key={product.slug}>
                <Link to={`/productos/${product.slug}`}>{product.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionLayout>
    </>
  );
};

//  Suponemos que tienes un array de productos
const productList = [
  { slug: "waffle-pan-de-yuca", title: "Waffle Pan de Yuca" },
  { slug: "copa-brownie", title: "Copa Brownie" },
  //  ... más productos
];
