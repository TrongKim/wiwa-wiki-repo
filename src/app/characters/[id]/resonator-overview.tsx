import React, { useEffect, useMemo } from 'react'
import { CharacterStat } from './character-stat';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image'
import type { ICharacterDetail, IKeyValue, TDisplayAscension } from '@/lib/interface';
import { ElementIcon, WeaponIcon } from '@/components/element-weapon';
import { useItemStore } from '@/lib/store';

interface Props {
    readonly resonator: ICharacterDetail;
}

export function ResonatorOverview({ resonator }: Props) {
    const items = useItemStore((state) => state.items);

    const ascensionDisplayData: TDisplayAscension[] = useMemo(() => {
        return (
            Object.entries(resonator.ascensions).map(
                ([level, materials]) => {
                    const displayItems = (materials as IKeyValue[])
                        .map((mat) => {
                            const matched = items.find((item) => item.id === mat.Key);
                            return {
                                id: mat.Key,
                                quantity: mat.Value,
                                name: matched?.name,
                                icon: matched?.icon,
                                tag: matched?.tag,
                                rank: matched?.rank,
                            };
                        });

                    return {
                        level: Number(level),
                        items: displayItems,
                    };
                }
            )
        )
    }, [resonator.ascensions, items]);

    return (
        <div className="flex items-start justify-between gap-y-[10px] max-[875px]:flex-col max-[875px]:items-center max-[1122px]:flex-wrap max-[1122px]:justify-center max-[600px]:relative">
            <div className="w-fit max-[340px]:w-full max-[600px]:fixed max-[600px]:hidden">
                <Image src={resonator.card} width={500} height={100} alt={resonator.name} className="h-auto max-[340px]:w-full -mt-10" />
            </div>
            <div className="max-[600px]:relative">
                <CharacterStat resonator={resonator} material={ascensionDisplayData} />
                <Card className="bg-[#1f293780] border-[#374151] mb-4 max-w-[335px] max-[875px]:w-full">
                    <CardContent className="p-6 flex flex-col">
                        <div className="space-y-3">
                            <DetailItem label="Element" value={resonator.element} icon={<ElementIcon element={resonator.element} classCSS="w-5 h-5" />} />
                            <DetailItem label="Weapon" value={resonator.weapon_type} icon={<WeaponIcon classCSS="w-5 h-5" type={resonator.weapon_type} />} />
                            <DetailItem label="Country" value={resonator.country} />
                            <DetailItem label="VA (EN)" value={resonator.cv_en} />
                            <DetailItem label="VA (CHS)" value={resonator.cv_cn} />
                            <DetailItem label="VA (JP)" value={resonator.cv_jp} />
                            <DetailItem label="VA (KR)" value={resonator.cv_ko} />

                            <p className="text-sm mt-4 text-gray-300">
                                {resonator.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function DetailItem({ label, value, icon }: { readonly label: string; readonly value: string; readonly icon?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-gray-300">{label}</span>
            <div className="flex items-center gap-2">
                {icon && icon}
                <span>{value}</span>
            </div>
        </div>
    )
}