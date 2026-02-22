"use client";

import { useIcon } from "@/hooks/use-icon";
import Image from "next/image";

export const Hero = () => {
  const icon = useIcon();

  return (
    <div className="flex flex-col gap-10 items-center py-50 px-30">
      <Image src={icon} alt="US Meeting Icon" className="size-60" />
      <div className="flex flex-col gap-5 items-center">
        <h1 className="font-extrabold text-6xl">U.S. Meeting Oron</h1>
        <p className="text-2xl text-muted-foreground">
          La plus grande célébration de la culture automobile américaine en
          Suisse
        </p>
      </div>
    </div>
  );
};
