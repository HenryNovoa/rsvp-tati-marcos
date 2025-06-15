import React from 'react';
import { ClipboardCheck, X } from 'lucide-react';
import { Modal } from '../shared/Modal';
import { TipsList } from './TipsList';

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TipsModal({ isOpen, onClose }: TipsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto">
            <ClipboardCheck className="w-10 h-10 text-[#2D3436]" />
          </div>
          
          <h2 className="font-playfair text-2xl text-[#2D3436] mt-4">
            Tips y Notas
          </h2>
        </div>

        <TipsList />
      </div>
    </Modal>
  );
}