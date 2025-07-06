'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { elements, weapons } from '@/lib/mock-data'
import Image from 'next/image'
import CharacterGuideGallery from './character-guide-gallery'
import { charactersGuide } from '@/lib/mock-data'
import { ECharacterElementType, type ECharacterWeaponType } from '@/lib/enum'
import SearchGuide from './search-guide'
import type { IReviewGuide, Resonator } from '@/lib/interface'

type ICharacterGuide = typeof charactersGuide;

interface Props {
    resonators_guide: Pick<Resonator, 'id' | 'element' | 'icon' | 'weapon_type' | 'name'>[];
    resonator_guide_map: Map<number, IReviewGuide[]>;
}

export function FilterGuideContainer({ resonators_guide, resonator_guide_map }: Props) {
    // const [mapGuide, setMapGuide] = useState<>
    const [listGuide, setListGuide] = useState<typeof resonators_guide>(resonators_guide);
    const [listGuideCache, setListGuideCache] = useState<typeof resonators_guide>([]);
    const [searchString, setSearchString] = useState<string>('');

    const [filterByElement, setFilterByElement] = useState<{ code: ECharacterElementType } | null>(null);
    const [filterByWeapon, setFilterByWeapon] = useState<{ code: ECharacterWeaponType | 'Misc' } | null>(null);
    const [isFilter, setIsFilter] = useState<boolean>(false);

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

    const onSelectWeapon = (weapon_code: ECharacterWeaponType | 'Misc' | null): void => {
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
            if (filterByElement != null) guides_filtered = guides_filtered.filter(guide => guide.element === filterByElement.code);
            if (filterByWeapon != null) guides_filtered = guides_filtered.filter(guide => guide.weapon_type === filterByWeapon.code);
            setListGuideCache(guides_filtered);
            return;
        }
        setIsFilter(false);
    }, [filterByElement, filterByWeapon, searchString]);

    const handleUIIcon = (element: ECharacterElementType) => {
        switch (element) {
            case ECharacterElementType.ELECTRO:
                return 'scale-[1.2] object-left';
            case ECharacterElementType.SPECTRO:
                return 'scale-[1.1]';
            default:
                return '';
        }
    };

    return (
        <div>
            <div className="mb-6">
                <SearchGuide />
            </div>

            <Card className="border-0">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row justify-between gap-[10px]">

                        <div className="w-fit bg-[#1f293780] border-[#374151] p-[5px] border-[1px] rounded-[20px] overflow-hidden max-[1020px]:flex-1 max-[1020px]:w-full">
                            <div className="flex items-center  flex-wrap justify-center">
                                {elements.map((element) => (
                                    <button key={element.name} onClick={() => onSelectElement(element.code)} className={`flex w-[70px] flex-col items-center justify-center gap-2 p-2 cursor-pointer pointer-events-auto rounded-[16px] ${filterByElement?.code === element.code && 'bg-[#1f293796]'}`}>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                                            <Image src={element.icon} alt="element" width={35} height={35} className={`${handleUIIcon(element.code)}`} style={element.code === ECharacterElementType.ELECTRO ? {
                                                objectPosition: '2px'
                                            } : {}} />
                                        </div>
                                        <span className="text-xs text-center">{element.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-fit bg-[#1f293780] border-[#374151] p-[5px] border-[1px] rounded-[20px] overflow-hidden max-[1020px]:flex-1 max-[1020px]:w-full">
                            <div className="flex items-center flex-wrap justify-center">
                                <button onClick={() => onSelectWeapon('Misc')} className={`flex w-[70px] flex-col items-center justify-center gap-2 p-2 cursor-pointer pointer-events-auto rounded-[16px] ${filterByWeapon?.code === 'Misc' && 'bg-[#1f293796]'}`}>
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <svg width="42px" height="56px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 9L12 4L2 9L12 14L22 9ZM22 9V15M19 10.5V16.5L12 20L5 16.5V10.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-center">Misc</span>
                                </button>
                                {weapons.map((weapon) => (
                                    <button key={weapon.name} onClick={() => onSelectWeapon(weapon.code)} className={`flex w-[70px] flex-col items-center justify-center gap-2 p-2 cursor-pointer pointer-events-auto rounded-[16px] ${filterByWeapon?.code === weapon.code && 'bg-[#1f293796]'}`}>
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <Image src={weapon.icon} alt="element" width={42} height={56} className="h-[56px] object-contain" />
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
            <div className="space-y-4 mt-2">
                <CharacterGuideGallery guides={listGuide} guides_search={listGuideCache} stateSearch={isFilter} guide_map={resonator_guide_map} />
            </div>
        </div>
    )
}
