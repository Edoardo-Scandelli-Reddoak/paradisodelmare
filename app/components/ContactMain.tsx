"use client";

import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

const MAPS_QUERY = "Via Trieste 23, 20835 Muggiò MB";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY
)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY
)}`;

const details = [
  {
    label: "Indirizzo",
    value: "Via Trieste 23, Muggiò (MB)",
    href: MAPS_LINK,
    external: true,
    Icon: MapPinIcon,
  },
  {
    label: "Telefono",
    value: "+39 393 265 5783",
    href: "tel:+393932655783",
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "info@ilparadisodelmare.it",
    href: "mailto:info@ilparadisodelmare.it",
    Icon: MailIcon,
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ContactMain() {
  return (
    <>
      {/* Details + form */}
      <section className="bg-cream py-16 md:py-28 grain">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <motion.h2
              {...reveal}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-ink text-4xl md:text-6xl leading-[0.9]"
            >
              Dove
              <br />
              trovarci
            </motion.h2>
            <motion.div
              {...reveal}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="shimmer-line h-px w-24 mt-6"
            />

            {/* Contact cards */}
            <div className="mt-8 md:mt-10 space-y-4">
              {details.map((d, i) => (
                <motion.a
                  key={d.label}
                  href={d.href}
                  {...(d.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center gap-5 rounded-sm border border-ink/12 bg-cream-200/40 px-5 py-4 hover:border-ink/30 hover:bg-cream-200/80 transition-colors duration-400"
                >
                  <span className="w-12 h-12 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-cream group-hover:border-gold transition-colors duration-400">
                    <d.Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.25em] text-ink/50">
                      {d.label}
                    </span>
                    <span className="block text-ink text-base md:text-lg font-light truncate">
                      {d.value}
                    </span>
                  </span>
                  <span className="ml-auto text-ink/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-400">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 rounded-sm bg-ink text-cream px-6 py-6 md:px-7 md:py-7 grain"
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-light mb-4">
                Orari di apertura
              </div>
              <dl className="space-y-2.5 font-light">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-cream/80">Martedì – Domenica</dt>
                  <dd className="text-cream">19:00 – 23:30</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-cream/80">Sabato – Domenica</dt>
                  <dd className="text-cream">12:00 – 15:00</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 pt-1 border-t border-cream/10 mt-1">
                  <dt className="text-cream/50">Lunedì</dt>
                  <dd className="text-cream/50">Chiuso</dd>
                </div>
              </dl>
            </motion.div>

            {/* Social */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-ink/50 mr-1">
                Seguici
              </span>
              <a
                href="https://www.instagram.com/ilparadisodelmare_?igsh=MTI2NDNkMmZkbnQzNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/people/Il-Paradiso-del-Mare/61584961525690/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
            </motion.div>
          </div>

          {/* Form panel */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-sm border border-ink/12 bg-foam/70 shadow-[0_30px_80px_-40px_rgba(4,58,71,0.45)] p-5 sm:p-8 md:p-12">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
                — Scrivici
              </span>
              <h2 className="display text-ink text-4xl md:text-5xl leading-none mt-3">
                Mandaci un messaggio
              </h2>
              <p className="mt-4 text-ink/70 leading-relaxed font-light max-w-xl">
                Compila il modulo e ti risponderemo al più presto.
              </p>
              <div className="mt-8 md:mt-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-200">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-16 md:pb-24">
          <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
              — Come raggiungerci
            </span>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-[12px] uppercase tracking-[0.25em] link-underline shrink-0"
            >
              Apri in Maps →
            </a>
          </div>
          <motion.div
            {...reveal}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-sm border border-ink/10"
          >
            <iframe
              title="Mappa — Il Paradiso del Mare, Via Trieste 23, Muggiò"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
