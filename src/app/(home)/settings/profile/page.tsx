import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicProfileComponent = dynamic(() => import("@/components/profile"), {
  loading: () => <p>Loading...</p>,
});
export const metadata: Metadata = {
  title: "Account Management",
};
export default function Profile() {
  return (
    <div className=" flex w-full flex-col gap-5">
      <div className="flex w-full flex-col gap-2">
        <h2 className="mb-5  text-2xl text-slate-700">Account Management</h2>
      </div>
      <DynamicProfileComponent />
      <div className=" divider my-5 w-full gap-5 border-t border-slate-300" />

      <div className="flex flex-col gap-1 text-slate-500">
        <h2 className="text-sm">Current Plan</h2>
        <h1 className="text-xl font-medium text-sky-400">Free Plan</h1>
        <p>
          Want to access all incredible features ? Purchase the app{" "}
          <Link className="font-semibold text-sky-500" href="/settings/payment">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
