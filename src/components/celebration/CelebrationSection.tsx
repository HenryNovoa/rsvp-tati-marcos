import { PartyPopper } from "lucide-react";
import { DirectionsButton } from "../shared/DirectionsButton";
import { EventDetails } from "../shared/EventDetails";
import { SaveDateButton } from "../shared/SaveDateButton";
import { Section } from "../shared/Section";

export function CelebrationSection() {
  return (
    <Section title="Ceremonia & Celebración">
      <div className="space-y-8">
        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
          <PartyPopper className="w-6 h-6 text-[#4A5D4B] animate-bounce-subtle" />
        </div>
        <EventDetails label="DÍA" text="Domingo 19 de Octubre - 12:30 pm" />
        <EventDetails
          label="LUGAR"
          text="El Celler de Can Torrens"
          subtext="Pl. de les Glòries Catalanes, 3, Sant Fost de Campestelles"
        />

        <div className="flex flex-col gap-4">
          <SaveDateButton />
          <DirectionsButton location="El Celler de Can Torrens" />
        </div>
      </div>
    </Section>
  );
}
