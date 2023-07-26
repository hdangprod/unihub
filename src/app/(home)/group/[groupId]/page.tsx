import Test4 from "@/components/test4";
import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";
import { Suspense } from "react";

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
  return (
    <div>
      <h1>Group is {params.groupId}</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Test4 params={params} />
      </Suspense>
    </div>
  );
}
