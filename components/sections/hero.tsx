"use client";

import { useIcon } from "@/hooks/use-icon";
import Image from "next/image";

export const Hero = () => {
  const { dark } = useIcon();

  return (
    <div className="relative flex flex-col gap-10 items-center justify-center h-[90dvh] px-10 md:px-30 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://firebasestorage.googleapis.com/v0/b/us-meeting-deck.firebasestorage.app/o/videos%2Fhero.mp4?alt=media&token=34ec14f2-dab9-4f02-9e73-52770a8286fd"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col gap-10 items-center text-center">
        <Image src={dark} alt="US Meeting Icon" className="size-60" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-extrabold text-3xl md:text-6xl text-white">
            U.S. Meeting Oron
          </h1>
          <p className="text-xl md:text-2xl text-white/70">
            La plus grande célébration de la culture automobile américaine en
            Suisse
          </p>
        </div>
      </div>
    </div>
  );
};
