"use client";
// import AgoraRTC, {
//   IMicrophoneAudioTrack,
//   type IAgoraRTCRemoteUser,
//   ICameraVideoTrack,
// } from "agora-rtc-sdk-ng";
// import { useEffect, useState } from "react";
// import { VideoPlayer } from "./video";

// interface IVideoCallProps {
//   channelName: string;
//   token: string;
//   uid: string;
// }

// interface ICreateAgoraClientProps {
//   videoCallProps: IVideoCallProps;
//   onVideoTrack: (user: IAgoraRTCRemoteUser) => void;
//   onUserDisconnected: (user: IAgoraRTCRemoteUser) => void;
// }

// const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID as string;

// const createAgoraClient = ({
//   videoCallProps: { channelName, token, uid },
//   onVideoTrack,
//   onUserDisconnected,
// }: ICreateAgoraClientProps) => {
//   const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

//   let tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];

//   const connect = async () => {
//     await client.join(appId, channelName, token, uid);

//     client.on("user-published", async (user, mediaType) => {
//       await client.subscribe(user, mediaType);
//       if (mediaType === "video") {
//         onVideoTrack(user);
//       }
//     });

//     client.on("user-left", (user) => {
//       onUserDisconnected(user);
//     });

//     tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
//     await client.publish(tracks);

//     return tracks;
//   };

//   const disconnect = async () => {
//     client.removeAllListeners();
//     tracks[0].stop();
//     tracks[0].close();
//     tracks[1].stop();
//     tracks[1].close();
//     await client.unpublish(tracks);
//     await client.leave();
//   };

//   return { connect, disconnect };
// };

// export const VideoCall = ({ channelName, token, uid }: IVideoCallProps) => {
//   const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);

//   useEffect(() => {
//     const onVideoTrack = (user: IAgoraRTCRemoteUser) => {
//       setUsers((prevUsers) => [...prevUsers, user]);
//     };
//     const onUserDisconnected = (user: IAgoraRTCRemoteUser) => {
//       setUsers((prevUsers) =>
//         prevUsers.filter((prevUser) => prevUser.uid !== user.uid)
//       );
//     };
//     const { connect, disconnect } = createAgoraClient({
//       videoCallProps: { channelName, token, uid },
//       onVideoTrack,
//       onUserDisconnected,
//     });

//     const setup = async () => {
//       const tracks = await connect();
//       setUsers((prevUsers) => [
//         ...prevUsers,
//         { uid, videoTrack: tracks[1], audioTrack: tracks[0] },
//       ]);
//     };

//     }
//   }, []);
// };
// export default VideoCall;

import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./video";

const APP_ID = "a51f4c5812894feb8bfa6413673062dd";
const TOKEN =
  "007eJxTYDAw2TJ1jVYjl4byUZ1l9kmtSVZyR61dQhnX7Lp56WrJaisFhkRTwzSTZFMLQyMLS5O01CSLpLREMxNDYzNzYwMzo5SUg1MOpzQEMjLMF73GxMjAyMACxCA+E5hkBpMsYJKVISM1JyefgQEA6fMgyg==";
const CHANNEL = "hello";

AgoraRTC.setLogLevel(4);

let agoraCommandQueue = Promise.resolve();

const createAgoraClient = ({ onVideoTrack, onUserDisconnected }) => {
  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  let tracks;

  const waitForConnectionState = (connectionState) => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (client.connectionState === connectionState) {
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  };

  const connect = async () => {
    await waitForConnectionState("DISCONNECTED");

    const uid = await client.join(APP_ID, CHANNEL, TOKEN, null);

    console.log("uid", uid);

    client.on("user-published", (user, mediaType) => {
      client.subscribe(user, mediaType).then(() => {
        if (mediaType === "video") {
          onVideoTrack(user);
        }
      });
    });

    client.on("user-left", (user) => {
      onUserDisconnected(user);
    });

    tracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    await client.publish(tracks);

    return {
      tracks,
      uid,
    };
  };

  const disconnect = async () => {
    await waitForConnectionState("CONNECTED");
    client.removeAllListeners();
    for (let track of tracks) {
      track.stop();
      track.close();
    }
    await client.unpublish(tracks);
    await client.leave();
  };

  return {
    disconnect,
    connect,
  };
};

const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const onVideoTrack = (user) => {
      setUsers((previousUsers) => [...previousUsers, user]);
    };

    const onUserDisconnected = (user) => {
      setUsers((previousUsers) =>
        previousUsers.filter((u) => u.uid !== user.uid)
      );
    };

    const { connect, disconnect } = createAgoraClient({
      onVideoTrack,
      onUserDisconnected,
    });

    const setup = async () => {
      const { tracks, uid } = await connect();
      setUid(uid);
      setUsers((previousUsers) => [
        ...previousUsers,
        {
          uid,
          audioTrack: tracks[0],
          videoTrack: tracks[1],
        },
      ]);
    };

    const cleanup = async () => {
      await disconnect();
      setUid(null);
      setUsers([]);
    };

    // setup();
    agoraCommandQueue = agoraCommandQueue.then(setup);

    return () => {
      // cleanup();
      agoraCommandQueue = agoraCommandQueue.then(cleanup);
    };
  }, []);

  return (
    <>
      {uid}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 200px)",
          }}
        >
          {users.map((user) => (
            <VideoPlayer key={user.uid} user={user} />
          ))}
        </div>
        <button
          onClick={() => {
            agoraCommandQueue = agoraCommandQueue.then(() => {
              users[0].videoTrack.setEnabled(false);
            });
          }}
        >
          Leave Channel
        </button>
      </div>
    </>
  );
};
export default VideoRoom;
