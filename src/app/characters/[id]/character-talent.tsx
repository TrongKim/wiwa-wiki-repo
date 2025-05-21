"use client"

import { useEffect, useState } from "react"
import type { IResonatorSkill, ISkillConsume } from "@/lib/interface"
import { useParams } from "next/navigation"
import { client } from "@/trpc/client"
import Image from 'next/image'
import { SkillStat } from "./skill-stat"
import { TableSkillStat } from "./table-skill-stat"
import { Skeleton } from "@/components/ui/skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function CharacterTalent() {
  const uParams = useParams()
  const [showForeignBlazeTable, setShowForeignBlazeTable] = useState(false)
  const [skills, setSkills] = useState<IResonatorSkill[]>([])
  const [skillLevelCap, setSkillLevelCap] = useState<number>(9)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const id = uParams['id']
    const getSkill = async () => {
      const skill_data = await client.resonator.getSkill.query({ id: Number(id) })
      setSkills(skill_data ?? [])
      setIsLoading(false)
    }
    getSkill()
  }, [])

  const handleDescription = (description: string) => {
    return description.replaceAll(`<br><br>`, '<br>').replaceAll('text-3xl', 'text-[17px]')
  }

  return (
    <div className="min-h-screen text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-6">Forte</h1>
      {isLoading ? (
        <Skeleton className="h-[600px] w-full bg-[#131620]" />
      ) : (
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              skills.map((skill: IResonatorSkill, index: number) => {
                return (
                  <div key={skill.id + index + Math.random()} className={`bg-[#1a2234] border-[#374151] rounded-lg overflow-hidden border col-span-2`}>
                    {/* Talent Header */}
                    <div className="p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                        <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                          <Image src={skill.icon} width={32} height={32} alt="skill" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold capitalize">{skill.name.length > 0 ? skill.name.replace(`"`, '').replace(`"`, '') : 'Đặc Biệt'}</h2>
                    </div>

                    {/* Talent Content */}
                    {!showForeignBlazeTable ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-[#131620] border-[#1e2230]">
                        {/* Left Column - Talent Info */}
                        <div>
                          <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                            <span className="font-bold">Forte Info</span>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-yellow-300 font-bold mb-1">{skill.type}</h3>
                              <div dangerouslySetInnerHTML={{ __html: handleDescription(skill.description) }}></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <SkillStat skill={skill} />
                        </div>
                      </div>
                    ) : (
                      <TableSkillStat skill={skill} />
                    )}

                    {/* Toggle Buttons */}
                    {
                      skill.attributes.length > 0 && <div className="p-4 bg-[#1a2234] border-[#1e2230] flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={showForeignBlazeTable}
                            onChange={() => setShowForeignBlazeTable(!showForeignBlazeTable)}
                          />
                          <span>Table</span>
                        </label>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      )}
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
