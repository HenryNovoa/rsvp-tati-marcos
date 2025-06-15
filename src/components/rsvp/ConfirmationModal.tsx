import React from 'react';
import { Modal } from '../shared/Modal';
import { RSVPForm } from './RSVPForm';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-serif text-[#4A5D4B] mb-4">¿Asistes a la celebración?</h2>
        <RSVPForm onSubmit={onClose} />
      </div>
    </Modal>
  );
}