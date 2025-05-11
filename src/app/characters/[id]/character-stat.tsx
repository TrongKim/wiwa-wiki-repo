'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { TableStatCharacter } from './table-stat';
import type { ICharacterDetail } from '@/lib/interface';
import { BeautifulStat } from './beautiful-stat';

interface Props {
    readonly resonator: ICharacterDetail;
}

export function CharacterStat({ resonator }: Props) {
    const [levelCap, setLevelCap] = useState<{ level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 }>({ level: 90, range: 6 });
    const [stateShowStat, setStateShowStat] = useState<boolean>(true);

    const onClickSetStateShowStat = () => {
        setStateShowStat(!stateShowStat);
    }

    const handleValueLevelCap = (rawValue: number[]): { level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6} => {
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

    return (
        <div>
            <Card className="bg-[#1a3759] border-[#4d647e] mb-4 flex-2 max-w-[335px] max-[875px]:w-full">
                <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center gap-10">
                        <div className="flex-2">
                            <div className="flex justify-between items-center mb-4">
                                <div className="bg-[#334d6c] text-white px-4 py-1 rounded-lg font-bold border border-[#4d647e]">
                                    Lv. {levelCap.level}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={onClickSetStateShowStat} className={`cursor-pointer pointer-events-auto text-white px-4 py-1 rounded-lg flex items-center gap-1 border border-[#4d647e] ${stateShowStat ? 'bg-[#1a3759]' : 'bg-[#334d6c]'}`}>
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
                                    stateShowStat ? <BeautifulStat stat={resonator.stats[levelCap.range][levelCap.level]} /> : <TableStatCharacter stats={resonator.stats} />
                                }
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 mb-4 max-[350px]:flex-wrap">
                        <div className="bg-[#334d6c] rounded-md p-2 flex flex-col items-center w-20 border border-[#4d647e]">
                            <div className="text-orange-500 mb-1">★</div>
                            <span className="text-lg font-bold">60</span>
                        </div>
                        <div className="bg-[#334d6c] rounded-md p-2 flex flex-col items-center w-20 border border-[#4d647e]">
                            <div className="text-yellow-500 mb-1">◆</div>
                            <span className="text-lg font-bold">6</span>
                        </div>
                        <div className="bg-[#334d6c] rounded-md p-2 flex flex-col items-center w-20 border border-[#4d647e]">
                            <div className="text-red-500 mb-1">♦</div>
                            <span className="text-lg font-bold">24</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span>Required:</span>
                        <span className="text-yellow-400">●</span>
                        <span className="text-yellow-400 font-bold">120000</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

