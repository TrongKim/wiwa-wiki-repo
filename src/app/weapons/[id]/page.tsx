import { api } from "@/trpc/server"
import { WeaponCard } from "./weapon-card";
interface PageProps {
    readonly params: { id: string };
}

export default async function WeaponDetailPage({ params }: PageProps) {
    const { id } = await params;
    const weapon_detail = await api.weapon.getDetail({ id: Number(id) });
    return (
        <div className="mb-15 bg-[#1a2234] border-[#374151] border rounded-[20px] text-[#abb2bf] p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <div>
                        {weapon_detail && <>
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">{weapon_detail.name}</h1>
                            <WeaponCard weapon_detail={weapon_detail} />
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
