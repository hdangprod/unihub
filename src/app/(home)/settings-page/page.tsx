import GoogleButton from "@/components/google-button";
import Purchase from "@/components/purchase/indes";
import { authOptions } from "@/server/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const DynamicProfileComponent = dynamic(() => import("@/components/profile"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Settings",
};
export default async function Settings() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login?callbackUrl=/settings");
  }
  return (
    <div className=" mt-12 flex w-4/5 flex-col gap-5">
      <h1 className="text-2xl font-semibold text-slate-700">
        General Settings
      </h1>
      <div className=" flex w-full flex-col gap-5 border-t border-slate-300 py-5">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <h2 className="text-lg font-medium text-slate-700">Public Profile</h2>
        </div>
        <DynamicProfileComponent />
      </div>

      <div className=" flex w-full flex-col gap-5 border-t border-slate-300 py-5">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <h2 className="text-lg font-medium text-slate-700">
            Purchase the premium
          </h2>
          <p className="text-slate-500">
            You can purchase the premium version of this app to get more feature
            and support the developer. You can scan the MOMO QR with code below
            to purchase the premium.
          </p>
        </div>
        <Purchase />
      </div>
      <div className=" flex w-full flex-col gap-5 border-t border-slate-300 py-5">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <h2 className="text-lg font-medium text-slate-700">Sign out</h2>
          <p className="text-slate-500">
            Make sure if you want to sign out, your can not access to your data
            until you login again. Are you sure you want to sign out?
          </p>
        </div>
        <GoogleButton />
      </div>
    </div>
  );
}
