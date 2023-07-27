import { createTRPCRouter, protectedProcedure } from "@/server/lib/trpc";
import { createChannelInputSchema } from "../validations/channelInputSChema";
import { fetchAllChannels } from "../handlers/fetchAllChannels";

export const channelRouter = createTRPCRouter({
  fetchAll: protectedProcedure.query(async ({ ctx }) => {
    const channels = await fetchAllChannels(ctx.prisma);
    return channels.map(({ id, channelName, channelDescription }) => ({
      id,
      channelName,
      channelDescription,
    }));
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
