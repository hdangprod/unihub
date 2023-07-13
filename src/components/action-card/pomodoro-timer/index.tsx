"use client";
import { useEffect, useState } from "react";
import HeroIcon from "../../heroIcon";
import { TimerFormat } from "@/utils/timerFormat";
import { useInterval } from "@/hooks/useInterval";

interface IPromodorTimerProps {
  pomodoroTime: number;
  restTime: number;
}

export default function PomodoroTimer({
  pomodoroTime,
  restTime,
}: IPromodorTimerProps) {
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(true);
  const [reset, setReset] = useState(true);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  useEffect(() => {
    if (mainTime <= 0) {
      setTimeCounting(false);
      if (working) {
        setMainTime(restTime);
        setWorking(false);
      } else {
        setMainTime(pomodoroTime);
        setWorking(true);
      }
    }
  }, [mainTime, restTime, pomodoroTime, working]);

  const decreaseTimer = () => {
    if (mainTime >= 300) {
      setMainTime((prevTimer) => prevTimer - 300);
    }
  };

  const increaseTimer = () => {
    if (mainTime < 7200) {
      setMainTime((prevTimer) => prevTimer + 300);
    }
  };

  const resetTimer = () => {
    setMainTime(pomodoroTime); // 45 minutes
    setTimeCounting(false);
    setWorking(true);
    setReset(true);
  };

  const toggleTimer = () => {
    setTimeCounting(!timeCounting);
    setReset(false);
  };

  const handleBellClick = () => {
    // Handle bell icon click logic here
  };

  return (
    <div className="min-w-80 flex w-full flex-col items-center justify-center gap-1 rounded-xl bg-white py-5 drop-shadow-sd2">
      <h1 className="my-2 text-slate-400">{`${
        working ? `Pomodoro Timer` : `Resting`
      }`}</h1>
      <div className="flex items-center gap-5">
        {reset && (
          <button
            className="rounded-full p-2 text-slate-400 hover:bg-sky-50 hover:text-sky-400"
            onClick={decreaseTimer}
          >
            <HeroIcon icon="minus" className="h-5 w-5" />
          </button>
        )}

        <p className="text-3xl font-medium text-slate-500">
          {TimerFormat(mainTime)}
        </p>
        {reset && (
          <button
            className="rounded-full p-2 text-slate-400 hover:bg-sky-50 hover:text-sky-400"
            onClick={increaseTimer}
          >
            <HeroIcon icon="plus" className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={resetTimer}>
          <HeroIcon
            icon="arrow-uturn-left"
            className="box-content h-5 w-5 rounded-full p-2 text-sky-400 hover:bg-sky-50"
          />
        </button>

        <button onClick={toggleTimer}>
          <HeroIcon
            icon={timeCounting ? "pause" : "play"}
            className="box-content h-5 w-5 rounded-full p-2 text-sky-400 hover:bg-sky-50"
          />
        </button>

        <button onClick={handleBellClick}>
          <HeroIcon
            icon="bell"
            className="box-content h-5 w-5 rounded-full p-2 text-sky-400 hover:bg-sky-50"
          />
        </button>
      </div>
    </div>
  );
}
