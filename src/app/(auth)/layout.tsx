import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

import loginImg from "@/public/assets/images/login-screen.jpeg";

interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="flex h-screen flex-row ">
      <div className="hidden md:relative md:flex md:w-6/12 lg:w-7/12 ">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black via-black to-transparent opacity-40" />
        <div>
          <Image
            className="absolute left-1/4 top-[14%] -translate-x-1/2 brightness-0 invert lg:left-[14%]"
            src={logo}
            height={40}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="absolute bottom-1/4 left-1/4 flex w-2/3 -translate-x-1/4 flex-col gap-3 p-4 text-white  ">
          <h1 className="mb-2 text-4xl font-bold">Minimize your distraction</h1>
          <p>
            Study Together, in a virtual community spread around all continents,
            we are making it possible for learners around the world to connect,
            learn, teach, share, support and help each other.
          </p>
        </div>
        <div className="h-full w-full bg-red-200">
          <Image
            src={loginImg}
            alt="login"
            className="h-full object-cover"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-5/12">{children}</div>
    </div>
  );
}
