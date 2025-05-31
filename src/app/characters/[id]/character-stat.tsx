'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { cn, getSumMaterialUpgradeResonator } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'
import { TableStatCharacter } from './table-stat'
import type { ICharacterDetail, IStatCharacter, TDisplayAscension, THashIndexStatList } from '@/lib/interface'
import { BeautifulStat } from './beautiful-stat'
import Image from 'next/image'

interface Props {
    readonly resonator: ICharacterDetail;
    readonly material: TDisplayAscension[];
}

export function CharacterStat({ resonator, material }: Props) {
    const [levelCap, setLevelCap] = useState<{ level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 }>({ level: 90, range: 6 });
    const [stateShowStat, setStateShowStat] = useState<boolean>(true);

    const onClickSetStateShowStat = () => {
        setStateShowStat(!stateShowStat);
    }

    const handleValueLevelCap = (rawValue: number[]): { level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 } => {
        const value = rawValue?.[0] !== undefined ? (Math.floor((rawValue[0] / 100) * 90)) : 90;
        if (value > 40) {
            if (value > 70) {
                if (value > 80) {
                    return { level: value, range: 6 };
                }
                return { level: value, range: 5 };
            } else {
                if (value > 60) {
                    return { level: value, range: 4 };
                }
                if (value > 50) {
                    return { level: value, range: 3 };
                }
                return { level: value, range: 2 };
            }
        } else if (value < 21) return { level: value, range: 0 };
        return { level: value, range: 1 };
    }

    const getRangeUpgrade = (range: number) => {
        if (range === 6) return 5;
        return range;
    }

    return (
        <div>
            <Card className="bg-[#1f293780] border-[#374151] mb-4 flex-2 max-w-[335px] max-[875px]:w-full">
                <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center gap-10">
                        <div className="flex-2">
                            <div className="flex justify-between items-center mb-4">
                                <div className="bg-[#33435896] border-[#374151] text-white px-4 py-1 rounded-lg font-bold border">
                                    Lv. {levelCap.level}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={onClickSetStateShowStat} className={`cursor-pointer pointer-events-auto text-white px-4 py-1 rounded-lg flex items-center gap-1 border bg-[#33435896] border-[#374151] ${stateShowStat ? 'bg-[#1a2234]' : 'bg-[#334d6c]'}`}>
                                        <span>Table</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="3" y1="15" x2="21" y2="15"></line>
                                            <line x1="9" y1="3" x2="9" y2="21"></line>
                                            <line x1="15" y1="3" x2="15" y2="21"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4 mt-5 pl-[2px]">
                                <Slider
                                    max={100}
                                    step={1}
                                    className={cn("w-[100%]", "bg-white")}
                                    defaultValue={[100]}
                                    onValueChange={(value) => setLevelCap(handleValueLevelCap(value))}
                                />
                            </div>
                            <div className="space-y-3">
                                {
                                    stateShowStat ? <BeautifulStat stat={resonator.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IStatCharacter>]} /> : <TableStatCharacter stats={resonator.stats} />
                                }
                            </div>

                        </div>
                    </div>
                    <h3 className="mt-4 font-bold">{stateShowStat ? '[ Đột Phá Mốc ' + (Number(levelCap.range) + 1) + ' ]' : '[ Đột Phá Tất Cả Các Mốc ]'}</h3>
                    {
                        stateShowStat ? (
                            <div className="flex justify-center gap-4 mt-4 mb-4 flex-wrap">
                                {
                                    (material[getRangeUpgrade(levelCap.range)]?.items ?? []).map((item, index) => {
                                        return (
                                            <div key={index + (item?.name ?? '') + 'icon upgrade'} className="bg-[#33435896] w-[60px] border-[#374151] rounded-md p-2 flex flex-col items-center border">
                                                <div className="text-orange-500 mb-1">
                                                    <Image src={item?.icon ?? ''} width={32} height={32} alt="material" />
                                                </div>
                                                <span className="text-[14px]">{item.quantity}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <div className="flex justify-center gap-4 mt-4 mb-4 flex-wrap">
                                {
                                    (getSumMaterialUpgradeResonator(material) ?? []).map((item, index) => {
                                        return (
                                            <div key={index + (item?.name ?? '') + 'icon upgrade'} className="bg-[#33435896] w-[60px] border-[#374151] rounded-md p-2 flex flex-col items-center border">
                                                <div className="text-orange-500 mb-1">
                                                    <Image src={item?.icon ?? ''} width={32} height={32} alt="material" />
                                                </div>
                                                <span className="text-[14px]">{item.quantity}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}

