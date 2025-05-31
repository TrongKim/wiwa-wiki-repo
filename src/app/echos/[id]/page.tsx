import { Suspense } from "react";
import EchoDetail from "./echo-detail";
import { supabase } from "@/utils/supabase/server";
import type { IEchoDetail, IEchoSetDetail } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

interface PageProps {
    readonly params: { id: string };
}

export default async function EchoDetailPage({ params }: PageProps) {
    const { id } = await params;
    const { data: echo_detail }: PostgrestMaybeSingleResponse<IEchoDetail> = await supabase.from('echoes').select('*').eq('id', Number(id)).single();
    const { data: sets }: PostgrestMaybeSingleResponse<IEchoSetDetail[]> = await supabase.from('echo_sets').select('*').in('id', echo_detail?.set_ids ?? []);
    return (
        <div className="min-h-screen text-white p-4 md:p-6 pb-20 md:pb-6 md:pt-20 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Suspense>
                    <EchoDetail sets={sets} echo_detail={echo_detail} />
                </Suspense>
            </div>
        </div>
    )
}
