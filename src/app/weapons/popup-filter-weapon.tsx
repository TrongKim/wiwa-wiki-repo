"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from 'next/image'
import { ECharacterWeaponType, EWeaponRare } from "@/lib/enum"
import { FilterButton, FilterSection } from "@/components/ui/filter-button"
import type { IFilterT, TFilter } from "@/lib/interface"

interface Props {
    readonly isOpen: boolean;
    readonly onClickChangeState: (value: boolean) => void;
    readonly onChangeFilter: (filter: IFilterT) => void;
}

export default function FilterWeaponPopup({ isOpen, onClickChangeState, onChangeFilter }: Props) {
    const [filtersT, setFiltersT] = useState<IFilterT>({
        rarity: [],
        type: [],
        rarity_weapon: [],
        element: [],
        bodyType: [],
        echo: [],
        set: []
    });

    useEffect(() => {
        onChangeFilter({ ...filtersT })
    }, [filtersT]);

    const onClickFilterChange = (category: keyof IFilterT, value: IFilterT[typeof category][number]) => {
        if (category === 'rarity_weapon' && isInstanceOfRarityWeapon(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }

        if (category === 'type' && isInstanceOfWeapon(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }

    }

    const isInstanceOfRarityWeapon = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<EWeaponRare> => {
        return value.code === EWeaponRare.TWO_STAR || value.code === EWeaponRare.ONE_STAR || value.code === EWeaponRare.FOUR_STAR || value.code === EWeaponRare.THREE_STAR || value.code === EWeaponRare.FIVE_STAR;
    }

    const isInstanceOfWeapon = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<ECharacterWeaponType> => {
        const weaponsType: unknown[] = [ECharacterWeaponType.BROAD_BLADE, ECharacterWeaponType.GAUNTLETS, ECharacterWeaponType.PISTOLS, ECharacterWeaponType.RECTIFIER, ECharacterWeaponType.SWORD];
        return weaponsType.includes(value.code);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClickChangeState}>
            <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0 gap-0 bg-[#1f293780] border-[#334d6c] text-white max-h-[80vh] flex flex-col overflow-hidden">
                <DialogHeader className="p-4 border-b border-[#1a3759] flex flex-row items-center justify-between bg-[#1f2937c7]">
                    <DialogTitle className="text-2xl font-bold text-white mx-auto">Filter</DialogTitle>
                </DialogHeader>

                <div className="p-5 py-6 overflow-y-auto">
                    {/* Rarity */}
                    <FilterSection maxLength={2} title="Rarity" filters={filtersT} keyFilter="rarity" handleFilterChange={() => setFiltersT({ ...filtersT, rarity: [] })}>
                        <FilterButton
                            active={filtersT.rarity_weapon.some(item => item.code === EWeaponRare.ONE_STAR)}
                            onClick={() => onClickFilterChange("rarity", { code: EWeaponRare.ONE_STAR, name: '1' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">1★</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.rarity_weapon.some(item => item.code === EWeaponRare.TWO_STAR)}
                            onClick={() => onClickFilterChange("rarity_weapon", { code: EWeaponRare.TWO_STAR, name: '2' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">2★</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.rarity_weapon.some(item => item.code === EWeaponRare.THREE_STAR)}
                            onClick={() => onClickFilterChange("rarity_weapon", { code: EWeaponRare.THREE_STAR, name: '3' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">3★</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.rarity_weapon.some(item => item.code === EWeaponRare.FOUR_STAR)}
                            onClick={() => onClickFilterChange("rarity_weapon", { code: EWeaponRare.FOUR_STAR, name: '4' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">4★</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.rarity_weapon.some(item => item.code === EWeaponRare.FIVE_STAR)}
                            onClick={() => onClickFilterChange("rarity_weapon", { code: EWeaponRare.FIVE_STAR, name: '5' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">5★</span>
                        </FilterButton>
                    </FilterSection>

                    {/* Type */}
                    <FilterSection title="Weapon Type" filters={filtersT} keyFilter="type" maxLength={5} handleFilterChange={() => setFiltersT({ ...filtersT, type: [] })}>
                        <FilterButton
                            active={filtersT.type.some(item => item.code === ECharacterWeaponType.SWORD)}
                            onClick={() => onClickFilterChange("type", { code: ECharacterWeaponType.SWORD, name: 'sword' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/weapons_icon/sword.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.type.some(item => item.code === ECharacterWeaponType.BROAD_BLADE)}
                            onClick={() => onClickFilterChange("type", { code: ECharacterWeaponType.BROAD_BLADE, name: 'broadblade' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/weapons_icon/broadblade.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.type.some(item => item.code === ECharacterWeaponType.PISTOLS)}
                            onClick={() => onClickFilterChange("type", { code: ECharacterWeaponType.PISTOLS, name: 'pistols' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/weapons_icon/pistols.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.type.some(item => item.code === ECharacterWeaponType.RECTIFIER)}
                            onClick={() => onClickFilterChange("type", { code: ECharacterWeaponType.RECTIFIER, name: 'rectifier' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/weapons_icon/rectifier.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.type.some(item => item.code === ECharacterWeaponType.GAUNTLETS)}
                            onClick={() => onClickFilterChange("type", { code: ECharacterWeaponType.GAUNTLETS, name: 'gauntlets' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/weapons_icon/gauntlets.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                    </FilterSection>

                    {/* 
                    <FilterSection title="Body Type" filters={filters} handleFilterChange={() => handleFilterChange("bodyType", "all")}>
                        {["Meap", "Gay", "Les", "Be de"].map((type) => (
                            <FilterButton
                                key={type}
                                active={filters.bodyType === type.toLowerCase()}
                                onClick={() => handleFilterChange("bodyType", type.toLowerCase())}
                                baseColor="#334d6c"
                                activeColor="#4d647e"
                                fixedHeight="h-[40px]"
                            >
                                {type}
                            </FilterButton>
                        ))}
                    </FilterSection> */}
                </div>
            </DialogContent>
        </Dialog>
    )
}
