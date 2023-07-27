"use client";
import { api } from "@/utils/api";
import dynamic from "next/dynamic";
import { useState } from "react";

const VideoCall = dynamic(() => import("@/components/video-call"), {
  ssr: false,
});

interface IGroupIdProps {
  params: {
    channelId: string;
  };
}

export default function Test4({ params }: IGroupIdProps) {
  const [inCall, setInCall] = useState(false);

  const { data: channelTokenRouter } = api.channelRouter.getToken.useQuery({
    channelId: params.channelId,
  });

  return (
    <div>
      <div>
        {inCall ? (
          <VideoCall
            uid={channelTokenRouter?.account as string}
            token={channelTokenRouter?.token as string}
            channelName={params.channelId}
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
    </div>
  );
}
