'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import type { IAllStat, IHashIndex, IKeyValue, IStatWeapon, IWeaponDetail, TDisplayAscension, THashIndexStatList } from '@/lib/interface';
import { useItemStore } from '@/lib/store';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Props {
    weapon_detail: IWeaponDetail | null;
}

import { motion } from "framer-motion"
import WeaponDetailsSkeleton from './weapon-card-skeleton';
import { highlightNumbers } from '@/utils/text.utils';
import { client } from '@/trpc/client';

export const WeaponCard = ({ weapon_detail }: Props) => {
    const { items, setItems } = useItemStore();
    const [loading, setLoading] = useState(true)
    const [levelCap, setLevelCap] = useState<{ level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 }>({ level: 90, range: 6 })

    useEffect(() => {
        if (weapon_detail) setLoading(false);
    }, []);

    useEffect(() => {
        const getItems = async () => {
            const items_data = await client.item.getAll.query();
            setItems(items_data ?? []);
        }
        if (items.length === 0) {
            getItems();
        }
    }, [items]);


    const ascensionDisplayData: TDisplayAscension[] = useMemo(() => {
        return (
            Object.entries(weapon_detail?.ascensions ?? []).map(
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
    }, [weapon_detail?.ascensions ?? [], items]);

    if (loading) return <WeaponDetailsSkeleton />


    const getNumberValue = (n: 0 | 1): number => {
        if (!weapon_detail) return 0;
        if (n === 0) return weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][n]['Value'];
        return weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][n]['Value'] / 100;
    }

    const handleValueLevelCap = (rawValue: number[]): { level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 } => {
        let value = rawValue?.[0] !== undefined ? (Math.floor((rawValue[0] / 100) * 90)) : 90;
        if (value === 0) value = 1;
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

    const getBorderMaterial = (rank: number) => {
        switch (rank) {
            case 1:
                return '';
            case 2:
                return 'border-[#45c675]';
            case 3:
                return 'border-[#528dcf]';
            case 4:
                return 'border-[#de4aff]';
            case 5:
                return 'border-amber-300';
        }
        return '';
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d0d0d] rounded-lg overflow-hidden p-6 md:p-8"
        >
            <div className="flex justify-between items-center mb-6 max-[336px]:flex-col gap-1">
                <h1 className="text-3xl font-bold text-white">{weapon_detail?.name}</h1>
                <div className="flex">
                    {[...Array(weapon_detail?.rarity ?? 5)].map((_, i) => (
                        <span key={i} className="text-white text-xl">
                            ★
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex justify-center items-center">
                    <Image
                        src={weapon_detail?.icon ?? ''}
                        alt={weapon_detail?.name ?? ''}
                        className="h-80 w-auto object-contain"
                        width={100}
                        height={320}
                        key={'image' + weapon_detail?.icon}
                    />
                </div>

                {/* Right column - Stats */}
                <div className="md:col-span-2 space-y-6">
                    {/* Level */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-semibold text-white">Level</span>
                            <span className="text-2xl font-bold text-white">{levelCap.level}</span>
                        </div>
                        <div className="bg-[#1f293780] h-2 rounded-full">
                            <Slider
                                max={100}
                                step={1}
                                className={cn("w-[100%] h-full", "bg-[#60a5fa]")}
                                defaultValue={[100]}
                                onValueChange={(value) => setLevelCap(handleValueLevelCap(value))}
                            />
                        </div>
                    </div>

                    <div className="space-y-3 bg-[#1f293780] rounded-lg p-4">
                        <div className="flex justify-between items-center py-2 border-b border-[#374151]">
                            <span className="text-[#94a3b8]">{weapon_detail?.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][0]['Name']}</span>
                            <span className="font-medium text-white">{Number(getNumberValue(0).toFixed(2))}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#374151]">
                            <span className="text-[#94a3b8]">{weapon_detail?.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][1]['Name']}</span>
                            <span className="font-medium text-white">{Number(getNumberValue(1).toFixed(2))}%</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-[#94a3b8]">Weapon Type</span>
                            <span className="font-medium text-white">{weapon_detail?.type}</span>
                        </div>
                    </div>

                    {/* Materials */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Materials Needed</h3>
                        <div className="flex gap-4 max-[336px]:flex-wrap">
                            {
                                (ascensionDisplayData[getRangeUpgrade(levelCap.range)]?.items ?? []).map((item, index) => {
                                    return (
                                        <div key={index + (item?.name ?? '') + 'icon upgrade'} className="flex flex-col items-center">
                                            <div className={`w-16 h-16 bg-[#1f293780] border-b-2  rounded-full flex items-center justify-center mb-1 ${getBorderMaterial(item.rank ?? 0)}`}>
                                                <Image src={item?.icon ?? 'meapgay'} width={46} height={46} alt="material" />
                                            </div>
                                            <span className="text-sm text-[#94a3b8]">{item.quantity}</span>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Swordsworn */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-[#38bdf8]">{weapon_detail?.effect_name}</h3>
                        <span className="text-[#94a3b8] leading-relaxed text-[15px]">
                            {
                                highlightNumbers(weapon_detail?.effect ?? '')
                            }
                        </span>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-[#94a3b8] italic leading-relaxed" >
                            {weapon_detail?.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// function DialogTableDetailStat({ stats, isOpen, onClickChangeState }: { readonly isOpen: boolean; stats?: IAllStat<IHashIndex<[0, 1], IStatWeapon>>; readonly onClickChangeState: (value: boolean) => void; } & Props) {
//     const getNumberValue = (value: number): string => {
//         return (value / 100).toFixed(2);
//     }
//     return (
//         <Dialog open={isOpen} onOpenChange={onClickChangeState}>
//             <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0 gap-0 bg-[#002147] border-[#334d6c] text-white max-h-[80vh] flex flex-col overflow-hidden">
//                 <DialogHeader className="p-4 border-b border-[#1a3759] flex flex-row items-center justify-between bg-[#1a3759]">
//                     <DialogTitle className="text-2xl font-bold text-white mx-auto">Filter</DialogTitle>
//                 </DialogHeader>
//                 <div className="pb-6 h-full flex flex-col overflow-hidden">
//                     <div className="p-5 py-6 pb-0 overflow-y-auto h-full flex-1">
//                         <table className="w-full max-w-2xl text-sm text-center rounded-lg overflow-hidden">
//                             <thead className="bg-[#1a3759] text-white">
//                                 <tr>
//                                     <th className="p-3 max-[364px]:p-1">Level</th>
//                                     <th className="p-3 max-[364px]:p-1">Base {stats?.[0][1][0]['Name']}</th>
//                                     <th className="p-3 max-[364px]:p-1 capitalize">{stats?.[0][1][1]['Name']}</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {stats &&
//                                     (Object.entries(stats) as Array<[string, THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>]>).flatMap(([groupKey, group]) =>
//                                         (Object.entries(group) as Array<[string, IHashIndex<[0, 1], IStatWeapon>]>).map(([indexStr, value], i) => (
//                                             <tr
//                                                 key={indexStr.toString() + i + groupKey}
//                                                 className={i % 2 === 0 ? 'bg-[#334d6c]' : 'bg-[#4d647e]'}
//                                             >
//                                                 <td className="p-3 max-[364px]:p-1">{indexStr}</td>
//                                                 <td className="p-3 max-[364px]:p-1">{value[0].Value.toFixed(2)}</td>
//                                                 <td className="p-3 max-[364px]:p-1">{getNumberValue(value[1].Value)}</td>
//                                             </tr>
//                                         ))
//                                     )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// }