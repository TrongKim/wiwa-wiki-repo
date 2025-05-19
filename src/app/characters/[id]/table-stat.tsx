'use client'
import type { IAllStat, IStatCharacter, THashIndexStatList } from '@/lib/interface';
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Props {
    readonly stats?: IAllStat;
}

export function TableStatCharacter({ stats }: Props) {
    const [isOpenPopupDetail, setIsOpenPopupDetail] = useState<boolean>(false);

    const getLastChild = (group: THashIndexStatList): { key: number, value: IStatCharacter | undefined } | undefined => {
        const keys = Object.keys(group);
        const lastKey = Number(keys[keys.length - 1]) as keyof THashIndexStatList;
        if (!lastKey) return;
        return { key: lastKey, value: group[lastKey] };
    };

    const onClickClosePopup = () => {
        setIsOpenPopupDetail(false);
    };

    return (
        <>
            <div className="max-[875px]:w-full">
                <table className="w-full max-w-2xl text-sm text-center rounded-lg overflow-hidden">
                    <thead className="bg-[#1a3759] text-white">
                        <tr>
                            <th className="p-3 max-[875px]:p-1">Level</th>
                            <th className="p-3 max-[875px]:p-1">HP</th>
                            <th className="p-3 max-[875px]:p-1">Attack</th>
                            <th className="p-3 max-[875px]:p-1">Defense</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats &&
                            (Object.entries(stats) as [string, any]).flatMap(([groupKey, group], i) =>
                                <tr
                                    key={'group key' + i + group}
                                    className={i % 2 === 0 ? 'bg-[#334d6c]' : 'bg-[#4d647e]'}
                                >
                                    <td className="p-3 max-[875px]:p-1">{getLastChild(group)?.key}</td>
                                    <td className="p-3 max-[875px]:p-1">{Math.floor(getLastChild(group)?.value?.Life ?? 0)}</td>
                                    <td className="p-3 max-[875px]:p-1">{Math.floor(getLastChild(group)?.value?.Atk ?? 0)}</td>
                                    <td className="p-3 max-[875px]:p-1">{Math.floor(getLastChild(group)?.value?.Def ?? 0)}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <button onClick={() => setIsOpenPopupDetail(true)} className="block underline decoration-1 text-center mx-auto mt-2 cursor-pointer pointer-events-auto hover:text-[#b5b2ec]">Read more</button>
            </div>
            <DialogTableDetailStat isOpen={isOpenPopupDetail} stats={stats} onClickChangeState={onClickClosePopup} />
        </>
    )
}

function DialogTableDetailStat({ stats, isOpen, onClickChangeState }: { readonly isOpen: boolean, readonly onClickChangeState: (value: boolean) => void; } & Props) {
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
                                    <th className="p-3 max-[364px]:p-1">HP</th>
                                    <th className="p-3 max-[364px]:p-1">Attack</th>
                                    <th className="p-3 max-[364px]:p-1">Defense</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats &&
                                    (Object.entries(stats) as Array<[string, THashIndexStatList]>).flatMap(([groupKey, group]) =>
                                        (Object.entries(group) as Array<[string, IStatCharacter]>).map(([indexStr, value], i) => (
                                            <tr
                                                key={indexStr.toString() + i + groupKey + value.Life}
                                                className={i % 2 === 0 ? 'bg-[#334d6c]' : 'bg-[#4d647e]'}
                                            >
                                                <td className="p-3 max-[364px]:p-1">{indexStr}</td>
                                                <td className="p-3 max-[364px]:p-1">{Math.floor(value.Life)}</td>
                                                <td className="p-3 max-[364px]:p-1">{Math.floor(value.Atk)}</td>
                                                <td className="p-3 max-[364px]:p-1">{Math.floor(value.Def)}</td>
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