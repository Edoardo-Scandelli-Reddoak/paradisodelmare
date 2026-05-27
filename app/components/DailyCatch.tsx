"use client";

import Image from "next/image";
import { motion } from "motion/react";

const catches = [
  {
    name: "Crudo del giorno",
    origin: "Antipasto",
    image:
      "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tartare di tonno",
    origin: "Antipasto",
    image:
      "https://images.unsplash.com/photo-1632789395770-20e6f63be806?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Gamberi rossi",
    origin: "Crudité",
    image:
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ricciola scottata",
    origin: "Secondo",
    image:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Scampi al lime",
    origin: "Secondo",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function DailyCatch() {
  return (
    <section id="pescato" className="bg-cream py-20 md:py-40">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.3em] text-ink/60"
            >
              — I nostri piatti
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display text-ink text-[14vw] sm:text-[12vw] md:text-[7vw] lg:text-[5.8vw] leading-[0.9] mt-3 md:mt-4"
            >
              Sapore di mare
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 self-end text-ink/80 text-base md:text-lg leading-relaxed font-light max-w-md"
          >
            Una cucina di mare autentica, pensata per sorprendere con gusto,
            semplicità e raffinatezza.
          </motion.p>
        </div>

        {/* Horizontal scroll list */}
        <div className="relative -mx-5 md:-mx-10">
          <div
            className="flex gap-4 md:gap-7 overflow-x-auto overflow-y-hidden no-scrollbar px-5 md:px-10 pb-4 snap-x snap-mandatory"
            style={{
              touchAction: "pan-x",
              overscrollBehaviorX: "contain",
              overscrollBehaviorY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {catches.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                className="group relative shrink-0 w-[230px] sm:w-[280px] md:w-[340px] aspect-[3/4] overflow-hidden rounded-sm bg-ink/5 select-none snap-start"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream/70">
                    {c.origin}
                  </div>
                  <div className="display text-2xl md:text-4xl text-cream mt-2 leading-none">
                    {c.name}
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-gold-light shadow-[0_0_0_4px_rgba(217,184,123,0.25)] animate-pulse" />
              </motion.article>
            ))}
          </div>
          <div className="mt-5 md:mt-6 px-5 md:px-10 flex items-center gap-2 text-ink/50 text-[10px] md:text-[11px] uppercase tracking-[0.25em]">
            ← Trascina per scoprire
          </div>
        </div>
      </div>
    </section>
  );
}
