import {
  createClient,
  createMicrophoneAndCameraTracks,
  type SDK_CODEC,
  type SDK_MODE,
} from "agora-rtc-react";

const appId = "a51f4c5812894feb8bfa6413673062dd";
const token =
  "007eJxTYLga+Iop5u87nfX33/1YEhsneuRhrIJnb3MC1/uf3Wcj97QpMCSaGqaZJJtaGBpZWJqkpSZZJKUlmpkYGpuZGxuYGaWkGLKsTmkIZGR4a7GFlZEBAkF8FobcxMw8BgYAEaohdg==";

export const config = {
  mode: "rtc" as SDK_MODE,
  codec: "vp8" as SDK_CODEC,
  appId: appId,
  token: token,
};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
