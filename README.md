<h1 align="center">Remaining time countdown app</h1>

### Live link

https://remaining-time-countdown.vercel.app/

### Interface

```ts
export interface ITimeProps {
  targetDate: Date;
}
```

### Countdown Component

```tsx
import { ITimeProps } from "@/Interface";
import React, { useEffect, useState } from "react";

const Countdown: React.FC<ITimeProps> = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Calculation for find out remaining days, hours, minutes and seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">{days}</span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">{hours}</span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">{minutes}</span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">{seconds}</span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
```

### Counter Main Component

```tsx
"use client";

import Countdown from "@/components/Countdown";

const CounterComponent = () => {
  const targetDate = new Date("2024-12-12");
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-green-500 py-12 px-8 md:py-20 md:px-16 w-fit lg:w-full max-w-6xl mx-auto rounded-[32px] flex justify-center items-center ">
        <Countdown targetDate={targetDate} />
      </div>
    </main>
  );
};

export default CounterComponent;
```
