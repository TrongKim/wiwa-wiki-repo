import Image from "next/image"
import { mockCharacters } from "@/lib/mock-data"
import type { ICharacter } from "@/lib/interface";

interface Props {
  characters: ICharacter[];
}
export function CharacterGrid({ characters }: Props) {
  return (
    <div className="grid grid-cols-2 max-[475px]:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-48 sm:h-56 md:h-64">
            {/* <div className="absolute top-2 left-2 z-10">
              <ElementIcon element={character.element} />
            </div>
            <div className="absolute top-2 right-2 z-10">
              <WeaponIcon type={character.weaponType} />
            </div> */}
            <Image src={character.image || "/placeholder.svg"} alt={character.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <h3 className="text-center font-medium">{character.name}</h3>
              {/* <div className="flex justify-center mt-1">
                <StarRating rating={character.rarity} />
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ElementIcon({ element }: { element: string }) {
  const colors: Record<string, string> = {
    Fire: "text-red-500",
    Water: "text-blue-400",
    Wind: "text-green-400",
    Earth: "text-yellow-500",
    Light: "text-yellow-300",
    Dark: "text-purple-500",
  }

  return (
    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${colors[element]} bg-slate-900/60`}>
      {element === "Fire" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 23C7.58 23 4 19.42 4 15C4 12.76 5.23 10.75 7 9.47V9.5C7 11.43 8.57 13 10.5 13C12.43 13 14 11.43 14 9.5V4.74C14 4.74 17.5 6.67 17.5 12.25C17.5 17.83 12 23 12 23Z" />
        </svg>
      )}
      {element === "Water" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 20C8.69 20 6 17.31 6 14C6 10 12 3.25 12 3.25S18 10 18 14C18 17.31 15.31 20 12 20Z" />
        </svg>
      )}
      {element === "Wind" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" />
        </svg>
      )}
      {element === "Earth" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16.9 16.39C16.64 15.58 15.9 15 15 15H14V13C14 12.45 13.55 12 13 12H7V10H9C9.55 10 10 9.55 10 9V7H12C13.1 7 14 6.1 14 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 18.81 15.89 16.9 16.39Z" />
        </svg>
      )}
      {element === "Light" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
        </svg>
      )}
      {element === "Dark" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" />
        </svg>
      )}
    </div>
  )
}

function WeaponIcon({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Sword: "text-blue-400",
    Bow: "text-green-400",
    Staff: "text-purple-500",
    Spear: "text-yellow-500",
    Axe: "text-red-500",
    Fist: "text-orange-400",
  }

  return (
    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${colors[type]} bg-slate-900/60`}>
      {type === "Sword" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z" />
        </svg>
      )}
      {type === "Bow" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M19.03 6.03L20 7L17 10L20 13L19.03 13.97L14.03 8.97L19.03 6.03M22 5L17.03 2L12.03 7L9.03 4L2 11.03L13.03 22.03L22 5Z" />
        </svg>
      )}
      {type === "Staff" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M4.74,20L12,12.74L19.26,20L12,4.74L4.74,20M2.74,22L12,2L21.26,22L12,17.27L2.74,22Z" />
        </svg>
      )}
      {type === "Spear" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M14,21L12.6,21L12,13.9L8,18.1L13,4.1L18,18.1L14,13.9L14,21Z" />
        </svg>
      )}
      {type === "Axe" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12,2L22,8C22,12 20,15 15,15C13,15 11,14 9,12C7,10 5,9 3,9C2,9 1,10 1,11C1,12 2,13 3,13C4,13 5,13 6,14C7,15 7,16 7,17C7,18 6,19 5,19C4,19 3,18 3,17C3,16 2,15 1,15C0,15 0,16 0,17C0,19 2,22 5,22C7,22 9,21 11,19C13,17 15,16 17,16C22,16 24,20 24,23L12,17C12,17 12,16 12,14C12,12 14,11 15,11C17,11 18,13 18,15L19,14C19,11 17,8 14,8C11,8 9,10 9,13C9,15 10,16 10,16L5,20C5,20 3,17 3,14C3,11 5,8 9,6C9,6 9,5 10,4C11,3 12,2 12,2Z" />
        </svg>
      )}
      {type === "Fist" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H9.18C9.6,8.2 10.73,9 12,9C13.27,9 14.4,8.2 14.82,7H21V5H14.82C14.4,3.8 13.27,3 12,3M12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7M12,15C10.73,15 9.6,15.8 9.18,17H3V19H9.18C9.6,20.2 10.73,21 12,21C13.27,21 14.4,20.2 14.82,19H21V17H14.82C14.4,15.8 13.27,15 12,15M12,19A1,1 0 0,1 11,18A1,1 0 0,1 12,17A1,1 0 0,1 13,18A1,1 0 0,1 12,19Z" />
        </svg>
      )}
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      ))}
    </div>
  )
}
