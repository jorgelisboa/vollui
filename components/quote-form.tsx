"use client";

import { useActionState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { submitQuote, type QuoteState } from "@/app/actions";
import { businessHours, primaryWhatsapp, segmentOptions } from "@/lib/site";

const initialState: QuoteState = { status: "idle" };

const labelClass = "text-[15px] font-semibold text-snow";
const inputClass =
  "mt-2 block w-full rounded-md border border-line-dark bg-ink-800 px-3.5 py-3 text-base text-snow placeholder:text-mist-400 transition-colors hover:border-ink-700 focus:border-brand-400 focus:outline-none aria-invalid:border-red-400";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const v = state.values ?? {};
  const err = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="lg:pt-2">
        <h2 className="font-display text-2xl font-semibold text-snow">
          Pedido recebido.
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-mist-300">
          Um especialista vai falar com você em breve, em horário comercial.
          Se for urgente,{" "}
          <a
            href={primaryWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-400 underline"
          >
            chame no WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-semibold text-snow">
          Peça uma cotação
        </h2>
        <p className="mt-2 text-mist-400">
          Respondemos {businessHours.toLowerCase()}.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Site
          <input type="text" name="site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="nome" className={labelClass}>
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          defaultValue={v.nome}
          aria-invalid={!!err.nome || undefined}
          aria-describedby={err.nome ? "nome-erro" : undefined}
          className={inputClass}
        />
        {err.nome && <FieldError id="nome-erro">{err.nome}</FieldError>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <label htmlFor="telefone" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(11) 90000-0000"
            defaultValue={v.telefone}
            aria-invalid={!!err.telefone || undefined}
            aria-describedby={err.telefone ? "telefone-erro" : undefined}
            className={inputClass}
          />
          {err.telefone && (
            <FieldError id="telefone-erro">{err.telefone}</FieldError>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="font-normal text-mist-400">(opcional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!err.email || undefined}
            aria-describedby={err.email ? "email-erro" : undefined}
            className={inputClass}
          />
          {err.email && <FieldError id="email-erro">{err.email}</FieldError>}
        </div>
      </div>

      <fieldset aria-describedby={err.segmento ? "segmento-erro" : undefined}>
        <legend className={labelClass}>O projeto é para</legend>
        <div className="mt-2 grid grid-cols-3 divide-x divide-line-dark overflow-hidden rounded-md border border-line-dark">
          {segmentOptions.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="segmento"
                value={option}
                required
                defaultChecked={v.segmento === option}
                className="peer sr-only"
              />
              <span className="block bg-ink-800 px-2 py-3 text-center text-[15px] text-mist-300 transition-colors hover:text-snow peer-checked:bg-brand-500 peer-checked:font-semibold peer-checked:text-ink-950 peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-brand-400">
                {option}
              </span>
            </label>
          ))}
        </div>
        {err.segmento && (
          <FieldError id="segmento-erro">{err.segmento}</FieldError>
        )}
      </fieldset>

      <div>
        <label htmlFor="mensagem" className={labelClass}>
          O que você precisa?{" "}
          <span className="font-normal text-mist-400">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          placeholder="Ex.: condomínio com duas portarias, quero portaria remota"
          defaultValue={v.mensagem}
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-[15px] font-medium text-red-300">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3.5 text-base font-semibold text-ink-950 transition-colors hover:bg-brand-400 disabled:cursor-wait disabled:opacity-80"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Enviando
          </>
        ) : (
          <>
            Enviar pedido de cotação
            <ArrowRight className="size-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-red-300">
      {children}
    </p>
  );
}
