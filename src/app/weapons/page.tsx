import { api } from "@/trpc/server";
import { WeaponGrid } from "./weapon-grid";
import { WeaponHeader } from "./weapon-header";

export const metadata = {
    title: 'Danh sách vũ khí',
    description: 'Tổng hợp các vũ khí trong wuthering waves.',
};

export default async function WeaponsPage() {
    const weapons = await api.weapon.getAll();
    return (
        <main className="flex-1 transition-all duration-300 ease-in-out pb-4">
            <div className="min-h-screen bg-[#1a3759] text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    <WeaponHeader />
                    {
                        weapons && weapons.length > 0 && <WeaponGrid weapons={weapons} />
                    }
                </div>
            </div>
        </main>
    )
}
