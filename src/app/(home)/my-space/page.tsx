import ActionBar from "@/components/action-bar";
import PomodoroTimer from "@/components/pomodoro-timer";
import VideoBackground from "@/components/video-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};

const actionBarMenu = [
  {
    name: "Timer",
    icon: "clock",
  },
  {
    name: "Session Goal",
    icon: "list-bullet",
  },
  {
    name: "music",
    icon: "musical-note",
  },
  {
    name: "Notes",
    icon: "document-text",
  },
  {
    name: "Background",
    icon: "photo",
  },
  {
    name: "Inspirational Quote",
    icon: "light-bulb",
  },
];

export default function MySpace() {
  return (
    <div className="relative">
      <div className="absolute left-36 top-4">
        <div className="flex flex-col gap-8">
          <ActionBar menuItems={actionBarMenu} />
          <PomodoroTimer pomodoroTime={2700} restTime={300} />
        </div>
      </div>
      <VideoBackground id="GJ7jIOzLZwM" />
    </div>
  );
}
