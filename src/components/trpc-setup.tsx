// "use client";

// import { api } from "@/trpc/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());

//   // Create your tRPC client instance here
//   const [trpcClient] = useState(() =>
//     api.createClient({
//       links: [
//         // Add your links here, for example:
//         // loggerLink({ ... }),
//         // httpBatchStreamLink({ ... }),
//       ],
//       // Add other options if needed
//     })
//   );

//   return (
//     <api.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>
//         {children}
//       </QueryClientProvider>
//     </api.Provider>
//   );
// }
