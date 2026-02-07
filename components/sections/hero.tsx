"use client";

import { useIcon } from "@/hooks/use-icon";
import Image from "next/image";

export const Hero = () => {
  const icon = useIcon();

  return <Image src={icon} alt="US Meeting" height={100} width={100} />;
};
