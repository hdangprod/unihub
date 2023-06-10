import type { Metadata } from "next";
import Image from "next/image";
import landingImg from "@/public/assets/image/landing-page.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <div className="mx-auto flex w-10/12 items-center justify-center">
      <div className="flex w-full items-center">
        <div className=" flex w-2/5 flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className=" text-4xl  text-slate-700">
              Welcome back to{" "}
              <span className="font-bold text-sky-400">Mint</span>
            </h1>
            <h2 className="text-2xl text-slate-700">
              Minimize your distractions.
            </h2>
          </div>
          <div className="w-1/4 border-t border-slate-400" />
          <p className="w-4/6 text-slate-500">
            <span className="font-bold text-sky-400">Mint</span> - Create a
            focused and productive environment with Mint. Our app is designed to
            help you optimize your workspace and minimize distractions,
            unlocking your full potential for work and study.
          </p>
          <Link
            className="mt-10 w-fit rounded-xl bg-sky-400 px-5 py-3 text-white"
            href="/my-space"
          >
            Get Started
          </Link>
        </div>
        <div className="w-3/5">
          <Image src={landingImg} alt="app screenshot" />
        </div>
      </div>
    </div>
  );
}
