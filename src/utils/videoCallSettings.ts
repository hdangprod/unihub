import {
  createClient,
  createMicrophoneAndCameraTracks,
  type SDK_CODEC,
  type SDK_MODE,
} from "agora-rtc-react";

const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID as string;

export const config = {
  mode: "rtc" as SDK_MODE,
  codec: "vp9" as SDK_CODEC,
  appId: appId,
};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
