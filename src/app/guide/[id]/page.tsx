import GuideDetail from "./guide-detail"
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IGuideDetail, IGuideDetailBody } from "@/lib/interface";
import { supabase } from "@/utils/supabase/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const { data: guide }: PostgrestMaybeSingleResponse<IGuideDetailBody> = await supabase
        .from('guide')
        .select('*')
        .eq('id', id)
        .single();

    if (!guide) return { title: 'Không tìm thấy bài viết', robots: 'noindex' };

    const description = 'Hướng dẫn về: ' + guide.title.toLocaleLowerCase() + ' mang đến cái nhìn sâu sắc về lối chơi của nhân vật cũng như các chiến thuật tối ưu. Từ việc hiểu rõ kỹ năng, vũ khí, đến cách phối hợp với đồng đội, bài viết này sẽ giúp bạn nắm vững cách sử dụng một cách hiệu quả nhất trong trận đấu.';
    const tags = guide.tags?.join(', ') ?? '';

    return {
        title: guide.title,
        description,
        keywords: tags,
        openGraph: {
            title: guide.title,
            description,
            images: guide.thumnail ? [{ url: guide.thumnail }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: guide.title,
            description,
            images: guide.thumnail ? [guide.thumnail] : [],
        },
    };
}

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
