import { formatISO } from 'date-fns';

interface EventDetails {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

export function createCalendarUrl(event: EventDetails): string {
  const encodedDetails = {
    title: encodeURIComponent(event.title),
    dates: `${formatISO(event.startDate)}/${formatISO(event.endDate)}`,
    details: encodeURIComponent(event.description),
    location: encodeURIComponent(event.location),
  };

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedDetails.title}&dates=${encodedDetails.dates}&details=${encodedDetails.details}&location=${encodedDetails.location}`;

  // For iOS, we use the webcal protocol
  const iosUrl = `webcal://calendar.google.com/calendar/ical/${encodedDetails.title}/basic.ics`;

  // Detect platform and return appropriate URL
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  return isIOS ? iosUrl : googleUrl;
}