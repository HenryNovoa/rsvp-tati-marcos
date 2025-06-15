import React from 'react';

export function DressCodeGuide() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-[#4A5D4B]">Para ellas</h4>
        <ul className="text-[#2D3436] space-y-2">
          <li>• Vestido largo o midi</li>
          <li>• Colores suaves o pasteles</li>
          <li>• Evitar blanco y sus variaciones</li>
          <li>• Tacones o zapatos elegantes</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-[#4A5D4B]">Para ellos</h4>
        <ul className="text-[#2D3436] space-y-2">
          <li>• Traje formal</li>
          <li>• Colores oscuros</li>
          <li>• Camisa clara</li>
          <li>• Zapatos de vestir</li>
        </ul>
      </div>
    </div>
  );
}