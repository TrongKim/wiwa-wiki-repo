import { guides } from "@/data/guides"
import GuideDetail from "./guide-detail"
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IEchoDetail, IGuideDetail, IGuideDetailBody } from "@/lib/interface";
import { supabase } from "@/utils/supabase/server";

interface PageProps {
    readonly params: { id: string };
}

export default async function Home({ params }: PageProps) {
    const { id } = await params;
    const { data: guide_raw }: PostgrestMaybeSingleResponse<IGuideDetailBody> = await supabase.from('guide').select('*').eq('id', id).single();
    let guide: IGuideDetail | null = null;
    if (typeof guide_raw?.content === 'string') {
        guide = JSON.parse(guide_raw?.content || '') as IGuideDetail;
    } else {
        guide = JSON.parse(JSON.stringify(guide_raw?.content || '')) as IGuideDetail;
    }
    return (
        <main className="min-h-screen bg-[#0d0d0d] text-white">
            {
                guide && <GuideDetail guide={guide} />
            }
        </main>
    )
}
