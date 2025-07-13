import { Music } from "lucide-react";
import { useState } from "react";
import { Section } from "../shared/Section";
import { MusicSuggestionModal } from "./MusicSuggestionModal";

export function MusicSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-texture pt-4">
        <div className="w-12 h-12 rounded-full shadow-sm flex items-center justify-center mx-auto bg-white">
          <Music className="w-6 h-6 text-[#4A5D4B] animate-bounce-subtle" />
        </div>
      </div>
      <Section title="Fiesta" className="bg-texture">
        <div className="max-w-md mx-auto text-center font-belista italic">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#2D3436]">Música</h3>
            <p className="text-[#666666] max-w-[260px] mx-auto">
              ¿Cuál es la canción que no debe faltar en la playlist de la
              fiesta?
            </p>
            <p className="text-[#666666] max-w-[260px] mx-auto">
              Es orientativo ¡Queremos saber vuestros gustos!
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm"
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
