import { api } from "@/trpc/server"
import { EchoCard } from "./echo-card";
interface PageProps {
    readonly params: { id: string };
}

export default async function EchoDetailPage({ params }: PageProps) {
    const { id } = await params;
    const echo_detail = await api.echo.getDetail({ id: Number(id) });
    return (
        <div className="mb-15 bg-[#1a2234] border-[#374151] border rounded-[20px] text-[#abb2bf] p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <div>
                        {echo_detail && <>
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">{echo_detail.name}</h1>
                            <EchoCard echo_detail={echo_detail} />
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
