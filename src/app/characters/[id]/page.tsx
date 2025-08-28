import type React from "react"
import { PageCharacterDetailClient } from "./page-client";
import { supabase } from "@/utils/supabase/server";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { ICharacterDetail, IItem } from "@/lib/interface";
import { Suspense } from "react";

interface PageProps {
  readonly params: { id: string };
}

export async function generateStaticParams() {
  const { data: resonators } = await supabase.from("resonators").select("id");

  return (
    resonators?.map((r) => ({
      id: r.id.toString(),
    })) || []
  );
}

export default async function CharacterProfile({ params }: PageProps) {
  const { id } = await params;
  const { data: resonator_detail }: PostgrestMaybeSingleResponse<ICharacterDetail> = await supabase.from('resonators').select('*').eq('id', Number(id)).single();
  const { data: items }: PostgrestMaybeSingleResponse<IItem[]> = await supabase
    .from("items")
    .select("*")
    .in("tag", [
      "Resonator Ascension Material",
      "Weapon and Skill Material",
      "Ascension Material",
      "Universal Currency",
    ]);
  return (
    <div className="min-h-screen text-white font-sans pb-4 max-[600px]:bg-transparent">
      <Suspense>
      {resonator_detail && items && <PageCharacterDetailClient resonator={resonator_detail} items={items} />}
      </Suspense>
    </div>
  )
}

