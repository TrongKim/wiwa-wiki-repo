import { api } from "@/trpc/server";
import { EchoGrid } from "./echo-grid";
import { EchoHeader } from "./echo-header";

export const metadata = {
    title: 'Danh sách echo',
    description: 'Tổng hợp các echo trong wuthering waves.',
};

export default async function EchosPage() {
    const echos = await api.echo.getAll();
    return (
        <main className="flex-1 transition-all duration-300 ease-in-out pb-4">
            <div className="min-h-screen bg-[#1a3759] text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    <EchoHeader />
                    {
                        echos && echos.length > 0 && <EchoGrid echos={echos} />
                    }
                </div>
            </div>
        </main>
    )
}
