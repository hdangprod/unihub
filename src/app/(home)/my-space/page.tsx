import VideoBackground from "@/components/video-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function MySpace() {
  return (
    <div className="h-screen w-screen">
      <VideoBackground id="GJ7jIOzLZwM" />
    </div>
  );
}
