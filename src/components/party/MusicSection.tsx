import { Music } from "lucide-react";
import { useState } from "react";
import { Section } from "../shared/Section";
import { MusicSuggestionModal } from "./MusicSuggestionModal";

export function MusicSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-texture py-4 ">
        <div className="w-12 h-12 rounded-full shadow-sm flex items-center justify-center mx-auto bg-white">
          <Music className="w-6 h-6 text-[#4A5D4B] animate-bounce-subtle" />
        </div>
      </div>
      <Section title="Fiesta" className="bg-texture">
        <div className="max-w-md mx-auto text-center italic">
          <div className="space-y-6">
            <p className="text-[#666666] max-w-[260px] mx-auto">
              ¿Cuál es la canción que no debe faltar en la playlist de la
              fiesta?
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center text-center gap-2 px-8 py-3 bg-[#4A5D4B] text-white rounded-full hover:bg-[#8FA98F] transition-colors"
            >
              SUGERIR CANCIÓN
            </button>
          </div>

          <MusicSuggestionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            noPadding={false}
          />
        </div>
      </Section>
    </>
  );
}
