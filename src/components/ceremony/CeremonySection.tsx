import React from 'react';
import { EventSection } from '../shared/EventSection';
import { EventDetails } from '../shared/EventDetails';
import { SaveDateButton } from '../shared/SaveDateButton';
import { DirectionsButton } from '../shared/DirectionsButton';

export function CeremonySection() {
  return (
    <EventSection title="Ceremonia" type="ceremony">
      <div className="space-y-8">
        <EventDetails
          label="DÍA"
          text="Domingo 19 de Octubre - 2:30 pm"
        />
        
        <EventDetails
          label="LUGAR"
          text="El Celler de Can Torrens"
          subtext="Pl. de les Glòries Catalanes, 3"
        />

        <div className="flex flex-col gap-4">
          <SaveDateButton />
          <DirectionsButton 
            location="El Celler de Can Torrens"
          />
        </div>
      </div>
    </EventSection>
  );
}