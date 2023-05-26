import Sidebar from "@/components/sidebar";

interface IHomeHomeLayoutProps {
  children?: React.ReactNode;
}
export default function HomeLayout({ children }: IHomeHomeLayoutProps) {
  const menuItems = [
    {
      href: "/my-space",
      title: "My Space",
      icon: "user",
    },
    {
      href: "/co-op",
      title: "Group",
      icon: "user-group",
    },
    {
      href: "/leaderboard",
      title: "Leaderboard",
      icon: "globe-alt",
    },
    {
      href: "/settings",
      title: "Settings",
      icon: "cog-6-tooth",
    },
  ];
  return (
    <div className="relative flex min-h-screen">
      <Sidebar menuItems={menuItems} />
      {children}
    </div>
  );
}
