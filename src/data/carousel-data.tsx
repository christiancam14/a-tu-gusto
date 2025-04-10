import { Product } from "../types/product";

export const carouselData: Product[] = [
  {
    id: "1",
    title: "Fresas con Crema as",
    name: "Fresas con Crema",
    description:
      "La combinación perfecta de fresas frescas y dulce crema batida. Un postre atemporal para disfrutar en cualquier momento.",
    image: "fresas.webp",
    category: "Postres",
    price: 5000,
    color: "bg-amarillo",
    introduce: {
      title: "DELICIA CLÁSICA",
      topic: "Fresas con Crema",
      des: "La combinación perfecta de fresas frescas y dulce crema batida. Un postre atemporal para disfrutar en cualquier momento.",
    },
    detail: {
      title: "Fresas con Crema Tradicional",
      des: "Elaborado con las fresas más jugosas de temporada y una crema chantilly suave y ligera. ¡Un verdadero placer para tu paladar!",
      specifications: [
        {
          label: "Ingredientes",
          value: "Fresas frescas, crema de leche, azúcar",
        },
        { label: "Porción", value: "200 gramos" },
      ],
    },
  },
  {
    id: "2",
    title: "Fresas con Crema as",
    name: "Maracu mango",
    description:
      "Una refrescante mezcla de la acidez del maracuyá y la dulzura del mango. ¡Un sabor que te transportará al paraíso!",
    image: "maracumango.webp",
    category: "Bebidas", //  O la categoría que corresponda
    price: 7000, //  Un price de ejemplo
    color: "bg-amarillo",
    introduce: {
      title: "EXPLOSIÓN TROPICAL",
      topic: "Maracu mango",
      des: "Una refrescante mezcla de la acidez del maracuyá y la dulzura del mango. ¡Un sabor que te transportará al paraíso!",
    },
    detail: {
      title: "Copa Maracumango Exótica",
      des: "Sorbet de maracuyá natural con trozos de mango maduro y un toque de menta fresca. ¡Ideal para los días calurosos!",
      specifications: [
        {
          label: "Ingredientes",
          value: "Maracuyá, mango, azúcar, menta",
        },
        { label: "Porción", value: "250 ml" },
      ],
    },
  },
  {
    id: "3",
    title: "Fresas con Crema as",
    name: "Parfait Helado",
    description:
      "Un delicioso parfait con capas de helado cremoso, granola crujiente y frutas frescas. ¡Una experiencia multisensorial!",
    image: "parfait.webp",
    category: "Postres", //  O la categoría que corresponda
    price: 8000, //  Un price de ejemplo
    color: "bg-amarillo",
    introduce: {
      title: "CAPAS DE SABOR",
      topic: "Parfait Helado",
      des: "Un delicioso parfait con capas de helado cremoso, granola crujiente y frutas frescas. ¡Una experiencia multisensorial!",
    },
    detail: {
      title: "Parfait Helado Artesanal",
      des: "Capa de helado de vainilla, frutos rojos frescos, granola casera y un chorrito de miel de agave. ¡Un desayuno o postre perfecto!",
      specifications: [
        {
          label: "Ingredientes",
          value: "Helado de vainilla, frutos rojos, granola, miel",
        },
        { label: "Porción", value: "300 gramos" },
      ],
    },
  },
  {
    id: "4",
    title: "Fresas con Crema as",
    name: "Salpicón de Frutas",
    description:
      "Una refrescante y colorida mezcla de frutas tropicales bañadas en un dulce jugo. ¡La opción más saludable y deliciosa!",
    image: "salpicon.webp",
    category: "Bebidas", //  O la categoría que corresponda
    price: 6000, //  Un price de ejemplo
    color: "bg-amarillo",
    introduce: {
      title: "FIESTA DE FRUTAS",
      topic: "Salpicón de Frutas",
      des: "Una refrescante y colorida mezcla de frutas tropicales bañadas en un dulce jugo. ¡La opción más saludable y deliciosa!",
    },
    detail: {
      title: "Salpicón Tropical Refrescante",
      des: "Cubos de melón, sandía, piña, banano y papaya en un jugo de naranja natural con un toque de limón. ¡Ideal para compartir!",
      specifications: [
        {
          label: "Ingredientes",
          value: "Melón, sandía, piña, banano, papaya, jugo de naranja, limón",
        },
        { label: "Porción", value: "400 ml" },
      ],
    },
  },
  {
    id: "5",
    title: "Fresas con Crema as",
    name: "Soda de Sandía",
    description:
      "Una bebida burbujeante con el dulce sabor de la sandía fresca y un toque cítrico. ¡Perfecta para quitar la sed!",
    image: "sodaSandia.webp",
    category: "Bebidas", //  O la categoría que corresponda
    price: 5500, //  Un price de ejemplo
    color: "bg-amarillo",
    introduce: {
      title: "BURBUJAS REFRESCANTES",
      topic: "Soda de Sandía",
      des: "Una bebida burbujeante con el dulce sabor de la sandía fresca y un toque cítrico. ¡Perfecta para quitar la sed!",
    },
    detail: {
      title: "Soda de Sandía con Menta",
      des: "Jugo natural de sandía mezclado con agua con gas, hojas de menta fresca y un poco de jarabe de agave. ¡Una explosión de frescura!",
      specifications: [
        {
          label: "Ingredientes",
          value: "Sandía, agua con gas, menta, jarabe de agave, limón",
        },
        { label: "Porción", value: "350 ml" },
      ],
    },
  },
];
