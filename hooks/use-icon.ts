"use client";

import { type StaticImageData } from "next/image";
import logoDark from "@/app/images/logo-dark.png";
import logoLight from "@/app/images/logo-light.png";
import { useTheme } from "@/hooks/use-theme";
import { useMemo } from "react";

interface UseIconProps {
  dynamic: StaticImageData;
  light: StaticImageData;
  dark: StaticImageData;
}

export const useIcon = (): UseIconProps => {
  const { dark } = useTheme();

  const dynamic = useMemo(() => (dark ? logoDark : logoLight), [dark]);

  return {
    dynamic,
    light: logoLight,
    dark: logoDark,
  };
};
