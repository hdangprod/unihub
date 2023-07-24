"use client";
import { api } from "@/utils/api";
import dynamic from "next/dynamic";
import { useState } from "react";

const VideoCall = dynamic(() => import("@/components/video-call"), {
  ssr: false,
});

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

export const dynamicParams = true; // true | false,

export function generateStaticParams() {
  const { data: channels } = api.channelRouter.getAll.useQuery();
  return channels?.map((channel) => ({ groupId: channel.id })) || [];
}
export default function GroupId({ params }: IGroupIdProps) {
  const [inCall, setInCall] = useState(false);

  const { data: channelTokenRouter } = api.channelRouter.getToken.useQuery({
    channelId: params.groupId,
  });

  return (
    <div>
      {inCall ? (
        <VideoCall
          uid={channelTokenRouter?.account as string}
          token={channelTokenRouter?.token as string}
          channelName={params.groupId}
          setInCall={setInCall}
        />
      ) : (
        <button
          className=" rounded bg-sky-400 p-4 text-white"
          onClick={() => setInCall(true)}
        >
          Start Call
        </button>
      )}
    </div>
  );
}
