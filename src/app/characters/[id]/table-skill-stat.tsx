import type { IResonatorSkill, ISkillConsume } from '@/lib/interface'
import React from 'react'
import Image from 'next/image'

interface Props {
    skill: IResonatorSkill;
}

export const TableSkillStat = ({ skill }: Props) => {
    const handleWrongURL = (url: string): string => {
        const url_split = url.split('.');
        return url_split[0] + '.png';
    }

    const handleDescription = (description: string) => {
        return description.replaceAll(`<br><br>`, '<br>').replaceAll('text-3xl', 'text-[17px]');
    }

    return (
        <div className="p-4 bg-[#1a2234] border-[#1e2230]">
            {/* Table View */}
            <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                <span className="font-bold">Talent Info</span>
            </div>

            <div className="mb-4">
                <div dangerouslySetInnerHTML={{ __html: handleDescription(skill.description) }}>
                </div>
            </div>

            <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                <span className="font-bold">Skill Attributes</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#1a3759]">
                            <th className="border border-[#667a91] p-1 text-left text-[14px]">LVL</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">1</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">2</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">3</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">4</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">5</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">6</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">7</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">8</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">9</th>
                            <th className="border border-[#667a91] p-1 text-center text-[14px]">10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            skill.attributes.map((attribute, index) => {
                                return (
                                    <tr key={attribute.attributeId + index} className="bg-[#334d6c]">
                                        <td className="border border-[#667a91] p-1 text-[14px]">{attribute.attributeName}</td>
                                        {
                                            attribute.values.map((value, index) => {
                                                return (
                                                    <td key={value + index + attribute.attributeId} className="border border-[#667a91] p-1 text-center text-[14px]">{value}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* Materials Section */}
            <div className="mt-8 flex items-center justify-start gap-[10px] flex-wrap">
                {
                    (skill.consumes[9]?.Consume ?? []).map((consume: ISkillConsume, index: number) => {
                        return (
                            <div key={consume.Key + index + 'consume'} className="flex-1 bg-[#1a3759] p-3 rounded-[20px] flex flex-col items-center justify-center cursor-pointer pointer-events-auto border border-[#617fa3d6]">
                                <div className="flex-1 bg-[#334d6c] w-full flex justify-center py-2 rounded-xl">
                                    <Image src={handleWrongURL(consume.Icon)} width={48} height={48} alt="consume" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
