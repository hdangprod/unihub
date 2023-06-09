import { type Quote } from "@/interface/quote";
import { create } from "zustand";

interface IShowQuote {
  quotes: Quote[];
  currentQuote: Quote | null;
  setQuotes: (quotes: Quote[]) => void;
  setCurrentQuote: (quote: Quote | null) => void;
}
export const useControlQuote = create<IShowQuote>((set) => ({
  quotes: [],
  currentQuote: { text: "", author: "" },
  setQuotes: (quotes) => set({ quotes }),
  setCurrentQuote: (quote) => set({ currentQuote: quote }),
}));
