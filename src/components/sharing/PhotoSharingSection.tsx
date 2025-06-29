import { Camera } from "lucide-react";
import { Section } from "../shared/Section";
import { SharingOptions } from "./SharingOptions";

export function PhotoSharingSection() {
  return (
    <Section title="Compartimos este día junto a ti" className="bg-white/50">
      <div className="max-w-md mx-auto text-center">
        <Camera className="w-8 h-8 text-[#4A5D4B] mx-auto mb-4" />
        <p className="text-[#2D3436] mb-8 font-belista italic">
          Comparte tus fotos y videos de este hermoso día
        </p>
        <SharingOptions />
      </div>
    </Section>
  );
}
