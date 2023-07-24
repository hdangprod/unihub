"use client";
import Input from "@/components/input";
import ChannelCard from "@/components/channel-card";
import ChannelCreation from "@/components/channel-creation";
import { api } from "@/utils/api";

export default function Group() {
  const { data: channels, isLoading } = api.channelRouter.fetchAll.useQuery();

  return (
    <div className=" flex w-5/6 flex-col gap-5 py-12">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">Study Group</h1>
        <h1 className="mt-2 text-slate-500">
          Enjoy connecting with many productive people.
        </h1>
        <div className=" divider mt-5 w-full gap-5 border-t border-slate-300" />
      </div>
      <div className="flex justify-end gap-2">
        <div className="w-2/6">
          <Input
            id="search"
            label="Search your group here"
            className="w-full"
          />
        </div>
        <ChannelCreation />
      </div>
      <div>
        <h1 className="mb-8 text-xl font-medium text-slate-500">
          Community channels
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {channels?.length ? (
            channels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channelId={channel.id}
                channelName={channel.channelName}
                channelDescription={channel.channelDescription || ""}
              />
            ))
          ) : (
            <div className="select-none text-center text-slate-300">
              {isLoading ? "Loading..." : "Empty channel!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
