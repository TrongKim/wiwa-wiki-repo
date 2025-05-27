"use client"

import { useEffect, useState } from "react"
import CharacterGuideCard from "./character-guide-card"
import { useRouter } from "next/navigation";
import type { listGuides } from "@/data/guides";


interface Props {
    guides: typeof listGuides;
    guides_search: typeof listGuides;
    stateSearch: boolean;
}

export default function CharacterGuideGallery({ guides, guides_search, stateSearch }: Props) {
    const [displayList, setDisplayList] = useState<typeof listGuides>([]);
    const router = useRouter();

    useEffect(() => {
        setDisplayList(stateSearch ? guides_search : guides);
    }, [guides_search, guides, stateSearch]);

    const onClickHandleRedirect = (url: number): void => {
        router.push('/guide/' + String(url));
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {displayList.map((character) => (
                    <button key={character.id} onClick={() => onClickHandleRedirect(character.id)} className="cursor-pointer pointer-events-auto">
                        <CharacterGuideCard character={character} />
                    </button>
                ))}
            </div>
        </div>
    )
}
