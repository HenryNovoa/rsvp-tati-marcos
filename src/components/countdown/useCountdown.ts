import { useState, useEffect, useRef } from 'react';
import { getTimeLeft } from '../../utils/date';

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const timerRef = useRef<number>();

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(getTimeLeft(targetDate));
    };

    // Clear any existing interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set up new interval
    timerRef.current = window.setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [targetDate]);

  return { timeLeft };
}