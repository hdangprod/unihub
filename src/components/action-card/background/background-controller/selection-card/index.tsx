import Image from "next/image";
import img from "@/public/assets/image/login-screen.jpeg";
export default function SelectionCard() {
  {
    /* make image card with object fit square 3 column */
  }
  return (
    <button className="rounded-lg bg-gray-300">
      <Image
        src={img}
        alt="hello"
        className="h-full w-full rounded-lg object-cover hover:outline hover:outline-sky-400"
      />
    </button>
  );
}
