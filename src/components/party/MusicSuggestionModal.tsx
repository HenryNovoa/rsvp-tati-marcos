import React from 'react';
import { Modal } from '../shared/Modal';
import { MusicSuggestionForm } from './MusicSuggestionForm';

interface MusicSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MusicSuggestionModal({ isOpen, onClose }: MusicSuggestionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-playfair text-[#4A5D4B] mb-4">
          Sugerir Canción
        </h2>
        <p className="text-[#666666] mb-6">
          Ayúdanos a crear la playlist perfecta para nuestra celebración
        </p>
        <MusicSuggestionForm onSubmit={onClose} />
      </div>
    </Modal>
  );
}