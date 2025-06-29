import { TextModal } from "../shared/TextModal";
import { RSVPForm } from "./RSVPForm";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  noPadding: boolean;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  noPadding,
}: ConfirmationModalProps) {
  return (
    <TextModal isOpen={isOpen} onClose={onClose} noPadding={noPadding}>
      <div className="text-center">
        <h2 className="text-3xl font-belista italic text-[#4A5D4B] mb-4">
          ¿Asistes a la celebración?
        </h2>
        <RSVPForm onSubmit={onClose} />
      </div>
    </TextModal>
  );
}
