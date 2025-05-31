import { WeaponCard } from "./weapon-card";
import { Suspense } from "react";
import { supabase } from "@/utils/supabase/server";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IWeaponDetail } from "@/lib/interface";

interface PageProps {
    readonly params: { id: string };
}

export default async function WeaponDetailPage({ params }: PageProps) {
    const { id } = await params;
    const { data: weapon_detail }: PostgrestMaybeSingleResponse<IWeaponDetail> = await supabase.from('weapons').select('*').eq('id', Number(id)).single();
    const { data: items_data } = await supabase
        .from("items")
        .select("*")
        .in("tag", [
            "Resonator Ascension Material",
            "Weapon and Skill Material",
            "Ascension Material",
            "Universal Currency",
        ]);
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 md:p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Suspense>
                    <WeaponCard weapon_detail={weapon_detail} items={items_data ?? []} />
                </Suspense>
            </div>
        </div>
    )
}
