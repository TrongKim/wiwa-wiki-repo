import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { ICharacter } from "@/lib/interface";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

export const resonatorRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
            const { data: posts }: PostgrestMaybeSingleResponse<ICharacter[]>  = await supabase.from('resonators').select('*');
            return posts;
        }),

});
