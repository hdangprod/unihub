import { type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { type AppRouter } from "../root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allChannelOutput = RouterOutputs["channelRouter"]["all"];
export type Channel = allChannelOutput[number];
export const ChannelInput = z
  .string({
    required_error: "Channel is required",
  })
  .min(1, "Channel must be at least 1 character long")
  .max(100, "Channel must be at most 30 characters long");
