// import Test4 from "@/components/test4";
// import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";
import { Suspense } from "react";

interface IGroupIdProps {
  params: {
    channelId: string;
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

export default function GroupId({ params: { channelId } }: IGroupIdProps) {
  return <div></div>;
}
