import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { GiftsModal } from './GiftsModal';
import { DecorativeWave } from './decorative/DecorativeWave';
import { DecorativeLeaves } from './decorative/DecorativeLeaves';

export function GiftsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[400px] bg-[#F8F6F6] py-10 px-6 overflow-hidden">
      <DecorativeWave />
      <DecorativeLeaves />
      
      <div className="relative z-10 max-w-md mx-auto">
        <h2 className="font-playfair text-3xl font-semibold text-[#2D3436] text-center mb-6 animate-fade-in-up">
          Regalos
        </h2>

        <div className="text-center mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-[#4A4A4A] leading-relaxed">
            Nos llenará de alegria contar con su presencia en nuestra celebración, porque para nosotros su compañía es lo más importante.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            Si está a su disposición brindar una muestra de cariño, estaremos muy agradecidos.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Gift 
            className="w-12 h-12 text-[#4A5D4B] animate-bounce-in"
            style={{ animationDelay: '0.6s' }}
          />
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="block mx-auto px-8 py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm"
        >
          VER MÁS
        </button>
      </div>

      <GiftsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}