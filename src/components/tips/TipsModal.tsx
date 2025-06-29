import { useState } from "react";
import { Spinner } from "../shared/Spinner";
import { TextModal } from "../shared/TextModal";

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  noPadding: boolean;
}

export function TipsModal({ isOpen, onClose, noPadding }: TipsModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <TextModal isOpen={isOpen} onClose={onClose} noPadding={noPadding}>
      <>
        {isLoading && (
          <div className="max-w-full max-h-[80vh]">
            <Spinner />
          </div>
        )}
        <img
          src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tips.svg"
          alt="tips"
          onLoad={() => setIsLoading(false)}
          className="max-w-full max-h-[80vh]"
          style={isLoading ? { visibility: "hidden" } : {}}
        />
      </>
    </TextModal>
  );
}
