import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "@/env/env.mjs";
import { appRouter } from "@/server/routers/root";
import { createTRPCContext } from "@/server/lib/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
