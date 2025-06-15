import React from 'react';

export function GiftOptions() {
  return (
    <div className="space-y-6">
      <p className="text-[#4A4A4A] leading-relaxed text-center">
        Para quienes deseen hacer un regalo en efectivo, contaremos con sobres disponibles para depositar en el cofre. También pueden contribuir mediante:
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-[#F8F6F6] rounded-lg">
          <h3 className="text-sm font-semibold text-[#2D3436] mb-1">
            Depósito bancario:
          </h3>
          <p className="text-sm text-[#666666] font-mono">
            XXXX XXXX XXXX XXXX
          </p>
        </div>

        <div className="p-4 bg-[#F8F6F6] rounded-lg">
          <h3 className="text-sm font-semibold text-[#2D3436] mb-1">
            PayPal:
          </h3>
          <p className="text-sm text-[#666666]">
            correopaypal@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}