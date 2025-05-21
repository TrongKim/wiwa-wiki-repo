"use client"
import type { IResonatorChain } from "@/lib/interface";
import { client } from "@/trpc/client"
import Image from "next/image"
import { useEffect, useState } from "react";
interface PageProps {
  readonly params: { id: number };
}

export const CharacterResonanceChain = ({ params }: PageProps) => {
  const [resonatorChains, setResonatorChains] = useState<IResonatorChain[]>([])

  useEffect(() => {
    const getChain = async () => {
      const data = await client.resonator.getChain.query({ id: params.id })
      setResonatorChains(data ?? [])
    }
    getChain()
  }, [])

  const handleDescription = (description: string) => {
    return description.replaceAll(`<br><br>`, '<br>').replaceAll('text-3xl', 'text-[17px]');
  }

  return (
    <div className="min-h-screen bg-[#0d0d10] text-gray-200 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Resonance Chain</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resonatorChains.map((chain, index) => (
            <div
              key={chain.id + index}
              className="bg-[#131620] rounded-lg border border-[#1e2230] overflow-hidden flex flex-col"
            >
              <div className="bg-[#1a2234] p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center">
                  <Image
                    src={chain.icon}
                    width={30}
                    height={30}
                    alt={`${chain.name}`}
                  />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {chain.name}
                </h2>
              </div>
              <div className="p-6">
                <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: handleDescription(chain.description) }} >

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
