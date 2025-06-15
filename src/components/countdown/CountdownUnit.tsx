import React from 'react';

interface CountdownUnitProps {
  value: number;
  label: string;
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-[#8FA98F]/20 flex items-center justify-center transform transition-all duration-300">
        <span className="text-xl md:text-2xl font-serif text-[#4A5D4B]">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm text-[#4A5D4B]/80">{label}</span>
    </div>
  );
}