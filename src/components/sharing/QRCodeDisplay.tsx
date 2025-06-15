import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeDisplayProps {
  url: string;
  size?: number;
}

export function QRCodeDisplay({ url, size = 256 }: QRCodeDisplayProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size,
      margin: 1,
      color: {
        dark: '#4A5D4B',
        light: '#FFFFFF',
      },
    })
      .then(setQrDataUrl)
      .catch(console.error);
  }, [url, size]);

  if (!qrDataUrl) {
    return <div className="w-32 h-32 animate-pulse bg-gray-200 rounded-lg" />;
  }

  return (
    <img
      src={qrDataUrl}
      alt="QR Code"
      className="w-full h-full object-contain"
    />
  );
}