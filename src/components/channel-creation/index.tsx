import HeroIcon from "../heroIcon";

export default function ChannelCreationn() {
  return (
    <button className=" flex items-center rounded-xl bg-sky-50 p-3 text-sky-500 transition-colors hover:bg-sky-400 hover:text-white">
      <h1 className="font-medium">Create new channel</h1>
      <HeroIcon icon="plus" className="ml-2 h-5 w-5" />
    </button>
  );
}
