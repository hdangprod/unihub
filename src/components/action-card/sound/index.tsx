"use client";
import { useRef, useState } from "react";
import rainSound from "@/public/assets/sound/rain-sound.mp3";

export default function Sound({ isShow }: { isShow: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div
      className={`
        ${isShow ? "flex" : "hidden"}
       max-h-[60vh] w-80 flex-col justify-center gap-1 rounded-xl bg-white p-4 drop-shadow-sd2`}
    >
      <h1 className="mb-2 text-center text-slate-400">Sound</h1>
      <div className="flex items-center justify-center">
        <audio ref={audioRef} src={rainSound}></audio>
        <div className="ml-2">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => void playAudio()}
          >
            Play
          </button>
          <div className="ml-4">
            <label htmlFor="volume" className="font-bold">
              Volume
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="block h-1 w-36 appearance-none rounded-lg bg-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
