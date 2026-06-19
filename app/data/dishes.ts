// Piatti in evidenza — usati nella pagina /piatti e nella sezione home.
export type Dish = {
  name: string;
  category: string;
  description: string;
  images: [string, string];
};

export const featured: Dish[] = [
  {
    name: "Tris di tartare",
    category: "Il Crudo",
    description:
      "Tre tartare di mare in un solo piatto: branzino, salmone e gambero, tagliati al coltello e profumati con scorza d'agrumi. Freschezza pura, da gustare con un filo d'olio e una spruzzata di lime.",
    images: ["/feat-0813.jpg", "/feat-0495.jpg"],
  },
  {
    name: "Gran Crudo di mare",
    category: "Crudo · Crostacei",
    description:
      "La nostra selezione di crudo servita sull'alzata: gambero rosso, gambero viola, scampo e canocchia, accompagnati da ostriche e molluschi. Materia prima di assoluta freschezza, da assaporare in purezza.",
    images: ["/feat-0943.jpg", "/feat-0962.jpg"],
  },
  {
    name: "Risotto cacio e pepe con gambero e lime",
    category: "Primo",
    description:
      "Riso Carnaroli mantecato cacio e pepe, con tartare di gambero crudo e scorza di lime grattugiata al momento. L'incontro tra la cremosità della tradizione e la freschezza del mare.",
    images: ["/feat-1087.jpg", "/feat-1075.jpg"],
  },
  {
    name: "Gratinato “Il Paradiso del Mare”",
    category: "Secondo",
    description:
      "Il nostro gran gratinato: scampo, gambero, cozze, capesante, spiedino di gambero e calamari e ostrica, dorati al forno con pangrattato profumato. Un viaggio tra i sapori del mare in un'unica portata.",
    images: ["/feat-0575.jpg", "/feat-0566.jpg"],
  },
];
