"use client";
import Image from "next/image";
import Input from "../input";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex flex-col place-items-start gap-16 md:flex-row">
        <div className="flex w-5/6 min-w-[400px] flex-col gap-7 lg:w-6/12">
          <div className="flex flex-col gap-2">
            <Input
              id="name"
              label="Name"
              className="w-full text-slate-700"
              value={session?.user.name || ""}
            />
            <p className="text-xs text-slate-400">
              Your name appear based on your google account (if you sign in with
              goole), you can edit any time.
            </p>
          </div>
          <Input
            id="email"
            label="Email"
            className=" w-full text-slate-700"
            value={session?.user.email || ""}
          />
        </div>
        <Image
          src={session?.user.image || "/assets/image/default-profile-pic.png"}
          alt="profile"
          width={150}
          height={150}
          className="mb-3 rounded-full"
        />
      </div>
      <button className="mt-3 w-fit rounded-xl bg-sky-400 px-6 py-2 font-medium text-white hover:bg-sky-500">
        Update Profile
      </button>
    </>
  );
}
