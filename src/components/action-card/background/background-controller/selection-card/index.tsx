import Image from "next/image";
import { extractYouTubeId } from "@/utils/extractYoutubeId";
import { useControlBackground } from "@/store/useControlBackground";

interface ISelectionCardProps {
  youtubeSrc: string;
}

export default function SelectionCard({ youtubeSrc }: ISelectionCardProps) {
  const { setShowBackground } = useControlBackground();
  const youtubeId = extractYouTubeId(youtubeSrc) || "";

  return (
    <button
      className=" h-full w-full overflow-hidden rounded-lg bg-cover bg-no-repeat ring-sky-300 hover:ring-2"
      onClick={() => setShowBackground(youtubeId)}
    >
      <Image
        src={`http://img.youtube.com/vi/${youtubeId}/0.jpg`}
        width={1600}
        height={1600}
        className="h-full scale-[1.35] object-cover transition duration-300 ease-in-out hover:scale-[1.5]"
        alt="Louvre"
      />
    </button>
  );
}
