import SettingItem from "./setting-item";

interface ISettingSidebarProps {
  settingOptions: {
    title: string;
    href: string;
    icon: string;
  }[];
}

export default function SettingSidebar({
  settingOptions,
}: ISettingSidebarProps) {
  return (
    <ul className="navbar">
      {settingOptions.map((option) => (
        <li key={option.href}>
          <SettingItem
            href={option.href}
            icon={option.icon}
            title={option.title}
          />
        </li>
      ))}
    </ul>
  );
}
