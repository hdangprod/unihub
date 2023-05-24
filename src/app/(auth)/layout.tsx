import Image from "next/image";
import loginImg from "@/public/assets/images/login-screen.jpeg";

interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="hidden md:relative md:flex md:basis-6/12 lg:basis-7/12 ">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black via-black to-transparent opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 flex w-2/3 -translate-x-1/4 flex-col gap-3 p-4 text-white  ">
          <h1 className="mb-2 text-4xl font-bold">Minimize your distraction</h1>
          <p className="text-lg">
            Study Together, in a virtual community spread around all continents,
            we are making it possible for learners around the world to connect,
            learn, teach, share, support and help each other.
          </p>
        </div>
        <Image
          src={loginImg}
          alt="login image"
          className="h-full w-full rounded-e-xl object-cover"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="basis-full md:basis-6/12 lg:basis-5/12">{children}</div>
    </div>
  );
}
