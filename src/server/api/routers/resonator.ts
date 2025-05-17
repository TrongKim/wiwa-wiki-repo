import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { ICharacter, ICharacterDetail } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const resonatorRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: posts }: PostgrestMaybeSingleResponse<ICharacter[]> = await supabase.from('resonators').select('id, name, card, rank, element, weapon_type, release_date').order('release_date', { ascending: false }).order('name', { ascending: false });
            return posts;
        }),
    getDetail: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: resonator }: PostgrestMaybeSingleResponse<ICharacterDetail> = await supabase.from('resonators').select('*').eq('id', input.id).single();
            return resonator;
        }),
    
});
