import { getChannelToken } from "@/server/handlers/getChannelToken";
import dynamic from "next/dynamic";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

const VideoCall = dynamic(() => import("@/components/video-call"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default async function GroupId({ params }: IGroupIdProps) {
  const token = await getChannelToken(params.groupId);

  return (
    <div className="m-auto flex h-full w-full">
      <VideoCall
        uid={token.account}
        token={token.token}
        channelName={params.groupId}
      />
    </div>
  );
}
