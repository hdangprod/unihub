import LoginButton from "@/components/login-button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-7">
      <h1 className="text-4xl font-bold text-slate-800">Login</h1>
      <LoginButton />
      <div className="text-slate-500 ">
        New user ?
        <Link className="text-amber-400" href="/register">
          {" "}
          Create an account
        </Link>
      </div>
    </div>
  );
}
