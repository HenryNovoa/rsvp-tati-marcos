import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { Section } from "../shared/Section";
import { TipsModal } from "./TipsModal";

export function TipsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-12 h-12 rounded-full shadow-sm flex items-center justify-center mx-auto bg-white">
        <ClipboardCheck className="w-8 h-8 text-[#2D3436] animate-gentle-pulse" />
      </div>
      <Section title="Tips y notas" className="bg-[#F8F6F6]">
        <div className="max-w-md mx-auto text-center font-belista italic">
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#666666] mb-6 mt-6">
              Información adicional a tener en cuenta
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm"
            >
              + INFO
            </button>
          </div>
        </div>

        <TipsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          noPadding={true}
        />
      </Section>
    </>
  );
}
