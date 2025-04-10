import { ProductsData } from "../types/product";

export const SaboresDeHelado: string[] = [
  "Ron con pasas",
  "Brownie",
  "Vainilla chips",
  "Chocolate",
  "Lulo-Maracuyá",
  "Natamaní",
  "Arequipe",
  "Fresa",
  "Chicle",
  "Vainilla",
  "Tres Leches",
  "Maracuyá",
  "Mandarina",
  "Frutos rojos",
  "Capuchino",
  "Caramelo",
  "Yogurt",
  "Veteado de mora",
];

export const productsData: ProductsData = {
  Obleas: [
    {
      id: "1",
      name: "Oblea de Arequipe",
      description: "",
      price: 5000,
      image: "/images/obleas/arequipe.jpg",
      category: "Obleas",
    },
    {
      id: "2",
      name: "Oblea de Arequipe, queso",
      description: "",
      price: 6000,
      image: "/images/obleas/arequipe_queso.jpg",
      category: "Obleas",
    },
    {
      id: "3",
      name: "Oblea de Arequipe, queso, chantilly y salsa de frutos rojos",
      description: "",
      price: 7000,
      image: "/images/obleas/arequipe_queso_chantilly_frutosrojos.jpg",
      category: "Obleas",
    },
    {
      id: "4",
      name: "Oblea de Arequipe, queso, salsa de frutos rojos, chantilly, fresa",
      description: "",
      price: 8000,
      image: "/images/obleas/arequipe_queso_frutosrojos_chantilly_fresa.jpg",
      category: "Obleas",
    },
  ],
  Ensaladas: [
    {
      id: "5",
      name: "Ensalada especial",
      description:
        "Mango, banano, piña en almíbar, papaya, patilla, melón, crema de la casa, manzana, fresa, queso, granola, kiwi, durazno, chantilly, cereza y 2 sabores de helado.",
      price: 12000,
      image: "/images/ensaladas/especial.jpg",
      category: "Ensaladas",
    },
    {
      id: "6",
      name: "Ensalada pequeña",
      description:
        "Mango, banano, piña en almíbar, papaya, patilla, melón, crema de la casa, manzana, fresa, queso, granola y helado",
      price: 8000,
      image: "/images/ensaladas/pequena.jpg",
      category: "Ensaladas",
    },
  ],
  Malteadas: [
    {
      id: "7",
      name: "Brownie",
      description:
        "Malteada de chocolate, nutella, mini chips, brownie, chantilly, oreo triturada, salsa de arequipe, Galleta oreo, salsa de chocolate.",
      price: 10000,
      image: "/images/malteadas/brownie.jpg",
      category: "Malteadas",
    },
    {
      id: "8",
      name: "Waffle",
      description:
        "Malteada de frutos rojos, chantilly, waffle, chocmelos, maní, arequipe, fresas, salsa de chocolate y de frutos rojos",
      price: 11000,
      image: "/images/malteadas/waffle.jpg",
      category: "Malteadas",
    },
    {
      id: "9",
      name: "Sweet Ron",
      description:
        "Malteada de 3 leches con ron, nutella, chantilly, oreo triturado, salsa de chocolate, chocmelos, barquillo.",
      price: 12000,
      image: "/images/malteadas/sweet_ron.jpg",
      category: "Malteadas",
    },
    {
      id: "10",
      name: "Cono",
      description:
        "Malteada de vainilla arequipe, m&m's. cono, chantilly, golochips salsa de frutos rojos, marshmallows, pepitas de colores.",
      price: 10000,
      image: "/images/malteadas/cono.jpg",
      category: "Malteadas",
    },
    {
      id: "11",
      name: "Strawberry",
      description:
        "Malteada de maracuyá chantilly, arequipe. chococrispys, salsa de chocolate, chocmelos y fresas.",
      price: 11000,
      image: "/images/malteadas/strawberry.jpg",
      category: "Malteadas",
    },
  ],
  Infantil: [
    {
      id: "12",
      name: "Pollito",
      description: "",
      price: 6000,
      image: "/images/infantil/pollito.jpg",
      category: "Infantil",
    },
    {
      id: "13",
      name: "Payasito",
      description: "",
      price: 6500,
      image: "/images/infantil/payasito.jpg",
      category: "Infantil",
    },
    {
      id: "14",
      name: "Osito",
      description: "",
      price: 6500,
      image: "/images/infantil/osito.jpg",
      category: "Infantil",
    },
    {
      id: "15",
      name: "Arañita",
      description: "",
      price: 6000,
      image: "/images/infantil/aranita.jpg",
      category: "Infantil",
    },
    {
      id: "16",
      name: "Buho",
      description: "",
      price: 7000,
      image: "/images/infantil/buho.jpg",
      category: "Infantil",
    },
    {
      id: "17",
      name: "Mariposa",
      description: "",
      price: 7000,
      image: "/images/infantil/mariposa.jpg",
      category: "Infantil",
    },
    {
      id: "18",
      name: "Gatico",
      description: "",
      price: 6500,
      image: "/images/infantil/gatico.jpg",
      category: "Infantil",
    },
    {
      id: "19",
      name: "Gusanito",
      description: "",
      price: 6000,
      image: "/images/infantil/gusanito.jpg",
      category: "Infantil",
    },
    {
      id: "20",
      name: "Ratoncito",
      description: "",
      price: 7000,
      image: "/images/infantil/ratoncito.jpg",
      category: "Infantil",
    },
  ],
  Copas: [
    {
      id: "21",
      name: "Maracumango",
      description:
        "Chantilly, maracuyá, (mango, piña), helado, lechera, barquillo.",
      price: 9000,
      image: "/images/copas/maracumango.jpg",
      category: "Copas",
    },
    {
      id: "23",
      name: "Gelatina con Helado",
      description:
        "Gelatina, 2 bolas de helado, queso, chantilly, morita, salsa de frutos rojos, pepitas de colores, barquillo, crema de la casa.",
      price: 8500,
      image: "/images/copas/gelatina_helado.jpg",
      category: "Copas",
    },
    {
      id: "24",
      name: "Copa durazno",
      description:
        "2 bolas de helado, chantillí, durazno, arequipe, lluvia de chocolate.",
      price: 8000,
      image: "/images/copas/durazno.jpg",
      category: "Copas",
    },
    {
      id: "25",
      name: "Fresas con crema",
      description: "Chantilly, helado, salsa de frutos rojos, fresa, cereza.",
      price: 7500,
      image: "/images/copas/fresas_crema.jpg",
      category: "Copas",
    },
    {
      id: "26",
      name: "Copa de Baileys",
      description:
        "Malteada, crema de baileys, chantilly, oreo triturado, gala.",
      price: 10000,
      image: "/images/copas/baileys.jpg",
      category: "Copas",
    },
  ],
  Crepes: [
    {
      id: "27",
      name: "Crepe Tropical",
      description:
        "Tortilla, salsa de arequipe, salsa de frutos rojos, piña en almíbar, maracuyá, chantilly y helado.",
      price: 9000,
      image: "/images/crepes/tropical.jpg",
      category: "Crepes",
    },
    {
      id: "28",
      name: "Crepe Choco-fresa",
      description:
        "Tortilla, Crema de la casa, Fresa, Crema Chantilly, Salsa de chocolate, Cobertura de chocolate, Helado.",
      price: 9500,
      image: "/images/crepes/choco_fresa.jpg",
      category: "Crepes",
    },
    {
      id: "29",
      name: "Crepe",
      description:
        "Tortilla, Nutella, banano, fresa, salsa de chocolate, chantilly y helado.",
      price: 10000,
      image: "/images/crepes/nutella.jpg",
      category: "Crepes",
    },
  ],
  Waffles: [
    {
      id: "30",
      name: "Waffle Pan de Yuca",
      description:
        "Waffle de pan de yuca, Queso doble crema, Salsa de arequipe, Barquillo, Crema Chantilly, Helado.",
      price: 8500,
      image: "/images/waffles/pan_yuca.jpg",
      category: "Waffles",
    },
    {
      id: "31",
      name: "Waffle",
      description:
        "Waffle, fresa, durazno, banano, kiwi, arequipe, salsa de chocolate y una bola de helado.",
      price: 9000,
      image: "/images/waffles/frutas.jpg",
      category: "Waffles",
    },
    {
      id: "32",
      name: "Waffle éxtasis de chocolate",
      description:
        "Waffle de chocolate, cobertura de chocolate, oreo triturado, m&m's, chocmelos, barquillos chantilly, helado y salsa de chocolate.",
      price: 10000,
      image: "/images/waffles/chocolate.jpg",
      category: "Waffles",
    },
  ],
  Cholaos: [
    {
      id: "33",
      name: "Cholao",
      description:
        "Raspao', lechera, mango, fresa, maracuyá, guanábana, milo, helado, manzana, piña, banano.",
      price: 7000,
      image: "/images/cholaos/cholao.jpg",
      category: "Cholaos",
    },
    {
      id: "34",
      name: "Parfait",
      description:
        "Yogurt, granola, mango, fresa, banano, chantilly, manzana, salsa de frutos rojos.",
      price: 7500,
      image: "/images/cholaos/parfait.jpg",
      category: "Cholaos",
    },
    {
      id: "35",
      name: "Matrimonio",
      description:
        "Guanábana, salpicón, queso, lechera, manzana, bola de helado.",
      price: 8000,
      image: "/images/cholaos/matrimonio.jpg",
      category: "Cholaos",
    },
    {
      id: "36",
      name: "Merengón",
      description: "Merengon, Chantilly, Crema de la casa.",
      price: 8500,
      image: "/images/cholaos/merengon.jpg",
      category: "Cholaos",
    },
    {
      id: "37",
      name: "Cono XL",
      description:
        "Banano, Fresa, 3 Bolas de helado, Crema Chantilly, Cobertura de chocolate , 2 salsas.",
      price: 9000,
      image: "/images/cholaos/cono_xl.jpg",
      category: "Cholaos",
    },
  ],
  Frappés: [
    {
      id: "38",
      name: "Milo",
      description: "",
      variations: ["Con helado", "Sin helado"],
      price: 6000,
      image: "/images/frappes/milo.jpg",
      category: "Frappés",
    },
    {
      id: "39",
      name: "Café",
      description: "",
      variations: ["Con helado", "Sin helado"],
      price: 6500,
      image: "/images/frappes/cafe.jpg",
      category: "Frappés",
    },
    {
      id: "40",
      name: "Oreo",
      description: "",
      variations: ["Con helado", "Sin helado"],
      price: 7000,
      image: "/images/frappes/oreo.jpg",
      category: "Frappés",
    },
  ],
};
