import GoogleButton from "@/components/google-button";
import Input from "@/components/input";
import Profile from "@/components/profile";
import qrCode from "@/public/assets/images/qr-code-purchase.jpeg";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Settings",
};
export default function Settings() {
  return (
    <div className=" mt-12 flex w-4/5 flex-col gap-5">
      <h1 className="text-2xl font-semibold text-slate-700">
        General Settings
      </h1>
      <div className=" flex w-full flex-col gap-5 border-t border-slate-300 py-5">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <h2 className="text-lg font-medium text-slate-700">Public Profile</h2>
        </div>
        <Profile />
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
        <div className="flex">
          <Image src={qrCode} alt="qr-code" className="w-32" />
          <div className="ml-5 flex  flex-col">
            <h3 className="text-lg font-medium text-slate-700">
              Nguyễn Hải Đăng
            </h3>
            <p className="text-slate-500">0383251335</p>
            <div className="mt-6 flex items-baseline gap-2">
              <Input
                id="transaction-code"
                label="Transaction code"
                type="number"
              />
              <button className="rounded-xl p-3 font-medium text-sky-400 hover:bg-sky-50">
                Confirm
              </button>
            </div>
          </div>
        </div>
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
