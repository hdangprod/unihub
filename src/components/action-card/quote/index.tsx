"use client";
import { getQuotes } from "@/api/getQuote";
import { type Quote } from "@/interface/quote";
import { useControlQuote } from "@/store/useControlQuote";
import { useEffect } from "react";

export default function Quote() {
  const { currentQuote, setCurrentQuote, setQuotes } = useControlQuote();

  useEffect(() => {
    async function fetchQuotes(): Promise<void> {
      const quotesData: Quote[] = await getQuotes();
      setQuotes(quotesData);
      setCurrentQuote(quotesData[0] as Quote);
    }
    void fetchQuotes();
  }, []);

  return (
    <div className="text-right text-white">
      {currentQuote && (
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold drop-shadow-lg ">{`"${currentQuote.text}"`}</h1>
          <p className="text-sm font-medium drop-shadow-lg">
            - {currentQuote.author}
          </p>
        </div>
      )}
    </div>
  );
}
