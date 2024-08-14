import React from "react";
import HeaderComponent from '@/components/HeaderComponent';
import TitleSubtitleComponent from '@/components/TitleSubtitleComponent';
import WalletUIComponent from '@/components/WalletUIComponent';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-0 px-4 md:px-0"> {/* Cambié mt-32 a pt-20 para padding-top */}
      <HeaderComponent />
      <TitleSubtitleComponent />
      <WalletUIComponent />
    </div>
  );
}
