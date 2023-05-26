"use client";
import Link from "next/link";
import HeroIcon from "../heroIcon";
import { usePathname } from "next/navigation";

interface ISidebarItemProps {
  href: string;
  title: string;
  icon: string;
}
export default function SidebarItem({ href, title, icon }: ISidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div
      className={`
    ${isActive ? "bg-sky-50 text-sky-400" : "bg-white text-slate-500"}
    group h-full w-full rounded-xl py-4  hover:bg-sky-50`}
    >
      <Link className="flex  flex-col items-center gap-2 " href={href}>
        <HeroIcon icon={icon} className="h-6 w-6 text-sky-400 " />
        <h1 className=" text-center text-xs  group-hover:text-sky-400 ">
          {title}
        </h1>
      </Link>
    </div>
  );
}
