//create function to get all channels using findMany

import { prisma } from "../lib/db";

export const fetchAllChannels = async (prismaContext?: typeof prisma) => {
  const channels = await (prismaContext ?? prisma).studyChannel.findMany();
  return channels;
};
