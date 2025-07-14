"use client"

import { useEffect, useState } from "react"
import CharacterGuideCard from "./character-guide-card"
import { useRouter } from "next/navigation";
import type { IReviewGuide, Resonator } from "@/lib/interface";


interface Props {
    guide_map: Map<number, IReviewGuide[]>;
    guides: Pick<Resonator, 'id' | 'element' | 'icon' | 'weapon_type' | 'name'>[];
    guides_search: Pick<Resonator, 'id' | 'element' | 'icon' | 'weapon_type' | 'name'>[];
    stateSearch: boolean;
}

export default function CharacterGuideGallery({ guides, guides_search, stateSearch, guide_map }: Props) {
    const [displayList, setDisplayList] = useState<typeof guides>(guides);
    const router = useRouter();

    useEffect(() => {
        setDisplayList(stateSearch ? guides_search : guides);
    }, [guides_search, guides, stateSearch]);

    const onClickHandleRedirect = (url: string): void => {
        router.push('/guide/' + String(url));
    };

    const getGuideUrl = (id: number): string => {
        const getMapValue = guide_map.get(id);
        if (!getMapValue) return '';
        const getFirstValue = getMapValue[0];
        if (!getFirstValue) return '';
        return getFirstValue.id || '';
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {displayList.map((character) => (
                    <button key={character.id} onClick={() => onClickHandleRedirect(getGuideUrl(character.id))} className="cursor-pointer pointer-events-auto">
                        <CharacterGuideCard guides={guide_map.get(character.id) || []} character={character} />
                    </button>
                ))}
            </div>
        </div>
    )
}
