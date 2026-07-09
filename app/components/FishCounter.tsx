"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function FishCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      id="banco"
      ref={ref}
      className="relative bg-cream-200 py-16 md:py-40 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text — a sinistra (specchiato) */}
        <div className="lg:col-span-6 lg:pr-8 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-3"
          >
            — Pesce fresco
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display text-ink text-[13vw] sm:text-[10vw] md:text-[5.5vw] lg:text-[4.6vw] leading-[1.12] max-w-xl"
          >
            Il banco
            <br />
            del pesce fresco.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-5 md:mt-6 space-y-4 text-ink/80 text-base md:text-lg leading-relaxed font-light max-w-xl"
          >
            <p>
              Al nostro banco il pesce è il primo protagonista: una selezione
              fresca del giorno, esposta per raccontare la qualità e la cura con
              cui scegliamo ogni materia prima.
            </p>
            <p>
              Ogni mattina arrivano prodotti attentamente selezionati e
              valorizzati dalla nostra cucina in proposte legate al pescato più
              fresco del momento.
            </p>
            <p>
              Una vetrina di mare che racconta, prima ancora dei piatti, la
              freschezza e la stagionalità della nostra cucina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 md:mt-12 grid grid-cols-3 gap-3 md:gap-6 max-w-md"
          >
            {[
              { t: "Crostacei", d: "Gamberi, scampi, canocchie" },
              { t: "Molluschi", d: "Ostriche, cozze, vongole" },
              { t: "Del giorno", d: "Sempre fresco di giornata" },
            ].map((s) => (
              <div key={s.t} className="border-t border-ink/15 pt-3 md:pt-4">
                <div className="display text-lg md:text-2xl text-ink leading-none">
                  {s.t}
                </div>
                <div className="mt-2 text-sm text-ink/70 font-light leading-snug">
                  {s.d}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image stack — a destra (specchiato) */}
        <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] md:h-[640px] order-1 lg:order-2">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[68%] aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src="/banco-0994.jpg"
              alt="Il banco del pesce fresco"
              fill
              sizes="(min-width:1024px) 40vw, 80vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-[58%] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <Image
              src="/banco-1008.jpg"
              alt="Pesce fresco esposto sul ghiaccio"
              fill
              sizes="(min-width:1024px) 30vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
