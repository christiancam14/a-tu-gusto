import { create } from "zustand";

interface ColorState {
  ColorClass: string;
  setColorClass: (color: "bg-amarillo" | "bg-rojo" | "bg-azul") => void;
}

export const useColorStore = create<ColorState>((set) => ({
  ColorClass: "bg-azul", // Color inicial del degradado
  setColorClass: (color) => set({ ColorClass: color }),
}));
