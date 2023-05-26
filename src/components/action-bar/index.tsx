import HeroIcon from "../heroIcon";

interface IActionBarProps {
  menuItems: {
    name: string;
    icon: string;
  }[];
}
export default function ActionBar({ menuItems }: IActionBarProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        {menuItems.map((item) => (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-500 drop-shadow-sd2 hover:text-sky-400 hover:shadow-xl"
            key={item.name}
          >
            <button>
              <HeroIcon icon={item.icon} className="h-6 w-6 " />
            </button>
          </div>
        ))}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-500 drop-shadow-sd2 hover:text-sky-400 hover:shadow-xl">
          <button>
            <HeroIcon icon="chevron-left" className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </div>
  );
}
