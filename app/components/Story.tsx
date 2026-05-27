"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      id="storia"
      ref={ref}
      className="relative bg-cream py-20 md:py-40 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image stack */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] md:h-[640px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-[68%] aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
              alt="Interno del ristorante"
              fill
              sizes="(min-width:1024px) 40vw, 80vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 w-[58%] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80"
              alt="Pescato del giorno"
              fill
              sizes="(min-width:1024px) 30vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div className="lg:col-span-6 lg:pl-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-3"
          >
— Chi siamo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display text-ink text-[13vw] sm:text-[10vw] md:text-[5.5vw] lg:text-[4.6vw] leading-[1.12] max-w-xl"
          >
            Il mare,
            <br />
            la nostra passione.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-5 md:mt-6 text-ink/80 text-base md:text-lg leading-relaxed font-light max-w-xl"
          >
            Tutto nasce dalla passione per il pesce fresco e dalla volontà di
            portare a Muggiò un’esperienza autentica fatta di qualità,
            accoglienza e cucina di mare. Ogni giorno selezioniamo con
            attenzione le migliori materie prime per trasformarle in piatti che
            uniscono tradizione, gusto e semplicità.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 md:mt-12 grid grid-cols-3 gap-3 md:gap-6 max-w-md"
          >
            {[
              { n: "2025", l: "Anno di apertura" },
              { n: "80", l: "Coperti in sala" },
              { n: "100%", l: "Pesce fresco selezionato" },
            ].map((s) => (
              <div key={s.l} className="border-t border-ink/15 pt-3 md:pt-4">
                <div className="display text-3xl md:text-5xl text-ink">
                  {s.n}
                </div>
                <div className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-ink/60 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
