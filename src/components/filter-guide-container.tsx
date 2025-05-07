'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { elements, weapons } from '@/lib/mock-data'
import Image from 'next/image'
import CharacterGuideGallery from './character-guide-gallery'
import { charactersGuide } from '@/lib/mock-data'
import { ECharacterElementType, type ECharacterWeaponType } from '@/lib/enum'
import SearchGuide from './search-guide'

type ICharacterGuide = typeof charactersGuide;

export function FilterGuideContainer() {
    const [listGuide, setListGuide] = useState<ICharacterGuide>([]);
    const [listGuideCache, setListGuideCache] = useState<ICharacterGuide>([]);
    const [searchString, setSearchString] = useState<string>('');

    const [filterByElement, setFilterByElement] = useState<{ code: ECharacterElementType } | null>(null);
    const [filterByWeapon, setFilterByWeapon] = useState<{ code: ECharacterWeaponType } | null>(null);
    const [isFilter, setIsFilter] = useState<boolean>(false);

    useEffect(() => {
        setListGuide([...charactersGuide]);
    }, []);

    const isFilterHandler = (): boolean => {
        return filterByElement != null || filterByWeapon != null;
    }

    const onSearchByName = (input_element: React.ChangeEvent<HTMLInputElement>): void => {
        const searchValue = input_element.target.value.trim();
        setSearchString(searchValue);
    }

    const onSelectElement = (element_code: ECharacterElementType): void => {
        if (filterByElement?.code === element_code) {
            setFilterByElement(null);
            return;
        }
        setFilterByElement({ code: element_code });
    }

    const onSelectWeapon = (weapon_code: ECharacterWeaponType | null): void => {
        if (weapon_code === null) {
            setFilterByWeapon(null);
            return;
        }
        if (filterByWeapon?.code === weapon_code) {
            setFilterByWeapon(null);
            return;
        }
        setFilterByWeapon({ code: weapon_code });
    }

    useEffect(() => {
        if (isFilterHandler() || searchString.trim().length != 0) {
            setIsFilter(true);
            let guides_filtered = listGuide.filter(guide => guide.name.toLowerCase().includes(searchString.trim().toLowerCase()));
            if (filterByElement != null) guides_filtered = guides_filtered.filter(guide => guide.elementType === filterByElement.code);
            if (filterByWeapon != null) guides_filtered = guides_filtered.filter(guide => guide.weaponType === filterByWeapon.code);
            setListGuideCache(guides_filtered);
            return;
        }
        setIsFilter(false);
    }, [filterByElement, filterByWeapon, searchString]);


    return (
        <div>
            <div className="mb-8">
                <SearchGuide />
            </div>

            {/* Filter Guide Bar */}
            <Card className="border-0">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row justify-between gap-[10px]">
                        {/* Elements Section */}
                        <div className="w-fit bg-[#1a3759] p-4 border-[#4d647e] border-[1px] rounded-xl">
                            <div className="flex items-center justify-start flex-wrap">
                                {elements.map((element) => (
                                    <button key={element.name} onClick={() => onSelectElement(element.code)} className={`flex w-[70px] flex-col items-center justify-center gap-2 p-2 rounded-[5px] cursor-pointer pointer-events-auto ${filterByElement?.code === element.code && 'bg-[#334d6c]'}`}>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                                            <Image src={element.icon} alt="element" width={35} height={35} />
                                        </div>
                                        <span className="text-xs text-center">{element.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Weapons Section */}
                        <div className="w-fit bg-[#1a3759] p-4 border-[#4d647e] border-[1px] rounded-xl">
                            <div className="flex items-center justify-start flex-wrap">
                                {weapons.map((weapon) => (
                                    <button key={weapon.name} onClick={() => onSelectWeapon(weapon.code)} className={`flex w-[70px] px-[10px] py-[5px] flex-col items-center justify-center gap-2 p-2 rounded-[5px] cursor-pointer pointer-events-auto ${filterByWeapon?.code === weapon.code && 'bg-[#334d6c]'}`}>
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <Image src={weapon.icon} alt="element" width={35} height={35} />
                                        </div>
                                        <span className="text-xs text-center">{weapon.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Character Selection */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Characters</h2>
                <CharacterGuideGallery guides={listGuide} guides_search={listGuideCache} stateSearch={isFilter} />
            </div>
        </div>
    )
}
