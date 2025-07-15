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
        <div className="max-w-md mx-auto text-center italic">
          <div className="flex flex-col items-center">
            <p className="text-base text-[#2D3436] mb-6 mt-6">
              Una orientación para tu vestuario
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center text-center gap-2 px-8 py-3 bg-[#4A5D4B] text-white rounded-full hover:bg-[#8FA98F] transition-colors"
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
