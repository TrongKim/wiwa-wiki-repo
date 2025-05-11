import { create } from "zustand";
import type { IItem } from "@/lib/interface";

type ItemStore = {
  items: IItem[];
  setItems: (items: IItem[]) => void;
};

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
