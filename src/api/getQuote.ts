import { type Quote } from "@/interface/quote";

export async function getQuotes(): Promise<Quote[]> {
  const response = await fetch("https://type.fit/api/quotes");
  const data = (await response.json()) as Quote[];
  return data;
}
