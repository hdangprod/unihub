import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";
import dynamic from "next/dynamic";

const Test4 = dynamic(() => import("@/components/test4"), {
  ssr: false,
});

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

export async function generateStaticParams() {
  const channels = await fetchAllChannels();
  return channels.map((channel) => {
    return {
      groupId: channel.id,
    };
  });
}

export default function GroupId({ params }: IGroupIdProps) {
  return <Test4 params={params} />;
}
