import { api } from "@/trpc/server"
import { Suspense } from "react";
import EchoDetailsSkeleton from "./echo-skeleton";
import EchoCard from "./echo-card";
interface PageProps {
    readonly params: { id: string };
}

export default async function EchoDetailPage({ params }: PageProps) {
    const { id } = await params;
    const echo_detail = await api.echo.getDetail({ id: Number(id) });
    const sets = await api.echoSet.getSetsByIds({ ids: echo_detail?.set_ids ?? [] });
    return (
        <div className="min-h-screen text-white p-4 md:p-6 pb-20 md:pb-6 md:pt-20 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Suspense fallback={<EchoDetailsSkeleton />}>
                    <EchoCard sets={sets} echo_detail={echo_detail} />
                </Suspense>
            </div>
        </div>
    )
}
