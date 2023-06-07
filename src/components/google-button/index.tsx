"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import googleLogo from "@/public/assets/image/google-logo.png";
import Image from "next/image";

export default function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl");

  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <button
          className="flex w-1/2 items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-4 py-2 hover:drop-shadow-sd2"
          onClick={() =>
            void signIn("google", { callbackUrl: callbackUrl || "/" })
          }
        >
          <Image src={googleLogo} alt="google icon" width={30} height={30} />
          <span className="font-semibold text-slate-500">
            Continue with Google
          </span>
        </button>
      ) : (
        <button
          className="w-fit rounded-xl border border-slate-300 bg-white px-6 py-2 text-slate-500 hover:bg-slate-100"
          onClick={() => void signOut({ callbackUrl: "/login" })}
        >
          Sign out
        </button>
      )}
    </>
  );
}
