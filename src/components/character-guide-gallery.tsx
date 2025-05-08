"use client"

import { useEffect, useState } from "react"
import { charactersGuide } from "@/lib/mock-data"
import CharacterGuideCard from "./character-guide-card"
import { useRouter } from "next/navigation";


interface Props {
    guides: typeof charactersGuide;
    guides_search: typeof charactersGuide;
    stateSearch: boolean;
}

export default function CharacterGuideGallery({ guides, guides_search, stateSearch }: Props) {
    const [displayList, setDisplayList] = useState<typeof charactersGuide>([]);
    const router = useRouter();

    useEffect(() => {
        setDisplayList( stateSearch ? guides_search : guides);
    }, [guides_search, guides, stateSearch]);

    const onClickHandleRedirect = (url: string): void => {
        router.push(url);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {displayList.map((character) => (
                    <div key={character.id} className="cursor-pointer pointer-events-auto">
                        <CharacterGuideCard character={character} />
                    </div>
                ))}
            </div>
        </div>
    )
}
