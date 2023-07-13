import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroIcon from "../heroIcon";

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
    <div className="group rounded-xl border border-slate-200  bg-white drop-shadow-sd2 ">
      <div className=" w-full overflow-hidden rounded-t-lg bg-cover bg-no-repeat">
        <Image
          src="/assets/image/group_focus.jpeg"
          alt="video call background"
          width={400}
          height={400}
          className="h-36 w-full scale-[1.35]  object-cover transition duration-300 ease-in-out group-hover:scale-[1.5]"
        />
      </div>
      <div className="px-5 pb-6 pt-4">
        <h1 className="text-lg font-medium text-slate-700">Group Focus</h1>
        <h2 className="mt-2 text-sm text-slate-500">
          Join and start studying right away with the community!
        </h2>
        <div className="mt-4 flex items-center justify-between">
          <div className="my-2 flex items-center space-x-2 text-sky-500">
            <HeroIcon icon="user-group" className="h-5 w-5" />
            <h1 className="text-sm"> 10 members</h1>
          </div>
          <button className="rounded-lg bg-sky-400 px-4 py-2 text-sm text-white">
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}
