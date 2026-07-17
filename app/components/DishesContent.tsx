"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { featured } from "../data/dishes";

const MotionLink = motion.create(Link);

// ── Galleria (immagini reali) ───────────────────────────────────────────────
const gallery = [
  "/piatto-0365.jpg",
  "/piatto-0398.jpg",
  "/piatto-0438.jpg",
  "/piatto-0414.jpg",
  "/piatto-0468.jpg",
  "/piatto-0518.jpg",
  "/piatto-0532.jpg",
  "/piatto-0600.jpg",
  "/piatto-0621.jpg",
  "/piatto-0753.jpg",
  "/piatto-0662.jpg",
  "/piatto-0687.jpg",
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function DishesContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const menuRef = useRef<HTMLElement>(null);
  const { scrollYProgress: menuProgress } = useScroll({
    target: menuRef,
    offset: ["start end", "end start"],
  });
  const menuY = useTransform(menuProgress, [0, 1], ["-12%", "12%"]);

  return (
    <>
      {/* Header */}
      <section
        ref={heroRef}
        className="relative min-h-[64svh] md:min-h-[74svh] flex items-end overflow-hidden bg-ink"
      >
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/piatti-hero-0478.jpg"
            alt="Piatto di pesce del Paradiso del Mare"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-10 pb-12 md:pb-20 pt-28 md:pt-40">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-gold-light mb-4"
          >
            — I nostri piatti
          </motion.span>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="display text-cream text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] leading-[0.85]"
            >
              Sapore di mare
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8"
          >
            <p className="max-w-xl text-cream/85 text-base md:text-lg leading-relaxed font-light">
              Una cucina di mare autentica, fatta di materie prime selezionate
              ogni giorno. Ecco alcuni dei piatti che ci rendono fieri.
            </p>
            <a
              href="/contatti#prenota"
              className="group inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-4 rounded-full bg-cream text-ink text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-gold-light transition-colors duration-500 shrink-0"
            >
              Prenota un tavolo
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured dishes — editorial alternating rows */}
      <section className="bg-cream py-16 md:py-28 grain">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 space-y-28 md:space-y-48">
          {featured.map((dish, i) => (
            <div
              key={dish.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Images — coppia verticale */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative h-[300px] sm:h-[420px] md:h-[520px]">
                  {/* Foto 1 — dietro */}
                  <div
                    className={`group absolute top-0 w-[56%] aspect-[3/4] overflow-hidden rounded-sm bg-ink/5 z-10 ${
                      i % 2 === 1 ? "right-0" : "left-0"
                    }`}
                  >
                    <Image
                      src={dish.images[0]}
                      alt={`${dish.name} — foto 1`}
                      fill
                      sizes="(min-width:1024px) 28vw, 56vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Foto 2 — davanti, sfalsata */}
                  <div
                    className={`group absolute bottom-0 w-[50%] aspect-[4/5] overflow-hidden rounded-sm bg-ink/5 z-20 shadow-2xl ${
                      i % 2 === 1 ? "left-0" : "right-0"
                    }`}
                  >
                    <Image
                      src={dish.images[1]}
                      alt={`${dish.name} — foto 2`}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                {...reveal}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="display text-gold-light/70 text-3xl md:text-4xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
                    {dish.category}
                  </span>
                </div>
                <h2 className="display text-ink text-4xl md:text-6xl leading-[0.9] mt-4">
                  {dish.name}
                </h2>
                <div className="shimmer-line h-px w-20 mt-5" />
                <p className="mt-5 text-ink/75 text-base md:text-lg leading-relaxed font-light max-w-md">
                  {dish.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu CTA band */}
      <section
        ref={menuRef}
        className="relative overflow-hidden bg-ink text-cream min-h-[440px] md:min-h-[560px] flex items-center"
      >
        <motion.div
          style={{ y: menuY }}
          className="absolute inset-0 scale-110 will-change-transform"
        >
          <Image
            src="/menu-0840.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/40" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 md:px-10 py-20 md:py-28 flex flex-col items-center text-center grain">
          <motion.span
            {...reveal}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.3em] text-gold-light"
          >
            — La carta completa
          </motion.span>
          <motion.h2
            {...reveal}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display text-cream text-[14vw] sm:text-[11vw] md:text-[7vw] leading-[0.9] mt-3"
          >
            Tutto il menu
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 text-cream/85 text-base md:text-lg font-light leading-relaxed max-w-xl"
          >
            Crudi, primi, secondi e dessert: la nostra proposta cambia con il
            pescato del giorno e con le stagioni. Scopri la carta completa.
          </motion.p>
          <MotionLink
            href="/#menu"
            {...reveal}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="group mt-9 inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-cream text-ink text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-gold-light transition-colors duration-500"
          >
            Vai al menu
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </MotionLink>
        </div>
      </section>

      {/* General gallery */}
      <section className="bg-cream-200 py-16 md:py-28">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="mb-10 md:mb-14">
            <motion.span
              {...reveal}
              transition={{ duration: 0.7 }}
              className="block text-[11px] uppercase tracking-[0.3em] text-ink/55"
            >
              — Altri piatti
            </motion.span>
            <motion.h2
              {...reveal}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="display text-ink text-4xl md:text-6xl leading-[0.9] mt-3"
            >
              Dalla nostra cucina
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-ink/5"
              >
                <Image
                  src={src}
                  alt={`Piatto di pesce del Paradiso del Mare a Muggiò — ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
