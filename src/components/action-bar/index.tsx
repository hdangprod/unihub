"use client";
import { useState } from "react";
import ActionItem from "@/components/action-bar/action-item";
import ActionCard from "../action-card";

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

  const combinedArray = [...selectedItems, ...selectedOption];

  return (
    <>
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
      <ActionCard menuItem={combinedArray} />
    </>
  );
}
