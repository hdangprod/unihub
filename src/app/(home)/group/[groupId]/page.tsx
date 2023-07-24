// "use client";
// import { api } from "@/utils/api";
// import dynamic from "next/dynamic";
// import { useState } from "react";

// const VideoCall = dynamic(() => import("@/components/video-call"), {
//   ssr: false,
// });

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function GroupId({ params }: { params: { id: string } }) {
  // const [inCall, setInCall] = useState(false);

  // const { data: channelTokenRouter } = api.channelRouter.getToken.useQuery({
  //   channelId: params.groupId,
  // });

  return (
    <div>
      <div>
        <div>Video {params.id}</div>
      </div>
    </div>
  );
}
