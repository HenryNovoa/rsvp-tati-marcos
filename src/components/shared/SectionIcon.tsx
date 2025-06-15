import React from 'react';
import { Heart, PartyPopper, Flower2 } from 'lucide-react';

type IconType = 'ceremony' | 'celebration';

interface SectionIconProps {
  type: IconType;
}

export function SectionIcon({ type }: SectionIconProps) {
  const Icon = type === 'ceremony' ? Flower2 : PartyPopper;
  
  return (
    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center relative">
      {type === 'ceremony' && (
        <Heart className="w-3 h-3 text-[#4A5D4B] absolute top-2 right-2" />
      )}
      <Icon className="w-6 h-6 text-[#4A5D4B] animate-bounce-subtle" />
    </div>
  );
}