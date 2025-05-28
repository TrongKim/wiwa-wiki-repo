"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { EEchoCost } from "@/lib/enum"
import { FilterButton, FilterSection } from "@/components/ui/filter-button"
import type { IFilterT, TFilter } from "@/lib/interface"
import { useEchoSetStore } from "@/lib/store"
import Image from 'next/image'

interface Props {
    readonly isOpen: boolean;
    readonly onClickChangeState: (value: boolean) => void;
    readonly onChangeFilter: (filter: IFilterT) => void;
}

export default function FilterEchoPopup({ isOpen, onClickChangeState, onChangeFilter }: Props) {
    const { echosets, setEchoSets } = useEchoSetStore();
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
        if (category === 'echo' && isInstanceOfEcho(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }

        if (category === 'set' && isInstanceOfEchoSet(value, category)) {
            setFiltersT((prev) => ({
                ...prev,
                [category]: prev[category].some(item => item.code === value.code) ? prev[category].filter(f => f.code !== value.code) : [...prev[category], value],
            }));
            return;
        }
    }

    const isInstanceOfEcho = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<EEchoCost> => {
        const weaponsType: unknown[] = [EEchoCost.COST_ONE, EEchoCost.COST_THREE, EEchoCost.COST_FOUR];
        return weaponsType.includes(value.code);
    }

    const isInstanceOfEchoSet = (value: IFilterT[typeof key][number], key: keyof IFilterT): value is TFilter<number> => {
        return typeof value.code === 'number';
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClickChangeState}>
            <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0 gap-0 bg-[#1f293780] border-[#374151] text-white max-h-[80vh] flex flex-col overflow-hidden">
                <DialogHeader className="p-4 border-b bg-[#1f2937c7] border-[#374151] flex flex-row items-center justify-between">
                    <DialogTitle className="text-2xl font-bold text-white mx-auto">Filter</DialogTitle>
                </DialogHeader>

                <div className="p-5 py-6 overflow-y-auto">
                    <FilterSection maxLength={2} title="Class" filters={filtersT} keyFilter="rarity" handleFilterChange={() => setFiltersT({ ...filtersT, echo: [] })}>
                        <FilterButton
                            active={filtersT.echo.some(item => item.code === EEchoCost.COST_ONE)}
                            onClick={() => onClickFilterChange("echo", { code: EEchoCost.COST_ONE, name: '1' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">Cost 1</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.echo.some(item => item.code === EEchoCost.COST_THREE)}
                            onClick={() => onClickFilterChange("echo", { code: EEchoCost.COST_THREE, name: '3' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">Cost 3</span>
                        </FilterButton>
                        <FilterButton
                            active={filtersT.echo.some(item => item.code === EEchoCost.COST_FOUR)}
                            onClick={() => onClickFilterChange("echo", { code: EEchoCost.COST_FOUR, name: '4' })}
                            baseColor="#334d6c"
                            activeColor="#4d647e"
                            fixedHeight="h-[40px]"
                        >
                            <span className="text-yellow-300">Cost 4</span>
                        </FilterButton>
                    </FilterSection>
                    <FilterSection maxLength={2} title="Echo Set" filters={filtersT} keyFilter="set" handleFilterChange={() => setFiltersT({ ...filtersT, set: [] })}>
                        {
                            echosets.map((echoSet, index) => {
                                return (
                                    <FilterButton
                                        active={filtersT.set.some(item => item.code === echoSet.id)}
                                        onClick={() => onClickFilterChange("set", { code: echoSet.id, name: String(echoSet.id) })}
                                        baseColor="#334d6c"
                                        activeColor="#4d647e"
                                        fixedHeight="h-[40px]"
                                        key={echoSet.id + Math.random() + 'set'}
                                        className="flex items-center gap-2"
                                    >
                                        <Image src={echoSet.icon} width={26} height={26} alt="set" />
                                        <span className="text-yellow-300">{echoSet.name}</span>
                                    </FilterButton>
                                )
                            })
                        }
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
