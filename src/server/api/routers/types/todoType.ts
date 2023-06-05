import { type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { type AppRouter } from "../root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutputs["todoRouter"]["all"];
export type Todo = allTodosOutput[number];
export const todoType = z
  .string({
    required_error: "Todo is required",
  })
  .min(1, "Todo must be at least 1 character long")
  .max(50, "Todo must be at most 50 characters long");
