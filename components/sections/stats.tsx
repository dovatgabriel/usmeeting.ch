"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import CountingNumber from "../ui/counting-number";

export const Stats = () => {
  return (
    <div className="flex flex-col items-center gap-10 flex-wrap px-5 mx-0 lg:px-10 lg:mx-40">
      <h1 className="text-2xl text-muted-foreground text-center">
        En quelques chiffres...
      </h1>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-evenly w-full">
        <Stat label="Visiteurs passionnés" value={3500} />
        <Stat label="Véhicules américains" value={250} />
        <Stat label="D’exposition & animations" value={1500} suffix="m²" />
      </div>
      <Button
        variant="link"
        className="my-30 text-lg"
        size="lg"
        onClick={() => (window.location.href = "about")}
      >
        En savoir plus sur l&apos;évènement <ArrowRight size={30} />
      </Button>
    </div>
  );
};

const Stat = ({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) => (
  <div className="flex flex-col items-center gap-5">
    <div className="flex items-center gap-1">
      <CountingNumber
        number={value}
        className="text-5xl md:text-8xl font-semibold bg-linear-to-r from-purple-900 to-orange-500 bg-clip-text text-transparent"
        inView
        inViewOnce={false}
      />
      <span className="text-3xl md:text-6xl font-medium text-orange-500">
        {suffix || "+"}
      </span>
    </div>
    <span className="text-xl md:text-2xl text-center">{label}</span>
  </div>
);
