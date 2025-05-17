import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { IEcho } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const echoRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: echos }: PostgrestMaybeSingleResponse<IEcho[]> = await supabase.from('echoes').select('id, name, intensity, icon').order('name', { ascending: false });
            return echos;
        }),
});
