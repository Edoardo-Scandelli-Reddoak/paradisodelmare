"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { featured } from "../data/dishes";

export default function DailyCatch() {
  return (
    <section id="pescato" className="bg-cream py-16 md:py-40">
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
            semplicità e raffinatezza. Ecco alcuni dei nostri piatti più amati.
          </motion.p>
        </div>

        {/* Griglia dei 4 piatti principali */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08 }}
            >
              <Link
                href="/piatti"
                className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-ink/5 block"
              >
                <Image
                  src={dish.images[0]}
                  alt={dish.name}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream/70">
                    {dish.category}
                  </div>
                  <div className="display text-2xl md:text-3xl text-cream mt-2 leading-none">
                    {dish.name}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
