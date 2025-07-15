import { Camera } from "lucide-react";
import { Section } from "../shared/Section";
import { SharingOptions } from "./SharingOptions";

export function PhotoSharingSection() {
  return (
    <>
      <div className="bg-white/50 pt-4">
        <Camera className="w-8 h-8 text-[#4A5D4B] mx-auto mt-4" />
      </div>
      <Section title="Recordemos este día juntos" className="bg-white/50">
        <div className="max-w-md mx-auto text-center">
          <p className="text-base text-[#2D3436] mb-8 italic">
            Aquí puedes compartir tus fotos y videos
          </p>
          <SharingOptions />
        </div>
      </Section>
    </>
  );
}
