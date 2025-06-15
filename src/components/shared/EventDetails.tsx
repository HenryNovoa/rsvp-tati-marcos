import React from 'react';

interface EventDetailsProps {
  label: string;
  text: string;
  subtext?: string;
}

export function EventDetails({ label, text, subtext }: EventDetailsProps) {
  return (
    <div className="text-center space-y-2">
      <div className="uppercase tracking-wider text-sm font-semibold text-[#4A5D4B]">
        {label}
      </div>
      <div className="text-base text-[#2D3436]">{text}</div>
      {subtext && (
        <div className="text-sm text-gray-600">{subtext}</div>
      )}
    </div>
  );
}