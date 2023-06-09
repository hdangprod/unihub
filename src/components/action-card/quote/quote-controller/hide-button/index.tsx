import HeroIcon from "@/components/heroIcon";
import { type Quote } from "@/interface/quote";
import { useControlQuote } from "@/store/useControlQuote";
import { useState } from "react";

export default function HideButton() {
  const { currentQuote, setCurrentQuote } = useControlQuote();
  const [storeQuote, setStoreQuote] = useState<Quote | null>(null);
  const handleShowQuote = () => {
    if (currentQuote) {
      setStoreQuote(currentQuote);
      setCurrentQuote(null);
    } else {
      setCurrentQuote(storeQuote as Quote);
    }
  };
  return (
    <button
      onClick={handleShowQuote}
      className="group h-16 w-4/12 rounded-xl bg-slate-200 ring-sky-300 hover:bg-sky-50 hover:ring-2"
    >
      {currentQuote ? (
        <div className="flex h-full flex-col items-center justify-center gap-1">
          <HeroIcon
            icon="eye-slash"
            className="h-6 w-6 text-slate-500 group-hover:text-sky-400"
          />
          <h1 className="text-xs text-slate-500 group-hover:text-sky-400">
            Hide
          </h1>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-1">
          <HeroIcon
            icon="eye"
            className="h-6 w-6 text-slate-500 group-hover:text-sky-400"
          />
          <h1 className="text-xs text-slate-500 group-hover:text-sky-400">
            Show
          </h1>
        </div>
      )}
    </button>
  );
}
