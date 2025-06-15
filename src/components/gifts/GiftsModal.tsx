import React from 'react';
import { Gift, X } from 'lucide-react';
import { Modal } from '../shared/Modal';
import { GiftOptions } from './GiftOptions';
import { DecorativeLeaves } from './decorative/DecorativeLeaves';

interface GiftsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftsModal({ isOpen, onClose }: GiftsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <div className="relative">
          <DecorativeLeaves position="top" />
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto">
              <Gift className="w-10 h-10 text-[#2D3436]" />
            </div>
            
            <h2 className="font-playfair text-2xl text-[#2D3436] mt-4 mb-6">
              Regalos
            </h2>
          </div>

          <GiftOptions />
        </div>
      </div>
    </Modal>
  );
}