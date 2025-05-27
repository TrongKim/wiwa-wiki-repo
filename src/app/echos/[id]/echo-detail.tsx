"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Flame, Zap, Wind, Users } from "lucide-react"
import type { IEchoDetail, IEchoSetDetail } from "@/lib/interface"
import Image from 'next/image'
import { highlightNumberPhrasesToHTML, highlightNumbers } from "@/utils/text.utils"

function ItemShowcaseSkeleton() {
    return <div>Loading...</div>
}

interface Props {
    echo_detail: IEchoDetail | null;
    sets: IEchoSetDetail[] | null;
}

export default function EchoDetail({ echo_detail, sets }: Props) {
    const [loading, setLoading] = useState(true)
    const [selectedLevel, setSelectedLevel] = useState(3)

    useEffect(() => {
        if (echo_detail && sets) setLoading(false);
    }, [])


    // if (loading) <ItemShowcaseSkeleton />

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen"
        >
            {/* Left Side - Item Display */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="relative">
                    <Image
                        width={100}
                        height={100}
                        src={echo_detail?.icon ?? ''}
                        alt={echo_detail?.name ?? ''}
                        className="w-full max-w-md h-auto object-contain"
                    />
                </motion.div>

                <div className="text-center space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{echo_detail?.name}</h1>
                </div>
            </div>

            {/* Right Side - Details */}
            <div className="lg:col-span-5 space-y-6">
                {/* Details Section */}
                <div className="bg-[#1f293780] backdrop-blur-md rounded-lg border border-[#374151] overflow-hidden">
                    <div className="bg-[#374151] px-4 py-2">
                        <h2 className="text-lg font-bold text-white">Details</h2>
                        <p className="text-xs text-[#60a5fa] uppercase tracking-wider">DETAILS</p>
                    </div>

                    <div className="p-4 space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-[#374151]">
                            <span className="text-[#94a3b8]">Type</span>
                            <span className="font-medium text-white">Echo</span>
                        </div>

                        <div className="flex justify-between items-center py-2">
                            <span className="text-[#94a3b8]">Class</span>
                            <span className="font-medium text-white">{echo_detail?.intensity}</span>
                        </div>
                    </div>
                </div>

                {/* Echo Skill Section */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">Echo Skill</h3>
                        <div className="h-px bg-[#60a5fa] w-full mt-1"></div>
                    </div>

                    <p className="text-[#94a3b8] leading-relaxed">{highlightNumberPhrasesToHTML(echo_detail?.skill_desc ?? '')}</p>
                </div>

                {/* Sonata Effect Section */}
                <div className="space-y-4">

                    <div>
                        <h3 className="text-lg font-bold text-white">Sonata Effect</h3>
                        <div className="h-px bg-[#60a5fa] w-full mt-1"></div>
                    </div>

                    <div className="space-y-3">
                        {
                            (sets ?? []).map((set, index) => {
                                return (
                                    <div key={set.id} className="flex items-center gap-3 ">
                                        <div className="w-8 h-8 bg-[#374151] rounded-full flex items-center justify-center">
                                            <Image src={set.icon} width={100} height={100} alt={set.name} className="w-full h-full" />
                                        </div>
                                        <span className="font-medium text-white">Molten Rift</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Enemy Creatures Button */}
                <button className="w-full bg-[#1f293780] backdrop-blur-md border border-[#374151] rounded-lg py-3 px-4 text-white font-medium hover:bg-[#374151]/50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                        <Users className="w-5 h-5" />
                        Enemy Creatures
                    </div>
                </button>
            </div>

            {/* Bottom Left - Echo Skill Details */}
            <div className="lg:col-span-7 space-y-6">
                <div className="bg-[#1f293780] backdrop-blur-md rounded-lg border border-[#374151] p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center flex-shrink-0">
                            {/* <div className="w-8 h-8 bg-[#60a5fa] rounded-full"></div> */}
                            <Image
                                src={echo_detail?.skill_icon ?? ''}
                                width={100}
                                height={100}
                                alt="echo skill"
                                className="w-12 h-12"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="mb-2">
                                <h3 className="text-lg font-bold text-white">Echo Skill</h3>
                                <p className="text-xs text-[#60a5fa] uppercase tracking-wider">ECHO SKILL</p>
                            </div>

                            <p className="text-[#94a3b8] leading-relaxed mb-3">
                                {
                                    highlightNumberPhrasesToHTML(echo_detail?.skill_desc ?? '')
                                }
                            </p>

                            <p className="text-[#94a3b8]">
                                CD: <span className="text-[#60a5fa] font-medium">15s</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sonata Effect Details */}
                <div className="bg-[#1f293780] backdrop-blur-md rounded-lg border border-[#374151] p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-white">Sonata Effect</h3>
                        <p className="text-xs text-[#60a5fa] uppercase tracking-wider">SONATA EFFECT</p>
                    </div>

                    <div className="space-y-6">
                        {
                            (sets ?? []).map((set, index) => {
                                return (
                                    <div key={'set echo' + set.id} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Image src={set.icon} width={100} height={100} alt={set.name} className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white mb-2">{set.name}</h4>
                                            <p className="text-sm text-[#94a3b8] mb-1">2-Piece: {highlightNumbers(set.set_2_desc)}</p>
                                            <p className="text-sm text-[#94a3b8]">
                                                5-Piece: {highlightNumbers(set.set_5_desc)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
