// import Test4 from "@/components/test4";
// import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";
import { Suspense } from "react";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}
// export async function generateStaticParams() {
//   const channels = await fetchAllChannels();
//   return channels.map((channel) => {
//     return {
//       channelId: channel.id,
//     };
//   });
// }

export default function GroupId({ params }: IGroupIdProps) {
  console.log(params);
  return <div>My GroupId {params.groupId}</div>;
}
