import {
  AgoraVideoPlayer,
  type IAgoraRTCRemoteUser,
  type ICameraVideoTrack,
  type IMicrophoneAudioTrack,
} from "agora-rtc-react";

export default function Videos({
  users,
  tracks,
}: {
  users: IAgoraRTCRemoteUser[];
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
}) {
  let userGrids;
  if (users.length === 0) {
    userGrids = " grid-cols-1 max-w-[75vw] max-h-[700px] ";
  } else if (users.length === 1) {
    userGrids = " grid-cols-2 max-w-[1200px] max-h-[400px] ";
  } else if (users.length === 2) {
    userGrids = " grid-cols-3 max-w-[1500px] max-h-[350px] ";
  } else {
    userGrids = " grid-cols-4 max-w-[1500px] max-h-[350px]";
  }
  return (
    <div className={` ${userGrids} m-auto grid h-[75vh] -translate-y-10 gap-6`}>
      <div className=" drop-shadow-sd2">
        <AgoraVideoPlayer
          className="agora-local-player"
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div key={user.uid}>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  className="agora-local-player"
                  key={user.uid}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            );
          } else return null;
        })}
    </div>
  );
}
