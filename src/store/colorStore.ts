import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ColorState {
  ColorClass: string;
  setColorClass: (color: "bg-amarillo" | "bg-rojo" | "bg-azul") => void;
}

export const useColorStore = create<ColorState>()(
  persist(
    (set) => ({
      ColorClass: "bg-azul",
      setColorClass: (color) => set({ ColorClass: color }),
    }),
    {
      name: "color-storage",
    }
  )
);
