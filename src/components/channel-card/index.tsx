import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const VideoCall = dynamic(() => import("@/components/video-call"), {
  ssr: false,
});
export default function ChannelCard() {
  const [inCall, setInCall] = useState(false);

  return (
    // <div>
    //   {inCall ? (
    //     <VideoCall setInCall={setInCall} />
    //   ) : (
    //     <button
    //       className=" rounded bg-sky-400 p-4 text-white"
    //       onClick={() => setInCall(true)}
    //     >
    //       Start Call
    //     </button>
    //   )}
    // </div>
    <div className="rounded-xl border border-slate-200 bg-white drop-shadow-sd2  sm:w-6/12 md:w-4/12 lg:w-3/12">
      <Image
        src="/assets/image/group_focus.jpeg"
        alt="video call background"
        width={400}
        height={400}
        className="h-36 w-full rounded-t-lg object-cover"
      />
      <div className="px-5 pb-6 pt-4">
        <h1 className="text-lg font-medium text-slate-700">Group Focus</h1>
        <h2 className="mt-2 text-sm text-slate-500">
          Join and start studying right away with the community!
        </h2>
        <button className="mt-4 w-full rounded-lg bg-sky-400 px-4 py-2 text-sm text-white">
          Join Group
        </button>
      </div>
    </div>
  );
}
