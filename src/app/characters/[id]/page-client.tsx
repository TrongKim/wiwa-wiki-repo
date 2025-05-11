'use client'
import React, { useEffect, useState } from 'react'
import { SidebarCharacter } from "./sidebar-character";
import { ResonatorOverview } from './resonator-overview';
import { useSearchParams } from 'next/navigation';
import CharacterTalent from './character-talent';
import type { ICharacterDetail } from '@/lib/interface';

interface Props {
    readonly resonator: ICharacterDetail;
}

export const PageCharacterDetailClient = ({ resonator }: Props) => {
    const searchParams = useSearchParams();
    const [pageDetail, setPageDetail] = useState<React.JSX.Element>();

    // useEffect(() => {

    // }, []);

    useEffect(() => {
        const mode = searchParams.get('mode');
        switch (mode) {
            case 'profile':
                setPageDetail(<ResonatorOverview resonator={resonator} />);
                break;
            case 'talent':
                setPageDetail(<CharacterTalent />);
                break;
            case '/guides':
                setPageDetail(<ResonatorOverview resonator={resonator} />);
                break;
            default:
                setPageDetail(<ResonatorOverview resonator={resonator} />);
        }
    }, [searchParams]);

    return (
        <div className="container mx-auto flex gap-4 max-[686px]:flex-col max-[686px]:justify-center">
            {/* Left sidebar */}
            <div className="w-fit flex-0">
                <SidebarCharacter resonator={resonator} />
            </div>

            {/* Right - Stats and Details */}
            <div className="flex-5">
                { pageDetail }
            </div>
        </div>
    )
}


