import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { supabase } from "@/utils/supabase/server";
import type { PostgrestMaybeSingleResponse } from "@supabase/supabase-js";
import type { IItem } from "@/lib/interface";

export const itemRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ input }) => {
             const { data }: PostgrestMaybeSingleResponse<IItem[]> = await supabase
                .from("items")
                .select("*")
                .in("tag", [
                    "Resonator Ascension Material",
                    "Weapon and Skill Material",
                    "Ascension Material",
                    "Universal Currency",
                ]);
            return data;
        }),
});
