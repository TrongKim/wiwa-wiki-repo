'use client'
import Image from "next/image"
import type { IFilterT, IWeapon } from "@/lib/interface";
import Link from "next/link";
import { WeaponIcon } from "@/components/element-weapon";
import { WeaponHeader } from "./weapon-header";
import { useState } from "react";

interface Props {
  readonly weapons: IWeapon[];
}
export function WeaponGrid({ weapons }: Props) {
  const [weaponFilted, setWeaponFilted] = useState<IWeapon[]>(weapons);

  const handleStar = (rank: number) => {
    const arr = [];
    while (rank != 0) {
      arr.push(rank);
      rank--;
    }
    return arr;
  }

  const onChangeFilter = (value: IFilterT & { name?: string }) => {
    const filtered = weapons.filter((weapon) => {

      const matchElement =
        value.rarity_weapon.length === 0 ||
        value.rarity_weapon.some((e) => e.code === weapon.rarity);

      const matchName =
        !value.name || weapon.name.toLowerCase().includes(value.name.toLowerCase());

      const matchType =
        value.type.length === 0 ||
        value.type.some((t) => t.code === weapon.type);

      return matchElement && matchName && matchType;
    });

    setWeaponFilted(filtered);
  };

  const getGradiant = (rarity: number): string => {
    switch (rarity) {
      case 5:
        return 'bg-[linear-gradient(0deg,_#c9ac67c8_0%,_#c9ac6700_100%)]';
      case 4:
        return 'bg-[linear-gradient(0deg,_#b567c9c8_0%,_#aa67c900_100%)]';
      case 3:
        return 'bg-[linear-gradient(0deg,_#679ac996_0%,_#abc3a900_100%)]';
      case 2:
        return 'bg-[linear-gradient(0deg,_#67c96b96_0%,_#abc3a900_100%)]';
      case 1:
        return '';
    }
    return ''
  }

  return (
    <>
      <WeaponHeader onChangeFilter={onChangeFilter} />
      <div className="flex flex-wrap items-center justify-center gap-4">
        {weaponFilted.map((weapon) => (
          <Link
            href={'/weapons/' + weapon.id}
            key={weapon.id}
            className="bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border border-[#374151] w-[112px] h-[157px]"
          >
            <div className="relative w-full h-full">
              {/* <div className="absolute top-2 left-2 z-10">
              <ElementIcon element={character.element} />
            </div> */}
              <div className="absolute top-2 right-2 z-11">
                <WeaponIcon type={weapon.type} />
              </div>
              <Image src={weapon.icon || "/placeholder.svg"} alt={weapon.name} height={18} width={18} className="object-contain relative z-10 w-[100%] h-full" />
              <div className={`absolute bottom-0 left-0 right-0 z-0 p-4 h-[40%] ${getGradiant(weapon.rarity)} p-4`}></div>
              <div className={`absolute bottom-0 left-0 right-0 p-4 pt-6 pb-2 z-11`}>
                <h3 className="text-center text-shadow-[#050505b8] text-[14px] text-shadow-lg font-bold truncate overflow-hidden text-wrap max-h-[48px]">{weapon.name}</h3>
                <div className="flex justify-center">
                  {handleStar(weapon.rarity).map((item, index) => {
                    return (
                      <svg key={index + 'icon star detail'} xmlns="http://www.w3.org/2000/svg" width="14" height="14" aria-hidden="true" data-icon="Star" viewBox="0 0 15 15" className="h-5 w-5 fill-current text-yellow-300 drop-shadow-special filter">
                        <path fill="currentColor" d="M7.5 0C6.429 4.286 5.357 6.429 0 7.5c5.357 1.071 6.429 3.214 7.5 7.5 1.071-4.286 2.143-6.429 7.5-7.5C9.643 6.429 8.571 4.286 7.5 0Z"></path>
                      </svg>
                    )
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>

  )
}

