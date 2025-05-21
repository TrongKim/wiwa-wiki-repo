import { CharacterGrid } from "@/components/character-grid"
import { CharacterHeader } from "@/components/character-header"
import { api } from "@/trpc/server";

export const metadata = {
    title: 'Danh sách nhân vật',
    description: 'Tổng hợp các nhân vật trong wuthering waves.',
};

export default async function CharactersPage() {
    const resonators = await api.resonator.getAll();
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
