import { DirectionsButton } from "../shared/DirectionsButton";
import { EventDetails } from "../shared/EventDetails";
import { EventSection } from "../shared/EventSection";
import { SaveDateButton } from "../shared/SaveDateButton";

export function CelebrationSection() {
  return (
    <EventSection title="Ceremonia & Celebración" type="celebration">
      <div className="space-y-8">
        <EventDetails label="DÍA" text="Domingo 19 de Octubre - 12:30 pm" />

        <EventDetails
          label="LUGAR"
          text="El Celler de Can Torres"
          subtext="Pl. de les Glòries Catalanes, 3, Sant Fost de Campestelles"
        />

        <div className="flex flex-col gap-4">
          <SaveDateButton />
          <DirectionsButton location="El Celler de Can Torrens" />
        </div>
      </div>
    </EventSection>
  );
}
