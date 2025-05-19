import type { AppRouter } from "@/server/api/root"; // hoặc đường dẫn đến `server.ts`
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import superjson from "superjson";

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
      transformer: superjson
    }),
  ],
});