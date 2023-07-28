import {
  createClient,
  createMicrophoneAndCameraTracks,
  type SDK_CODEC,
  type SDK_MODE,
} from "agora-rtc-react";

export const config = {
  mode: "rtc" as SDK_MODE,
  codec: "vp9" as SDK_CODEC,
};

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
