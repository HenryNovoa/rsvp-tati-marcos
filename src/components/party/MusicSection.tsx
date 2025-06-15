import React, { useState } from 'react';
import { Music } from 'lucide-react';
import { Section } from '../shared/Section';
import { MusicSuggestionModal } from './MusicSuggestionModal';

export function MusicSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section title="Fiesta" className="bg-texture">
      <div className="max-w-md mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
          <Music className="w-6 h-6 text-[#4A5D4B] animate-bounce-subtle" />
        </div>
        
        <p className="text-[#4A4A4A] mb-8 max-w-[280px] mx-auto">
          Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
        </p>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-[#2D3436]">Música</h3>
          <p className="text-[#666666] max-w-[260px] mx-auto">
            ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm"
          >
            SUGERIR CANCIÓN
          </button>
        </div>

        <MusicSuggestionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </Section>
  );
}