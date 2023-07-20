import { z } from "zod";
import type { AppRouter } from "@/server/routers/root";
import type { inferRouterOutputs } from "@trpc/server";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutputs["todoRouter"]["all"];
export type Todo = allTodosOutput[number];

export const createTodoInputSchema = z
  .string({
    required_error: "Todo is required",
  })
  .min(1, "Todo must be at least 1 character long")
  .max(100, "Todo must be at most 50 characters long");
