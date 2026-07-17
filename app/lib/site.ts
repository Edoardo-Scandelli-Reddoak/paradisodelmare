// Configurazione centralizzata del sito — usata da metadata, sitemap, robots e dati strutturati (JSON-LD).

export const SITE_URL = "https://ilparadisodelmare.it";

export const BUSINESS = {
  name: "Il Paradiso del Mare",
  tagline: "Ristorante di Pesce",
  phone: "+393932655783",
  phoneDisplay: "+39 393 265 5783",
  email: "info@ilparadisodelmare.it",
  street: "Via Trieste 23",
  city: "Muggiò",
  region: "MB",
  postalCode: "20835",
  country: "IT",
  // Fascia di prezzo per Google (€ economico → €€€€ alto).
  // "€€" = fascia media, verificato sul menu reale: pasto tipico ~€40-55 a persona
  // (piatti: mediana €14, secondi €19-29, crudi/crostacei fino a €79).
  priceRange: "€€",
  instagram: "https://www.instagram.com/ilparadisodelmare_",
  facebook:
    "https://www.facebook.com/people/Il-Paradiso-del-Mare/61584961525690/",
  // Immagine del ristorante usata nei dati strutturati (JSON-LD).
  image: "/hero-0923.jpg",
} as const;
