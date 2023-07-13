import { useState } from "react";
import { useClient } from "@/utils/videoCallSettings";
import type { ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";

interface IControlProps {
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setInCall: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
  tracks,
  setStart,
  setInCall,
}: IControlProps) {
  const client = useClient();
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type: "audio" | "video") => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <div className="justify-center">
      <div>
        <button
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          Mute Audio
        </button>
      </div>
      <div>
        <button
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          Mute Video
        </button>
      </div>
      <div>
        <button color="default" onClick={() => leaveChannel()}>
          Leave
        </button>
      </div>
    </div>
  );
}
