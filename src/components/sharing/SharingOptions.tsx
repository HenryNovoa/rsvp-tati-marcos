import React from 'react';
import { Upload, ExternalLink } from 'lucide-react';
import { QRCodeDisplay } from './QRCodeDisplay';

const GOOGLE_PHOTOS_LINK = 'https://photos.app.goo.gl/XGteyLqf4e4AAuSg7';

export function SharingOptions() {
  const handleOpenPhotos = () => {
    window.open(GOOGLE_PHOTOS_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="w-48 h-48 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
          <QRCodeDisplay url={GOOGLE_PHOTOS_LINK} />
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <button 
          onClick={handleOpenPhotos}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4A5D4B] text-white rounded-full hover:bg-[#8FA98F] transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>VER ÁLBUM</span>
        </button>
      </div>
    </div>
  );
}