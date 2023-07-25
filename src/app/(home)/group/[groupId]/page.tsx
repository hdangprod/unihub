import Test4 from "@/components/test4";
import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}
export const dynamicParams = true;
export const dynamic = "force-dynamic";

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
