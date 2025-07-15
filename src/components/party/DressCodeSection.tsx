import { Shirt } from "lucide-react";
import { useState } from "react";
import { Section } from "../shared/Section";
import { DressCodeModal } from "./DressCodeModal";

export function DressCodeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-12 h-12 rounded-full shadow-sm flex items-center justify-center mx-auto bg-white">
        <Shirt className="w-8 h-8 text-[#2D3436] animate-gentle-pulse" />
      </div>
      <Section title="Dress code" className="bg-[#F8F6F6]">
        <div className="max-w-md mx-auto text-center font-belista italic">
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#666666] mb-6 mt-6">
              Una orientación para tu vestuario
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm"
            >
              VER MÁS
            </button>
          </div>
        </div>

        <DressCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          noPadding={true}
        />
      </Section>
    </>
  );
}
