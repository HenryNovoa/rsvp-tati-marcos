import React from 'react';

interface DecorativeLeavesProps {
  position?: 'bottom' | 'top';
}

export function DecorativeLeaves({ position = 'bottom' }: DecorativeLeavesProps) {
  const positionClasses = position === 'bottom' 
    ? 'bottom-0 left-0' 
    : 'top-0 left-0 right-0';

  return (
    <div className={`absolute ${positionClasses} pointer-events-none`}>
      <svg
        className="w-32 h-32 transform scale-150 origin-bottom-left animate-grow-and-sway"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,90 Q30,60 50,80 T90,60"
          stroke="#728C69"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="90" cy="60" r="4" fill="#9CAF94" className="animate-pop-stagger" />
        <circle cx="70" cy="70" r="3" fill="#9CAF94" className="animate-pop-stagger" style={{ animationDelay: '0.15s' }} />
        <circle cx="50" cy="80" r="4" fill="#9CAF94" className="animate-pop-stagger" style={{ animationDelay: '0.3s' }} />
      </svg>
    </div>
  );
}