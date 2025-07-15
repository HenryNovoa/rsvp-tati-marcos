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
        <div className="max-w-md mx-auto text-center italic">
          <div className="flex flex-col items-center">
            <p className="text-base text-[#2D3436] mb-6 mt-6">
              Información adicional a tener en cuenta
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center text-center gap-2 px-8 py-3 bg-[#4A5D4B] text-white rounded-full hover:bg-[#8FA98F] transition-colors"
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
