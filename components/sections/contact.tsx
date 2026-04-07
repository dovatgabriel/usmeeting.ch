"use client";

import { motion } from "motion/react";

const EMAIL = "contact@usmeeting.ch";

export const Contact = () => {
  return (
    <section className="py-32 px-8 flex flex-col items-center text-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col gap-3 items-center">
          <span className="text-lg lg:text-xl font-medium text-muted-foreground">
            Une question ?
          </span>
          <h2 className="text-3xl lg:text-6xl font-bold">Écrivez-nous !</h2>
        </div>
        <motion.a
          href={`mailto:${EMAIL}`}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 text-2xl lg:text-4xl font-semibold bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          {EMAIL}
        </motion.a>
        <p className="text-muted-foreground max-w-sm leading-relaxed">
          Nous répondrons à toutes vos questions dans les plus brefs délais.
        </p>
      </motion.div>
    </section>
  );
};
