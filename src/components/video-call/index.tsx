"use client";
import { useState, useEffect } from "react";
import {
  config,
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

export default function VideoCall({
  channelName,
  token,
  uid,
}: IVideoCallProps) {
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  console.log(" this is users", users);

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

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          user.audioTrack?.stop();
        }
        if (mediaType === "video") {
          user.videoTrack?.stop();
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(config.appId, name, token, uid);
      } catch (error) {
        console.log("error");
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      console.log("init ready");
      init(channelName).catch(console.error);
    }
  }, [channelName, client, ready, tracks, token, uid]);

  return (
    <div>
      <h1>Video Call</h1>
      <div>{start && tracks && <Videos tracks={tracks} users={users} />}</div>
      <div>
        {ready && tracks && <Controls tracks={tracks} setStart={setStart} />}
      </div>
    </div>
  );
}
