import React from 'react';
import { Shirt, X } from 'lucide-react';
import { Modal } from '../shared/Modal';
import { OutfitGuide } from './OutfitGuide';

interface DressCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DressCodeModal({ isOpen, onClose }: DressCodeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto">
            <Shirt className="w-10 h-10 text-[#2D3436]" />
          </div>
          
          <h2 className="font-playfair text-2xl text-[#2D3436] mt-4 mb-2">
            Dress Code
          </h2>
          
          <p className="text-base text-[#4A4A4A] font-medium">
            Vestimenta Formal
          </p>
        </div>

        <OutfitGuide />
      </div>
    </Modal>
  );
}