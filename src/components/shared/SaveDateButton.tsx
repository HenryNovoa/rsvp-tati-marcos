import { Calendar } from "lucide-react";
import { createCalendarUrl } from "../../utils/calendar";
import { ActionButton } from "./ActionButton";

export function SaveDateButton() {
  const handleSaveDate = () => {
    const eventDetails = {
      title: "Boda de Tati & Marcos",
      startDate: new Date("2025-10-19T14:30:00"),
      endDate: new Date("2025-10-19T23:59:00"),
      description: "Acompáñanos en nuestra boda",
      location: "Pl. de les Glòries Catalanes, 3, Sant Fost de Campestelles",
    };

    window.open(createCalendarUrl(eventDetails), "_blank");
  };

  return (
    <ActionButton
      icon={Calendar}
      label="SAVE THE DATE"
      onClick={handleSaveDate}
    />
  );
}
