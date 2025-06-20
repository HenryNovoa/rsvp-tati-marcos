import React from 'react';

export function DecorativeWave() {
  return (
    <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
      <svg
        className="absolute w-full h-full transform translate-y-[-50%] animate-gentle-float"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#9CAF94"
          fillOpacity="0.3"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}