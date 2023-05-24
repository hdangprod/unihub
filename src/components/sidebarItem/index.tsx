import Link from "next/link";
import HeroIcon from "../heroIcon";

interface ISidebarItemProps {
  href: string;
  title: string;
  icon: string;
}
export default function SidebarItem({ href, title, icon }: ISidebarItemProps) {
  return (
    <div className="group h-full w-full rounded-xl py-4 hover:bg-sky-50 hover:text-slate-200">
      <Link className="flex  flex-col items-center gap-1 " href={href}>
        <HeroIcon icon={icon} className="h-6 w-6 text-sky-400 " />
        <h1 className="text-center text-xs text-slate-500 group-hover:text-sky-400">
          {title}
        </h1>
      </Link>
    </div>
  );
}
