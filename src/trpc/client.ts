import type { AppRouter } from "@/server/api/root"; // hoặc đường dẫn đến `server.ts`
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import superjson from "superjson";

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson
    }),
  ],
});