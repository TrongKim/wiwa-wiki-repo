import { EchoGrid } from "./echo-grid";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IEcho, IEchoSet } from "@/lib/interface";
import { supabase } from "@/utils/supabase/server";

export const metadata = {
    title: 'Danh sách echo',
    description: 'Tổng hợp các echo trong wuthering waves.',
};

export async function generateStaticParams() {
  const { data: echos } = await supabase.from("echoes").select("id");

  return (
    echos?.map((r) => ({
      id: r.id.toString(),
    })) || []
  );
}

export default async function EchosPage() {
    const { data: echos }: PostgrestMaybeSingleResponse<IEcho[]> = await supabase.from('echoes').select('id, name, intensity, icon, set_ids').order('name', { ascending: false });
    const { data: echoSets }: PostgrestMaybeSingleResponse<IEchoSet[]> = await supabase.from('echo_sets').select('id, name, icon').order('name', { ascending: false });

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
