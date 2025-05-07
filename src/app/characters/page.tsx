import { CharacterGrid } from "@/components/character-grid"
import { CharacterHeader } from "@/components/character-header"

export default function CharactersPage() {
    return (
        <main className="flex-1 ml-16 p-4 transition-all duration-300 ease-in-out">
            <div className="min-h-screen bg-[#1a3759] text-white rounded-[10px]">
                <div className="container mx-auto px-4 py-6">
                    <CharacterHeader />
                    <CharacterGrid />
                </div>
            </div>
        </main>
    )
}
