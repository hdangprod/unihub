import HeroIcon from "@/components/heroIcon";

interface ISoundControllerProps {
  volume: number;
  label: string;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  muteAudio: () => void;
}

export default function SoundController({
  volume,
  label,
  handleVolumeChange,
  muteAudio,
}: ISoundControllerProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-500">{label}</label>
      <div className="flex items-center gap-2">
        <button onClick={muteAudio}>
          {volume === 0 ? (
            <HeroIcon
              outline={false}
              icon="speaker-x-mark"
              className="mr-2 h-5 w-5 text-slate-400 hover:text-slate-500"
            />
          ) : (
            <HeroIcon
              outline={false}
              icon="speaker-wave"
              className="mr-2 h-5 w-5 text-sky-400 hover:text-sky-500"
            />
          )}
        </button>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="block h-[2px] w-5/6 appearance-none rounded-lg bg-slate-200"
        />
      </div>
    </div>
  );
}
