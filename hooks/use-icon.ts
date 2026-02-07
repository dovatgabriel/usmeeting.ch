"use client";

import { type StaticImageData } from "next/image";
import logoDark from "@/app/images/logo-dark.png";
import logoLight from "@/app/images/logo-light.png";
import { useTheme } from "@/hooks/use-theme";

export const useIcon = (): StaticImageData => {
  const { dark } = useTheme();
  return dark ? logoDark : logoLight;
};
