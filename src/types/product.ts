export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  title: string;
  color: "bg-azul" | "bg-amarillo" | "bg-rojo";
  variations?: string[];
  flavors?: string[];
  introduce?: Introduce;
  detail?: Detail;
}

export interface ProductsPerCategory {
  [category: string]: Product[];
}

export interface ProductsData {
  Obleas: Product[];
  Ensaladas: Product[];
  Malteadas: Product[];
  Infantil: Product[];
  Copas: Product[];
  Crepes: Product[];
  Waffles: Product[];
  Cholaos: Product[];
  Frappés: Product[];
}

interface Introduce {
  title: string;
  topic: string;
  des: string;
}

interface Detail {
  title: string;
  des: string;
  specifications: Specification[];
}

interface Specification {
  label: string;
  value: string;
}

export interface CarouselItemProps {
  item: Product;
  handleSeeMore: () => void;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  index: number;
}
