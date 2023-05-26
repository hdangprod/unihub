"use client";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import googleLogo from "@/public/assets/images/google-logo.png";
import Image from "next/image";

export default function LoginButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") ?? "/";
  return (
    <button
      className="flex w-1/2 items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-4 py-2 drop-shadow-sd2 hover:shadow-sm"
      onClick={() => void signIn("google", { callbackUrl })}
    >
      <Image src={googleLogo} alt="google icon" width={30} height={30} />
      <span className="font-semibold text-slate-500">Login with Google</span>
    </button>
  );
}
