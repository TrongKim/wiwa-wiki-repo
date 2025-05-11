"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { ECharacterElementType, ECharacterRare, ECharacterWeaponType } from "@/lib/enum"

interface IFilter {
    rarity: string;
    type: string;
    element: string;
    specialStat: string;
    region: string;
    bodyType: string;
}

interface TFilter<T> {
    code: T | 0,
    name: string;
}

interface IFilterT {
    rarity: TFilter<ECharacterRare>[];
    type: TFilter<ECharacterWeaponType>[];
    element: TFilter<ECharacterElementType>[];
    bodyType: TFilter<2 | 3 | 4>[];
}

interface Props {
    readonly isOpen: boolean;
    readonly onClickChangeState: (value: boolean) => void;
}

export default function FilterPopup({ isOpen, onClickChangeState }: Props) {
    const [filtersT, setFiltersT] = useState<IFilterT>({
        rarity: [],
        type: [],
        element: [],
        bodyType: []
    });

    const onClickFilterChange = (category: keyof IFilterT, value: IFilterT[typeof category][number]) => {
        if (category === 'rarity' && isInstanceOfRarity(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }

        if  (category === 'type' && isInstanceOfWeapon(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }

        if (category === 'element' && isInstanceOfElement(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
        }
    }

    const isInstanceOfRarity = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<ECharacterRare> => {
        return value.code === ECharacterRare.FOUR_STAR || value.code === ECharacterRare.FIVE_STAR;
    }

    const isInstanceOfWeapon = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<ECharacterWeaponType> => {
        const weaponsType: unknown[] = [ECharacterWeaponType.BROAD_BLADE, ECharacterWeaponType.GAUNTLETS, ECharacterWeaponType.PISTOLS, ECharacterWeaponType.RECTIFIER, ECharacterWeaponType.SWORD];
        return weaponsType.includes(value.code);
    }

    const isInstanceOfElement = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<ECharacterElementType> => {
        const weaponsType: unknown[] = [ECharacterElementType.AERO, ECharacterElementType.ELECTRO, ECharacterElementType.FUSION, ECharacterElementType.GLACIO, ECharacterElementType.HAVOC, ECharacterElementType.SPECTRO];
        return weaponsType.includes(value.code);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClickChangeState}>
            <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0 gap-0 bg-[#002147] border-[#334d6c] text-white max-h-[80vh] flex flex-col overflow-hidden">
                <DialogHeader className="p-4 border-b border-[#1a3759] flex flex-row items-center justify-between bg-[#1a3759]">
                    <DialogTitle className="text-2xl font-bold text-white mx-auto">Filter</DialogTitle>
                </DialogHeader>

                <div className="p-5 py-6 overflow-y-auto">
                    {/* Rarity */}
                    <FilterSection maxLength={2} title="Rarity" filters={filtersT} keyFilter="rarity" handleFilterChange={() => setFiltersT({ ...filtersT, rarity: [] })}>
                        <FilterButton
                            active={filtersT.rarity.some(item => item.code === ECharacterRare.FOUR_STAR)}
                            onClick={() => onClickFilterChange("rarity", { code: ECharacterRare.FOUR_STAR, name: '4' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">4★</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.rarity.some(item => item.code === ECharacterRare.FIVE_STAR)}
                            onClick={() => onClickFilterChange("rarity", { code: ECharacterRare.FIVE_STAR, name: '5' })}
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

                    <FilterSection title="Element" filters={filtersT} notMb={true} keyFilter="element" maxLength={6} handleFilterChange={() => setFiltersT({ ...filtersT, element: [] })}>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.AERO)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.AERO, name: 'aero' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/elements_icon/Aero.png" width={24} height={24} alt="filter" className="scale-[0.9]" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.ELECTRO)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.ELECTRO, name: 'electro' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/elements_icon/Electro.png" width={24} height={24} alt="filter" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.FUSION)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.FUSION, name: 'fusion' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/elements_icon/Fusion.png" width={24} height={24} alt="filter" className="scale-[0.9]" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.GLACIO)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.GLACIO, name: 'glacio' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/elements_icon/Glacio.png" width={24} height={24} alt="filter" className="scale-[0.9]" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.HAVOC)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.HAVOC, name: 'havoc' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"
                        >
                            <Image src="/elements_icon/Havoc.png" width={24} height={24} alt="filter" className="scale-[0.9]" />
                        </FilterButton>
                        <FilterButton
                            active={filtersT.element.some(item => item.code === ECharacterElementType.SPECTRO)}
                            onClick={() => onClickFilterChange("element", { code: ECharacterElementType.SPECTRO, name: 'spectro' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedWidth="w-[60px]"
                            fixedHeight="h-[40px]"  
                        >
                            <Image src="/elements_icon/Spectro.png" width={24} height={24} alt="filter" className="scale-[0.9]" />
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

interface FilterSectionProps {
    readonly title: string
    readonly keyFilter: keyof IFilterT
    readonly children: React.ReactNode
    readonly handleFilterChange: (valueOne: keyof IFilterT, value: IFilterT[typeof valueOne][]) => void
    readonly filters: IFilterT
    readonly maxLength: number
    readonly notMb?: boolean
}

function FilterSection({ title, keyFilter, children, filters, notMb, handleFilterChange, maxLength }: FilterSectionProps) {
    return (
        <div className={notMb ? '': "mb-6"}>
            <div className="flex items-center gap-[10px] mb-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <FilterAllButton
                    active={filters[keyFilter].length === maxLength || filters[keyFilter].length === 0}
                    onClick={() => handleFilterChange(keyFilter, [])}
                    baseColor="#334d6c"
                    activeColor="#4d647e"
                >
                    All
                </FilterAllButton>
            </div>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    )
}

interface FilterButtonProps {
    readonly active: boolean
    readonly onClick: () => void
    readonly className?: string
    readonly children: React.ReactNode
    readonly baseColor?: string
    readonly activeColor?: string
    readonly fixedWidth?: string
    readonly fixedHeight?: string
}

function FilterAllButton({
    active,
    onClick,
    className,
    children,
    baseColor = "#334d6c",
    activeColor = "#4d647e",
    fixedWidth,
    fixedHeight
}: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-3 py-[2px] rounded-lg text-sm font-medium transition-all duration-200 flex items-center cursor-pointer pointer-events-auto",
                active
                    ? `bg-[${activeColor}] text-white bg-[#667a91]`
                    : `bg-[${baseColor}] text-white/90 hover:bg-[#4d647e]`,
                className,
            )}
        >
            {children}
        </button>
    )
}

function FilterButton({
    active,
    onClick,
    className,
    children,
    baseColor = "#334d6c",
    activeColor = "#4d647e",
    fixedWidth,
    fixedHeight
}: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center cursor-pointer pointer-events-auto ${fixedWidth ? fixedWidth + ' justify-center' : ''} ${fixedHeight ? ' ' + fixedHeight + ' items-center' : ''}`,
                active
                    ? `bg-[${activeColor}] text-white bg-[#667a91]`
                    : `bg-[${baseColor}] text-white/90 hover:bg-[#4d647e]`,
                className,
            )}
        >
            {children}
        </button>
    )
}
