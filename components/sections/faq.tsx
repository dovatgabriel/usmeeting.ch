"use client";

import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "L'entrée est-elle payante ?",
    answer:
      "Non, l'entrée est entièrement libre et gratuite pour tous les visiteurs. Venez profiter de l'événement sans vous soucier du prix du billet !",
  },
  {
    question: "Comment exposer mon véhicule américain ?",
    answer:
      "Aucune inscription préalable n'est nécessaire. Le parking exposants fonctionne sur le principe du premier arrivé, premier servi — le site ouvre à 9h. Les arrivées et départs sont libres tout au long de la journée. Merci de respecter les instructions du responsable de parc à votre arrivée.",
  },
  {
    question: "À quelle heure ouvre l'événement ?",
    answer:
      "Le site ouvre ses portes à 9h. Nous vous recommandons d'arriver tôt si vous souhaitez exposer votre véhicule, les places étant attribuées par ordre d'arrivée.",
  },
  {
    question: "Où se garer si je viens en tant que visiteur ?",
    answer:
      "Des parkings publics sont disponibles à proximité du site, notamment au niveau des centres commerciaux alentours. Des indications seront communiquées avant l'événement sur nos réseaux sociaux.",
  },
  {
    question: "Y a-t-il de la restauration sur place ?",
    answer:
      "Oui, plusieurs stands de restauration et buvettes sont présents sur le site tout au long de la journée pour vous accueillir dans la bonne humeur.",
  },
  {
    question: "Où trouver le programme de l'événement ?",
    answer:
      "Le programme complet et le flyer officiel sont publiés sur nos réseaux sociaux avant chaque édition. Consultez nos posts précédents ou abonnez-vous pour ne rien manquer.",
  },
  {
    question: "Comment devenir sponsor ou partenaire ?",
    answer:
      "Nous sommes toujours à la recherche de partenaires locaux et régionaux. Contactez-nous directement à u.s.meetingoron@gmail.com pour recevoir notre dossier de sponsoring.",
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
    <section
      id="faq"
      className="py-32 px-8 flex flex-col items-center bg-accent/50 transition-colors duration-300"
    >
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

        <div className="flex flex-col divide-y rounded-xl border px-6 bg-background transition-all">
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
