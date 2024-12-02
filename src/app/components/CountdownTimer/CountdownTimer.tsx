'use client';

import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimeStamp } from "./Utils/CountdownTimerUtils";

type RemainingTime = {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
};

const defaultRemainingTime: RemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

interface CountdownTimerProps {
  countdownTimeStampMs: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ countdownTimeStampMs }) => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimeStampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimeStampMs]);

  function updateRemainingTime(countdown: number) {
    setRemainingTime(getRemainingTimeUntilMsTimeStamp(countdown));
  }

  return (
    <>
      <div className="flex justify-center gap-3 min-[380px]:gap-6 select-none">
        <div className="flex flex-col justify-center items-center bg-[#ffffffea] hover:bg-[#ffffffce] delay-0 duration-150 ease-in-out transition-colors w-[70px] h-12 min-[380px]:w-20 min-[380px]:h-20 sm:w-28 sm:h-32 rounded-lg">
          <span className="text-min-[380px]:text-3xl sm:text-5xl font-medium">{remainingTime.days}</span>
          <span className="text-xs min-[380px]:text-sm sm:text-xl">Days</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffffea] hover:bg-[#ffffffce] delay-0 duration-150 ease-in-out transition-colors w-[70px] h-12 min-[380px]:w-20 min-[380px]:h-20 sm:w-28 sm:h-32 rounded-lg">
          <span className="text-min-[380px]:text-3xl sm:text-5xl font-medium">{remainingTime.hours}</span>
          <span className="text-xs min-[380px]:text-sm sm:text-xl">Hours</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffffea] hover:bg-[#ffffffce] delay-0 duration-150 ease-in-out transition-colors w-[70px] h-12 min-[380px]:w-20 min-[380px]:h-20 sm:w-28 sm:h-32 rounded-lg">
          <span className="text-min-[380px]:text-3xl sm:text-5xl font-medium">{remainingTime.minutes}</span>
          <span className="text-xs min-[380px]:text-sm sm:text-xl">Minutes</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffffea] hover:bg-[#ffffffce] delay-0 duration-150 ease-in-out transition-colors w-[70px] h-12 min-[380px]:w-20 min-[380px]:h-20 sm:w-28 sm:h-32 rounded-lg">
          <span className="text-min-[380px]:text-3xl sm:text-5xl font-medium text-primary">{remainingTime.seconds}</span>
          <span className="text-xs min-[380px]:text-sm sm:text-xl">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
