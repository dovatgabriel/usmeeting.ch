"use client";

import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Quand a lieu l'US Meeting Oron ?",
    answer:
      "L'US Meeting Oron se déroule chaque année le premier week-end du mois de septembre à Oron-La-Ville. Restez connectés sur nos réseaux pour connaître la date exacte de la prochaine édition.",
  },
  {
    question: "Comment participer avec mon véhicule américain ?",
    answer:
      "Tous les propriétaires de véhicules américains sont les bienvenus. Il suffit de venir le jour de la manifestation avec votre véhicule et nous vous accueillerons !",
  },
  {
    question: "L'événement est-il ouvert au public ?",
    answer:
      "Oui, l'US Meeting Oron est ouvert à tous les passionnés d'automobiles américaines et au grand public. L'entrée est libre pour les visiteurs.",
  },
  {
    question: "Y a-t-il de la restauration sur place ?",
    answer:
      "Oui, plusieurs stands de restauration et buvettes sont présents sur le site tout au long de l'événement pour vous accueillir dans la bonne humeur.",
  },
  {
    question: "Comment devenir sponsor ?",
    answer:
      "Nous sommes toujours à la recherche de partenaires locaux et nationaux. Consultez notre dossier de sponsoring ou contactez-nous directement à contact@usmeeting.ch pour plus d'informations.",
  },
  {
    question: "Où se garer pour l'événement ?",
    answer:
      "Des parkings dédiés sont mis à disposition à proximité du site. Des indications seront communiquées avant l'événement sur nos canaux officiels.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-base">{question}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted-foreground"
        >
          <Plus className="size-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="faq" className="py-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-16">
        <div className="flex flex-col gap-5 items-center">
          <span className="text-lg lg:text-xl font-medium text-muted-foreground">
            Vous avez des questions ?
          </span>
          <h2
            ref={ref}
            className="text-2xl lg:text-5xl font-bold relative inline-block"
          >
            Questions fréquentes
            <svg
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 5 Q 25 2, 50 5 T 100 5"
                stroke="url(#faq-underline-gradient)"
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
                  id="faq-underline-gradient"
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

        <div className="flex flex-col divide-y rounded-xl border px-6">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
