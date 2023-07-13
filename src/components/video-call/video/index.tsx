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
  return (
    <div style={{ height: "100%" }}>
      <div>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      {users.length > 0 &&
        users.map((user, index) => {
          if (user.videoTrack) {
            return (
              <div key={index}>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
            );
          } else return null;
        })}
    </div>
  );
}
