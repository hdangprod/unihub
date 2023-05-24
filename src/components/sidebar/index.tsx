import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

export default function Sidebar() {
  return (
    <div className="h-screen w-20 bg-red-300">
      <Image src={logo} height={60} width={60} alt="logo" />
    </div>
  );
}
