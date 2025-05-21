import { ECharacterElementType, ECharacterWeaponType } from '@/lib/enum'
import Image from 'next/image'

export function ElementIcon({ element, classCSS }: { readonly element: string, readonly classCSS?: string }) {
  const colors: Record<string, string> = {
    Fusion: "text-red-500",
    Electro: "text-blue-400",
    Aero: "text-green-400",
    Glacio: "text-yellow-500",
    Spectro: "text-yellow-300",
    Havoc: "text-purple-500",
  }

  const getIconCase = (element: string): React.JSX.Element => {
    switch (element) {
      case ECharacterElementType.FUSION:
        return <Image src="/elements_icon/Fusion.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
      case ECharacterElementType.ELECTRO:
        return <Image src="/elements_icon/Electro.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
      case ECharacterElementType.AERO:
        return <Image src="/elements_icon/Aero.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
      case ECharacterElementType.GLACIO:
        return <Image src="/elements_icon/Glacio.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
      case ECharacterElementType.SPECTRO:
        return <Image src="/elements_icon/Spectro.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
      case ECharacterElementType.HAVOC:
        return <Image src="/elements_icon/Havoc.png" fill alt="element" className="w-[24px] h-[24px] object-contain" />
    }
    return <></>
  }

  return (
    <div className={`flex items-center justify-center rounded-full relative ${colors[element]} ${classCSS ?? 'h-6 w-6' }`}>
      {getIconCase(element)}
    </div>
  )
}

export function WeaponIcon({ type, classCSS }: { readonly type: string; readonly classCSS?: string; }) {
  const colors: Record<string, string> = {
    Sword: "text-blue-400",
    Pistols: "text-green-400",
    Rectifier: "text-purple-500",
    Broadblade: "text-yellow-500",
    Gauntlets: "text-red-500",
  }

  const getIconCase = (type: string): React.JSX.Element => {
    switch (type) {
      case ECharacterWeaponType.SWORD:
        return <Image src="/weapons_icon/sword.png" fill alt="element" />
      case ECharacterWeaponType.PISTOLS:
        return <Image src="/weapons_icon/pistols.png" fill alt="element" />
      case ECharacterWeaponType.RECTIFIER:
        return <Image src="/weapons_icon/rectifier.png" fill alt="element" />
      case ECharacterWeaponType.BROAD_BLADE:
        return <Image src="/weapons_icon/broadblade.png" fill alt="element" />
      case ECharacterWeaponType.GAUNTLETS:
        return <Image src="/weapons_icon/gauntlets.png" fill alt="element" />
    }
    return <></>
  }

  return (
    <div className={`flex items-center justify-center rounded-full relative ${colors[type]}  ${classCSS ?? 'h-8 w-8' }`}>
      {getIconCase(type)}
    </div>
  )
}