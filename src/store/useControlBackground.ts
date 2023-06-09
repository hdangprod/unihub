import { create } from "zustand";

interface IShowBackground {
  background: string;
  setShowBackground: (background: string) => void;
}
export const useControlBackground = create<IShowBackground>((set) => ({
  background: "",
  setShowBackground: (background) => {
    set(() => ({
      background: background,
    }));
  },
}));
