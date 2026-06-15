"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[600px] md:min-h-[700px] w-full overflow-hidden bg-ink"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/hero-0923.jpg"
          alt="Piatto di mare contemporaneo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-5 md:px-10 max-w-[1600px] mx-auto"
      >
        {/* Big display heading with line reveals */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="display text-cream text-[16vw] md:text-[12vw] lg:text-[10vw] leading-[0.85]"
          >
            Dal mare
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-[-0.02em]">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="display text-cream text-[16vw] md:text-[12vw] lg:text-[10vw] leading-[0.85]"
          >
            <span className="italic-fake inline-block">alla</span>{" "}
            <span className="text-gold-light">tavola.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
        >
          <p className="max-w-md text-cream/85 text-sm md:text-lg leading-relaxed font-light">
            Pesce fresco selezionato ogni giorno, cucina autentica e sapori
            che raccontano la tradizione mediterranea in ogni piatto.
          </p>

          <div className="flex">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-4 rounded-full border border-cream/40 text-cream text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-cream/10 transition-colors duration-500"
            >
              Scopri il menu
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — hidden on short viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
      >
        <span className="text-cream/70 text-[10px] uppercase tracking-[0.3em]">
          Scorri
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-cream/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
