"use client";

import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import bcv from "@/app/images/sponsors/bcv.png";
import cardinal from "@/app/images/sponsors/cardinal.png";
import hessj from "@/app/images/sponsors/hessj.png";
import mobiliere from "@/app/images/sponsors/mobiliere.webp";
import oron from "@/app/images/sponsors/oron.png";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { SPONSORS_FOLDER_URL } from "@/app/constants";

const companies = [
  {
    name: "BCV",
    logo: <Image src={bcv} alt="Logo BCV" className="w-50 mx-20" />,
  },
  {
    name: "HessJ Sàrl",
    logo: <Image src={hessj} alt="Logo HessJ Sàrl" className="w-50 mx-20" />,
  },
  {
    name: "La Mobilière",
    logo: (
      <Image src={mobiliere} alt="Logo La Mobilière" className="w-50 mx-20" />
    ),
  },
  {
    name: "Commune d'Oron",
    logo: <Image src={oron} alt="Logo Commune d'Oron" className="w-50 mx-20" />,
  },
  {
    name: "Cardinal",
    logo: <Image src={cardinal} alt="Logo Cardinal" className="w-50 mx-20" />,
  },
];

export const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="pt-40 pb-20 bg-accent/50 flex flex-col items-center gap-3 [--marquee-bg:hsl(var(--accent)/0.5)] overflow-x-hidden">
      <div className="flex flex-col gap-5 items-center">
        <span className="text-lg lg:text-xl font-medium text-muted-foreground">
          Sponsors principaux
        </span>
        <h2
          className="text-2xl lg:text-5xl font-bold relative inline-block"
          ref={ref}
        >
          Ils nous soutiennent
          <svg
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-4"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 5 Q 25 2, 50 5 T 100 5"
              stroke="url(#underline-gradient)"
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
                id="underline-gradient"
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
      <Marquee autoFill className="mt-20">
        <MarqueeContent className="items-center">
          {companies.map((company) => (
            <MarqueeItem
              key={company.name}
              className="flex items-center justify-center"
            >
              {company.logo}
              <span className="sr-only">{company.name}</span>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <div
          className="absolute top-0 left-0 h-full w-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, var(--marquee-bg), transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to left, var(--marquee-bg), transparent)",
          }}
        />
      </Marquee>
      <Button
        variant="link"
        className="mt-30 mb-10 text-lg"
        size="lg"
        onClick={() => window.open(SPONSORS_FOLDER_URL)}
      >
        Devenir sponsor <ExternalLink size={30} />
      </Button>
    </div>
  );
};
