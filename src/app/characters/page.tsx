import { CharacterGrid } from "@/components/character-grid"
import { CharacterHeader } from "@/components/character-header"
import { api } from "@/trpc/server";
import { supabase } from "@/utils/supabase/server";

export const metadata = {
    title: 'Danh sách nhân vật',
    description: 'Tổng hợp các nhân vật trong wuthering waves.',
};

export default async function CharactersPage() {
    const resonators = await api.resonator.getAll();
    return (
        <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
            <div className="min-h-screen bg-[#1a3759] text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    <CharacterHeader />
                    {
                        resonators && resonators.length > 0 && <CharacterGrid characters={resonators} />
                    }
                </div>
            </div>
        </main>
    )
}
