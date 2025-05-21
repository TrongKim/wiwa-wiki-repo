import { api } from "@/trpc/server";
import { EchoGrid } from "./echo-grid";
import { EchoHeader } from "./echo-header";

export const metadata = {
    title: 'Danh sách echo',
    description: 'Tổng hợp các echo trong wuthering waves.',
};

export default async function EchosPage() {
    const echos = await api.echo.getAll();
    const echoSets = await api.echoSet.getAll();

    return (
        <main className="flex-1 transition-all duration-300 ease-in-out pb-4">
            <div className="min-h-screen bg-[#1f293780] border-[#374151] border text-white rounded-[20px] max-[421px]:mx-auto">
                <div className="container mx-auto px-4 py-6">
                    {
                        echos && echos.length > 0 && <EchoGrid echoSets={echoSets ?? []} echos={echos} />
                    }
                </div>
            </div>
        </main>
    )
}
