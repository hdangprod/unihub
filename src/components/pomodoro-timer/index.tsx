"use client";
import { use, useCallback, useEffect, useState } from "react";
import HeroIcon from "../heroIcon";
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
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

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
        setResting(true);
        setWorking(false);
      } else {
        setMainTime(pomodoroTime);
        setResting(false);
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
  };

  const toggleTimer = () => {
    setTimeCounting(!timeCounting);
  };

  const handleBellClick = () => {
    // Handle bell icon click logic here
  };

  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-1 rounded-xl bg-white py-4 drop-shadow-sd2">
      <h1 className="mb-2 font-medium text-slate-400">Pomodoro Timer</h1>
      <div className="flex items-center gap-3">
        <button
          className="rounded-full p-2 text-slate-400 hover:bg-sky-50 hover:text-sky-400"
          onClick={decreaseTimer}
        >
          <HeroIcon icon="minus" className="h-5 w-5" />
        </button>

        <p className="text-3xl font-medium text-slate-500">
          {TimerFormat(mainTime)}
        </p>
        <button
          className="rounded-full p-2 text-slate-400 hover:bg-sky-50 hover:text-sky-400"
          onClick={increaseTimer}
        >
          <HeroIcon icon="plus" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-2">
        <button onClick={resetTimer}>
          <HeroIcon
            icon="arrow-uturn-left"
            className="box-content h-5 w-5 rounded-full p-2 text-sky-400 hover:bg-sky-50"
          />
        </button>

        <button onClick={() => toggleTimer()}>
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
