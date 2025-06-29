import { useState } from "react";
import { Spinner } from "../shared/Spinner";
import { TextModal } from "../shared/TextModal";

interface DressCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  noPadding: boolean;
}

export function DressCodeModal({
  isOpen,
  onClose,
  noPadding,
}: DressCodeModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TextModal isOpen={isOpen} onClose={onClose} noPadding={noPadding}>
      {isLoading && (
        <div className="max-w-full max-h-[80vh]">
          <Spinner />
        </div>
      )}
      <img
        src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/dress-code.png"
        alt="Dress Code"
        className="max-w-full max-h-[80vh]"
        onLoad={() => setIsLoading(false)}
        style={isLoading ? { visibility: "hidden" } : {}}
      />
    </TextModal>
  );
}
