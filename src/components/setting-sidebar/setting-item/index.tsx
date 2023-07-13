"use client";
import HeroIcon from "@/components/heroIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISettingItemProps {
  href: string;
  title: string;
  icon: string;
}

export default function SettingItem({ href, title, icon }: ISettingItemProps) {
  const pathname = usePathname();
  // get last part of pathname
  const currentPath = pathname?.split("/").pop();
  const isActive = currentPath === href.split("/").pop();

  return (
    <div className="flex gap-1">
      <div
        className={`
      ${isActive ? "bg-sky-400" : "bg-none"}
      w-1 rounded-full `}
      />
      <Link
        href={href}
        className={`
      ${isActive ? "bg-sky-50 text-slate-700" : "bg-white"}
      flex w-full space-x-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100`}
      >
        <HeroIcon icon={icon} className="h-5 w-5" />
        <h1
          className={`
         ${isActive ? " font-semibold" : "text-slate-500"}
         `}
        >
          {title}
        </h1>
      </Link>
    </div>
  );
}
