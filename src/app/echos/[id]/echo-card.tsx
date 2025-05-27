'use client'
import React, { useEffect, useState } from 'react'
import type { IEchoDetail, IEchoSetDetail } from '@/lib/interface';
import { useItemStore } from '@/lib/store';
import { client } from '@/trpc/client';
import { motion } from "framer-motion"
import { Flame, Shield, Zap } from "lucide-react"
import Image from 'next/image'
import { highlightNumberPhrasesToHTML } from '@/utils/text.utils';

interface Props {
    echo_detail: IEchoDetail | null;
    sets: IEchoSetDetail[] | null;
}

// export const EchoCard = ({ echo_detail }: Props) => {
//     const { items, setItems } = useItemStore();

//     useEffect(() => {
//         const getItems = async () => {
//             const items_data = await client.item.getAll.query();
//             setItems(items_data ?? []);
//         }
//         if (items.length === 0) {
//             getItems();
//         }
//     }, [items]);

//     return (
//         <>
//             <div className="bg-[#21252b] rounded-lg overflow-hidden mb-6 border border-[#3e4451]">
//                 <div className="p-4">
//                     <div className="flex justify-between items-start">
//                         <div>
//                             <h2 className="font-bold text-lg text-[#61afef]">{echo_detail.intensity}</h2>
//                             {/* <div className="flex mt-2">
//                                 {[1, 2, 3, 4, 5].map((star) => (
//                                     <Star key={star} className="w-5 h-5 fill-[#e5c07b] text-[#e5c07b]" />
//                                 ))}
//                             </div> */}
//                         </div>
//                         <div className="w-32 h-48 relative">
//                             <Image
//                                 src={echo_detail.icon}
//                                 width={128}
//                                 height={192}
//                                 alt={echo_detail.name}
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>

//                     <div className="mt-4 bg-[#2c313a] rounded-md p-3 border border-[#3e4451]">
//                         <div className="mt-3">
//                             <p className="text-sm mt-1">
//                                 {echo_detail.skill_desc}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="mt-4 text-sm italic text-[#5c6370]">
//                         {echo_detail.skill_simple_desc}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

function CharacterDetailsSkeleton() {
    return <div>Loading...</div>
}

export default function EchoCard({ echo_detail, sets }: Props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (echo_detail && sets) setLoading(false);
    }, [])

    if (loading) return <CharacterDetailsSkeleton />

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
        >
            {/* Character Header */}
            <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    {/* Character Image */}
                    <div className="w-48 h-48 flex-shrink-0">
                        <Image
                            width={100}
                            height={100}
                            src={echo_detail?.icon ?? ''}
                            alt={echo_detail?.name ?? ''}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h1 className="text-2xl font-bold text-white text-center md:text-left">{echo_detail?.name}</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* <div className="bg-[#2d3748] rounded p-3">
                                <p className="text-sm text-[#94a3b8]">Type</p>
                                <p className="font-medium">Assault</p>
                            </div> */}
                            <div className="bg-[#2d3748] rounded p-3">
                                <p className="text-sm text-[#94a3b8]">Class</p>
                                <p className="font-medium">{echo_detail?.intensity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Echo Skill */}
            <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
                <h2 className="text-xl font-bold mb-4">Echo Skill</h2>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start">
                        <div className="w-12 h-12 bg-[#2d3748] rounded-full flex items-center justify-center">
                            {/* <Flame className="w-6 h-6 text-[#60a5fa]" /> */}
                            <Image
                                src={echo_detail?.skill_icon ?? ''}
                                width={100}
                                height={100}
                                alt="echo skill"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-[#60a5fa] mb-3">Tuyệt kĩ</h3>

                        <div className="space-y-4">
                            <p className="text-[#94a3b8]" >
                                {highlightNumberPhrasesToHTML(echo_detail?.skill_desc ?? '')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Echo Sets */}
            <h2 className="text-xl font-bold mb-4">Echo Sets</h2>
            {
                (sets ?? []).map((set, index) => {
                    return (
                        <div key={set.id} className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#2d3748] rounded-full flex items-center justify-center">
                                            <Image src={set.icon} width={100} height={100} alt={set.name} className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium mb-3">{set.name}</h3>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-sm font-bold mb-1">2-piece</p>
                                                <p className="text-[#94a3b8]">{set.set_2_desc}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold mb-1">5-piece</p>
                                                <p className="text-[#94a3b8]">{set.set_5_desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </motion.div>
    )
}
