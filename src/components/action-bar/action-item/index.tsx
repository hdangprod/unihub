import HeroIcon from "@/components/heroIcon";

interface IActionItemProps {
  selectedItems: string[];
  handleClick: (itemName: string) => void;
  name: string;
  icon: string;
}

export default function ActionItem({
  selectedItems,
  handleClick,
  name,
  icon,
}: IActionItemProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full 
            ${selectedItems.includes(name) ? "text-sky-400" : "text-slate-500"}
             bg-white drop-shadow-sd2 hover:shadow-xl`}
    >
      <button onClick={() => handleClick(name)}>
        <HeroIcon icon={icon} className="h-6 w-6 " />
      </button>
    </div>
  );
}
