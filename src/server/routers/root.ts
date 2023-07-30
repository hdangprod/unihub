import { todoRouter } from "@/server/routers/todoRouter";
import { createTRPCRouter } from "@/server/lib/trpc";
import { channelRouter } from "./channelRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  todoRouter,
  channelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
