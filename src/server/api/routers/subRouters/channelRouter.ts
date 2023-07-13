import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { ChannelInput } from "../types/channelType";
import { RtcRole, RtcTokenBuilder } from "agora-token";

export const channelRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const channels = await ctx.prisma.studyChannel.findMany();
    return channels.map(({ id, channelName }) => ({ id, channelName }));
  }),
  allByUser: protectedProcedure.query(async ({ ctx }) => {
    const channels = await ctx.prisma.studyChannel.findUnique({
      where: {
        creatorId: ctx.session.user.id,
      },
    });
    return channels;
  }),
  create: protectedProcedure
    .input(ChannelInput)
    .mutation(async ({ ctx, input }) => {
      const channel = await ctx.prisma.studyChannel.create({
        data: {
          channelName: input,
          channelDescription: input,
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

const appID = "a51f4c5812894feb8bfa6413673062dd";
const appCertificate = "068d1a1f7a4d45c9b55ce6c7b753ac8e";
const channelName = "7d72365eb983485397e3e3f9d460bdda";
const account = "2882341273";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600;

const currentTimestamp = Math.floor(Date.now() / 1000);

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

const token_expire = 2629746;

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithUserAccount(
  appID,
  appCertificate,
  channelName,
  account,
  role,
  token_expire,
  privilegeExpiredTs
);
console.log("Token With UserAccount: ", tokenB);
