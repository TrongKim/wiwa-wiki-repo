import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { ICharacterDetail, IWeapon } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const weaponRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: weapons }: PostgrestMaybeSingleResponse<IWeapon[]> = await supabase.from('weapons').select('id, name, icon, rarity, type').order('rarity', { ascending: false });
            return weapons;
        }),
    getDetail: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: resonator }: PostgrestMaybeSingleResponse<ICharacterDetail> = await supabase.from('resonators').select('*').eq('id', input.id).single();
            return resonator;
        }),
    
});
