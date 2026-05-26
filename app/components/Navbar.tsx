"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "Contattaci", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        <a href="#top" className="flex items-center group relative h-14 md:h-16 w-[170px] md:w-[200px]">
          {/* Dark logo — visible when scrolled */}
          <Image
            src="/logo/logo_paradiso_del_mare.png"
            alt="Il Paradiso del Mare"
            fill
            priority
            sizes="200px"
            className={`object-contain object-left transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* White logo — visible over hero */}
          <Image
            src="/logo/logo_paradiso_del_mare_bianco.png"
            alt="Il Paradiso del Mare"
            fill
            priority
            sizes="200px"
            className={`object-contain object-left transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#prenota"
            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-500 ${
              scrolled
                ? "bg-ink text-cream hover:bg-ink-700"
                : "bg-cream text-ink hover:bg-cream-200"
            }`}
          >
            Prenota un tavolo
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-cream"
          }`}
          aria-label="Apri menu"
        >
          <MenuIcon size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <div className="relative h-14 w-[170px]">
                <Image
                  src="/logo/logo_paradiso_del_mare_bianco.png"
                  alt="Il Paradiso del Mare"
                  fill
                  sizes="170px"
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-cream"
                aria-label="Chiudi menu"
              >
                <CloseIcon size={26} />
              </button>
            </div>
            <motion.nav className="flex flex-col px-6 py-10 gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="display text-5xl text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#prenota"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream text-ink text-sm uppercase tracking-[0.2em]"
              >
                Prenota un tavolo →
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
