'use client'
import { ElementIcon } from '@/components/element-weapon'
import { Card, CardContent } from '@/components/ui/card'
import type { ICharacterDetail } from '@/lib/interface'
import { Flame } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  readonly resonator: ICharacterDetail;
}

export function SidebarCharacter({ resonator }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [indexTab, setIndexTab] = useState<number>(-1);

  useEffect(() => {
    const mode = searchParams.get('mode');
    switch (mode) {
      case 'profile':
        setIndexTab(0);
        break;
      case 'talent':
        setIndexTab(1);
        break;
      case '/guides':
        setIndexTab(0);
        break;
      default:
        setIndexTab(0);
    }
  }, [searchParams]);

  const onClickChangeIndexTab = (index: number, mode: string) => {
    setIndexTab(index);
    const newUrl = `${window.location.pathname}?mode=${mode}`;
    router.replace(newUrl, { scroll: false });
  }

  const handleStar = (rank: number) => {
    if (rank === 5) return [1, 2, 3, 4, 5];
    return [1, 2, 3, 4];
  }
  console.log(resonator);

  return (
    <div>
      {/* Character name and stars */}
      <Card className="bg-[#1a3759] border-[#4d647e] mb-4">
        <CardContent className="p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#334d6c] rounded-full p-1">
              <ElementIcon element={resonator.element} />
            </div>
            <h1 className="text-2xl font-bold">{resonator.name}</h1>
          </div>
          <div className="flex">
            {handleStar(resonator.rank).map((star, index) => (
              <svg key={index + 'star resonator'} xmlns="http://www.w3.org/2000/svg" width="14" height="14" aria-hidden="true" data-icon="Star" viewBox="0 0 15 15" className="h-5 w-5 fill-current text-yellow-300 drop-shadow-special filter"><path fill="currentColor" d="M7.5 0C6.429 4.286 5.357 6.429 0 7.5c5.357 1.071 6.429 3.214 7.5 7.5 1.071-4.286 2.143-6.429 7.5-7.5C9.643 6.429 8.571 4.286 7.5 0Z"></path></svg>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation menu */}
      <Card className="bg-[#1a3759] border-[#4d647e] mb-4">
        <CardContent className="p-3 flex flex-col">
          <div className="p-0">
            <nav>
              {["Profile", "Talent", "Constellation", "Ascension", "Guides", "Story", "Quotes"].map((item, index) => (
                <button
                  onClick={() => onClickChangeIndexTab(index, item.toLowerCase())}
                  key={item}
                  className={`w-full text-left text-[#b5b2ec] hover:text-white px-3 py-2 rounded-[20px] cursor-pointer pointer-events-auto transition-all duration-600 ${index === indexTab ? "bg-[#334d6c]" : "bg-transparent"}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>
      {/* Advertisement */}
      <Card className="bg-[#1a3759] border-[#4d647e] mb-4">
        <CardContent className="p-6 flex flex-col">
          <h2 className="text-xl mb-2">Advertisement</h2>
          <div className="bg-[#334d6c] rounded p-2 flex items-center justify-between border border-[#4d647e]">
            <div className="text-white font-bold">Meap Gay</div>
            <button className="bg-orange-600 text-white text-xs px-3 py-1 rounded">PLAY NOW FOR FREE</button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
