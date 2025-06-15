import React from 'react';
import { MapPin } from 'lucide-react';
import { ActionButton } from './ActionButton';
import { createMapsUrl } from '../../utils/maps';

interface DirectionsButtonProps {
  location: string;
  coordinates?: { lat: number; lng: number };
}

export function DirectionsButton({ location, coordinates }: DirectionsButtonProps) {
  const handleGetDirections = () => {
    window.open(createMapsUrl(location, coordinates), '_blank');
  };

  return (
    <ActionButton
      icon={MapPin}
      label="CÓMO LLEGAR"
      onClick={handleGetDirections}
    />
  );
}