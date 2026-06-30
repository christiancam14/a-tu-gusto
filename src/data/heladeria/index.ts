import catalogJson from "./catalog.json";
import type { HeladeriaCatalog } from "./types";

export const heladeriaCatalog = catalogJson as HeladeriaCatalog;

export type { CatalogCategory, CatalogMeta, CatalogProduct, HeladeriaCatalog } from "./types";

export const saboresHelado = heladeriaCatalog.saboresHelado;
export const adicionales = heladeriaCatalog.adicionales;
export const categorias = heladeriaCatalog.categorias;

export function getCategoriaById(id: string) {
  return heladeriaCatalog.categorias.find((c) => c.id === id);
}

export function getAllProductos() {
  return heladeriaCatalog.categorias.flatMap((categoria) =>
    categoria.productos.map((producto) => ({
      ...producto,
      categoriaId: categoria.id,
      categoriaNombre: categoria.nombre,
    }))
  );
}

export { businessInfo } from "./business-info";
export {
  enrichedCategorias,
  featuredCarouselProducts,
  formatPrice,
} from "./catalog-enriched";
export type { EnrichedCatalogProduct, EnrichedCategory } from "./catalog-enriched";
