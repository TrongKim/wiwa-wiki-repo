import type React from "react"
import { PageCharacterDetailClient } from "./page-client";
import { api } from "@/trpc/server";
interface PageProps {
  readonly params: { id: string };
}

export default async function CharacterProfile({ params }: PageProps) {
  const { id } = await params;
  const resonator_detail = await api.resonator.getDetail({ id: Number(id) });

  return (
    <div className="min-h-screen bg-[#002147] text-white font-sans pb-4">
      { resonator_detail && <PageCharacterDetailClient resonator={resonator_detail} />}
    </div>
  )
}

