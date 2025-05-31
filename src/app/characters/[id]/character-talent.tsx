"use client"

import { useEffect, useState } from "react"
import type { IResonatorSkill } from "@/lib/interface"
import { useParams } from "next/navigation"
import Image from 'next/image'
import { SkillStat } from "./skill-stat"
import { TableSkillStat } from "./table-skill-stat"
import { Skeleton } from "@/components/ui/skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js"
import { supabase } from "@/utils/supabase/server"

export default function CharacterTalent() {
  const uParams = useParams()
  const [skills, setSkills] = useState<IResonatorSkill[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const id = uParams['id']
    const getSkill = async () => {
      const { data: skill_data }: PostgrestMaybeSingleResponse<IResonatorSkill[]> = await supabase.from('skill').select('*').eq('resonator_id', Number(id)).order('id', { ascending: true });
      setSkills(skill_data ?? [])
      setIsLoading(false)
    }
    getSkill()
  }, [])

  return (
    <div className="min-h-screen text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-6">Resonance Skills</h1>
      {isLoading ? (
        <Skeleton className="h-[600px] w-full bg-[#131620]" />
      ) : (
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              skills.map((skill: IResonatorSkill, index: number) => {
                return (
                  <CharacterSkill skill={skill} key={skill.id + index + 'skill'} />
                )
              })
            }
          </div>
        </div>
      )}
    </div>
  )
}

interface PropsSkill {
  skill: IResonatorSkill;
}
function CharacterSkill({ skill }: PropsSkill) {
  const [showForeignBlazeTable, setShowForeignBlazeTable] = useState(false)

  const handleDescription = (description: string) => {
    return description.replaceAll(`<br><br>`, '<br>').replaceAll('text-3xl', 'text-[17px]')
  }

  return (
    <div className={`bg-[#1a2234] border-[#374151] rounded-lg overflow-hidden border col-span-2`}>
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
        <div className={`grid grid-cols-1 gap-4 p-4 bg-[#131620] border-[#1e2230] ${skill.attributes.length === 0 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
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

          {
            skill.attributes.length > 0 && <div>
              <SkillStat skill={skill} />
            </div>
          }

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
} 
