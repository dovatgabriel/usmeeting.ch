"use client";

import { motion } from "motion/react";

export function GalleryHeading() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-lg font-medium text-muted-foreground">
        Les souvenirs en images
      </span>
      <h1 className="text-3xl lg:text-5xl font-bold relative inline-block">
        Galerie photos
        <svg
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-4"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 5 Q 25 2, 50 5 T 100 5"
            stroke="url(#gallery-underline-gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="gallery-underline-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="100%" stopColor="rgb(249, 115, 22)" />
            </linearGradient>
          </defs>
        </svg>
      </h1>
    </div>
  );
}
