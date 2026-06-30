import { productsData } from "../data-heladeria";
import { Product } from "../../types/product";
import catalogJson from "./catalog.json";
import type { CatalogCategory, CatalogProduct, HeladeriaCatalog } from "./types";

const heladeriaCatalog = catalogJson as HeladeriaCatalog;

const COLORS: Product["color"][] = ["bg-azul", "bg-amarillo", "bg-rojo"];

/** Mapeo explícito nombre del catálogo → id de producto */
const CATALOG_NAME_TO_ID: Record<string, string> = {
  "oblea de arequipe": "1",
  "oblea con queso": "2",
  "oblea especial": "3",
  "oblea súper especial": "4",
  "ensalada especial": "5",
  "ensalada pequeña": "6",
  "milkshake brownie": "7",
  "milkshake waffle": "8",
  "sweet ron": "9",
  "milkshake cono": "10",
  strawberry: "11",
  gusanito: "19",
  payasito: "13",
  ratoncito: "20",
  "pollito (infantu polito)": "12",
  gatico: "18",
  arañita: "15",
  búho: "16",
  osito: "14",
  mariposa: "17",
  "crepe tropical": "27",
  "waffle pan de yuca": "30",
  "crepe tradicional": "29",
  "crepe choco-fresa": "28",
  "waffle tradicional": "31",
  "waffle éxtasis de chocolate": "32",
  "fresas con crema": "25",
  "copa brownie": "55",
  "copa de baileys": "26",
  "copa durazno": "24",
  "gelatina con helado": "23",
  "moracimango / maracupine": "21",
  "cholao's": "33",
  parfait: "34",
  merengón: "36",
  matrimonio: "35",
  "cono xl": "37",
  "banana split": "52",
  "brownie con helado": "51",
};

const EXTRA_PRODUCTS: Record<string, Omit<Product, "name" | "title" | "description">> = {
  "52": {
    id: "52",
    price: 8000,
    image: "ensalada.webp",
    category: "Malteadas",
    color: "bg-rojo",
  },
  "51": {
    id: "51",
    price: 7000,
    image: "milkshakeBrownie.webp",
    category: "Malteadas",
    color: "bg-rojo",
  },
  "55": {
    id: "55",
    price: 9000,
    image: "milkshakeBrownie.webp",
    category: "Copas",
    color: "bg-amarillo",
  },
  frappe: {
    id: "38",
    price: 6000,
    image: "frappe.webp",
    category: "Frappés",
    color: "bg-azul",
  },
  malteada: {
    id: "41",
    price: 7500,
    image: "milkshakeBrownie.webp",
    category: "Malteadas",
    color: "bg-amarillo",
  },
  jugo: {
    id: "42",
    price: 5000,
    image: "frappe.webp",
    category: "Bebidas",
    color: "bg-azul",
  },
  granizada: {
    id: "43",
    price: 4500,
    image: "frappe.webp",
    category: "Bebidas",
    color: "bg-azul",
  },
  salpicon: {
    id: "45",
    price: 6500,
    image: "salpicon.webp",
    category: "Bebidas",
    color: "bg-azul",
  },
  soda: {
    id: "49",
    price: 6000,
    image: "frappe.webp",
    category: "Bebidas",
    color: "bg-rojo",
  },
  michelada: {
    id: "46",
    price: 8000,
    image: "frappe.webp",
    category: "Bebidas",
    color: "bg-rojo",
  },
};

const EXTRA_BY_CATALOG_NAME: Record<string, keyof typeof EXTRA_PRODUCTS> = {
  "frappés con helado": "frappe",
  "malteadas tradicionales": "malteada",
  "jugos naturales": "jugo",
  granizadas: "granizada",
  salpicón: "salpicon",
  "sodas frutales": "soda",
  micheladas: "michelada",
};

function normalizeName(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

const allProducts = Object.values(productsData).flat();
const productById = new Map(allProducts.map((p) => [p.id, p]));

export interface EnrichedCatalogProduct extends CatalogProduct {
  id?: string;
  precio?: number;
  imagen?: string;
  color?: Product["color"];
  cartProduct?: Product;
}

export interface EnrichedCategory extends CatalogCategory {
  productos: EnrichedCatalogProduct[];
}

function resolveBaseProduct(
  catalogProduct: CatalogProduct
): Product | undefined {
  const key = normalizeName(catalogProduct.nombre);
  const productId = CATALOG_NAME_TO_ID[key];

  if (productId) {
    if (productById.has(productId)) return productById.get(productId);
    const extra = EXTRA_PRODUCTS[productId];
    if (extra) return { ...extra, name: catalogProduct.nombre, title: "", description: "" };
  }

  const extraKey = EXTRA_BY_CATALOG_NAME[key];
  if (extraKey) {
    const extra = EXTRA_PRODUCTS[extraKey];
    return { ...extra, name: catalogProduct.nombre, title: "", description: "" };
  }

  return productById.get(key);
}

function toCartProduct(
  catalogProduct: CatalogProduct,
  category: CatalogCategory,
  colorIndex: number
): Product | undefined {
  const matched = resolveBaseProduct(catalogProduct);
  if (!matched) return undefined;

  return {
    ...matched,
    name: catalogProduct.nombre,
    title: category.nombre.toUpperCase(),
    description: catalogProduct.descripcion || matched.description,
    color: matched.color ?? COLORS[colorIndex % COLORS.length],
    variations: catalogProduct.variaciones ?? matched.variations,
    flavors: catalogProduct.sabores ?? matched.flavors,
  };
}

function enrichProduct(
  catalogProduct: CatalogProduct,
  category: CatalogCategory,
  index: number
): EnrichedCatalogProduct {
  const cartProduct = toCartProduct(catalogProduct, category, index);

  return {
    ...catalogProduct,
    id: cartProduct?.id,
    precio: cartProduct?.price,
    imagen: cartProduct?.image,
    color: cartProduct?.color,
    cartProduct,
  };
}

export const enrichedCategorias: EnrichedCategory[] =
  heladeriaCatalog.categorias.map((category) => ({
    ...category,
    productos: category.productos.map((producto, index) =>
      enrichProduct(producto, category, index)
    ),
  }));

export const featuredCarouselProducts: Product[] = [
  "Cholao's",
  "Parfait",
  "Milkshake Brownie",
  "Moracimango / Maracupine",
]
  .map((nombre) => {
    for (const category of enrichedCategorias) {
      const found = category.productos.find((p) => p.nombre === nombre);
      if (found?.cartProduct) return found.cartProduct;
    }
    return undefined;
  })
  .filter((p): p is Product => p !== undefined);

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}
