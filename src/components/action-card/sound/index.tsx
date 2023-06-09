"use client";
import { useRef, useState } from "react";
import soundList from "@/public/assets/data/sound-data/sound-menu.json";
import SoundController from "@/components/action-card/sound/sound-controller";

export default function Sound({ isShow }: { isShow: boolean }) {
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  audioRefs.current = [];

  const [volumeList, setVolumeList] = useState<number[]>(
    soundList.map(() => 0)
  );

  const addToRes = (el: HTMLAudioElement) => {
    if (el && !audioRefs.current.includes(el)) {
      audioRefs.current.push(el);
    }
  };

  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const audioElement = audioRefs.current[index] as HTMLAudioElement;
    const newVolume = Number(event.target.value);
    if (audioRefs.current[index]) {
      void audioElement.play();
      audioElement.volume = newVolume;
    }
    setVolumeList((prevVolumeList) => {
      const updatedVolumeList = [...prevVolumeList];
      updatedVolumeList[index] = newVolume;
      return updatedVolumeList;
    });
  };

  const handleMuteAudio = (index: number) => {
    if (audioRefs.current[index]) {
      const audioElement = audioRefs.current[index] as HTMLAudioElement;
      void audioElement.play();
      // Set to mute

      if (audioElement.volume !== 0) {
        audioElement.volume = 0;
        setVolumeList((prevVolumeList) => {
          const newVolumeList = [...prevVolumeList];
          newVolumeList[index] = audioElement.volume;
          return newVolumeList;
        });
      } else {
        setVolumeList((prevVolumeList) => {
          audioElement.volume = 0.5;
          const newVolumeList = [...prevVolumeList];
          newVolumeList[index] = 0.5;
          return newVolumeList;
        });
      }
    }
  };

  return (
    <div
      className={`
        ${isShow ? "flex" : "hidden"}
       min-w-80  min-h-[50vh] w-full flex-col  gap-1 rounded-xl bg-white px-6  drop-shadow-sd2`}
    >
      <h1 className="mb-4 mt-6 text-center text-slate-400">Sound</h1>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {soundList.map((sound, index) => (
          <div key={index}>
            <div className="flex items-center justify-center">
              <audio ref={addToRes} src={sound.src}></audio>
            </div>
            <SoundController
              label={sound.name}
              muteAudio={() => handleMuteAudio(index)}
              handleVolumeChange={(e) => handleVolumeChange(e, index)}
              volume={volumeList[index] || 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
