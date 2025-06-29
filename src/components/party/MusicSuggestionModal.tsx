import { TextModal } from "../shared/TextModal";
import { MusicSuggestionForm } from "./MusicSuggestionForm";

interface MusicSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  noPadding: boolean;
}

export function MusicSuggestionModal({
  isOpen,
  onClose,
  noPadding,
}: MusicSuggestionModalProps) {
  return (
    <TextModal isOpen={isOpen} onClose={onClose} noPadding={noPadding}>
      <div className="text-center">
        <h2 className="text-2xl font-playfair text-[#4A5D4B] mb-4">
          Sugerir Canción
        </h2>
        <p className="text-[#666666] mb-6">
          Ayúdanos a crear la playlist perfecta para nuestra celebración
        </p>
        <MusicSuggestionForm onSubmit={onClose} />
      </div>
    </TextModal>
  );
}
