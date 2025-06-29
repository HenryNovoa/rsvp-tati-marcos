import { useState } from "react";
import { Header } from "./components/Header";
import { SplashScreen } from "./components/SplashScreen";
import { CelebrationSection } from "./components/celebration/CelebrationSection";
import { CountdownDisplay } from "./components/countdown/CountdownDisplay";
import { PhotoGallery } from "./components/gallery/PhotoGallery";
import { DressCodeSection } from "./components/party/DressCodeSection";
import { MusicSection } from "./components/party/MusicSection";
import { RSVPSection } from "./components/rsvp/RSVPSection";
import { PhotoSharingSection } from "./components/sharing/PhotoSharingSection";
import { TipsSection } from "./components/tips/TipsSection";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <main className="min-h-screen w-full bg-[#F8F6F6] overflow-x-hidden">
        <div className="max-w-4xl w-full mx-auto">
          <Header />
          <div className="my-16">
            <CountdownDisplay />
          </div>
          <CelebrationSection />
          <PhotoGallery />
          <MusicSection />
          <DressCodeSection />
          <TipsSection />
          <PhotoSharingSection />
          <RSVPSection />
        </div>
      </main>
    </>
  );
}
