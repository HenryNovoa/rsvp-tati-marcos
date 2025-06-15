import React from 'react';
import { Calendar } from 'lucide-react';
import { ActionButton } from './ActionButton';
import { createCalendarUrl } from '../../utils/calendar';

export function SaveDateButton() {
  const handleSaveDate = () => {
    const eventDetails = {
      title: 'Boda de Tati & Marcos',
      startDate: new Date('2024-05-15T14:30:00'),
      endDate: new Date('2024-05-15T23:59:00'),
      description: 'Acompáñanos en nuestra boda',
      location: 'Parroquia Nuestra Señora, Av. San Isidro 207, San José',
    };

    window.open(createCalendarUrl(eventDetails), '_blank');
  };

  return (
    <ActionButton
      icon={Calendar}
      label="SAVE THE DATE"
      onClick={handleSaveDate}
    />
  );
}