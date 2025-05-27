import { WeaponGrid } from "./weapon-grid";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IWeapon } from "@/lib/interface";
import { supabase } from "@/utils/supabase/server";

export const metadata = {
    title: 'Danh sách vũ khí',
    description: 'Tổng hợp các vũ khí trong wuthering waves.',
};

export default async function WeaponsPage() {
    const { data: weapons }: PostgrestMaybeSingleResponse<IWeapon[]> = await supabase.from('weapons').select('id, name, icon, rarity, type').order('rarity', { ascending: false });
    return (
        <main className="flex-1 transition-all duration-300 ease-in-out pb-4">
            <div className="min-h-screen border bg-[#1f293780] border-[#374151] text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    {
                        weapons && weapons.length > 0 && <WeaponGrid weapons={weapons} />
                    }
                </div>
            </div>
        </main>
    )
}
