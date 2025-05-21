'use client'
import React, { useEffect, useState } from 'react'
import type { IEchoDetail } from '@/lib/interface';
import { useItemStore } from '@/lib/store';
import { client } from '@/trpc/client';
import Image from 'next/image';

interface Props {
    echo_detail: IEchoDetail;
}

export const EchoCard = ({ echo_detail }: Props) => {
    const { items, setItems } = useItemStore();

    useEffect(() => {
        const getItems = async () => {
            const items_data = await client.item.getAll.query();
            setItems(items_data ?? []);
        }
        if (items.length === 0) {
            getItems();
        }
    }, [items]);

    return (
        <>
            <div className="bg-[#21252b] rounded-lg overflow-hidden mb-6 border border-[#3e4451]">
                <div className="p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="font-bold text-lg text-[#61afef]">{echo_detail.intensity}</h2>
                            {/* <div className="flex mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 fill-[#e5c07b] text-[#e5c07b]" />
                                ))}
                            </div> */}
                        </div>
                        <div className="w-32 h-48 relative">
                            <Image
                                src={echo_detail.icon}
                                width={128}
                                height={192}
                                alt={echo_detail.name}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-4 bg-[#2c313a] rounded-md p-3 border border-[#3e4451]">
                        <div className="mt-3">
                            <p className="text-sm mt-1">
                                {echo_detail.skill_desc}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-sm italic text-[#5c6370]">
                        {echo_detail.skill_simple_desc}
                    </div>
                </div>
            </div>
        </>
    )
}