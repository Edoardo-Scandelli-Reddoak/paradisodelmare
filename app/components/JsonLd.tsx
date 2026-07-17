import { SITE_URL, BUSINESS } from "../lib/site";

// Dati strutturati Schema.org per Google (rich results, Google Maps, Knowledge Panel).
export default function JsonLd() {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: BUSINESS.name,
    description:
      "Ristorante di pesce a Muggiò (MB): pescato del giorno, crudi, tartare e cucina di mare contemporanea. Dal mare alla tavola.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}${BUSINESS.image}`,
    logo: `${SITE_URL}/logo/logo_paradiso_del_mare.png`,
    priceRange: BUSINESS.priceRange,
    servesCuisine: ["Pesce", "Frutti di mare", "Cucina mediterranea", "Cucina italiana"],
    acceptsReservations: true,
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "19:00",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "15:00",
      },
    ],
    menu: `${SITE_URL}/menu.pdf`,
    hasMenu: [
      { "@type": "Menu", name: "Menu", url: `${SITE_URL}/menu.pdf` },
      { "@type": "Menu", name: "Carta dei Vini", url: `${SITE_URL}/lista-vini.pdf` },
    ],
    sameAs: [BUSINESS.instagram, BUSINESS.facebook],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#restaurant` },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD statico: nessun input utente, safe da serializzare.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([restaurant, website]),
      }}
    />
  );
}
