import Image from "next/image"
import type { IWeapon } from "@/lib/interface";
import Link from "next/link";
import { WeaponIcon } from "@/components/element-weapon";

interface Props {
  readonly weapons: IWeapon[];
}
export function WeaponGrid({ weapons }: Props) {

  const handleStar = (rank: number) => {
    if (rank === 5) return [1, 2, 3, 4, 5];
    return [1, 2, 3, 4];
  }
  return (
    <div className="grid grid-cols-2 max-[475px]:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {weapons.map((weapon) => (
        <Link
          href={'/weapons/' + weapon.id}
          key={weapon.id}
          className="bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-48 sm:h-56 md:h-48">
            {/* <div className="absolute top-2 left-2 z-10">
              <ElementIcon element={character.element} />
            </div> */}
            <div className="absolute top-2 right-2 z-10">
              <WeaponIcon type={weapon.type} />
            </div>
            <Image src={weapon.icon || "/placeholder.svg"} alt={weapon.name} fill className="object-cover" />
            <div className={`absolute bottom-0 left-0 right-0 ${weapon.rarity === 5 ? 'bg-[linear-gradient(0deg,_#c9ac67c8_0%,_#c9ac6700_100%)]' : 'bg-[linear-gradient(0deg,_#b567c9c8_0%,_#aa67c900_100%)]'} p-4`}>
              <h3 className="text-center text-shadow-[#050505b8] text-shadow-lg font-bold">{weapon.name}</h3>
              <div className="flex justify-center mt-1">
                {handleStar(weapon.rarity).map((item, index) => {
                  return (
                    <svg key={index + 'icon star detail'} xmlns="http://www.w3.org/2000/svg" width="14" height="14" aria-hidden="true" data-icon="Star" viewBox="0 0 15 15" className="h-5 w-5 fill-current text-yellow-300 drop-shadow-special filter">
                      <path fill="currentColor" d="M7.5 0C6.429 4.286 5.357 6.429 0 7.5c5.357 1.071 6.429 3.214 7.5 7.5 1.071-4.286 2.143-6.429 7.5-7.5C9.643 6.429 8.571 4.286 7.5 0Z"></path>
                    </svg>
                  )
                })}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

