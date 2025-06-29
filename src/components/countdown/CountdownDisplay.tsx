import { WEDDING_DATE } from "../../utils/date";
import { BotanicalFrame } from "./BotanicalFrame";
import { CountdownUnit } from "./CountdownUnit";
import { useCountdown } from "./useCountdown";

export function CountdownDisplay() {
  const { timeLeft } = useCountdown(WEDDING_DATE);

  return (
    <div className="relative max-w-2xl mx-auto p-4 md:p-8">
      <BotanicalFrame />
      <div className="relative z-10">
        <h3 className="text-center font-serif text-2xl text-[#4A5D4B] mb-6 md:mb-8">
          {"     "}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          <CountdownUnit value={timeLeft.days} label="días" />
          <CountdownUnit value={timeLeft.hours} label="hs" />
          <CountdownUnit value={timeLeft.minutes} label="min" />
          <CountdownUnit value={timeLeft.seconds} label="seg" />
        </div>
      </div>
    </div>
  );
}
