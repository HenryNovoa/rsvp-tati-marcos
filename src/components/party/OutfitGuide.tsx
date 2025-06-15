import React from 'react';

export function OutfitGuide() {
  return (
    <div className="space-y-8">
      <h3 className="text-sm font-medium text-[#666666] text-center">
        Outfit Ideas
      </h3>

      <div className="grid grid-cols-2 gap-6">
        {/* For Her */}
        <div className="space-y-6">
          <h4 className="text-[#4A5D4B] font-medium">Para ellas</h4>
          <div className="space-y-4">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
                alt="Elegant dress example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80"
                alt="Cocktail dress example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <ul className="text-sm text-[#666666] space-y-2">
            <li>• Evitar blanco y sus variaciones</li>
            <li>• Colores suaves o pasteles</li>
          </ul>
        </div>

        {/* For Him */}
        <div className="space-y-6">
          <h4 className="text-[#4A5D4B] font-medium">Para ellos</h4>
          <div className="space-y-4">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
                alt="Formal suit example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                alt="Business formal example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <ul className="text-sm text-[#666666] space-y-2">
            <li>• Traje formal oscuro</li>
            <li>• Camisa clara</li>
          </ul>
        </div>
      </div>
    </div>
  );
}