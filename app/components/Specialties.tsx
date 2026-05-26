"use client";

import Image from "next/image";
import { motion } from "motion/react";

type MenuCard = {
  eyebrow: string;
  title: string;
  description: string;
  hint: string;
  href: string;
  image: string;
};

const cards: MenuCard[] = [
  {
    eyebrow: "La cucina",
    title: "Menu",
    description:
      "Crudi, primi, secondi e dessert. La nostra carta cambia con il pescato del giorno e con le stagioni.",
    hint: "Sfoglia il menu (PDF)",
    href: "/menu.pdf",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "La cantina",
    title: "Carta dei Vini",
    description:
      "Una selezione studiata per il mare: bianchi minerali, bollicine, qualche rosso elegante e i nostri preferiti dalla costa.",
    hint: "Sfoglia la lista vini (PDF)",
    href: "/lista-vini.pdf",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Specialties() {
  return (
    <section id="menu" className="bg-ink py-16 md:py-20 relative grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-ink-700/30 border border-cream/10 block"
            >
              <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width:768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

                <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-cream/80 bg-ink/30 backdrop-blur-md border border-cream/20 px-3 py-1 rounded-full">
                  {card.eyebrow}
                </span>

                {/* Bottom content — fixed structure so titles align across cards */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 flex flex-col">
                  <h3 className="display text-cream text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-cream/75 leading-relaxed font-light max-w-md text-sm md:text-base min-h-[3.25rem] md:min-h-[3.5rem] line-clamp-2">
                    {card.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-3 text-gold-light text-[11px] uppercase tracking-[0.3em]">
                    <span className="relative">
                      {card.hint}
                      <span className="absolute left-0 right-0 -bottom-1 h-px bg-gold-light/60 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700" />
                    </span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold-light/50 transition-all duration-500 group-hover:bg-gold-light group-hover:text-ink group-hover:border-gold-light">
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
