import SettingSidebar from "@/components/setting-sidebar";

interface IHomeHomeLayoutProps {
  children?: React.ReactNode;
}
export default function SettingsLayout({ children }: IHomeHomeLayoutProps) {
  const settingOptions = [
    {
      title: "Account Management",
      href: "/settings/profile",
      icon: "user",
    },
    {
      title: "Payment",
      href: "/settings/payment",
      icon: "credit-card",
    },
    {
      title: "Authentication",
      href: "/settings/authentication",
      icon: "lock-closed",
    },
  ];
  return (
    <div className=" flex w-5/6 flex-col gap-5 py-12">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">
          General Settings
        </h1>
        <h1 className="mt-2 text-slate-500">
          Manage your account and elevate your experience.
        </h1>
        <div className=" divider mt-5 w-full gap-5 border-t border-slate-300" />
      </div>
      <div className="flex space-x-10">
        <div className="content w-3/12">
          <SettingSidebar settingOptions={settingOptions} />
        </div>
        <div className="content w-9/12">{children}</div>
      </div>
    </div>
  );
}
