import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationDetailsProps {
  venue: string;
  address: string;
}

export function LocationDetails({ venue, address }: LocationDetailsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-xl font-serif text-[#4A5D4B]">{venue}</h3>
      <div className="flex items-center gap-2 text-[#2D3436]">
        <MapPin className="w-5 h-5" />
        <span>{address}</span>
      </div>
    </div>
  );
}