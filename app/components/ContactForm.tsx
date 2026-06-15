"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Status = "idle" | "submitting" | "success" | "error";

const FALLBACK_MAILTO = "info@ilparadisodelmare.it";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Invio non riuscito.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Qualcosa è andato storto."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-sm border border-ink/15 bg-cream-200/60 p-8 md:p-10"
      >
        <div className="text-gold text-[11px] uppercase tracking-[0.3em]">
          — Messaggio inviato
        </div>
        <h3 className="display text-ink text-3xl md:text-4xl mt-3 leading-none">
          Grazie!
        </h3>
        <p className="mt-4 text-ink/75 leading-relaxed font-light">
          Abbiamo ricevuto il tuo messaggio. Ti risponderemo il prima possibile.
          Per richieste urgenti puoi chiamarci direttamente.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 text-ink text-[12px] uppercase tracking-[0.25em] link-underline"
        >
          Invia un altro messaggio →
        </button>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full bg-transparent border-b border-ink/20 py-3 text-ink placeholder-ink/40 font-light focus:outline-none focus:border-ink transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-1"
          >
            Nome *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Il tuo nome"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-1"
          >
            Telefono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Facoltativo"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-1"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nome@esempio.it"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-1"
        >
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Scrivici la tua richiesta, una prenotazione speciale o un evento…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-ink/80 bg-ink/5 border border-ink/15 rounded-sm px-4 py-3 font-light">
          {errorMsg} Puoi anche scriverci a{" "}
          <a href={`mailto:${FALLBACK_MAILTO}`} className="link-underline font-medium">
            {FALLBACK_MAILTO}
          </a>
          .
        </p>
      )}

      <div className="flex items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-ink text-cream text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-ink-700 transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Invio…" : "Invia messaggio"}
          {status !== "submitting" && (
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </button>
        <span className="text-[11px] text-ink/45 font-light">
          * Campi obbligatori
        </span>
      </div>
    </form>
  );
}
