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
