import { fetchAllChannels } from "@/server/handlers/fetchAllChannels";
import dynamic from "next/dynamic";

const Test4 = dynamic(() => import("@/components/test4"), {
  ssr: true,
});

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}
export const dynamicParams = false;

export async function generateStaticParams() {
  const channels = await fetchAllChannels();

  return channels;
}

export default function GroupId({ params }: IGroupIdProps) {
  return <Test4 params={params} />;
}
