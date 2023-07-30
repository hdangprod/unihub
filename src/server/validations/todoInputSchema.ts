import { z } from "zod";

export const createTodoInputSchema = z
  .string({
    required_error: "Todo is required",
  })
  .min(1, "Todo must be at least 1 character long")
  .max(100, "Todo must be at most 50 characters long");
