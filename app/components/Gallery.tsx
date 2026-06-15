"use client";

import Image from "next/image";
import { motion } from "motion/react";

const tiles = [
  {
    src: "/sala-0909.jpg",
    alt: "La sala del ristorante",
    caption: "La sala",
    span: "md:col-span-5 md:row-span-2 h-[320px] sm:h-[460px] md:h-[640px]",
  },
  {
    src: "/sala-0899.jpg",
    alt: "L'atmosfera della sala",
    caption: "L'atmosfera",
    span: "md:col-span-7 h-[200px] sm:h-[230px] md:h-[310px]",
  },
  {
    src: "/sala-0914.jpg",
    alt: "Dettagli della sala",
    caption: "I dettagli",
    span: "md:col-span-4 h-[200px] sm:h-[230px] md:h-[310px]",
  },
  {
    src: "/sala-0610.jpg",
    alt: "L'accoglienza in sala",
    caption: "L'accoglienza",
    span: "md:col-span-3 h-[200px] sm:h-[230px] md:h-[310px]",
  },
];

const features = [
  {
    title: "Eventi privati",
    text: "Cene aziendali, compleanni, anniversari.",
  },
  { title: "Cene cantate", text: "Serate a tema con musica dal vivo." },
  { title: "Aperitivi", text: "Cocktail e piccoli assaggi di mare." },
  { title: "Catering", text: "La nostra cucina anche fuori sala." },
];

export default function Gallery() {
  return (
    <section id="sala" className="bg-cream-200 py-20 md:py-36">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.3em] text-ink/60"
            >
              — La sala
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display text-ink text-[14vw] sm:text-[12vw] md:text-[6vw] lg:text-[5vw] leading-[0.95] mt-3 max-w-3xl"
            >
              Uno spazio
              <br />
              da condividere.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-ink/80 text-base md:text-lg leading-relaxed font-light max-w-md"
          >
            Dettagli curati, stile contemporaneo e atmosfera accogliente. Una
            sala pensata per vivere la cucina di mare con calma, gusto e buona
            compagnia.
          </motion.p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-sm bg-ink/5 ${t.span}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/0 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-cream text-[10px] uppercase tracking-[0.3em]">
                <span className="inline-block w-6 h-px bg-cream/70 align-middle mr-3" />
                {t.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Feature row */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="border-t border-ink/15 pt-5"
            >
              <h3 className="display text-ink text-xl md:text-3xl leading-none">
                {f.title}
              </h3>
              <p className="mt-2 md:mt-3 text-ink/70 text-sm leading-relaxed font-light">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
