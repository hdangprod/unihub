import { createTRPCRouter, protectedProcedure } from "@/server/lib/trpc";
import { createChannelInputSchema } from "../validations/channelInputSChema";
import { fetchAllChannels } from "../handlers/fetchAllChannels";
import type { inferRouterOutputs } from "@trpc/server";

export const channelRouter = createTRPCRouter({
  fetchAll: protectedProcedure.query(async ({ ctx }) => {
    return await fetchAllChannels(ctx.prisma);
  }),
  fetchAllByUser: protectedProcedure.query(async ({ ctx }) => {
    const channel = await ctx.prisma.studyChannel.findFirst({
      where: {
        creatorId: ctx.session.user.id,
      },
    });
    return channel;
  }),
  create: protectedProcedure
    .input(createChannelInputSchema)
    .mutation(async ({ input, ctx }) => {
      const channel = await ctx.prisma.studyChannel.create({
        data: {
          ...input,
          creator: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      return channel;
    }),
});

type ChannelRouterOutput = inferRouterOutputs<typeof channelRouter>;
export type GetChannel = ChannelRouterOutput["fetchAll"];
