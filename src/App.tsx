import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { CountdownDisplay } from './components/countdown/CountdownDisplay';
import { CeremonySection } from './components/ceremony/CeremonySection';
import { CelebrationSection } from './components/celebration/CelebrationSection';
import { PhotoGallery } from './components/gallery/PhotoGallery';
import { MusicSection } from './components/party/MusicSection';
import { DressCodeSection } from './components/party/DressCodeSection';
import { TipsSection } from './components/tips/TipsSection';
import { GiftsSection } from './components/gifts/GiftsSection';
import { PhotoSharingSection } from './components/sharing/PhotoSharingSection';
import { RSVPSection } from './components/rsvp/RSVPSection';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <main className="min-h-screen bg-[#F8F6F6]">
        <div className="max-w-4xl mx-auto">
          <Header />
          <div className="my-16">
            <CountdownDisplay />
          </div>
          <CeremonySection />
          <CelebrationSection />
          <PhotoGallery />
          <MusicSection />
          <DressCodeSection />
          <TipsSection />
          <GiftsSection />
          <PhotoSharingSection />
          <RSVPSection />
        </div>
      </main>
    </>
  );
}