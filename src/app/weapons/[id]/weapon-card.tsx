'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import type { IAllStat, IHashIndex, IKeyValue, IStatWeapon, IWeaponDetail, TDisplayAscension, THashIndexStatList } from '@/lib/interface';
import { useItemStore } from '@/lib/store';
import { client } from '@/trpc/client';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Props {
    weapon_detail: IWeaponDetail;
}

export const WeaponCard = ({ weapon_detail }: Props) => {
    const { items, setItems } = useItemStore();
    const [levelCap, setLevelCap] = useState<{ level: number, range: 0 | 1 | 2 | 3 | 4 | 5 | 6 }>({ level: 90, range: 6 });
    const [isOpenPopupDetail, setIsOpenPopupDetail] = useState<boolean>(false);

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
            Object.entries(weapon_detail.ascensions).map(
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
    }, [weapon_detail.ascensions, items]);


    const onClickClosePopup = () => {
        setIsOpenPopupDetail(false);
    };

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

    const getNumberValue = (n: 0 | 1): number => {
        if (n === 0) return weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][n]['Value'];
        return weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][n]['Value'] / 100;
    }

    return (
        <>
            <div className="bg-[#21252b] rounded-lg overflow-hidden mb-6 border border-[#3e4451]">
                <div className="p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="font-bold text-lg text-[#61afef]">{weapon_detail.type}</h2>
                            <div className="text-sm opacity-90">Base {weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][0]['Name']}</div>
                            <div className="text-2xl font-bold text-[#d19a66]">{Number(getNumberValue(0).toFixed(2))}</div>
                            <div className="text-sm opacity-90 mt-2">{weapon_detail.stats[levelCap.range][levelCap.level as keyof THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>][1]['Name']}</div>
                            <div className="text-2xl font-bold text-[#d19a66]">{Number(getNumberValue(1).toFixed(2))}%</div>
                            <div className="flex mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 fill-[#e5c07b] text-[#e5c07b]" />
                                ))}
                            </div>
                        </div>
                        <div className="w-32 h-48 relative">
                            <Image
                                src={weapon_detail.icon}
                                width={128}
                                height={192}
                                alt={weapon_detail.name}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="bg-[#3e4451] px-3 py-1 rounded-md">
                            <span className="text-sm text-[#56b6c2]">Lv. {levelCap.level}</span>
                        </div>
                        <button onClick={() => setIsOpenPopupDetail(true)} className="bg-[#3e4451] px-3 py-1 rounded-md flex items-center cursor-pointer pointer-events-auto">
                            <span className="text-sm mr-1 text-[#56b6c2]">Table</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
                                <line x1="9" y1="21" x2="9" y2="9" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 w-full bg-[#3e4451] rounded-full h-2">
                        <Slider
                            max={100}
                            step={1}
                            className={cn("w-[100%]", "bg-white")}
                            defaultValue={[100]}
                            onValueChange={(value) => setLevelCap(handleValueLevelCap(value))}
                        />
                    </div>

                    <div className="mt-4 bg-[#2c313a] rounded-md p-3 border border-[#3e4451]">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-[#3e4451] rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs font-bold text-[#56b6c2]">1</span>
                            </div>
                            <span className="text-sm font-medium text-[#c678dd]">Refinement Rank 1</span>
                        </div>

                        <div className="mt-3">
                            <h3 className="font-bold text-[#98c379]">{weapon_detail.effect_name}</h3>
                            <p className="text-sm mt-1">
                                {weapon_detail.effect}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-sm italic text-[#5c6370]">
                        {weapon_detail.description}
                    </div>
                </div>
            </div>
            <DialogTableDetailStat isOpen={isOpenPopupDetail} stats={weapon_detail.stats} onClickChangeState={onClickClosePopup} weapon_detail={weapon_detail} />
        </>
    )
}


function DialogTableDetailStat({ stats, isOpen, onClickChangeState }: { readonly isOpen: boolean; stats?: IAllStat<IHashIndex<[0, 1], IStatWeapon>>; readonly onClickChangeState: (value: boolean) => void; } & Props) {
    const getNumberValue = (value: number): string => {
        return (value / 100).toFixed(2);
    }
    return (
        <Dialog open={isOpen} onOpenChange={onClickChangeState}>
            <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0 gap-0 bg-[#002147] border-[#334d6c] text-white max-h-[80vh] flex flex-col overflow-hidden">
                <DialogHeader className="p-4 border-b border-[#1a3759] flex flex-row items-center justify-between bg-[#1a3759]">
                    <DialogTitle className="text-2xl font-bold text-white mx-auto">Filter</DialogTitle>
                </DialogHeader>
                <div className="pb-6 h-full flex flex-col overflow-hidden">
                    <div className="p-5 py-6 pb-0 overflow-y-auto h-full flex-1">
                        <table className="w-full max-w-2xl text-sm text-center rounded-lg overflow-hidden">
                            <thead className="bg-[#1a3759] text-white">
                                <tr>
                                    <th className="p-3 max-[364px]:p-1">Level</th>
                                    <th className="p-3 max-[364px]:p-1">Base {stats?.[0][1][0]['Name']}</th>
                                    <th className="p-3 max-[364px]:p-1 capitalize">{stats?.[0][1][1]['Name']}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats &&
                                    (Object.entries(stats) as Array<[string, THashIndexStatList<IHashIndex<[0, 1], IStatWeapon>>]>).flatMap(([groupKey, group]) =>
                                        (Object.entries(group) as Array<[string, IHashIndex<[0, 1], IStatWeapon>]>).map(([indexStr, value], i) => (
                                            <tr
                                                key={indexStr.toString() + i + groupKey}
                                                className={i % 2 === 0 ? 'bg-[#334d6c]' : 'bg-[#4d647e]'}
                                            >
                                                <td className="p-3 max-[364px]:p-1">{indexStr}</td>
                                                <td className="p-3 max-[364px]:p-1">{value[0].Value.toFixed(2)}</td>
                                                <td className="p-3 max-[364px]:p-1">{getNumberValue(value[1].Value)}</td>
                                            </tr>
                                        ))
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}