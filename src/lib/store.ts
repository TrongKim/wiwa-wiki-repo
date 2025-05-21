import { create } from "zustand";
import type { IEchoSet, IItem } from "@/lib/interface";

type ItemStore = {
  items: IItem[];
  setItems: (items: IItem[]) => void;
};

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));


type EchoSetStore = {
  echosets: IEchoSet[];
  setEchoSets: (sets: IEchoSet[]) => void;
}

export const useEchoSetStore = create<EchoSetStore>((set) => ({
  echosets: [],
  setEchoSets: (echosets) => set({ echosets }),
}))