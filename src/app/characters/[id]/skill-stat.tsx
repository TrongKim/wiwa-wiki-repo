"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import type { IResonatorSkill, ISkillConsume } from '@/lib/interface';

interface Props {
    skill: IResonatorSkill;
}

export const SkillStat = ({ skill }: Props) => {
    const [skillLevelCap, setSkillLevelCap] = useState<number>(9);
    const handleValueLevelCap = (rawValue?: number[]): number => {
        const value = rawValue?.[0] !== undefined ? (Math.floor((rawValue[0] / 100) * 9)) : 9;
        return value;
    };

    const handleWrongURL = (url: string): string => {
        const url_split = url.split('.');
        return url_split[0] + '.png';
    }
    return (
        <div>
            <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                <span className="font-bold">Skill Attributes (Lv. {skillLevelCap + 1})</span>
            </div>

            <div className="mb-4">
                <Slider
                    max={100}
                    step={1}
                    className={cn("w-[100%]", "bg-white")}
                    defaultValue={[100]}
                    onValueChange={(value) => setSkillLevelCap(handleValueLevelCap(value))}
                />
            </div>

            <div className="space-y-2">
                {
                    skill.attributes.map((attribute, index) => {
                        return (
                            <AttributeRow key={attribute.attributeId + index} label={attribute.attributeName} value={String(attribute.values[skillLevelCap])} />
                        )
                    })
                }
            </div>

            <div className="mt-6">
                {
                    skill.consumes.length === 1 ? (
                        <div className="bg-[#1a3759] rounded-lg p-3 text-center">
                            <span>No items needed to upgrade!</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-start gap-[10px] flex-wrap">
                            {
                                (skill.consumes[skillLevelCap]?.Consume ?? []).map((consume: ISkillConsume, index: number) => {
                                    return (
                                        <div key={consume.Key + index + 'consume'} className="min-w-[90px] flex-1 bg-[#1a3759] p-3 rounded-[20px] flex flex-col items-center justify-center cursor-pointer pointer-events-auto border border-[#617fa3d6]">
                                            <div className="flex-1 bg-[#334d6c] w-full flex justify-center py-2 rounded-xl">
                                                <Image src={handleWrongURL(consume.Icon)} width={48} height={48} alt="consume" />
                                            </div>
                                            <div className="pt-1 h-fit">
                                                <p className="text-center">{consume.Value}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}


function AttributeRow({ label, value }: { readonly label: string; readonly value: string }) {
    return (
        <div className="flex justify-between items-center py-1 px-2 bg-[#1a3759] rounded">
            <span className="text-yellow-200">{label}</span>
            <span className="font-bold">{value}</span>
        </div>
    )
}

function MaterialItem({ icon, count }: { readonly icon: string; readonly count: string }) {
    return (
        <div className="bg-[#4d647e] rounded p-1 flex flex-col items-center">
            <div className="text-2xl">{icon}</div>
            <div className="text-sm font-bold">{count}</div>
        </div>
    )
}