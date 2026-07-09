"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "./icons";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Via Trieste 23, 20835 Muggiò MB");

const chips = [
  { label: "Chiama", href: "tel:+393932655783", Icon: PhoneIcon },
  { label: "Scrivici", href: "mailto:info@ilparadisodelmare.it", Icon: MailIcon },
  { label: "Mappa", href: MAPS_LINK, Icon: MapPinIcon, external: true },
];

export default function ContactHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative min-h-[64svh] md:min-h-[74svh] flex items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/sala-0899.jpg"
          alt="La sala del ristorante Il Paradiso del Mare"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-10 pb-12 md:pb-20 pt-28 md:pt-40 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="md:max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="inline-block text-[11px] uppercase tracking-[0.3em] text-gold-light mb-4"
        >
          — Contatti
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="display text-cream text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] leading-[0.85]"
          >
            Vi aspettiamo
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-5 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed font-light"
        >
          Per prenotazioni, eventi privati o semplicemente per dirci ciao:
          scrivici, chiamaci o passa a trovarci. Saremo felici di accoglierti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {chips.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-2.5 rounded-full border border-cream/30 bg-ink/20 backdrop-blur-md px-5 py-3 text-cream text-[12px] uppercase tracking-[0.2em] hover:bg-cream hover:text-ink hover:border-cream transition-colors duration-400"
            >
              <Icon size={15} className="text-gold-light group-hover:text-ink transition-colors" />
              {label}
            </a>
          ))}
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="shrink-0"
        >
          <Link
            href="/contatti#prenota"
            className="group inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-4 rounded-full bg-cream text-ink text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-gold-light transition-colors duration-400"
          >
            Prenota un tavolo
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
