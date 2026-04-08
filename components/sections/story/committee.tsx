"use client";

import { motion } from "motion/react";
import { Bike } from "lucide-react";
import Image from "next/image";
import pic from "@/app/images/amicale.jpg";

const MEMBERS = [
  { name: "Membre 1", role: "Président" },
  { name: "Membre 2", role: "Vice-président" },
  { name: "Membre 3", role: "Trésorier" },
  { name: "Membre 4", role: "Secrétaire" },
  { name: "Membre 5", role: "Logistique" },
  { name: "Membre 6", role: "Communication" },
];

export const Committee = () => {
  return (
    <section className="py-32 px-8 flex flex-col items-center transition-colors duration-300">
      <div className="w-full max-w-5xl flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 flex-1"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Le comité organisateur
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">
                L&apos;Amicale{" "}
                <span className="bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Live to Ride
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Tout a commencé dans le garage d&apos;un ami, autour d&apos;un
              café et de quelques Harley-Davidson. L&apos;Amicale Live to Ride,
              c&apos;est un groupe de motards passionnés d&apos;Oron-la-Ville
              qui, en 2022, a décidé de transformer leur passion pour les
              véhicules américains en quelque chose de plus grand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;idée était simple : rassembler la communauté locale et les
              passionnés de toute la Suisse romande autour d&apos;un événement
              convivial, accessible à tous. Trois ans plus tard, le U.S. Meeting
              Oron est devenu l&apos;un des plus grands rassemblements de
              véhicules américains de Suisse.
            </p>
          </motion.div>
          <Image
            src={pic}
            alt="Amicale"
            className="w-full lg:w-96 h-72 lg:h-80 rounded-2xl bg-accent flex flex-col items-center justify-center gap-3 text-muted-foreground border shrink-0 overflow-hidden transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-center">Le comité</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border bg-accent/50 text-center transition-colors duration-300"
              >
                <div className="size-12 rounded-full bg-linear-to-br from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  {member.name.charAt(0)}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">{member.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
