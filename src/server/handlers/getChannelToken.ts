import { RtcRole, RtcTokenBuilder } from "agora-token";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

export const getChannelToken = async (channelId: string) => {
  const session = await getServerSession(authOptions);
  const appId = process.env.AGORA_APP_ID as string;
  const appCertificate = process.env.AGORA_APP_CERTIFICATE as string;
  const channelName = channelId;
  const account = session?.user.id as string;
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
};
