"use client";
import { useState, useEffect } from "react";
import {
  useClient,
  useMicrophoneAndCameraTracks,
} from "@/utils/videoCallSettings";
import Videos from "@/components/video-call/video";
import Controls from "@/components/video-call/controller";
import type { IAgoraRTCRemoteUser } from "agora-rtc-react";

interface IVideoCallProps {
  channelName: string;
  token: string;
  uid: string;
}
const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID as string;

export default function VideoCall({
  channelName,
  token,
  uid,
}: IVideoCallProps) {
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    const init = async (name: string) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        if (type === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        console.log("leaving", user);
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      await client.join(appId, name, token, uid);
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      console.log("init ready");
      void init(channelName);
    }

    return () => {
      const disconnect = async () => {
        client.removeAllListeners();
        tracks && tracks[0].stop();
        tracks && tracks[0].close();
        tracks && tracks[1].stop();
        tracks && tracks[1].close();
        await client.leave();
        setStart(false);
      };
      void disconnect();
    };
  }, [channelName, client, ready, tracks, token, uid]);

  return (
    <div className="App">
      {ready && tracks && <Controls tracks={tracks} setStart={setStart} />}
      {start && tracks && <Videos users={users} tracks={tracks} />}
    </div>
  );
}
