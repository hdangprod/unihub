import { z } from "zod";

export const ChannelInput = z
  .string({
    required_error: "Channel is required",
  })
  .min(1, "Channel must be at least 1 character long")
  .max(100, "Channel must be at most 30 characters long");
