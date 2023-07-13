"use client";
import Input from "@/components/input";
import HeroIcon from "@/components/heroIcon";
import ChannelCard from "@/components/channel-card";

export default function Group() {
  return (
    <div className=" mt-12 flex w-4/5 flex-col gap-5">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">Study Group</h1>
        <h1 className="mt-2 text-slate-500">
          Enjoy connecting with many productive people.
        </h1>
        <div className=" mt-5 w-full gap-5 border-t border-slate-300" />
      </div>
      <div className="flex justify-end gap-2">
        <div className="w-2/6">
          <Input
            id="search"
            label="Search your group here"
            className="w-full"
          />
        </div>
        <button className=" flex items-center rounded-xl bg-sky-50 p-3 text-sky-500 transition-colors hover:bg-sky-400 hover:text-white">
          <h1 className="font-medium">Create new channel</h1>
          <HeroIcon icon="plus" className="ml-2 h-5 w-5" />
        </button>
      </div>
      <div>
        <h1 className="mb-8 text-xl font-medium text-slate-500">
          Favorite Community
        </h1>
        <div>
          <ChannelCard />
        </div>
      </div>
    </div>
  );
}
