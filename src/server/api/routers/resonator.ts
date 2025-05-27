import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { ICharacter, ICharacterDetail, IResonatorChain, IResonatorSkill } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const resonatorRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            console.log('run server');
            const { data: posts }: PostgrestMaybeSingleResponse<ICharacter[]> = await supabase.from('resonators').select('id, name, card, rank, element, weapon_type, release_date').order('release_date', { ascending: false }).order('name', { ascending: false });
            console.log(posts);
            return posts;
        }),
    getDetail: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: resonator }: PostgrestMaybeSingleResponse<ICharacterDetail> = await supabase.from('resonators').select('*').eq('id', input.id).single();
            return resonator;
        }),
    getSkill: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: skills }: PostgrestMaybeSingleResponse<IResonatorSkill[]> = await supabase.from('skill').select('*').eq('resonator_id', input.id);
            return skills;
        }),
    getChain: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: chains }: PostgrestMaybeSingleResponse<IResonatorChain[]> = await supabase.from('resonant_chain').select('*').eq('resonator_id', input.id);
            return chains;
        }),
});
