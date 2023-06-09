import SelectionCard from "@/components/action-card/background/background-controller/selection-card";

export default function BackgroundController() {
  return (
    <div className="flex max-h-[70vh] w-full flex-col  gap-1 rounded-xl bg-white pb-6 drop-shadow-sd2">
      <h1 className="mb-6 mt-7 text-center text-slate-400">Background</h1>
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
        <div className="flex h-20 w-3/12 flex-wrap">
          <SelectionCard />
        </div>
      </div>
    </div>
  );
}
