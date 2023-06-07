import ActionBar from "@/components/action-bar";
import Background from "@/components/action-card/background";
import type { Metadata } from "next";
import actionMenu from "@/public/assets/data/action-data/action-menu.json";
import accessibleMenu from "@/public/assets/data/action-data/accessible-menu.json";
import soundList from "@/public/assets/data/sound-data/sound-menu.json";
import ActionCard from "@/components/action-card";

export const metadata: Metadata = {
  title: "My Space",
};

export default function MySpace() {
  return (
    <>
      <div className="absolute left-36 top-4 z-10">
        <div className="flex flex-col gap-5">
          <ActionBar
            menuActionItems={actionMenu}
            accessibilityOptions={accessibleMenu}
          />
        </div>
      </div>
      <div className="absolute">{/* <Background id="GJ7jIOzLZwM" /> */}</div>
    </>
  );
}
