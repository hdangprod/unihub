import SelectionCard from "@/components/action-card/background/background-controller/selection-card";
import backgroundList from "@/public/assets/data/background-data/background-option.json";

export default function BackgroundController() {
  return (
    <div className="flex max-h-[70vh] w-full flex-col  gap-1 rounded-xl bg-white pb-6 drop-shadow-sd2">
      <h1 className="mb-6 mt-7 text-center text-slate-400">Background</h1>
      <div className="flex w-full flex-wrap items-center justify-center gap-2 overflow-y-auto">
        {backgroundList.map((background) => (
          <div key={background.id} className="flex h-20 w-3/12 flex-wrap">
            <SelectionCard youtubeSrc={background.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
