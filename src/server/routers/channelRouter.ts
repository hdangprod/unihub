import { createTRPCRouter, protectedProcedure } from "@/server/lib/trpc";
import { RtcRole, RtcTokenBuilder } from "agora-token";
import { z } from "zod";
import { createChannelInputSchema } from "../validations/channelInputSChema";

export const channelRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const channels = await ctx.prisma.studyChannel.findMany();
    return channels.map(({ id, channelName, channelDescription }) => ({
      id,
      channelName,
      channelDescription,
    }));
  }),
  getAllByUser: protectedProcedure.query(async ({ ctx }) => {
    const channel = await ctx.prisma.studyChannel.findFirst({
      where: {
        creatorId: ctx.session.user.id,
      },
    });
    return channel;
  }),
  getToken: protectedProcedure
    .input(
      z.object({
        channelId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const appId = process.env.AGORA_APP_ID as string;
      const appCertificate = process.env.AGORA_APP_CERTIFICATE as string;
      const channelName = input.channelId;
      const account = ctx.session.user.id;
      const role = RtcRole.PUBLISHER;

      const expirationTimeInSeconds = 3600;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const privilege_expire = currentTimestamp + expirationTimeInSeconds;
      const token_expire = 1000000;
      // Build token with user account
      const token = RtcTokenBuilder.buildTokenWithUserAccount(
        appId,
        appCertificate,
        channelName,
        account,
        role,
        token_expire,
        privilege_expire
      );

      return { token, account };
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
