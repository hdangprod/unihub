import GoogleButton from "@/components/google-button";
import Link from "next/link";
import { Suspense } from "react";

function SearchBarFallback() {
  return <>Loading</>;
}

export default function Register() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-7">
      <h1 className="text-4xl font-bold text-slate-800">Create an account</h1>
      <Suspense fallback={<SearchBarFallback />}>
        <GoogleButton />
      </Suspense>
      <div className="text-slate-500 ">
        You have an account ?
        <Link className="text-amber-400" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
