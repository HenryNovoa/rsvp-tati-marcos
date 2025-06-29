import { useState } from "react";
import { Section } from "../shared/Section";
import { ConfirmationModal } from "./ConfirmationModal";

export function RSVPSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section title="Confirmación" className="bg-white/50">
      <div className="max-w-md mx-auto text-center font-belista italic">
        <p className="text-center text-lg text-[#2D3436] mb-8">
          ¿Nos acompañas en este día tan especial?
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#8FA98F] transition-colors"
        >
          CONFIRMAR ASISTENCIA
        </button>
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          noPadding={false}
        />
      </div>
    </Section>
  );
}
