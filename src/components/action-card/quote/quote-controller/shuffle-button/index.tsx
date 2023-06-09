import HeroIcon from "@/components/heroIcon";
import { type Quote } from "@/interface/quote";
import { useControlQuote } from "@/store/useControlQuote";

export default function ShuffleButton() {
  const { quotes, setCurrentQuote } = useControlQuote();
  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setCurrentQuote(randomQuote as Quote);
  };
  return (
    <button
      onClick={handleShuffle}
      className="group h-16 w-4/12 rounded-xl bg-slate-200 ring-sky-300 hover:bg-sky-50 hover:ring-2"
    >
      <div className="flex h-full flex-col items-center justify-center gap-1">
        <HeroIcon
          icon="arrow-path-rounded-square"
          className="h-6 w-6 text-slate-500 group-hover:text-sky-400"
        />
        <h1 className="text-xs text-slate-500 group-hover:text-sky-400">
          Random
        </h1>
      </div>
    </button>
  );
}
