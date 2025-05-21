import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Character {
  id: number
  name: string
  image: string
  quickGuideRating: number
  extendedGuideRating: number
}

interface CharacterGuideCardProps {
  character: Character;
}

export default function CharacterGuideCard({ character }: CharacterGuideCardProps) {
  return (
    <div className="bg-[#1f293780] border-[#374151] border rounded-xl overflow-hidden flex items-center flex-row p-4 shadow-lg h-[160px]">
      <div className="relative min-w-12 h-auto flex-shrink-0 rounded-md flex-2">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={character.image} alt="character" width={96} height={96} />
        </div>
      </div>
      <div className="ml-4 flex-5">
        <h2 className="text-white text-xl sm:text-2xl font-bold truncate whitespace-pre-wrap">{character.name}</h2>

        <div className="mt-2 space-y-2">
          <div className="flex justify-between mb-0 border border-[#4d647e] px-1 pr-0 rounded-xl overflow-hidden bg-[#606d8180] max-w-[170px]">
            <span className="text-white text-sm sm:text-[14px] pr-1 text-center w-full">Quick Guide</span>
            <span className="flex items-center justify-center min-w-[35px] text-white text-sm sm:text-[14px] font-medium border-l border-[#1a3759] w-[35px] text-center bg-[#5d6977]">{character.quickGuideRating}.</span>
          </div>
          <div className="my-[4px]"></div>
          <div className="flex justify-between mb-0 border border-[#4d647e] px-1 pr-0 rounded-xl overflow-hidden bg-[#606d8180] max-w-[170px]">
            <span className="text-white text-sm sm:text-[14px] pr-1 text-center w-full">Extended Guide</span>
            <span className="flex items-center justify-center min-w-[35px] text-white text-sm sm:text-[14px] font-medium border-l border-[#1a3759] w-[35px] text-center bg-[#5d6977]">{character.extendedGuideRating}.</span>
          </div>
        </div>
      </div>
    </div>
  )
}