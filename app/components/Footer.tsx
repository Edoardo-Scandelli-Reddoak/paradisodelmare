"use client";

import { motion } from "motion/react";
import {
  InstagramIcon,
  FacebookIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "./icons";

export default function Footer() {
  return (
    <footer
      id="contatti"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2.5rem)" }}
      className="bg-ink text-cream pt-16 md:pt-24 grain"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        {/* Massive wordmark */}
        <div className="border-b border-cream/10 pb-8 md:pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[18vw] md:text-[14vw] leading-[0.85] text-cream"
          >
            Il Paradiso
            <br />
            del Mare<span className="text-gold-light">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 md:py-14">
          <div className="md:col-span-5">
            <p className="text-cream/70 leading-relaxed font-light max-w-sm">
              Pesce fresco selezionato ogni giorno, cucina autentica e sapori
              che raccontano la tradizione mediterranea in ogni piatto.
            </p>
            <div className="flex items-center gap-4 mt-6 md:mt-8">
              <a
                href="https://www.instagram.com/ilparadisodelmare_?igsh=MTI2NDNkMmZkbnQzNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/people/Il-Paradiso-del-Mare/61584961525690/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4 md:mb-5">
              Contatti
            </div>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPinIcon size={16} className="mt-1 text-gold-light shrink-0" />
                <span>Via Trieste 23, Muggiò (MB)</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={16} className="text-gold-light shrink-0" />
                <a href="tel:+393932655783" className="link-underline">
                  +39 393 265 5783
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={16} className="text-gold-light shrink-0" />
                <a href="mailto:info@ilparadisodelmare.it" className="link-underline">
                  info@ilparadisodelmare.it
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4 md:mb-5">
              Orari
            </div>
            <ul className="space-y-2 text-sm font-light text-cream/80">
              <li>Mar – Dom</li>
              <li className="text-cream">19:00 – 23:30</li>
              <li className="pt-2">Sab – Dom</li>
              <li className="text-cream">12:00 – 15:00</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50 mb-4 md:mb-5">
              Naviga
            </div>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="/#storia" className="link-underline">
                  Storia
                </a>
              </li>
              <li>
                <a href="/#menu" className="link-underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="/piatti" className="link-underline">
                  I nostri piatti
                </a>
              </li>
              <li>
                <a href="/#sala" className="link-underline">
                  Sala
                </a>
              </li>
              <li>
                <a href="/contatti" className="link-underline">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-cream/50">
          <span>© {new Date().getFullYear()} Il Paradiso del Mare</span>
        </div>
      </div>
    </footer>
  );
}
