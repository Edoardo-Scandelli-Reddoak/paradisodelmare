import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Richiesta non valida." },
      { status: 400 }
    );
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const message = asString(body.message);

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Compila nome, email e messaggio." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Inserisci un indirizzo email valido." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Il messaggio è troppo lungo." },
      { status: 400 }
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TODO: collegare il provider di invio email scelto.
  // Il payload validato è pronto in { name, email, phone, message }.
  //
  // Opzione A — Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Il Paradiso del Mare <noreply@ilparadisodelmare.it>",
  //     to: "info@ilparadisodelmare.it",
  //     replyTo: email,
  //     subject: `Nuovo messaggio da ${name}`,
  //     text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\n${message}`,
  //   });
  //
  // Opzione B — Web3Forms:
  //   await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       access_key: process.env.WEB3FORMS_KEY,
  //       name, email, phone, message,
  //     }),
  //   });
  //
  // Opzione C — Nodemailer/SMTP: creare il transport e transport.sendMail(...).
  // ─────────────────────────────────────────────────────────────────────────

  // Finché il provider non è collegato, registriamo la richiesta lato server
  // così nessuna submission va persa. NON viene ancora recapitata via email.
  console.log("[contact] nuova richiesta:", { name, email, phone, message });

  return NextResponse.json({ ok: true });
}
