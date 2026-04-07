"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains("dark");

const getServerSnapshot = () => false;

export const useTheme = () => {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { dark, theme: dark ? "dark" : "light" } as const;
};
