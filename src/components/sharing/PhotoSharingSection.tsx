import { Camera } from "lucide-react";
import { Section } from "../shared/Section";
import { SharingOptions } from "./SharingOptions";

export function PhotoSharingSection() {
  return (
    <>
      <div className="bg-white/50 pt-4">
        <Camera className="w-8 h-8 text-[#4A5D4B] mx-auto mt-4" />
      </div>
      <Section title="Compartimos este día junto a ti" className="bg-white/50">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#2D3436] mb-8 font-belista italic">
            Aquí puedes compartir tus fotos y videos
          </p>
          <SharingOptions />
        </div>
      </Section>
    </>
  );
}
