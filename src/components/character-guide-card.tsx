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
    <div className="rounded-xl overflow-hidden bg-[#1a3759] border border-[#4d647e]">
      <div className="p-6 flex items-start space-x-4">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={character.image || "/placeholder.svg"}
            alt={character.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-4">{character.name}</h2>

          <div className="space-y-2">
            <div className="flex items-center border border-slate-700 rounded-[5px] w-fit">
              <Button variant="secondary" className="text-sm px-4 py-1 h-auto">
                Quick Guide
              </Button>
              <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                {character.quickGuideRating.toFixed(1)}
              </span>
            </div>

            <div className="flex items-center border border-slate-700 rounded-[5px] w-fit">
              <Button variant="secondary" className="text-sm px-4 py-1 h-auto">
                Extended Guide
              </Button>
              <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                {character.extendedGuideRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
