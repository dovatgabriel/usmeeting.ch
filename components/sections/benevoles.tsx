"use client";

import {
  Car,
  HandFist,
  MailOpen,
  ParkingSquare,
  ShieldCheck,
  Shirt,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { BENEVOLE_FORM_URL } from "@/app/constants";

const ROLES = [
  {
    icon: <ParkingSquare className="size-5 text-white" />,
    title: "Accueil & parking",
    description:
      "Guider les participants et les visiteurs à leur arrivée, gérer les flux de circulation et l'organisation des parkings.",
  },
  {
    icon: <Car className="size-5 text-white" />,
    title: "Gestion des exposants",
    description:
      "Accueillir les propriétaires de véhicules, les orienter vers leur emplacement et veiller au bon déroulement de l'exposition.",
  },
  {
    icon: <ShieldCheck className="size-5 text-white" />,
    title: "Sécurité & périmètre",
    description:
      "Veiller à la sécurité des participants, contrôler les accès et maintenir un environnement agréable pour tous.",
  },
  {
    icon: <UtensilsCrossed className="size-5 text-white" />,
    title: "Restauration",
    description:
      "Participer au service des stands de restauration et buvettes pour que chacun puisse profiter de l'événement.",
  },
];

const PERKS = [
  {
    icon: <Shirt className="size-5 text-white" />,
    label: "T-shirt officiel offert",
  },
  {
    icon: <Utensils className="size-5 text-white" />,
    label: "Bons pour boissons/nourriture pendant la manifestation",
  },
  {
    icon: <MailOpen className="size-5 text-white" />,
    label: "Invitation au repas de soutien",
  },
];

export const Benevoles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      className="py-32 px-8 flex flex-col items-center transition-colors duration-300"
      id="benevoles"
    >
      <div className="w-full max-w-5xl flex flex-col items-center gap-16">
        <div className="flex flex-col gap-5 items-center">
          <span className="text-lg lg:text-xl font-medium text-muted-foreground">
            Rejoignez l&apos;équipe
          </span>
          <h2
            ref={ref}
            className="text-2xl lg:text-5xl font-bold relative inline-block text-center"
          >
            Devenez bénévole
            <svg
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 5 Q 25 2, 50 5 T 100 5"
                stroke="url(#benevoles-underline-gradient)"
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
                  id="benevoles-underline-gradient"
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
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed mt-4">
            L&apos;US Meeting Oron est entièrement organisé grâce à
            l&apos;engagement de bénévoles passionnés. Chaque année, une équipe
            soudée œuvre dans les coulisses pour offrir une expérience
            inoubliable aux visiteurs et exposants.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {ROLES.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-3 rounded-xl border bg-accent/50 p-6 transition-colors duration-300"
              >
                <div className="size-9 rounded-lg bg-linear-to-br from-purple-500 to-orange-500 flex items-center justify-center shrink-0">
                  {role.icon}
                </div>
                <h3 className="font-semibold text-base">{role.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-72 lg:sticky lg:top-32"
          >
            <h2>Vous aurez le droit à :</h2>
            <div className="flex flex-col gap-3 w-full">
              {PERKS.map((perk) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium"
                >
                  <div className="size-8 rounded-lg bg-linear-to-br from-purple-500 to-orange-500 flex items-center justify-center shrink-0">
                    {perk.icon}
                  </div>
                  {perk.label}
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="w-full text-base font-bold"
              onClick={() => window.open(BENEVOLE_FORM_URL)}
            >
              Je suis volontaire
              <HandFist />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
