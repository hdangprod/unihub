import { getChannelToken } from "@/server/handlers/getChannelToken";
import dynamic from "next/dynamic";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

const VideoCall = dynamic(() => import("@/components/video-call/index"), {
  ssr: false,
});

export default async function GroupId({ params }: IGroupIdProps) {
  const token = await getChannelToken(params.groupId);

  return (
    <div>
      <VideoCall />
    </div>
  );
}
