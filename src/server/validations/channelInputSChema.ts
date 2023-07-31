import { z } from "zod";

export const createChannelInputSchema = z.object({
  channelName: z
    .string()
    .min(1, "Channel name cannot be empty")
    .max(50, "Channel name has to be less than 50"),
  channelDescription: z
    .string()
    .min(1, "Channel name cannot be empty")
    .max(100, "Channel description has to be less than 100"),
});
