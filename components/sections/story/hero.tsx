"use client";

import { motion } from "motion/react";

export const StoryHero = () => {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center text-center px-8 py-32 bg-accent/50 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-5"
      >
        <span className="text-lg font-medium text-muted-foreground">
          Depuis 2022
        </span>
        <h1 className="text-4xl lg:text-7xl font-bold relative inline-block">
          Notre histoire
          <svg
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 5 Q 25 2, 50 5 T 100 5"
              stroke="url(#story-hero-gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            />
            <defs>
              <linearGradient
                id="story-hero-gradient"
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
        <p className="text-muted-foreground max-w-xl leading-relaxed mt-4 text-lg">
          De l&apos;idée d&apos;une poignée de passionnés à un événement qui
          rassemble des milliers de visiteurs chaque année.
        </p>
      </motion.div>
    </section>
  );
};
