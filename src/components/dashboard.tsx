import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FilterGuideContainer } from "./filter-guide-container"
import '../app/custom.css'
import Link from "next/link"
import { supabase } from "@/utils/supabase/server"
import type { IReviewGuide, Resonator } from "@/lib/interface"
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js"

export async function Dashboard() {
  const { data: guides_raw }: PostgrestMaybeSingleResponse<IReviewGuide[]> = await supabase
    .from('guide')
    .select('id, title, created_at, published, tags, thumnail, resonator_id')
    .order('created_at', { ascending: false });
  const resonatorIds = (guides_raw || []).map(g => g.resonator_id);
  const guideMapByResonatorId = new Map<number, IReviewGuide[]>();
  (guides_raw || []).forEach(guide => {
    const id = guide.resonator_id;
    if (!guideMapByResonatorId.has(id)) {
      guideMapByResonatorId.set(id, []);
    }
    guideMapByResonatorId.get(id)?.push(guide);
  });
  const { data: resonators }: PostgrestMaybeSingleResponse<Pick<Resonator, 'id' | 'element' | 'icon' | 'weapon_type' | 'name'>[]> = await supabase
    .from('resonators')
    .select('id, name, element, weapon_type, icon')
    .in('id', resonatorIds);
  const guides = guides_raw || [];
  return (
    <div className="space-y-8 pb-10">
      <div className="relative h-64 md:h-80 rounded-[20px] overflow-hidden mb-6">
        <Image src="/banner-guide.jpg" alt="Resonator Hero Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-transparent flex flex-col justify-center pl-30 max-[900]:pl-0 max-[900]:items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-shadow-custom">Wuthering Beacon</h1>
          <p className="text-slate-300 max-w-md text-[15px] max-[900]:text-center text-shadow-custom-min">The truth is a beacon in the maelstrom of my life.</p>
        </div>
      </div>

      <div className="flex items-stretch gap-6 max-[768px]:flex-col mb-6">

        <div className="flex-4">
          <Card className="bg-[#1f293780] border-[#374151]">
            <CardContent className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[25px]">Thông tin mới</h2>
              <div className="space-y-4 flex-[1] overflow-auto max-h-[368px] pr-2 max-[550px]:flex max-[550px]:flex-wrap">
                {guides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={"/guide/" + guide.id}>

                    <div className="flex gap-4 p-2 rounded-lg hover:bg-[#1f293796] cursor-pointer pointer-events-auto transition-colors max-[550px]:flex-col max-[550px]:items-center max-[550px]:w-[calc(100%)]">
                      <div className="relative w-36 h-24 rounded-md overflow-hidden flex-shrink-0 max-[550px]:w-full max-[550px]:h-26">
                        <Image src={guide.thumnail || "/placeholder.svg"} alt="guide" fill className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-medium max-[550px]:text-center">{guide.title}</h2>
                        <div className="flex justify-start gap-2 items-center mt-2 max-[550px]:justify-center">
                          {
                            guide.tags.slice(0, 2).map((guide, index) => {
                              return (
                                <Badge key={guide + 'index'} variant="outline" className="text-[10px]">
                                  {guide}
                                </Badge>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="mr-auto flex items-end max-[550px]:mx-auto">
                        <span className="text-xs text-slate-400 mb-[15px]">{new Date(guide.created_at).toLocaleDateString("vi-VN", {
                          timeZone: "Asia/Ho_Chi_Minh",
                        })}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-2 h-auto">
          <Card className="bg-[#1f293780] border-[#374151] h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-4 text-[25px]">Cập nhật</h2>
              <div className="text-[16px] w-full h-full flex items-center justify-center flex-1">
                <p>Chưa có cập nhật</p>
              </div>
              {/* <div className="space-y-4 flex-[1] overflow-auto max-h-[368px] pr-2">
                {mockUpdates.map((update) => (
                  <div key={update.id} className="relative space-y-2 cursor-pointer pointer-events-auto border-b mb-2 pb-2 border-[#4d647e] last:border-b-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold capitalize">{update.version}</span>
                    </div>
                    <p className="text-xs text-slate-400">{update.description}</p>
                    <div className="">
                      <p className="text-xs text-[#60a5fa] hover:font-bold"><span>Rover Quick Guide</span></p>
                    </div>
                  </div>
                ))}
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
      <FilterGuideContainer resonator_guide_map={guideMapByResonatorId} resonators_guide={resonators || []} />
    </div>
  )
}
