"use client";

import { motion } from "motion/react";

const EVENTS = [
  { year: 2021, label: "Première édition · 500 visiteurs" },
  { year: 2022, label: "2ème édition · 1'500 visiteurs" },
  { year: 2023, label: "3ème édition · 6'000 visiteurs" },
  { year: 2024, label: "4ème édition · +10'000 visiteurs" },
];

export const Timeline = () => {
  const currentYear = new Date().getFullYear();
  const lastEventYear = EVENTS[EVENTS.length - 1].year;
  const hasGap = currentYear > lastEventYear + 1;
  const showCurrentYear = currentYear > lastEventYear;

  const items: {
    year: number;
    label: string;
    isCurrent?: boolean;
    isGap?: boolean;
  }[] = [
    ...EVENTS,
    ...(hasGap ? [{ year: 0, label: "...", isGap: true }] : []),
    ...(showCurrentYear
      ? [{ year: currentYear, label: "En préparation", isCurrent: true }]
      : []),
  ];

  return (
    <section className="py-32 px-8 flex flex-col items-center bg-accent/50 transition-colors duration-300">
      <div className="w-full max-w-4xl flex flex-col gap-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-medium text-muted-foreground">
            Année par année
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold">Chronologie</h2>
        </div>

        <div className="hidden md:flex items-start gap-0">
          {items.map((item, i) => (
            <motion.div
              key={item.isGap ? "gap" : item.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className={`flex flex-col items-center gap-3 ${item.isGap ? "flex-none px-2" : "flex-1"}`}
            >
              <div className="w-full flex items-center">
                <div
                  className={`h-px flex-1 ${i === 0 ? "opacity-0" : "bg-border"}`}
                />
                {item.isGap ? (
                  <div className="flex gap-1 px-1 pt-1 items-center">
                    {[0, 1, 2].map((j) => (
                      <div
                        key={j}
                        className="size-1.5 rounded-full bg-border"
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className={`shrink-0 rounded-full ring-4 ring-background transition-colors duration-300 ${
                      item.isCurrent
                        ? "size-4 bg-linear-to-br from-purple-500 to-orange-500"
                        : "size-3 bg-border"
                    }`}
                  />
                )}
                <div
                  className={`h-px flex-1 ${i === items.length - 1 ? "opacity-0" : "bg-border"}`}
                />
              </div>
              {!item.isGap && (
                <div className="flex flex-col items-center gap-1 text-center px-2">
                  <span
                    className={`font-bold text-lg ${
                      item.isCurrent
                        ? "bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    {item.label}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex md:hidden flex-col gap-5 relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-border" />
          {items.map((item, i) => (
            <motion.div
              key={item.isGap ? "gap" : item.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex items-center gap-4 pl-7"
            >
              {item.isGap ? (
                <div className="absolute left-0.5 bg-card p-1 flex flex-col gap-1 -translate-x-px">
                  {[0, 1, 2].map((j) => (
                    <div
                      key={j}
                      className="size-1 rounded-full bg-border mx-auto"
                    />
                  ))}
                </div>
              ) : (
                <>
                  <div
                    className={`absolute left-1.5 -translate-x-1/2 rounded-full ring-4 ring-background transition-colors duration-300 ${
                      item.isCurrent
                        ? "size-4 bg-linear-to-br from-purple-500 to-orange-500"
                        : "size-3 bg-border"
                    }`}
                  />
                  <span
                    className={`font-bold ${item.isCurrent ? "bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent" : ""}`}
                  >
                    {item.year}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
