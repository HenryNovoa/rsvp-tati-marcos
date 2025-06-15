import React from 'react';

export function BotanicalFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top left foliage */}
      <img
        src="https://images.unsplash.com/photo-1550236520-7050f3582da0?auto=format&fit=crop&w=300&q=80"
        alt=""
        className="absolute -top-4 -left-4 w-32 h-32 object-cover opacity-50 transform -rotate-45"
      />
      {/* Bottom right foliage */}
      <img
        src="https://images.unsplash.com/photo-1550236520-7050f3582da0?auto=format&fit=crop&w=300&q=80"
        alt=""
        className="absolute -bottom-4 -right-4 w-32 h-32 object-cover opacity-50 transform rotate-135"
      />
      {/* Decorative frame */}
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform rotate-3" />
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform -rotate-3" />
    </div>
  );
}