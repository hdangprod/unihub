"use client";
import Image from "next/image";
import HeroIcon from "../heroIcon";
import Link from "next/link";

interface IChannelCardProps {
  channelId: string;
  channelName: string;
  channelDescription: string;
}

export default function ChannelCard({
  channelId,
  channelName,
  channelDescription,
}: IChannelCardProps) {
  return (
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
        <h1 className="text-lg font-medium text-slate-700">{channelName}</h1>
        <h2 className="mt-1 truncate text-sm text-slate-500">
          {channelDescription}
        </h2>
        <div className="mt-4 flex items-center justify-between">
          <div className="my-2 flex  space-x-2 text-sky-500">
            <HeroIcon icon="user-group" className="h-5 w-5" />
            <h1 className="text-sm"> 10 members</h1>
          </div>
          <button className="rounded-lg bg-sky-400 px-4 py-2 text-sm text-white hover:bg-sky-500">
            <Link href={`/group/${channelId}`}> Join Group</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
