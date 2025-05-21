import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { IEchoDetail, IEchoSet } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const echoSetRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: echos }: PostgrestMaybeSingleResponse<IEchoSet[]> = await supabase.from('echo_sets').select('id, name, icon').order('name', { ascending: false });
            return echos;
        }),
    getDetail: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            const { data: echo }: PostgrestMaybeSingleResponse<IEchoDetail> = await supabase.from('echo_sets').select('*').eq('id', input.id).single();
            return echo;
        }),
});
