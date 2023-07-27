import { useState } from "react";
import { useClient } from "@/utils/videoCallSettings";
import type { ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";

interface IControlProps {
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({ tracks, setStart }: IControlProps) {
  const client = useClient();
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type: "audio" | "video") => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((prev) => {
        return { ...prev, audio: !prev.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((prev) => {
        return { ...prev, video: !prev.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    client.removeAllListeners();
  };

  return (
    <div className="justify-center">
      <div>
        <button
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? "Mic on" : "Mic off"}
        </button>
      </div>
      <div>
        <button
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? "Cam on" : "Mic off"}
        </button>
      </div>
      <div>
        <a href="/group" onClick={() => leaveChannel()}>
          Leave
        </a>
      </div>
    </div>
  );
}
