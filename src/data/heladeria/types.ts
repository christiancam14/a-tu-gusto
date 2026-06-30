export interface CatalogMeta {
  nombre: string;
  descripcion: string;
  version: string;
  ultimaActualizacion: string;
}

export interface CatalogProduct {
  nombre: string;
  descripcion: string;
  sabores?: string[];
  variaciones?: string[];
}

export interface CatalogCategory {
  id: string;
  nombre: string;
  emoji: string;
  descripcion?: string;
  productos: CatalogProduct[];
}

export interface HeladeriaCatalog {
  meta: CatalogMeta;
  saboresHelado: string[];
  adicionales: string[];
  categorias: CatalogCategory[];
}
