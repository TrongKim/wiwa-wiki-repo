import { api } from "@/trpc/server"
import { WeaponCard } from "./weapon-card";
import { Suspense } from "react";
import WeaponDetailsSkeleton from "./weapon-card-skeleton";
interface PageProps {
    readonly params: { id: string };
}

export default async function WeaponDetailPage({ params }: PageProps) {
    const { id } = await params;
    const weapon_detail = await api.weapon.getDetail({ id: Number(id) });
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 md:p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Suspense fallback={<WeaponDetailsSkeleton />}>
                    <WeaponCard key={weapon_detail?.id ?? 'weapon_card'} weapon_detail={weapon_detail} />
                </Suspense>
            </div>
        </div>
    )
}
