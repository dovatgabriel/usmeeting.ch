"use client";

import affiche from "@/app/images/affiche-26.jpg";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { Download } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export const Affiche = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-32 px-8 flex flex-col items-center bg-accent/50 transition-colors duration-300"
      id="affiche"
    >
      <div className="w-full max-w-5xl flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-medium text-muted-foreground">
            5ᵉ anniversaire
          </span>
          <h2
            className="text-3xl lg:text-5xl font-bold relative inline-block"
            ref={ref}
          >
            L&apos;affiche 2026
            <svg
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 5 Q 25 2, 50 5 T 100 5"
                stroke="url(#affiche-underline-gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isInView ? 1 : 0,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="affiche-underline-gradient"
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
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src={affiche}
            alt="Affiche U.S. Meeting Oron 2026"
            className="w-full max-w-xs sm:max-w-sm rounded-2xl border shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          />
          <Button variant="link" size="lg" className="text-lg" asChild>
            <a href={affiche.src} download="affiche-us-meeting-2026.jpg">
              Télécharger l&apos;affiche <Download size={20} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
