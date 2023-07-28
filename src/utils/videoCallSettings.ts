import AgoraRTC, { type SDK_CODEC, type SDK_MODE } from "agora-rtc-sdk-ng";

export const config = {
  mode: "rtc" as SDK_MODE,
  codec: "vp8" as SDK_CODEC,
};

export const useClient = AgoraRTC.createClient(config);
export const useMicrophoneAndCameraTracks =
  AgoraRTC.createMicrophoneAndCameraTracks();
