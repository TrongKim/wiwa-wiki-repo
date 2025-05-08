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

// export default function CharacterGuideCard({ character }: CharacterGuideCardProps) {
//   return (
//     <div className="rounded-xl overflow-hidden bg-[#1a3759] border border-[#4d647e]">
//       <div className="p-3 flex items-start space-x-4">
//         <div className="relative w-32 h-32 flex-shrink-0 max-[1045px]:w-28 max-[1045px]:h-28 max-[1020px]:w-32 max-[1020px]:h-32 max-[769px]:w-25 max-[769px]:h-25 max-[740px]:w-32 max-[740px]:h-32">
//           <Image
//             src={character.image || "/placeholder.svg"}
//             alt={character.name}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-white mb-4">{character.name}</h2>
//           <div className="space-y-2">
//             <div className="flex items-center justify-between border border-slate-700 rounded-[5px] w-full">
//               <Button variant="secondary" className="text-sm px-4 py-1 h-auto">
//                 Quick Guide
//               </Button>
//               <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
//                 {character.quickGuideRating.toFixed(1)}
//               </span>
//             </div>

//             <div className="flex items-center justify-between border border-slate-700 rounded-[5px] w-full">
//               <Button variant="secondary" className="text-sm px-4 py-1 h-auto">
//                 Extended Guide
//               </Button>
//               <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
//                 {character.extendedGuideRating.toFixed(1)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function CharacterGuideCard({ character }: CharacterGuideCardProps) {
  return (
    <div className="bg-[#1a3759] border border-[#4d647e] rounded-xl overflow-hidden flex flex-row p-4 shadow-lg">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-md">
        <div className="absolute inset-0 flex items-center justify-cente">
          <Image src={character.image} alt="character" fill />
        </div>
      </div>

      <div className="ml-4 flex-grow">
        <h2 className="text-white text-xl sm:text-2xl font-bold truncate whitespace-pre-wrap">{character.name}</h2>

        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between mb-0 border border-[#4d647e] px-1 pr-0 rounded-xl overflow-hidden bg-[#334d6c]">
            <span className="text-white text-sm sm:text-[14px] pr-1">Quick Guide</span>
            <span className="text-white text-sm sm:text-[14px] font-medium border-l border-[#1a3759] w-[35px] text-center bg-[#667a91]">{character.quickGuideRating}.</span>
          </div>

          <div className="border-t border-[#1A3A62] my-[2px]"></div>

          <div className="flex items-center justify-between mb-0 border border-[#4d647e] px-1 pr-0 rounded-xl overflow-hidden bg-[#334d6c]">
            <span className="text-white text-sm sm:text-[14px] pr-1">Extended Guide</span>
            <span className="text-white text-sm sm:text-[14px] font-medium border-l border-[#1a3759] w-[35px] text-center bg-[#667a91]">{character.extendedGuideRating}.</span>
          </div>
        </div>
      </div>
    </div>
  )
}