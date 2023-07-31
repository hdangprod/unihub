import { useState } from "react";
import { useClient } from "@/utils/videoCallSettings";
import type { ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
import { useRouter } from "next/navigation";
import HeroIcon from "@/components/heroIcon";

interface IControlProps {
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({ tracks, setStart }: IControlProps) {
  const router = useRouter();
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
      console.log("tracks, trackState", tracks, trackState);
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    router.push("/group");
  };

  return (
    <div className="controls fixed bottom-10 left-1/2 flex w-fit -translate-x-1/3 gap-4 rounded-full bg-white px-3 py-2 drop-shadow-sd2">
      <button
        className={trackState.audio ? "on" : ""}
        onClick={() => mute("audio")}
      >
        {trackState.audio ? (
          <div className="rounded-full bg-sky-50 p-4 text-sky-400 hover:outline hover:outline-sky-200">
            <HeroIcon icon="microphone" className="h-5 w-5" />
          </div>
        ) : (
          <div className="rounded-full bg-red-50 p-4 text-red-500 hover:outline hover:outline-red-200">
            <HeroIcon icon="speaker-x-mark" className="h-5 w-5" />
          </div>
        )}
      </button>
      <button
        className={trackState.video ? "on" : ""}
        onClick={() => mute("video")}
      >
        {trackState.video ? (
          <div className="rounded-full bg-sky-50 p-4 text-sky-400 hover:outline hover:outline-sky-200">
            <HeroIcon icon="video-camera" className="h-5 w-5" />
          </div>
        ) : (
          <div className="rounded-full bg-red-50 p-4 text-red-500 hover:outline hover:outline-red-200">
            <HeroIcon icon="video-camera-slash" className="h-5 w-5" />
          </div>
        )}
      </button>
      {
        <button onClick={() => leaveChannel()}>
          <div className="rounded-full bg-red-400 p-3 text-white hover:bg-red-500">
            <HeroIcon icon="x-mark" className="h-6 w-6" />
          </div>
        </button>
      }
    </div>
  );
}
