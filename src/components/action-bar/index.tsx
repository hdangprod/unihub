"use client";
import { useState } from "react";
import PomodoroTimer from "@/components/action-card/pomodoro-timer";
import ActionItem from "./action-item";
import Todo from "@/components/action-card/todo";

interface IMenuItem {
  name: string;
  icon: string;
}
interface IActionBarProps {
  menuActionItems: IMenuItem[];
  accessibilityOptions: IMenuItem[];
}

export default function ActionBar({
  menuActionItems,
  accessibilityOptions,
}: IActionBarProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleClickActionItem = (itemName: string) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };
  const handleClickAccessibilityOption = (itemName: string) => {
    if (selectedOption.includes(itemName)) {
      setSelectedOption([]);
    } else {
      setSelectedOption([itemName]);
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-4">
        {menuActionItems.map((item) => (
          <ActionItem
            key={item.name}
            handleClick={handleClickActionItem}
            selectedItems={selectedItems}
            name={item.name}
            icon={item.icon}
          />
        ))}
        {accessibilityOptions.map((item) => (
          <ActionItem
            key={item.name}
            handleClick={handleClickAccessibilityOption}
            selectedItems={selectedOption}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>

      {selectedItems.map((item) => {
        switch (item) {
          case "timer":
            return (
              <PomodoroTimer pomodoroTime={2700} restTime={300} key={item} />
            );
          case "todo":
            return <Todo key={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
