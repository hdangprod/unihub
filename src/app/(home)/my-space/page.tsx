import ActionBar from "@/components/action-bar";
import VideoBackground from "@/components/video-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};

const actionMenu = [
  {
    name: "timer",
    icon: "clock",
  },
  {
    name: "sessionGoal",
    icon: "list-bullet",
  },
  {
    name: "notes",
    icon: "document-text",
  },
];
const accessibleMenu = [
  {
    name: "music",
    icon: "musical-note",
  },
  {
    name: "background",
    icon: "photo",
  },
  {
    name: "inspirationalQuote",
    icon: "light-bulb",
  },
];

export default function MySpace() {
  return (
    <div className="relative">
      <div className="absolute left-36 top-4">
        <div className="flex flex-col gap-8">
          <ActionBar
            menuActionItems={actionMenu}
            accessibilityOptions={accessibleMenu}
          />
        </div>
      </div>
      {/* <VideoBackground id="GJ7jIOzLZwM" /> */}
    </div>
  );
}
