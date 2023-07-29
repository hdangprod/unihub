import { getChannelToken } from "@/server/handlers/getChannelToken";
import dynamic from "next/dynamic";
import { use } from "react";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

const VideoCall = dynamic(() => import("@/components/video-call"), {
  ssr: false,
});

export default function GroupId({ params }: IGroupIdProps) {
  const token = use(getChannelToken(params.groupId));

  return (
    <div>
      <VideoCall
        uid={token.account}
        token={token.token}
        channelName={params.groupId}
      />
    </div>
  );
}
