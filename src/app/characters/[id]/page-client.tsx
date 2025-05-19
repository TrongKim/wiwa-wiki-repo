'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { SidebarCharacter } from "./sidebar-character";
import { ResonatorOverview } from './resonator-overview';
import { useSearchParams } from 'next/navigation';
import CharacterTalent from './character-talent';
import type { ICharacterDetail, IItem } from '@/lib/interface';
import Image from 'next/image';
import { useItemStore } from '@/lib/store';

interface Props {
    readonly resonator: ICharacterDetail;
    readonly items: IItem[];
}

export const PageCharacterDetailClient = ({ resonator, items: itemsMaterial }: Props) => {
    const { items, setItems } = useItemStore();
    const searchParams = useSearchParams();
    const [pageDetail, setPageDetail] = useState<React.JSX.Element>();

    useEffect(() => {
        setItems(itemsMaterial);
    }, []);

    useEffect(() => {
        const mode = searchParams.get('mode');
        switch (mode) {
            case 'profile':
                setPageDetail(<ResonatorOverview resonator={resonator} />);
                break;
            case 'forte':
                setPageDetail(<CharacterTalent />);
                break;
            case 'resonance-chain':
                setPageDetail(<ResonatorOverview resonator={resonator} />);
                break;
            default:
                setPageDetail(<ResonatorOverview resonator={resonator} />);
        }
    }, [searchParams]);

    return (
        <div className="container mx-auto flex gap-4 max-[686px]:flex-col max-[686px]:justify-center">
            {/* Left sidebar */}
            <div className="w-fit flex-0 relative">
                <SidebarCharacter resonator={resonator} />
            </div>
            <Image src={resonator.card} width={500} height={100} alt={resonator.name} className="h-auto w-full opacity-[0.7] hidden fixed top-1/2 left-1/2 z-[-1] -translate-1/2 -mt-10 max-[600px]:block" />
            {/* Right - Stats and Details */}
            <div className="flex-5">
                <Suspense fallback={<div>Đang tải kỹ năng...</div>}>
                    {pageDetail}
                </Suspense>
            </div>
        </div>
    )
}


