import { CharacterGrid } from "@/components/character-grid"
import type { ICharacter } from "@/lib/interface";
import { supabase } from "@/utils/supabase/server";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Wuwabeacon - Danh sách nhân vật',
    description: 'Tổng hợp các nhân vật trong Wuthering Waves.',
};

export async function generateStaticParams() {
  const { data: resonators } = await supabase.from("resonators").select("id");

  return (
    resonators?.map((r) => ({
      id: r.id.toString(),
    })) || []
  );
}

export default async function CharactersPage() {
    // const resonators = await api.resonator.getAll();
    const { data: resonators }: PostgrestMaybeSingleResponse<ICharacter[]> = await supabase.from('resonators').select('id, name, card, rank, element, weapon_type, release_date').order('release_date', { ascending: false }).order('name', { ascending: false });
    console.log(resonators);
    return (
        <main className="flex-1 transition-all duration-300 ease-in-out pb-4">
            <div className="min-h-screen border bg-[#1f293780] border-[#374151] text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    {
                        resonators && resonators.length > 0 && <CharacterGrid characters={resonators} />
                    }
                </div>
            </div>
        </main>
    )
}
