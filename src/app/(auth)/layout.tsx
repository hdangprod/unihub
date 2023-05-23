import Image from "next/image";
import loginImg from "@/public/assets/images/login-screen.jpeg";

interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="hidden md:relative md:flex md:basis-6/12 lg:basis-7/12">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-40" />
        <div className="absolute bottom-52 left-32 p-4 text-white">
          <h1 className="mb-4 text-4xl font-bold">Mint</h1>
          <p className="text-lg">Minimize your distraction</p>
        </div>
        <Image
          src={loginImg}
          alt="login image"
          className="h-full w-full rounded-t-lg object-cover"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="md:basis-6/12 lg:basis-5/12">{children}</div>
    </div>
  );
}
