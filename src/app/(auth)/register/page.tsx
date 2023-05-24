import Link from "next/link";

export default function Register() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <h1 className="text-4xl font-bold text-slate-800">Create an account</h1>
      <div></div>
      <div className="text-slate-500 ">
        You have an account?
        <Link className="text-amber-400" href="/login">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}
