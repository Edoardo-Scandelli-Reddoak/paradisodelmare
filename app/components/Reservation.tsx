"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Reservation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="prenota"
      ref={ref}
      className="relative min-h-[560px] md:h-[65vh] py-20 md:py-0 overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <Image
          src="/prenota-0359.png"
          alt="Sala del ristorante"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-6">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="display text-cream text-[16vw] md:text-[10vw] lg:text-[8vw] leading-[0.85]"
          >
            Riservate
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="display text-cream text-[16vw] md:text-[10vw] lg:text-[8vw] leading-[0.85]"
          >
            il <span className="text-gold-light">vostro</span> tavolo
          </motion.h2>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display text-cream/90 text-2xl md:text-4xl lg:text-5xl leading-none mt-8 md:mt-10"
        >
          Vi aspettiamo
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-md text-cream/85 text-sm md:text-base leading-relaxed font-light"
        >
          Scegli il momento giusto e vivi un’esperienza di mare fatta di
          gusto, atmosfera e attenzione ai dettagli. Ti aspettiamo!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <a
            href="tel:+393932655783"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cream text-ink text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-gold-light transition-colors duration-500"
          >
            Prenota ora
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:info@ilparadisodelmare.it"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-cream/40 text-cream text-[12px] uppercase tracking-[0.25em] hover:bg-cream/10 transition-colors duration-500"
          >
            Scrivici
          </a>
        </motion.div>
      </div>
    </section>
  );
}
