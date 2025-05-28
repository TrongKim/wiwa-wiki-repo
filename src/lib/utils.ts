import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { IItemsUpgradeResonator, IResonatorSkillConsume, ISkillConsume, TDisplayAscension } from "./interface";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getSumMaterial = (consumes: IResonatorSkillConsume[]) => {
  const mergedMap = new Map<number, ISkillConsume>();
  for (let consume of consumes) {
    for (let consumeItem of consume.Consume) {
      if (mergedMap.has(consumeItem.Key)) {
        const dataDictionary = mergedMap.get(consumeItem.Key);
        if (!dataDictionary) continue;
        mergedMap.set(consumeItem.Key, { ...dataDictionary, Value: dataDictionary.Value + consumeItem.Value });
      } else {
        mergedMap.set(consumeItem.Key, { ...consumeItem });
      }
    }
  }
  return Array.from(mergedMap.values());
}

export const getSumMaterialUpgradeResonator = (consumes: TDisplayAscension[]) => {
  const mergedMap = new Map<number, IItemsUpgradeResonator>();
  for (let consume of consumes) {
    for (let consumeItem of consume.items) {
      if (mergedMap.has(consumeItem.id)) {
        const dataDictionary = mergedMap.get(consumeItem.id);
        if (!dataDictionary) continue;
        mergedMap.set(consumeItem.id, { ...dataDictionary, quantity: dataDictionary.quantity + consumeItem.quantity });
      } else {
        mergedMap.set(consumeItem.id, { ...consumeItem });
      }
    }
  }
  return Array.from(mergedMap.values());
}