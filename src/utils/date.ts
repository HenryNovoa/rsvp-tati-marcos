import { format, differenceInMilliseconds } from 'date-fns';

export const WEDDING_DATE = new Date('2025-10-19T14:30:00');

export function getTimeLeft(targetDate: Date) {
  const difference = differenceInMilliseconds(targetDate, new Date());
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}