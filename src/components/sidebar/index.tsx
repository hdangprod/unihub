import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import SidebarItem from "../sidebarItem";

interface ISidebarProps {
  menuItems: {
    href: string;
    title: string;
    icon: string;
  }[];
}

export default function Sidebar({ menuItems }: ISidebarProps) {
  return (
    <aside className="w-28">
      <nav className="fixed bottom-1/2 left-3 h-[97%] w-24 translate-y-1/2 rounded-xl bg-white px-2 drop-shadow-sd2">
        <div className="my-8">
          <Image
            className="mx-auto"
            src={logo}
            height={25}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
