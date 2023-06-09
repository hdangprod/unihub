import HideButton from "@/components/action-card/quote/quote-controller/hide-button";
import ShuffleButton from "@/components/action-card/quote/quote-controller/shuffle-button";

export default function QuoteController() {
  return (
    <div className="flex max-h-[70vh] w-full flex-col rounded-xl bg-white py-2 pb-6 drop-shadow-sd2">
      <h1 className="my-5 text-center text-slate-400">Motivation Quote</h1>
      <div className="flex items-center justify-center gap-3">
        <HideButton />
        <ShuffleButton />
      </div>
    </div>
  );
}
