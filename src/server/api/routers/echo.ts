import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { IEcho, IEchoDetail } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const echoRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: echos }: PostgrestMaybeSingleResponse<IEcho[]> = await supabase.from('echoes').select('id, name, intensity, icon, set_ids').order('name', { ascending: false });
            return echos;
        }),
    getDetail: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: echo }: PostgrestMaybeSingleResponse<IEchoDetail> = await supabase.from('echoes').select('*').eq('id', input.id).single();
            return echo;
        }),
});
