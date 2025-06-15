import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#F8F6F6] flex items-center justify-center z-50">
      <div className={`transform transition-all duration-2000 ${animate ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <Heart className="w-16 h-16 text-[#4A5D4B] animate-pulse" />
      </div>
    </div>
  );
}