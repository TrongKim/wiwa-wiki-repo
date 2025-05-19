import type React from "react"
import { PageCharacterDetailClient } from "./page-client";
import { api } from "@/trpc/server";

interface PageProps {
  readonly params: { id: string };
}

export default async function CharacterProfile({ params }: PageProps) {
  const { id } = await params;
  const resonator_promise = api.resonator.getDetail({ id: Number(id) });
  const items_promise = api.item.getAll();
  const [resonator_detail, items] = await Promise.all([resonator_promise, items_promise]);

  return (
    <div className="min-h-screen text-white font-sans pb-4 max-[600px]:bg-transparent">
      { resonator_detail && items && <PageCharacterDetailClient resonator={resonator_detail} items={items} />}
    </div>
  )
}

