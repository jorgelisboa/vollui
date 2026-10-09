"use server";

import { segmentOptions } from "@/lib/site";

type Field = "nome" | "telefone" | "email" | "segmento";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  // Honeypot: real visitors never see this field, bots fill it in.
  if (get("site")) return { status: "success" };

  const values = {
    nome: get("nome"),
    telefone: get("telefone"),
    email: get("email"),
    segmento: get("segmento"),
    mensagem: get("mensagem"),
  };

  const errors: QuoteState["errors"] = {};
  if (values.nome.length < 2) errors.nome = "Informe seu nome.";
  const digits = values.telefone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.telefone = "Informe um telefone com DDD.";
  if (values.email && !EMAIL_RE.test(values.email))
    errors.email = "E-mail inválido.";
  if (!segmentOptions.includes(values.segmento as never))
    errors.segmento = "Escolha uma opção.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Confira os campos destacados.",
      errors,
      values,
    };
  }

  const lead = { ...values, origem: "site", recebidoEm: new Date().toISOString() };
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      console.error("[cotação] CONTACT_WEBHOOK_URL não configurada.");
      return {
        status: "error",
        message:
          "Não conseguimos enviar agora. Fale com a gente pelo WhatsApp.",
        values,
      };
    }
    console.info("[cotação] CONTACT_WEBHOOK_URL não definida. Lead:", lead);
    return { status: "success" };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
  } catch (error) {
    console.error("[cotação] Falha ao enviar lead:", error);
    return {
      status: "error",
      message: "Não conseguimos enviar agora. Tente de novo ou chame no WhatsApp.",
      values,
    };
  }

  return { status: "success" };
}
