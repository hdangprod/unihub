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
  const currentPath = pathname?.split("/")[1];
  const isActive = currentPath === href.split("/")[1];

  return (
    <div
      className={`
    ${isActive ? "bg-sky-50 text-sky-400" : "bg-white text-slate-500"}
    group h-full w-full rounded-xl py-3  hover:outline hover:outline-sky-200`}
    >
      <Link className="flex  flex-col items-center gap-1 " href={href}>
        <HeroIcon icon={icon} className="h-6 w-6 text-sky-400 " />
        <h1 className=" text-center text-[11px]  group-hover:text-sky-400 ">
          {title}
        </h1>
      </Link>
    </div>
  );
}
